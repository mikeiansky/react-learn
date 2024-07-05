import './lottie-app.css';
import Lottie from "lottie-react";
import {useEffect, useState} from "react";

// 更新图片路径
function updateImagePath(data, basePath) {
    if (data.u && data.p) {
        if (!data.p.startsWith('http')) { // 检查路径是否已经是完整路径
            data.u = basePath;
        }
    }
    return data;
}

// 更新 JSON 数据中的图片路径
function updateImagePathsInJSON(jsonData, basePath) {
    const updatedData = JSON.parse(JSON.stringify(jsonData)); // 克隆数据以避免直接修改原始数据

    if (Array.isArray(updatedData.assets)) {
        updatedData.assets.forEach(asset => {
            updateImagePath(asset, basePath);
        });
    }

    return updatedData;
}

export default function App() {

    const [animationData, setAnimationData] = useState(null);
    const [showLottie, setShowLottie] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://img.shixijob.net/dev/assets/midea-h5-lottie-data.json');
                const data = await response.json();
                setAnimationData(updateImagePathsInJSON(data, 'https://image.shixijob.net/activity/2023/midea-detective-club/'))
                setShowLottie(true)
            } catch (error) {
                console.error('Error fetching animation data:', error);
            }
        };
        fetchData();
    }, []);

    if (showLottie) {
        console.log('animationData', animationData)
    }

    return (
        <div className="lottie-app">
            <p>This is lottie app header</p>
            {showLottie && <Lottie className='lottie-content' animationData={animationData}/>}
            <p>This is lottie app footer</p>
        </div>
    );
}
