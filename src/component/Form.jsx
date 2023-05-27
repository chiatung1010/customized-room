const Form = ({handleNameChange, handlePhoneChange, handleCountyChange, countyData, areaIndex, handleAreaChange, areaData, handleAddressChange, handleSendClick}) => {
    return (
        <div>
            <h3 className="text-center">填寫寄送資訊</h3>
            <hr/>
            <div className="row lineDiv">
                <div className="col">
                    <label>姓名：</label>
                    <input className='informInput form-control' onChange={handleNameChange}></input>
                </div>
                <div className="col">
                    <label>電話：</label>
                    <input className='informInput form-control' type='number' onChange={handlePhoneChange}></input>
                </div>
            </div>
            <div className="row lineDiv">
                <div className="col-md-3">
                    <label>縣市：</label>
                    <select className='form-control' onChange={handleCountyChange}>
                        {
                            countyData.map((e, i) => (
                                <option key={i}>{e.counrty}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-3">
                    <label>區域：</label>
                    <select className='form-control' value={areaIndex} onChange={handleAreaChange}>
                        {
                            areaData.map((e, i) => (
                                <option key={i} value={i}>{e}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-6">
                    <label>住址：</label>
                    <input className='informInput form-control' onChange={handleAddressChange}></input>
                </div>

            </div>

            <button className='nextBtn btn btn-secondary' onClick={handleSendClick}>
                送出
            </button>
        </div>
    );
};

export default Form