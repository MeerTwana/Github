import { createPortal } from "react-dom"
import { forwardRef,useImperativeHandle,useRef } from "react"
import Button from "./Button";
const ShowError =forwardRef( function ShowError ({children,Close},ref){
    const dialog = useRef();
    useImperativeHandle(ref , () => {
        return{
            open(){
dialog.current.showModal();
            }
        };
    });
return  createPortal(<dialog ref={dialog} className="backdrop:bg-stone-900/90 p-5 rounded shadow-md">
    {children}
    <form method="dialog" className="mt-4 text-right">
        <Button>{Close}</Button>
    </form>
</dialog>, document.getElementById('modal-root'))
});
export default ShowError