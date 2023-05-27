const ImagePicker =({openPopup, selectedImage}) =>{

    return(
        <div className="form-control select2-single" onClick={openPopup}>
        <span id="type" className="spanText">
            {
                selectedImage.name
            }
        </span>
        <span className="glyphicon glyphicon-triangle-bottom"></span>
    </div>
    )
}

export default ImagePicker