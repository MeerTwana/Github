import Button from "./Button";

export default function SelectProject(projects){
    const formatdate = new Date(projects.dueDate).toLocaleDateString('en-US',{
        year : 'numeric',
        month: 'short',
        day: 'numeric'
    })
    return (
<div className="w-[35rem] mt-16">
<header className=" pb-4 mb-4 border-b-2 border-stone-300">

    <div className="flex items-center justify-between">
        <h1 className="text-3l font-bold text-stone-600 mb-2">{projects.title}</h1>
        <Button>Delete</Button>

    </div>
    <p className="text-stone-400 mb-4">{formatdate}</p>
    <p className='text-stone-700 mb-4  whitespace-pre-wrap'>{projects.description}</p>
</header>

Tasks 
</div>



    );
}