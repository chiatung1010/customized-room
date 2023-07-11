const PaperForm = ({handleNameChange, handlePhoneChange, handleCountyChange, countyData, areaIndex, handleAreaChange, areaData, handleAddressChange, handleSendClick}) => {
    return (
        <div>
            <h3 className="text-center">實體寄送</h3>
            <hr/>
            <div className="row lineDiv">
                <div className="col">
                    <p>姓名：</p>
                    <input className='informInput form-control' onChange={handleNameChange} required="required"></input>
                </div>
                <div className="col">
                    <p>電話：</p>
                    <input className='informInput form-control' type='number' onChange={handlePhoneChange} required="required"></input>
                </div>
            </div>
            <div className="row lineDiv">
                <div className="col-md-3">
                    <p>縣市：</p>
                    <select className='form-control' onChange={handleCountyChange}>
                        {
                            countyData.map((e, i) => (
                                <option key={i}>{e.counrty}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-3">
                    <p>區域：</p>
                    <select className='form-control' value={areaIndex} onChange={handleAreaChange}>
                        {
                            areaData.map((e, i) => (
                                <option key={i} value={i}>{e}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-6">
                    <p>住址：</p>
                    <input className='informInput form-control' onChange={handleAddressChange} required="required"></input>
                </div>

            </div>

            <button className='nextBtn btn btn-secondary' onClick={handleSendClick}>
                送出
            </button>
        </div>
    );
};

export default PaperForm