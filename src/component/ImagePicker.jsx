const ImagePicker =({openPopup, selectedImage}) =>{

    return(
        <div className='lineDiv'>
            <label>圖案：</label>  
            <div className="form-control select2-single" onClick={openPopup}>
                <span id="type" className="spanText">
                    {
                        selectedImage.name
                    }
                </span>
                <span className="glyphicon glyphicon-triangle-bottom"></span>
            </div>
        </div>
    )
}

export default ImagePicker