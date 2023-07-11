import { useEffect, useState, useRef } from 'react'
// import { PropTypes } from 'prop-types';
import React, {Component, PropTypes} from 'react'
import './App.css'

import { images } from '../public/json/images.jsx';

// 日期選擇器
import 'react-datepicker/dist/react-datepicker.css';
// 儲存圖片
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
// 延遲載入
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import PlaceholderImage from "../public/image/loading.jpg"
// 彈跳視窗
import Swal from 'sweetalert2';

// 元件
import DatePicker from 'react-datepicker';
import ColorPicker from './component/ColorPicker'
import Card from './component/Card'
import Popup from './component/Popup'
import ImagePicker from './component/ImagePicker'
import Date from './component/Date'
import EmailForm from './component/EmailForm'
import PaperForm from './component/PaperForm'
import CardText from './component/CardText';
import Banner from './component/Banner';

// import引入圖片路徑
import newBannerImg1 from "./assets/image/banner/banner_01.jpg";
import newBannerImg2 from "./assets/image/banner/banner_02.jpg";
import newBannerImg3 from "./assets/image/banner/banner_03.jpg";
import newBannerImg4 from "./assets/image/banner/banner_04.jpg";

const App = () => {

    // 此為解構賦值，使用時須用{}括起
    // 前者：使用，後者：改變
    const bannerImg1 = useRef(null);
    const bannerImg2 = useRef(null);
    const bannerImg3 = useRef(null);
    const bannerImg4 = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const [selectedColor, setSelectedColor] = useState('#BDB39E');
    const [showPopup, setShowPopup] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [cardText, setCardText] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    // console.log('newBannerImg1 =>', newBannerImg1)
    // console.log('newBannerImg2 =>', newBannerImg2)
    // console.log('newBannerImg3 =>', newBannerImg3)
    // console.log('newBannerImg4 =>', newBannerImg4)

    // let newBanner = [newBannerImg1, newBannerImg2, newBannerImg3, newBannerImg4]
    // console.log('newBanner=>', newBanner)

    // email寄送
    const [emailData, setEmailData] = useState({
        name:'',
        email:'',
        content:''
    });

    // 實體寄送
    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        county:'臺北市',
        area:'中正區',
        address:''
    });

    const [countyData, setCountyData] = useState([]); // 縣市資料
    const [areaData, setAreaData] = useState([]); // 區域資料
    const [areaIndex, setAreaIndex] = useState(0); // 當下選取的區域索引

    // 寄送方式區塊選擇
    const [showEmailDelivery, setShowEmailDelivery] = useState(true);
    const [showPaperDelivery, setShowPaperDelivery] = useState(false);

    // 新增div classname
    const [divHeight, setDivHeight] = useState(false);

    // 延遲載入
    // const [showImages, setShowImages] = useState(false);
    // const imageContainerRef = useRef(null);

    // 回呼函式
    // 當ColorPicker更新時，使用 setSelectedColor 函式更新 selectedColor 狀態的值
    const handleColorChange = (color) => {
        console.log('color =>', color)
        setSelectedColor(color);
    };

    // 開啟彈跳視窗
    const openPopup = () => {
        console.log('openPopup')
        setShowPopup(true);
    };

    // 關閉彈跳視窗
    const closePopup = () => {
        console.log('closePopup')
        setShowPopup(false);
    };

    // 已選擇圖片時，儲存選擇，並關閉視窗
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

    // 將div節點取出，並轉為canvas，儲存成圖片
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

    // 至下個區塊，給下個區塊高
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

    // 實體寄送資料儲存
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

    // 實體寄送，送出後，彈跳視窗顯示資料
    const handleSendClick = (e) => {
        console.log('e.target.parentNode =>', e.target.parentNode)
        console.log('formData=>', formData)
        let text = formData.name + '/' + formData.phone + '/' + formData.county + '/'+ formData.area + '/'+ formData.address
        Swal.fire({
            icon: 'success',
            title: '已成功送出!',
            html:
                `<p>姓名： ${formData.name}</p> 
                <p>電話： ${formData.phone}</p> 
                <p>地區： ${formData.county} / ${formData.area}</p>
                <p>地址： ${formData.address}</p>`
        });
    }

    // 電子寄送資料儲存
    const handleENameChange = (e) => {
        const newName = e.target.value;
        setEmailData({ ...emailData, name: newName });
    }

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmailData({ ...emailData, email: newEmail });
    }

    const handleEcontentChange = (e) => {
        const newContent = e.target.value;
        setEmailData({ ...emailData, content: newContent });
    }

    const handleSendEmailClick = () => {
        console.log('emailData =>', emailData)
        if(emailData.name && emailData.email && emailData.content){
            let emailHref = "mailto:" + emailData.email + "?subject=給" + emailData.name + "的聖誕卡片&" + "body=" + emailData.content
            window.location.href = emailHref;
        }
    }

    useEffect(() => {
        // console.log('new')

        // 頁面第一次渲染時，引入縣市區Json檔案 並加入至變數初始值
        fetch('./json/area.json')
            .then((response) => response.json())
            .then((data) => {
                // console.log('data =>',data.area);
                setCountyData(data.area)
                setAreaData(data.area[0].countyArea)
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        // 圖片預加載
        const fadeInImage = (ref, delay) => {
            setTimeout(() => {
            if (ref.current) {
                ref.current.style.opacity = 1;
            }
            }, delay);
        };
    
        const preloadImages = () => {
            // const imageUrls = [
            //     './image/banner/banner_01.jpg',
            //     './image/banner/banner_02.jpg',
            //     './image/banner/banner_03.jpg',
            //     './image/banner/banner_04.jpg',
            // ];
    
            // import引入圖片路徑
            const imageUrls = [
                newBannerImg1,
                newBannerImg2,
                newBannerImg3,
                newBannerImg4,
            ];

            // 儲存預載入圖片
            const promises = imageUrls.map((imageUrl) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = imageUrl;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            // fulfilled or rejected
            console.log('promises=>', promises)
    
            // 待圖片預載入完成，執行圖片淡入動作
            Promise.all(promises)
            .then(() => {
                setImagesLoaded(true);
                fadeInImage(bannerImg1, 500);
                fadeInImage(bannerImg2, 1000);
                fadeInImage(bannerImg3, 1500);
                fadeInImage(bannerImg4, 2000);
            })
            .catch((error) => {
                console.error('預加載失敗:', error);
            });
        };
    
        preloadImages();
    },[])

    return (
        <div className='main'>
            {/* {!imagesLoaded && <div>Loading...</div>} */}
            <div className='top'>
                {imagesLoaded && 
                    // <Banner newBannerImg1={newBannerImg1} newBannerImg2={newBannerImg2} newBannerImg3={newBannerImg3} newBannerImg4={newBannerImg4}
                    //     ref={{bannerImg1,bannerImg2,bannerImg3,bannerImg4}}
                    // />
                    // ref={{bannerImg1,bannerImg2,bannerImg3,bannerImg4}}

                    <div className='banner'>
                        <div className='bBlock' id='bBlock_m'>
                            <img src={newBannerImg4} className='fadeInDown' ref={bannerImg1}></img>
                        </div>
                        <div className='bBlock'>
                            <img src={newBannerImg1} className='fadeInDown' ref={bannerImg2}></img>
                        </div>
                        <div className='bBlock'>
                            <img src={newBannerImg2} className='fadeInDown' ref={bannerImg3}></img>
                        </div>
                        <div className='bBlock'>
                            <img src={newBannerImg3} className='fadeInDown' ref={bannerImg4}></img>
                        </div>
                        <div className='caption'>
                            <div className='captionText'>
                                <p className='captionTextLine'>聖誕節是個美好且溫馨的節日，我們會在這個節日互相祝福、送禮。{'\n'}在這特別的日子，您可以使用此網頁，快速製作一個屬於你的明信片，並寄送給您愛的人們，傳送這份溫暖。</p>
                            </div>
                            <a className='goStart' href='#view'>Go Start...</a>
                        </div> 
                    </div>
                }
            </div>
            <div className="view" id='view'>
                {/* <img src='./image/banner/background_04.jpg' className='viewBG'></img> */}
                <div className='customArea'>
                    <div className='show' ref={divRef}>
                        <p className='customAreaTopic'>Make Your Own Card ! </p>
                        <Card selectedColor={selectedColor} selectedImage={selectedImage} cardText={cardText} selectedDate={selectedDate} handleDownload={handleDownload}/>
                    </div>

                    <div className="menu">
                        <ColorPicker selectedColor={selectedColor} onColorChange={handleColorChange} />
                        
                        <ImagePicker openPopup={openPopup} selectedImage={selectedImage}/>

                        <CardText handleTextChange={handleTextChange}/>

                        <Date DatePicker={DatePicker} selectedDate={selectedDate} handleDateChange={handleDateChange}/>
                        
                        <a href='#goSend'>
                            <button className='nextBtn btn btn-secondary' onClick={handleNextStep}>下一步</button>
                        </a>
                    </div>
                </div>
                {
                    showPopup && (
                        <Popup images={images} selectImage={selectImage} closePopup={closePopup}/>
                        
                    )
                }
            </div>

            {/* 觸發之後，才有區塊高度 */}
            {
                <div id='goSend' className={`${divHeight ? 'divHeight' : 'noHeight'}`}>
                    <div id='sendBtn'>
                        <a href='#goSend'>
                            <button className={`${showEmailDelivery ? 'chooseBtn_click btn btn-outline-secondary' : 'chooseBtn btn btn-outline-secondary'}`} id='goEmailDelivery' onClick={handleGoEmailClick}>電子寄送</button>
                        </a>
                        <a href='#goSend'>
                            <button className={`${showPaperDelivery ? 'chooseBtn_click btn btn-outline-secondary' : 'chooseBtn btn btn-outline-secondary'}`} id='goPaperDelivery' onClick={handleGoPaperClick}>實體寄送</button>
                        </a>
                    </div>
                    <div id='sendForm'>
                        {
                            <div id='emailDelivery' className={`${showEmailDelivery ? 'fadeIn' : 'fadeOut'}`}>
                                <form>
                                    <EmailForm handleENameChange={handleENameChange} handleEmailChange={handleEmailChange} 
                                    handleEcontentChange={handleEcontentChange} handleDownload={handleDownload} 
                                    handleSendEmailClick={handleSendEmailClick}/>
                                </form>
                            </div>
                        }

                        {
                            <div id='paperDelivery' className={`${showPaperDelivery ? 'fadeIn' : 'fadeOut'}`}>
                                <form>
                                    <PaperForm handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} 
                                    handleCountyChange={handleCountyChange} countyData={countyData} areaIndex={areaIndex} 
                                    handleAreaChange={handleAreaChange} areaData={areaData} handleAddressChange={handleAddressChange} 
                                    handleSendClick={handleSendClick}/>
                                </form>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default App
