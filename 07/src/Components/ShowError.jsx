import { createPortal } from "react-dom"
import { forwardRef,useImperativeHandle } from "react"
const ShowError =forwardRef( function ShowError ({children},ref){
return  createPortal(<dialog>
    {children}
</dialog>, document.getElementById('modal-root'))
});
export default ShowError