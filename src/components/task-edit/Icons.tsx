import { ChangeEvent } from "react";
import Icon from "../Icon";

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  currentIcon: number | undefined
}

export default function Icons({ handleChange, currentIcon }: Props) {
  const icons = new Array(6).fill(0)

  return (
    <>
      <p className="tracking-wide text-xs mb-1 text-[#97A3B6] font-medium">Icon</p>
      <div className="flex">
      {icons.map((_, icon) => 
        <label key={icon} className="inline-block mr-3 cursor-pointer">
          <input onChange={handleChange} className="absolute appearance-none" value={icon} type="radio" name="icon"/>
          <Icon img={`icon${icon}.png`} status={icon == currentIcon ? "icon-checked" : "icon"}/>
        </label>
      )}
      </div>
    </>
  )
}
