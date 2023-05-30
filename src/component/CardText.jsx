const CardText =({handleTextChange}) =>{

    return(
        <div className='lineDiv'>
            <label>文字：</label>
            <input className='form-control' onChange={handleTextChange}  placeholder="say something..." maxLength="20" ></input>
        </div>
    )
}

export default CardText