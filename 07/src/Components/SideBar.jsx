import Button from "./Button.jsx"


export default function SideBar ({onStart}){



return <aside className="w-1/3 px-8 py-16 bg-stone-900
 text-stone-50 md:w-72 rounded-r-xl">
<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
<div className="flex items-center gap-4">
    <Button  onClick={onStart}>       + Add Project
    </Button>
    </div>
    <ul className="">
        <li className="">
            <p>
                Learning React
            </p>

        </li>
        </ul>
    






</aside>


}