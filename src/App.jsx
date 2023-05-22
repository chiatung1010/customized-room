// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import React, {Component, PropTypes} from 'react'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            color: { // 顏色
                index: 0,
                // data: colorData
            },
            acc: { // 配件
                index: 0,
                // data: accData
            },
            text: [] // 文字
        };

        // this.sayHi = this.sayHi.bind(this)
    }

    sayHi() {
        window.alert('Hello Ray.');
    }
    
    render() {

        return (
        <div>
                <div className='show'>
                    <div className='showBlock'></div>
                </div>
                <div className='menu'>
                    <h2>聖誕卡片客製化</h2>
                    <div>
                        <p>顏色</p>
                        
                    </div>
                </div>

                <div>
                    <button type="button" onClick={ this.sayHi }>打招呼</button>
                </div>
        </div>
        );
    }
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
