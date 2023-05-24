import { useState } from 'react'
import React, {Component, PropTypes} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// menu 顏色選擇器
const ColorPicker = ({ selectedColor, onColorChange }) => {
    const handleColorChange = (event) => {
        onColorChange(event.target.value);
    };

    console.log('232 selectedColor =>', selectedColor)

    return (
        <div>
            <input
                type="color"
                value={selectedColor}
                onChange={handleColorChange}
            />
        </div>
    );
};

// show 背景顏色
const ColorBackground = ({ selectedColor }) => {
    console.log('selectedColor =>', selectedColor)
    return (
        <div className='bg'
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: selectedColor,
            }}
        ></div>
    );
};

const App = () => {

    // 此為解構賦值，使用時須用{}括起
    const [selectedColor, setSelectedColor] = useState('#ffcccc');

    const area = [
                "台北市",
                "基隆市",
                "新北市",
                "連江縣",
                "宜蘭縣",
                "新竹市",
                "新竹縣",
                "桃園市",
                "苗栗縣",
                "台中市",
                "彰化縣",
                "南投縣",
                "嘉義市",
                "嘉義縣",
                "雲林縣",
                "台南市",
                "高雄市",
                "澎湖縣",
                "金門縣",
                "屏東縣",
                "台東縣",
                "花蓮縣"
    ]

    // 不懂
    // 回呼函式
    // 當ColorPicker更新時，使用 setSelectedColor 函式更新 selectedColor 狀態的值
    const handleColorChange = (color) => {
        console.log('color =>', color)
        setSelectedColor(color);
    };

    // 點擊圖案選單，開啟選圖lightbox
    const openTypeBox = () => {}


    return (
        <div className="view">
            <div className='show'>
                <ColorBackground selectedColor={selectedColor}/>
            </div>
            <div className="menu">
                <h3 className="text-center">聖誕卡片客製化</h3>
                <hr/>
                <div className='backgroundColor'>
                    <label>顏色：</label>
                    <ColorPicker selectedColor={selectedColor} onColorChange={handleColorChange} />
                </div>
                <div>
                    <label>圖案：</label>
                    <button className="form-control select2-single" onClick={openTypeBox}>
                        <span id="type" className="spanText">
                            {
                                '圖片名稱'
                            }
                        </span>
                        <span className="glyphicon glyphicon-triangle-bottom"></span>
                    </button>
                </div>
                

                {/* 縣市 */}
                {/* <select value={area[0].data[0]} onChange={handleSelectChange}>
                    {
                        area[0].data.map((a, index) => (
                            <option key={index}>{a}</option>
                        ))
                    }
                </select> */}
                
            </div>
        </div>
    )
}

export default App
