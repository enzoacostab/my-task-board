import { Dispatch, RefObject, SetStateAction, useEffect, useState } from 'react'
import { Task } from '../../types'
import { getTasks, addTask } from "../services/board"
import { v4 as uuid } from "uuid"
import Tasks from './Tasks'

interface Props { 
  setTaskToEdit: Dispatch<SetStateAction<Task>>, 
  dialogRef: RefObject<HTMLDialogElement>,
  stylishLi: number,
  setStylishLi: Dispatch<SetStateAction<number>>
}

export default function TaskList({ setTaskToEdit, dialogRef, setStylishLi, stylishLi }: Props) {
  const [boardId, setBoardId] = useState<string>('')
  const [tasks, setTasks] = useState<Task[]>([])
  
  useEffect(() => {
    let board_id = localStorage.getItem("board_id")

    if (board_id) {
      getTasks(board_id)
        .then(res => setTasks(res ?? []))
        .catch(err => console.error(err))
    } else {
      board_id = uuid()
      localStorage.setItem("board_id", board_id)
      getTasks(board_id)
        .then(res => setTasks(res ?? []))
        .catch(err => console.error(err))
    }

    setBoardId(board_id)
  }, [])

  const handleAddTask = async () => {
    try {
      const newTask = await addTask(boardId)
      if (newTask) {
        setTasks(tasks.concat(newTask))
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleOpenDialog = (task: Task) => {
    setTaskToEdit(task)
    dialogRef.current?.showModal()
  }

  const handleTaskClick = (task: Task, i: number) => {
    handleOpenDialog(task)
    setStylishLi(i)
  }

  return (
    <ul>
      <Tasks tasks={tasks} stylishLi={stylishLi} handleTaskClick={handleTaskClick}/>
      <li onClick={handleAddTask} className="h-20 my-5 cursor-pointer hover:contrast-[.9] transition-all flex items-center justify-between p-4 rounded-2xl bg-[#F5E8D5] active:outline outline-2 outline-[#3662E3] outline-offset-[3px]">
        <div className="flex justify-center items-center gap-5"> 
          <div className="bg-[#E9A23B] p-3 rounded-xl">
            <img className="w-6" src={`/assets/Add_round_duotone.svg`} alt=""/>
          </div>
          <h2 className="text-lg font-semibold">Add new task</h2>
        </div>
      </li>
    </ul>
  )
}
