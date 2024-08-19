import test from '../assets/test.png';
import Button from "./Button.jsx"


export default function Home({onStart}) {
    return (
        <div className='mt-24 text-center w-2/3'>
                        <img src={test} alt="Image is here" className='w-16 h-16 object-contain mx-auto' />

            <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Is Selected</h2>
            <p className='text-stone-400 mb-4'> Select A project Or Get stared with new one</p>
            <p className='mt-4'>
            <Button onClick ={onStart}>     Create New Project 
             </Button>
            </p>

        </div>
    );
}
