// menu 顏色選擇器
const ColorPicker = ({ selectedColor, onColorChange }) => {
    const handleColorChange = (event) => {
        onColorChange(event.target.value);
    };

    // console.log('232 selectedColor =>', selectedColor)

    return (
        <div className='lineDiv'>
            <p>顏色：</p>
            <div>
                <input
                    type="color"
                    value={selectedColor}
                    onChange={handleColorChange}
                />
            </div>
        </div>
    );
};

export default ColorPicker 