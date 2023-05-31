// menu 顏色選擇器
const Date = ({ DatePicker, selectedDate, handleDateChange }) => {

    return (
        <div className='lineDiv'>
            <label>日期：</label>
            <DatePicker className='form-control' selected={selectedDate} onChange={handleDateChange} />
        </div>
    );
};

export default Date 