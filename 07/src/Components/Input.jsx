export default function Input ({label,textarea , ...props}){
    const Classes = "w-full p-1 border-b-4 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    return   <p className="flex flex-col gap-1 my-4 ">
<label className="text-sm font-bold uppercase  text-stone-5000">{label}</label>
{textarea ? <textarea className={Classes} {...props}/> :<input className={Classes} {...props}/> }
            </p>
            
   
}

