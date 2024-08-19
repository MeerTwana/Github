import test from '../assets/test.png';

export default function Home() {
    return (
        <div>
            <h1>No Project Is Here Click to Add a project</h1>
            <img src={test} alt="Image is here" className='w-16 h-16 object-contain mx-auto' />
        </div>
    );
}
