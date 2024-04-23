import './index.css'
import './cat.scss'
import './dog.css'

export default function App(){

    return (
        <>
            <div className={'ct'}>
                <h1 className={'ms'}> this is base style</h1>
            </div>
            <div className={'cat_body'}>
                <h1 className={'cat_eye'}> this is cat style</h1>
            </div>
            <div className={'dog_body'}>
                <h1 className={'dog_eye'}> this is dog style</h1>
            </div>
        </>
    )

}