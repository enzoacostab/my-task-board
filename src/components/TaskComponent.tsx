import { Task } from '../../types'
import Icon from './Icon'

interface Props {
  task: Task
  handleTaskClick: (task: Task, i: number) => void
  i: number
  stylishLi: number
}

export default function TaskComponent({ task, handleTaskClick, i, stylishLi }: Props) {
  const status = task.status?.split('’').join('').split(' ').join('-')
  
  return (
    <li onClick={() => handleTaskClick(task, i)} key={task._id} className={`cursor-pointer hover:contrast-[.9] transition-all my-5 flex items-center justify-between box-content p-4 rounded-2xl bg-[#E3E8EF] active:outline outline-2 outline-[#3662E3] outline-offset-[3px] ${status} ${i === stylishLi ? "outline" : null}`}>
      <div className="flex flex-wrap w-full items-start gap-5"> 
        <Icon img={`icon${task.icon}.png`}/>
        <div className="max-w-80 self-center">
          <h2 className="text-xl font-semibold">{task.name}</h2>
          <p >{task.description}</p>
        </div>
      </div> 
      {task.status 
        ? <Icon status={status}/>
        : null}
    </li>)
}
