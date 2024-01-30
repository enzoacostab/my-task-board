import { useState, useRef } from "react"
import { Task } from "../types"
import TaskEdit from "./components/task-edit/TaskEdit"
import TaskList from "./components/TaskList"

export default function App() {
  const [taskToEdit, setTaskToEdit] = useState<Task>({
    '_id': '',
    'board-id': '',
    'name': '',
    'description': undefined,
    'icon': -1,
    'status': undefined
  })
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [stylishLi, setStylishLi] = useState(-1)

  return (
    <>
      <header className="flex gap-3">
        <div><img className="align-top" src="/assets/Logo.svg" alt="" /></div>
        <div>
          <div className="flex gap-3">
            <h1 className='text-4xl font-normal'>My Task Board</h1>  
            <img src="/assets/Edit_duotone.svg" alt="" />
          </div>
          <p className="text-base mt-2">Tasks to keep organised</p>
        </div> 
      </header>  
      <main className='mt-7'>
        <TaskList dialogRef={dialogRef} setTaskToEdit={setTaskToEdit} stylishLi={stylishLi} setStylishLi={setStylishLi}/>
        <TaskEdit setStylishLi={setStylishLi} taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} dialogRef={dialogRef}/>
      </main>
    </>
  )
}
