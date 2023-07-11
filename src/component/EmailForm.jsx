const EmailForm = ({handleENameChange, handleEmailChange, handleEcontentChange, handleDownload, handleSendEmailClick}) => {
    return (
        <div>
            <h3 className="text-center">電子寄送</h3>
            <hr/>
            <div className="row lineDiv">
                <div className="col">
                    <p>姓名：</p>
                    <input className='informInput form-control' onChange={handleENameChange} required="required"></input>
                </div>
                <div className="col">
                    <p>E-mail：</p>
                    <input className='informInput form-control' type='email' onChange={handleEmailChange} required="required"></input>
                </div>
            </div>
            <div className="row lineDiv">
                <div className="col">
                    <p>信件內容：</p>
                    <textarea className='informInput form-control' onChange={handleEcontentChange} required="required"></textarea>
                </div>
            </div>
            <p className='p'>*記得下載明信片，並在您的電子郵件中插入您精心製作的明信片 ! <a onClick={handleDownload}>點我下載</a></p>
            <button className='nextBtn btn btn-secondary' onClick={handleSendEmailClick}>
                送出
            </button>

        </div>
    );
};

export default EmailForm