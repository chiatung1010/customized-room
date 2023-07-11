const CardText =({handleTextChange}) =>{

    return(
        <div className='lineDiv'>
            <p>文字：</p>
            <input className='form-control' onChange={handleTextChange}  placeholder="say something..." maxLength="20" ></input>
        </div>
    )
}

export default CardText