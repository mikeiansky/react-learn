import * as qiniu from 'qiniu-js'
import {useState} from "react";


export default function App() {
    const [file, setFile] = useState()
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]; // 获取用户选择的第一个文件
        if (selectedFile) {
            const fileUrl = URL.createObjectURL(selectedFile); // 获取文件地址
            console.log('选中的文件地址:', fileUrl);
            console.log('选中的文件地址raw:', selectedFile);
            setFile(selectedFile)
        }
    };

    const upload = () => {
        const token = 'kFcZa5HocieYg9k1gWzKXNBHG-glbq6yPeABygCP:_SUWn9_U3Oy-bVAujp4uRPG1bhI=:eyJzY29wZSI6ImNpd2Vpc2hpeGkiLCJkZWFkbGluZSI6MTcxNjM1MDAwOX0='
        const key = 'temp-003.png'
        console.log('file info ... ', file)
        console.log('is file info ... ', file instanceof File)
        const observable = qiniu.upload(file, key, token)

        const ob = {
            next() {
                console.log('upload next ... ')
            },
            error(err) {
                console.log('upload error', err)
            },
            complete() {
                console.log('upload complete ... ')
            }
        }
        const subscription = observable.subscribe(ob) // 这样传参形式也可以

        console.log('complete ...')
    }

    return (
        <>
            <div>
                This is upload page
                <input type='file' onChange={handleFileChange}/></div>
            <button onClick={upload}>
                upload
            </button>
        </>
    )

}