import EditedTime from "@/components/ui/editedTime/EditedTime";
import NoteTitle from "@/components/ui/noteTitle/NoteTitle";
import { useState } from "react";
import { PiNotebookFill } from "react-icons/pi";

const Header = () => {
  const [title, setTitle] = useState("My Note Title is the big one how you'll show this bro");

  
  return (
    <div className='bg-neutral-800 h-12 text-white flex items-center'>
      <PiNotebookFill className="text-2xl ml-2" />
      <div className="flex ml-[110px] items-center">
        <NoteTitle title={title} onChange={setTitle}/>
        <EditedTime editedAt={Date.now()}/>
      </div>
    </div>
  )
}

export default Header