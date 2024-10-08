import { useRef } from "react";
import Input from "./Input.jsx";
import ShowError from "./ShowError.jsx";

export default function AddProject({ onAdd,onCancel }) {
  const showEm = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // Show the error modal if input is invalid
      showEm.current.open();
      return; // Stop further execution
    }

    // Call onAdd only if all inputs are valid
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <ShowError ref={showEm} Close="Close">
        <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input</h2>
        <p className='text-stone-400 mb-4'>Oops... looks like you forgot to enter a value.</p>
        <p className='text-stone-400 mb-4'>Please make sure to provide a valid value.</p>
      </ShowError>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>

          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea={true} />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
