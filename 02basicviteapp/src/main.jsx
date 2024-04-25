import React from 'react'
import ReactDOM from 'react-dom/client'
import Greeting, {App} from './App.jsx'

function CombineFuncCodeBlock() {
  return (
    <>
      <App/>
      <Greeting/>
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(
  CombineFuncCodeBlock()
)
