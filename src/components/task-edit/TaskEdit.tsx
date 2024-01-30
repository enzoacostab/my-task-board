import { ChangeEvent, Dispatch, FormEvent, RefObject, SetStateAction } from "react";
import Status from "./Status";
import Icon from "../Icon";
import { Task } from "../../../types";
import Icons from "./Icons";
import { editTask, deleteTask } from "../../services/board";

interface Props {
  dialogRef: RefObject<HTMLDialogElement> 
  taskToEdit: Task
  setTaskToEdit: Dispatch<SetStateAction<Task>>
  setStylishLi: Dispatch<SetStateAction<number>>
}

export default function TaskEdit({ dialogRef, taskToEdit, setStylishLi, setTaskToEdit }: Props) {
  const handleUpdate = async (e:  FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await editTask(taskToEdit._id, taskToEdit)
      window.location.assign(window.location.origin);
    } catch (error) {
      console.error(error);
    }
  }

  const handleDelete = async () => {
    try {
      await deleteTask(taskToEdit._id)
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTaskToEdit({ ...taskToEdit, [name]: parseInt(value) || value }) 
  }

  const handleCloseDialog = () => {
    setStylishLi(-1)
    dialogRef.current?.close()
  }

  return (
    <dialog className="hidden w-full max-w-[600px] bg-[#F8FAFC] sm:mr-5 backdrop:bg-black backdrop:bg-opacity-40 open:flex flex-col justify-start size-full rounded-xl px-5 pt-5" ref={dialogRef}>
      <header className="flex justify-between">
        <h3 className="text-xl font-semibold">Task details</h3>
        <button className="size-fit focus-visible:outline-none" onClick={handleCloseDialog}>
          <Icon img="close_ring_duotone-1.svg" status="close-button"/>
        </button>
      </header>
      <main className="h-full">
        <form onSubmit={handleUpdate} className="h-full flex flex-col" action="dialog">
          <label className="has-[:focus:invalid]:text-red-400 bg-[#F8FAFC] tracking-wide text-xs text-[#97A3B6] font-medium">
            Task name
            <input value={taskToEdit.name} onChange={handleChange} autoComplete="off" className="peer py-2 px-4 block text-black font-normal focus-visible:outline-[#3662E3] text-base border-2 rounded-lg border-[#E3E8EF] w-full" type="text" required name="name"/>
            <p className="invisible peer-invalid:peer-focus:visible">error</p>
          </label>
          <label className="has-[:focus:invalid]:text-red-400 tracking-wide text-xs text-[#97A3B6] font-medium">
            Description
            <textarea value={taskToEdit.description} onChange={handleChange} cols={60} rows={6} placeholder="Enter a short description" className="peer w-full resize-none py-2 px-4 block text-black font-normal focus-visible:outline-[#3662E3] text-base border-2 rounded-lg border-[#E3E8EF]" name="description"></textarea>
            <p className="invisible peer-invalid:peer-focus:visible">error</p>
          </label>
          <Icons currentIcon={taskToEdit.icon} handleChange={handleChange}/>
          <Status handleChange={handleChange} currentStatus={taskToEdit.status}/>
          <div className="flex gap-3 ml-auto mt-auto">
            <button onClick={handleDelete} className="w-fit mb-5 flex px-5 gap-2 py-2 h-fit text-[#F8FAFC] rounded-full bg-[#97A3B6] text-sm font-medium hover:bg-opacity-80">
              Delete
              <img src="/assets/Trash.svg" alt="" />
            </button>
            <button type="submit" className="w-fit mb-5 flex px-5 gap-2 py-2 h-fit text-[#F8FAFC] rounded-full bg-[#3662E3] text-sm font-medium hover:bg-opacity-80">
              Save
              <img src="/assets/Done_round.svg" alt="" />
            </button>
          </div>
        </form>
      </main>
    </dialog>
  )
}
