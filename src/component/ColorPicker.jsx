// menu 顏色選擇器
const ColorPicker = ({ selectedColor, onColorChange }) => {
    const handleColorChange = (event) => {
        onColorChange(event.target.value);
    };

    // console.log('232 selectedColor =>', selectedColor)

    return (
        <div>
            <input
                type="color"
                value={selectedColor}
                onChange={handleColorChange}
            />
        </div>
    );
};

export default ColorPicker 