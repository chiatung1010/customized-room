// menu 顏色選擇器
const Date = ({ DatePicker, selectedDate, handleDateChange }) => {

    return (
        <div className='lineDiv'>
            <p>日期：</p>
            <DatePicker className='form-control' selected={selectedDate} onChange={handleDateChange} />
        </div>
    );
};

export default Date 