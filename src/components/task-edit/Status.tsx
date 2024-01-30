import { ChangeEvent } from "react";
import Icon from "../Icon";

interface Props {
  currentStatus: string | undefined
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export default function Status({ currentStatus, handleChange }: Props) {
  const statuses = ["Completed", "Won’t do", "In Progress"].map(status => status.split('’').join('').split(' ').join('-'))
  currentStatus = currentStatus?.split('’').join('').split(' ').join('-')
  
  return (
    <>
      <p className="tracking-wide mt-3 text-xs mb-1 text-[#97A3B6] font-medium">Status</p>
      <div className="flex flex-wrap gap-4">
        {statuses.map(status => 
        <label key={status} className="flex cursor-pointer items-center transition-colors has-[:checked]:border-[#3662E3] w-[48%] gap-2 border-2 rounded-2xl border-[#E3E8EF] p-[2.5px]">
          <input onChange={handleChange} checked={currentStatus === status} className="absolute appearance-none peer" value={status} type="radio" name="status"/>
          <Icon status={status}/>
          <span className="font-medium">{status}</span>
          <img width={12} className="bg-[#3662E3] hidden peer-checked:block ml-auto mr-2 rounded-full box-content p-1" src="/assets/Done_round.svg"/>
        </label>
        )}
      </div>
    </>
  )
}
