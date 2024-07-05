import './index.css'
import './cat.scss'
import './dog.css'
import './app.css'
// import getImageColors from 'get-image-colors';

export default function App() {

    const photo = 'https://img.shixijob.net/dev/activity/midea/goods/%E7%94%B5%E5%8A%A8%E7%89%99%E5%88%B7SS%E7%94%B5%E5%8A%A8%E7%89%99%E5%88%B7.png'
    const mainColor = ''

    // getImageColors(photo).then(colors => {
    //     console.log(colors[0].hex()); // 输出主题色的十六进制表示
    // });

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
            <div>
                <image className={'my_img'}/>
                asdfadsf
            </div>
            <div>
                main color{mainColor}
            </div>
            <div>
                <img id={'style-img'} src={photo}/>
            </div>
        </>
    )

}