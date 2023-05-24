const Popup =({images, selectImage, closePopup}) =>{

    return(
        <div className="popup">
            <div className="popupTitle">
                <h3>選擇圖片</h3>
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
    )
}

export default Popup