import {create} from "zustand";



const useInfo = create((set) => ({
    tag: 'info',
    updateTag: (nt)=>{
        set(state=> ({...state, tag: nt}))
    }
}))

export default useInfo