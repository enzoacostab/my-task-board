import { Task } from "../../types"
import TaskComponent from "./TaskComponent"

interface Props {
  stylishLi: number,
  tasks: Task[],  
  handleTaskClick: (task: Task, i: number) => void
}

export default function Tasks({ tasks, handleTaskClick, stylishLi } : Props) {
  return (
    <>
      {tasks.map((task: Task, i) => <TaskComponent key={task._id} stylishLi={stylishLi} handleTaskClick={handleTaskClick} i={i} task={task}/>)}
    </>
  )
}
