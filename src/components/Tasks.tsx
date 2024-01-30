import { Dispatch, SetStateAction } from "react"
import { Task } from "../../types"
import Icon from "./Icon"

interface Props {
  stylishLi: number,
  setStylishLi: Dispatch<SetStateAction<number>>,
  tasks: Task[],  
  handleOpenDialog: (task: Task) => void
}

export default function Tasks({ tasks, handleOpenDialog, stylishLi, setStylishLi } : Props) {
  const handleClick = (task: Task, i: number) => {
    handleOpenDialog(task)
    setStylishLi(i)
  }
  
  return (
    <>
      {tasks.map((task: Task, i) => {
        const status = task.status?.split('’').join('').split(' ').join('-')
        return (
          <li onClick={() => handleClick(task, i)} key={task._id} className={`cursor-pointer my-5 flex items-center justify-between box-content p-4 rounded-2xl bg-[#E3E8EF] ${status} ${i === stylishLi ? "outline outline-2 outline-[#3662E3] outline-offset-[3px]" : null}`}>
            <div className="flex justify-center items-start gap-5"> 
              <Icon img={`icon${task.icon}.png`}/>
              <div className="w-80 self-center">
                <h2 className="text-xl font-semibold">{task.name}</h2>
                <p >{task.description}</p>
              </div>
            </div> 
            {task.status 
              ? <Icon status={status}/>
              : null}
          </li>)
      })}
    </>
  )
}
