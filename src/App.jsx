import { useState } from 'react'
import React, {Component, PropTypes} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// const App = () => {
//   let [color, setColor] = React.useState(0);
  
//   // 只執行一次
//   React.useEffect(() => {
//     console.log('once render');
//   }, [color]);

//   // 每次渲染之後執行
//   React.useEffect(() => {
//     // console.log('render');
//   })

//   const plus = (color) => {
//     setColor(color + 1);
//   }


//   return (
//     <div>
//       { color }
//       <button type="button" onClick={() => plus(color)}>改名</button>
//       <button type="button" onClick={ () => setColor(color+1) }>改名1</button>
      
//     </div>
//   )
// }

// const App = () => {
//     const [ todoList, setTodoList ] = React.useState([]);

//     const addTodo = (event) => {
//         const input = document.querySelector('#todoInput');
//         setTodoList([
//             ...todoList,
//             {
//             id: Date.now(),
//             name: input.value,
//             status: false,
//             }
//         ])
//         input.value = '';
//     };

//     const updateTodo = (event) => {
//         const { id } = event.target.dataset;
//         console.log(id)
        
//         const newTodoList = todoList.map((todo) => {
//             if(todo.id === Number(id)) {
//             todo.status = !todo.status;
//             }
//             return todo;
//         });
    
//         setTodoList([ ...newTodoList ]);
//     }
  
//     const remoteAllTodo = () => {
//         setTodoList([]);
//     }
  
//     return (
//       <div>
//         <div className="bg-indigo-500 p-5 h-screen">
//           <div className="max-w-[768px] m-auto bg-white p-5">
//             <h1 className="text-center text-2xl mb-4">React ToDoList</h1>
//             <div className="flex">
//               <input id="todoInput" type="text" className="w-full rounded-l-lg border-l-2 border-y-2 border-indigo-300 pl-4 focus:outline-indigo-500 focus:outline-none focus:outline-offset-0" placeholder="請輸入你的代辦事項" />
//               <button onClick={ addTodo } className="w-[50px] h-[50px] border-0 bg-sky-500 hover:bg-sky-600 rounded-r-lg text-white transition duration-700">+</button>
//             </div>
//             <ul>
//               {
//                 todoList.map((todo) => (
//                   <li className="py-4" key={ todo.id } data-id={ todo.id } >
//                     <label className={ todo.status ? 'line-through' : ''}>
//                       <input onChange={ updateTodo } type="checkbox" className="mr-2"  data-id={ todo.id } checked={ todo.status }/>
//                       { todo.name }
//                     </label>
//                   </li>
//                 ))
//               }
//             </ul>
//             <div className="flex justify-between items-center">
//               <p>
//                 目前有 <span className="font-medium">{ todoList.length }</span> 個事項待完成
//               </p>
  
//               <button onClick={ remoteAllTodo } type="button" className="bg-red-300 p-2 rounded-md hover:bg-red-400 transition duration-700">Clear All Todo</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
// }

const ColorPicker = ({ selectedColor, onColorChange }) => {
    const handleColorChange = (event) => {
        onColorChange(event.target.value);
    };

    console.log('232 selectedColor =>', selectedColor)

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

const ColorBg = ({ selectedColor }) => {
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

const App = () => {

    const [selectedColor, setSelectedColor] = useState('#ffcccc');
    // 此為解構賦值，使用時須用{}括起

    const [ area, setArea ] = React.useState([
        {
            data: [
                "台北市",
                "基隆市",
                "新北市",
                "連江縣",
                "宜蘭縣",
                "新竹市",
                "新竹縣",
                "桃園市",
                "苗栗縣",
                "台中市",
                "彰化縣",
                "南投縣",
                "嘉義市",
                "嘉義縣",
                "雲林縣",
                "台南市",
                "高雄市",
                "澎湖縣",
                "金門縣",
                "屏東縣",
                "台東縣",
                "花蓮縣"
            ],
            status: 200
        }
    ]);

    // const [ weight, setWeight ] = React.useState([])

    const handleColorChange = (color) => {
        console.log('color =>', color)
        setSelectedColor(color);
    };

    const openTypeBox = () => {}

    // const addTodo = (event) => {

    //     const input = document.querySelector('#todoInput');
    //     setTodoList([
    //         ...todoList,
    //         {
    //         id: Date.now(),
    //         name: input.value,
    //         status: false,
    //         }
    //     ])
    //     input.value = '';
    // };

    // const updateTodo = (event) => {
    //     const { id } = event.target.dataset;
    //     console.log(id)
        
    //     const newTodoList = todoList.map((todo) => {
    //         if(todo.id === Number(id)) {
    //         todo.status = !todo.status;
    //         }
    //         return todo;
    //     });
    
    //     setTodoList([ ...newTodoList ]);
    // }

    // const remoteAllTodo = () => {
    //     setTodoList([]);
    // }

    return (
        <div className="view">
            <div className='show'>
                <ColorBg selectedColor={selectedColor}/>
                {/* <img src='./image/0001.png'></img> */}
            </div>
            <div className="menu">
                <h3 className="text-center">聖誕卡片客製化</h3>
                <hr/>
                <div className='backgroundColor'>
                    <label>顏色：</label>
                    <ColorPicker selectedColor={selectedColor} onColorChange={handleColorChange} />
                </div>
                <div>
                    <label>圖案：</label>
                    <button className="form-control select2-single" onClick={openTypeBox}>
                        <span id="type" className="spanText">
                            {
                                '圖片名稱'
                            }
                        </span>
                        <span className="glyphicon glyphicon-triangle-bottom"></span>
                    </button>
                </div>
                
                <div className="flex">
                    {/* <input id="todoInput" type="text" className="" placeholder="請輸入重量" /> */}
                    {/* <button onClick={ addTodo } className="w-[50px] h-[50px] border-0 bg-sky-500 hover:bg-sky-600 rounded-r-lg text-white transition duration-700">+</button> */}
                </div>


                {/* 縣市 */}
                {/* <select value={area[0].data[0]} onChange={handleSelectChange}>
                    {
                        area[0].data.map((a, index) => (
                            <option key={index}>{a}</option>
                        ))
                    }
                </select> */}
                
            </div>
        </div>
    )
}

export default App
