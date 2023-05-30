const Popup =({images, selectImage, closePopup}) =>{

    return(
        <div className="pop">
            <div className="popup">
                <div className="popupTitle">
                    {/* <p>選擇圖片</p> */}
                </div>
                <div className="popupDiv">
                    <div className="popupContent">
                        {
                            images.map((image) => (
                                <div key={image.id} onClick={() => selectImage(image)}>
                                    <img className='materialImg' src={image.src} alt="" />
                                    <p>{image.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <button className="popupBtn" onClick={closePopup}>×</button>
            </div>
            <div className="popupOverlay" onClick={closePopup}></div>
        </div>
    )
}

export default Popup