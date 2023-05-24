import { useEffect, useState } from 'react'
import React, {Component, PropTypes} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import type { DatePickerProps } from 'antd';
// import { DatePicker, Space } from 'antd';
import './App.css'
import ColorPicker from './component/ColorPicker'
import ColorBackground from './component/ColorBackground'
import Popup from './component/Popup'

const App = () => {

    // 此為解構賦值，使用時須用{}括起
    // 前者：使用，後者：改變
    const [selectedColor, setSelectedColor] = useState('#ffcccc');
    const [showPopup, setShowPopup] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [cardText, setCardText] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    const area = ["台北市","基隆市","新北市","連江縣","宜蘭縣","新竹市","新竹縣","桃園市","苗栗縣","台中市",
    "彰化縣","南投縣","嘉義市","嘉義縣","雲林縣","台南市","高雄市","澎湖縣","金門縣","屏東縣","台東縣","花蓮縣"]

    const images = [
        { id: 1, src: './image/christmas_pic/0001.png', name: 'Q版聖誕老人' },
        { id: 2, src: './image/christmas_pic/0002.png', name: '調皮老人' },
        { id: 3, src: './image/christmas_pic/0003.png', name: '聖誕樹雪球' },
        { id: 4, src: './image/christmas_pic/0004.png', name: '雪人胖胖' },
        { id: 5, src: './image/christmas_pic/0005.png', name: '襪襪' },
        { id: 6, src: './image/christmas_pic/0006.png', name: '雪天使貓貓' },
        { id: 7, src: './image/christmas_pic/0007.png', name: '聖誕花圈' },
        { id: 8, src: './image/christmas_pic/0008.png', name: '聖誕熊熊' },
        { id: 9, src: './image/christmas_pic/0009.png', name: '可愛熊熊' },
        { id: 10, src: './image/christmas_pic/0010.png', name: '開心鹿' },
        { id: 11, src: './image/christmas_pic/0011.png', name: 'MERRY X\'MAS雪球' },
        { id: 12, src: './image/christmas_pic/0012.png', name: '薑餅人' },
        { id: 13, src: './image/christmas_pic/0013.png', name: '貓咪魚' },
        { id: 14, src: './image/christmas_pic/0014.png', name: '聖誕老人掰' },
        { id: 15, src: './image/christmas_pic/0015.png', name: '聖誕帽' },
        { id: 16, src: './image/christmas_pic/0016.png', name: '聖誕樹' },
        { id: 17, src: './image/christmas_pic/0017.png', name: '貓咪球' },
        { id: 18, src: './image/christmas_pic/0018.png', name: '雪球' },
        { id: 19, src: './image/christmas_pic/0019.png', name: '燈串聖誕樹' },
        { id: 20, src: './image/christmas_pic/0020.png', name: 'Santa Is Here' },
        { id: 21, src: './image/christmas_pic/0021.png', name: '嗨~聖誕老公公' },
        { id: 22, src: './image/christmas_pic/0022.png', name: '雪人大頭' },
        { id: 23, src: './image/christmas_pic/0023.png', name: '外送員麋鹿' },
        { id: 24, src: './image/christmas_pic/0024.png', name: '掛星星老公公' },
    ];

    // 回呼函式
    // 當ColorPicker更新時，使用 setSelectedColor 函式更新 selectedColor 狀態的值
    const handleColorChange = (color) => {
        console.log('color =>', color)
        setSelectedColor(color);
    };

    const openPopup = () => {
        console.log('openPopup')
        setShowPopup(true);
    };

    const closePopup = () => {
        console.log('closePopup')
        setShowPopup(false);
        
    };

    // 已選擇圖片時
    const selectImage = (image) => {
        console.log('31:image =>', image)
        setSelectedImage(image);
        closePopup();
    };

    const handleTexthange = (event) => {
        setCardText(event.target.value);
    }

    const handleDateChange = (date) => {
        console.log('date =>', date.toLocaleDateString('en-US'))
        setSelectedDate(date);
    };

    useEffect(() => {
        console.log('showPopup =>', showPopup)
    },[showPopup])

    useEffect(() => {
        console.log('selectedImage =>', selectedImage)
    },[selectedImage])

    return (
        <div className="view">
            <div className='show'>
                {/* <ColorBackground selectedColor={selectedColor}/> */}
                <div className='bg'
                    style={{width: '100%',height: '100%',backgroundColor: selectedColor}}>
                    {   
                        selectedImage ?
                            <img className='selectedImage' src={selectedImage.src} />
                        :''
                    } 
                    {
                        cardText ?
                            <p className='cardText'>{cardText}</p>
                        :''
                    }
                    {
                        selectedDate?
                            <p className='cardDate'>{selectedDate.toLocaleDateString('en-US')}</p>
                        :''
                    }
                </div>
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
                    <div className="form-control select2-single" onClick={openPopup}>
                        <span id="type" className="spanText">
                            {
                                selectedImage.name
                            }
                        </span>
                        <span className="glyphicon glyphicon-triangle-bottom"></span>
                    </div>
                    {
                        showPopup && (
                            <Popup images={images} selectImage={selectImage} closePopup={closePopup}/>
                        )
                    }
                </div>

                <div>
                    <label>文字：</label>
                    <input className='form-control' onChange={handleTexthange}  placeholder="Dear..." maxLength="20" ></input>
                </div>

                <div>
                    <label>日期：</label>
                    {/* <input className='form-control' onChange={handleTexthange}></input> */}
                    <DatePicker className='form-control' selected={selectedDate} onChange={handleDateChange} />
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
