const Card = ({selectedColor, selectedImage, cardText, selectedDate, handleDownload}) => {
    console.log('selectedColor =>', selectedColor)
    return (
        <div className='cardBlock'
            style={{backgroundColor: selectedColor}}>
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
                    <span className="cardDate">{selectedDate.toLocaleDateString('en-US')}</span>
                :''
            }
        <button onClick={handleDownload} className='btn btn-warning'><i className="bi bi-download"></i></button>
        </div>
                
    );
};

export default Card