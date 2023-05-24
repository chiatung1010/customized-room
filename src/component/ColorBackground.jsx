// show 背景顏色
const ColorBackground = ({ selectedColor }) => {
    console.log('selectedColor =>', selectedColor)
    return (
        <div className='bg'
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: selectedColor,
            }}
        ></div>
    );
};

export default ColorBackground