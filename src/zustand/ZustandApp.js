import useInfo from "./infoStore";


export default function App(){

    const {tag, updateTag} = useInfo()

    console.log(tag, updateTag)

    return (
        <>
            <div>
                this is zustand app :: tag :: {tag}<br/>
                <button onClick={()=>{
                    updateTag('by app')
                }}>update tag</button>
            </div>
        </>
    )
}