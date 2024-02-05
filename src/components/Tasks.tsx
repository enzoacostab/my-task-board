import { Suspense, lazy } from "react"
import { Task } from "../../types"
import TaskSkeleton from "./TaskSkeleton"
const TaskComponent = lazy(() => import ("./TaskComponent"))

interface Props {
  stylishLi: number,
  tasks: Task[],  
  handleTaskClick: (task: Task, i: number) => void
}

export default function Tasks({ tasks, handleTaskClick, stylishLi } : Props) {
  return (
    <>
      {tasks.map((task: Task, i) => 
        <Suspense key={task._id} fallback={<TaskSkeleton/>}>
          <TaskComponent stylishLi={stylishLi} handleTaskClick={handleTaskClick} i={i} task={task}/>
        </Suspense>
      )}
    </>
  )
}
