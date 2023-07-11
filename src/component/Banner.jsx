import React, { useRef, forwardRef, useImperativeHandle  } from "react";

const Banner = forwardRef(({newBannerImg1,newBannerImg2,newBannerImg3,newBannerImg4},ref) => {
    console.log('ref', ref)

    useImperativeHandle(ref, () => ({
        getRefValues: () => ({
            bannerImg1: bannerImg1.current,
            bannerImg2: bannerImg2.current,
        }),
    }));

    return (
        <div className='banner'>
            <div className='bBlock' id='bBlock_m'>
                <img src={newBannerImg1} className='fadeInDown' ref={bannerImg1}></img>
            </div>
            {/* <div className='bBlock'>
                <img src={newBannerImg2} className='fadeInDown' ref={ref.bannerImg2}></img>
            </div>
            <div className='bBlock'>
                <img src={newBannerImg3} className='fadeInDown' ref={ref.bannerImg3}></img>
            </div>
            <div className='bBlock'>
                <img src={newBannerImg4} className='fadeInDown' ref={ref.bannerImg4}></img>
            </div> */}
            <div className='caption'>
                <div className='captionText'>
                    <p>聖誕節是個美好且溫馨的節日，我們會在這個節日互相祝福、送禮。</p>
                    <p>在這特別的日子，您可以使用此網頁，快速製作一個屬於你的明信片，並寄送給您愛的人們，傳送這份溫暖。</p>
                    
                </div>
                <a className='goStart' href='#view'>Go Start...</a>
            </div>
        </div>
    );
});

export default Banner