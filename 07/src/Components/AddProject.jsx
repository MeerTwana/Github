import { useRef } from "react"
import Input  from "./Input.jsx"
import ShowError from "./ShowError.jsx";


export default function AddProject({onAdd}){
const title = useRef();
const description = useRef();
const dueDate = useRef();
function handleSave(){
    const enteredTitle =title.current.value;
    const enteredDescription =description.current.value;
    const enteredDueDate =dueDate.current.value;
if(
    enteredTitle.trim()===''
    || enteredDescription.trim()===''
    || enteredDueDate.trim()===''
){
    <ShowError/>
}
    
onAdd({
    title :enteredTitle,
    description: enteredDescription,
    dueDate:enteredDueDate
})

}

    return <div className="w-[35rem] mt-16">
        <menu className=" flex items-center
         justify-end gap-4 my-4">
            <li><button className="text-stone-800
             hover:text-stone-950">
                Cancel </button></li>


            <li><button onClick={handleSave}
             className="px-6 py-2 rounded
              bg-stone-800 text-stone-50
               hover:bg-stone-950">
                Save </button></li>
        </menu>
        <div>
        <Input type="Text" ref= {title} label="title"/>
        <Input ref={description} label="Description" textarea={true}/>
        <Input type="date" ref={dueDate} label ="Due Date"/>
        </div>
    </div>
}