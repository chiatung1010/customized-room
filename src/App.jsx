import { useEffect, useState, useRef } from 'react'
import React, {Component, PropTypes} from 'react'
import './App.css'

// 日期選擇器
import 'react-datepicker/dist/react-datepicker.css';
// 儲存圖片
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
// 延遲載入
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage from "../public/image/loading.jpg"

// 元件
import DatePicker from 'react-datepicker';
import ColorPicker from './component/ColorPicker'
import Card from './component/Card'
import Popup from './component/Popup'
import ImagePicker from './component/ImagePicker'
import Form from './component/Form'
import CardText from './component/CardText';

const App = () => {

    // 此為解構賦值，使用時須用{}括起
    // 前者：使用，後者：改變
    const bannerImg1 = useRef(null);
    const bannerImg2 = useRef(null);
    const bannerImg3 = useRef(null);
    const bannerImg4 = useRef(null);

    const [selectedColor, setSelectedColor] = useState('#BDB39E');
    const [showPopup, setShowPopup] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [cardText, setCardText] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        county:'臺北市',
        area:'',
        address:''
    });

    const [countyData, setCountyData] = useState([]); // 縣市資料
    const [areaData, setAreaData] = useState([]); // 區域資料
    const [areaIndex, setAreaIndex] = useState(0); // 當下選取的區域索引

    // 寄送方式區塊選擇
    const [showEmailDelivery, setShowEmailDelivery] = useState(false);
    const [showPaperDelivery, setShowPaperDelivery] = useState(false);

    // 新增div classname
    const [divHeight, setDivHeight] = useState(false);

    // 延遲載入的部分
    const [showImages, setShowImages] = useState(false);
    const imageContainerRef = useRef(null);

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

    const handleTextChange = (event) => {
        setCardText(event.target.value);
    }

    const handleDateChange = (date) => {
        console.log('date =>', date.toLocaleDateString('en-US'))
        setSelectedDate(date);
    };

    const divRef = useRef(null);

    // 儲存圖片
    const handleDownload = () => {
        html2canvas(divRef.current).then((canvas) => {
            console.log('canvas',canvas)
            canvas.toBlob((blob) => {
                console.log('blob ', blob.text())
                saveAs(blob, 'christmasCard.jpg');
            });
        });
    };

    const handleNextStep = () => {
        setDivHeight(true)
    }

    const handleGoEmailClick = () => {
        setShowEmailDelivery(true)
        setShowPaperDelivery(false)
        // setDivHeight(true)
    }

    const handleGoPaperClick = () => {
        setShowPaperDelivery(true)
        setShowEmailDelivery(false)
        // setDivHeight(true)
    }

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setFormData({ ...formData, name: newName });
    }

    const handlePhoneChange = (e) => {
        const newPhone = e.target.value;
        setFormData({ ...formData, phone: newPhone });
    }

    const handleCountyChange = (e) => {
        const newCounty = e.target.value;
        const index = countyData.findIndex((e)=> e.counrty == newCounty)
        
        console.log('newCounty=>', newCounty) // 縣市名稱
        console.log('133: countyData=>', countyData) // 縣市索引
        
        setAreaData(countyData[index].countyArea)
        setAreaIndex(0)
        setFormData({ ...formData, county: newCounty, area: countyData[index].countyArea[0]});
    }

    const handleAreaChange = (e) => {
        const newAreaIndex = e.target.value;
        const newArea = e.target.options[newAreaIndex].text;
        console.log('e.target=>', e.target)
        console.log('newAreaIndex=>', newAreaIndex)
        console.log('newArea=>', newArea)
        
        setAreaIndex(newAreaIndex)
        setFormData({ ...formData, area: newArea });
    }

    const handleAddressChange = (e) => {
        const newAddress = e.target.value;
        console.log('newAddress =>', newAddress)
        setFormData({ ...formData, address: newAddress });
    }

    const handleSendClick = (e) => {
        console.log('e.target.parentNode =>', e.target.parentNode)
        console.log('formData=>', formData)
        // const formDiv = e.target.parentNode
    }

    const handleSendEmailClick = () => {
        window.location.href = "mailto:abc@gmail.com?cc=def@gmail.com,ghi@gmail.com&bcc=jkl@gmail.com&subject=這是一個主旨&body=xxx 您好：%0D%0A我想問的事情是%0D%0A回信請回到";
    }

    // 頁面第一次渲染時，引入縣市區Json檔案 並加入至變數初始值
    useEffect(() => {
        console.log('new')
        fetch('./json/area.json')
            .then((response) => response.json())
            .then((data) => {
                console.log('data =>',data.area);
                setCountyData(data.area)
                setAreaData(data.area[0].countyArea)
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        // // banner圖片漸漸淡入
        // if(bannerImg1.current){
        //     setTimeout(() => {
        //         bannerImg1.current.style.opacity = 1
        //     }, 2000);
        // }
        // if(bannerImg2.current){
        //     setTimeout(() => {
        //         bannerImg2.current.style.opacity = 1
        //     }, 2500);
        // }
        // if(bannerImg3.current){
        //     setTimeout(() => {
        //         bannerImg3.current.style.opacity = 1
        //     }, 3000);
        // }
        // if(bannerImg4.current){
        //     setTimeout(() => {
        //         bannerImg4.current.style.opacity = 1
        //     }, 3500);
        // }

        const fadeInDelay = 500; // 淡入延迟时间，单位为毫秒

        const fadeInImage = (ref, delay) => {
            setTimeout(() => {
                if (ref.current) {
                ref.current.style.opacity = 1;
                }
            }, delay);
        };

        const handleImageLoad = () => {
            fadeInImage(bannerImg1, fadeInDelay);
            fadeInImage(bannerImg2, fadeInDelay + 500);
            fadeInImage(bannerImg3, fadeInDelay + 1000);
            fadeInImage(bannerImg4, fadeInDelay + 1500);
        };

        if (bannerImg1.current && bannerImg2.current && bannerImg3.current && bannerImg4.current) {
            bannerImg1.current.addEventListener('load', handleImageLoad);
            bannerImg2.current.addEventListener('load', handleImageLoad);
            bannerImg3.current.addEventListener('load', handleImageLoad);
            bannerImg4.current.addEventListener('load', handleImageLoad);
        }

        return () => {
            if (bannerImg1.current && bannerImg2.current && bannerImg3.current && bannerImg4.current) {
                bannerImg1.current.removeEventListener('load', handleImageLoad);
                bannerImg2.current.removeEventListener('load', handleImageLoad);
                bannerImg3.current.removeEventListener('load', handleImageLoad);
                bannerImg4.current.removeEventListener('load', handleImageLoad);
            }
        };
    },[])

    // useEffect(() => {
    //     const options = {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.5, // 設定觸發點為圖片元素進入可見範圍 50%
    //     };

    //     const handleIntersection = (entries) => {
    //         entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //             setShowImages(true);
    //         }
    //         });
    //     };

    //     const observer = new IntersectionObserver(handleIntersection, options);
    //     const target = imageContainerRef.current;

    //     if (target) {
    //         observer.observe(target);
    //     }

    //     return () => {
    //         if (target) {
    //         observer.unobserve(target);
    //         }
    //     };
    // }, []);

    useEffect(() => {
        console.log('showImages=>', showImages)
    },[showPopup])

    // useEffect(() => {
    //     console.log('formData=>', formData)
    // },[formData])

    useEffect(() => {
        console.log('countyData =>', countyData)
    },[countyData])

    useEffect(() => {
        console.log('showPopup =>', showPopup)
    },[showPopup])

    useEffect(() => {
        console.log('selectedImage =>', selectedImage)
    },[selectedImage])

    return (
        <div className='main'>
            <div className='top'>
                <div className='banner'>
                    <div className='bBlock'>
                    {/* <img src='./image/banner/banner_01.jpg' className='animate__fadeInDown infinite delay-2s slower'></img> */}
                        <img src='./image/banner/banner_01.jpg' className='fadeInDown' ref={bannerImg1}></img>
                    </div>
                    <div className='bBlock'>
                        <img src='./image/banner/banner_02.jpg' className='fadeInDown' ref={bannerImg2}></img>
                    </div>
                    <div className='bBlock'>
                        <img src='./image/banner/banner_03.jpg' className='fadeInDown' ref={bannerImg3}></img>
                    </div>
                    <div className='bBlock'>
                        <img src='./image/banner/banner_04.jpg' className='fadeInDown' ref={bannerImg4}></img>
                    </div>
                    <div className='caption'>
                        <div className='captionText'>
                            {/* <p>Christmas is a beautiful and heartwarming holiday where we exchange greetings and gifts. </p>
                            <p>On this special day, you can use this website to quickly create your own postcard and send it to your loved ones, conveying this warmth. </p> */}
                            <p>聖誕節是個美好且溫馨的節日，我們會在這個節日互相祝福、送禮。</p>
                            <p>在這特別的日子，您可以使用此網頁，快速製作一個屬於你的明信片，並寄送給您愛的人們，傳送這份溫暖。</p>
                            
                        </div>
                        <a className='goStart' href='#view'>Go Start...</a>
                    </div>
                </div>
                {/* <p className="topic text-center">製作您的專屬聖誕明信片</p> */}
            </div>
            <div className="view" id='view'>
                <img src='./image/banner/background_04.jpg' className='viewBG'></img>
                <div className='customArea'>
                    <p className='customAreaTopic'>Make Your Own Card ! </p>
                    <div className='show' ref={divRef}>
                        <Card selectedColor={selectedColor} selectedImage={selectedImage} cardText={cardText} selectedDate={selectedDate} handleDownload={handleDownload}/>
                    </div>

                    <div className="menu">
                        <ColorPicker selectedColor={selectedColor} onColorChange={handleColorChange} />
                        
                        <ImagePicker openPopup={openPopup} selectedImage={selectedImage}/>

                        <CardText handleTextChange={handleTextChange}/>

                        <div className='lineDiv'>
                            <label>日期：</label>
                            <DatePicker className='form-control' selected={selectedDate} onChange={handleDateChange} />
                        </div>
                        
                        <a href='#goSend'>
                        {/* <a> */}
                            <button className='nextBtn btn btn-secondary' onClick={handleNextStep}>下一步</button>
                        </a>
                    </div>
                </div>
                {
                    showPopup && (
                        <Popup images={images} selectImage={selectImage} closePopup={closePopup}/>
                        
                        // 延遲載入1
                        // <div className="popup">
                        //     <div className="popupTitle">
                        //         <h3>選擇圖片</h3>
                        //     </div>
                        //     <div className="popupDiv">
                        //         <div className="popupContent">
                            
                        //             {
                        //                 images.map((image) => (
                        //                     <div key={image.id} onClick={() => selectImage(image)}>
                        //                         <LazyLoadImage className='materialImg' src={image.src} alt="" placeholdersrc={PlaceholderImage}/>
                        //                         <p>{image.name}</p>
                        //                     </div>
                        //                 ))
                        //             }
                        //         </div>
                        //     </div>
                        //     <button className="popupBtn" onClick={closePopup}>×</button>
                        // </div>
                        // 延遲載入2
                        // <div className="popup">
                        //     <div className="popupTitle">
                        //         <h3>選擇圖片</h3>
                        //     </div>
                        //     <div className="popupDiv">
                        //         <div className="popupContent">
                        //             <div className="imageContainer" ref={imageContainerRef}>
                        //                 {
                        //                     showImages &&
                        //                         images.map((image) => (
                        //                             <div key={image.id} onClick={() => selectImage(image)}>
                        //                             <img className='materialImg' src={image.src} alt="" />
                        //                             <p>{image.name}</p>
                        //                             </div>
                        //                         ))
                        //                 }
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                    )
                }
            </div>
{/* 
            <div id='nextStep'>
                <a href='#goSend'>
                    <button className='chooseBtn btn btn-outline-secondary' id='goEmailDelivery' onClick={handleGoEmailClick}>電子寄送</button>
                </a>
                <a href='#goSend'>
                    <button className='chooseBtn btn btn-outline-secondary' id='goPaperDelivery' onClick={handleGoPaperClick}>實體寄送</button>
                </a>
            </div> */}

            {/* 觸發之後，才有區塊高度 */}
            {
                divHeight && (
                    <div id='goSend' className={`${divHeight ? 'divHeight' : ''}`}>
                        <div id='nextStep'>
                            <a href='#goSend'>
                                <button className='chooseBtn btn btn-outline-secondary' id='goEmailDelivery' onClick={handleGoEmailClick}>電子寄送</button>
                            </a>
                            <a href='#goSend'>
                                <button className='chooseBtn btn btn-outline-secondary' id='goPaperDelivery' onClick={handleGoPaperClick}>實體寄送</button>
                            </a>
                        </div>
                        {
                            showEmailDelivery && (
                                <div id='emailDelivery'>
                                    <form>
                                        <div>
                                            <h3 className="text-center">電子寄送</h3>
                                            <hr/>
                                            <div className="row lineDiv">
                                                <div className="col">
                                                    <label>姓名：</label>
                                                    <input className='informInput form-control' onChange={handleNameChange}></input>
                                                </div>
                                                <div className="col">
                                                    <label>E-mail：</label>
                                                    <input className='informInput form-control' type='email' onChange={handlePhoneChange}></input>
                                                </div>
                                            </div>
                                            <div className="row lineDiv">
                                                <div className="">
                                                    <label>信件內容：</label>
                                                    <textarea className='informInput form-control' onChange={handleNameChange}></textarea>
                                                </div>
                                            </div>

                                            <button className='nextBtn btn btn-secondary' onClick={handleSendEmailClick}>
                                                送出
                                            </button>

                                            <a href="mailto:abc@gmail.com?cc=def@gmail.com,ghi@gmail.com&bcc=jkl@gmail.com&subject=這是一個主旨&body=xxx 您好：%0D%0A我想問的事情是%0D%0A回信請回到">
                                                點擊我點擊我
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            )
                        }

                        {
                            showPaperDelivery && (
                                <div id='paperDelivery'>
                                    <form>
                                        <Form handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} 
                                        handleCountyChange={handleCountyChange} countyData={countyData} areaIndex={areaIndex} 
                                        handleAreaChange={handleAreaChange} areaData={areaData} handleAddressChange={handleAddressChange} 
                                        handleSendClick={handleSendClick}/>
                                    </form>
                                </div>
                            )
                        }
                    </div>

                )
            }


            {/* <LazyLoadImage
                src="https://picsum.photos/500/500?random=1"
                className="img"
                alt=""
                placeholdersrc={PlaceholderImage}
            /> */}
        </div>
    )
}

export default App
