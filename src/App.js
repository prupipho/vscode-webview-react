import React, {useState} from 'react';
import logo from './logo.svg';
import {createPortal} from 'react-dom'
import './App.css';


const Modal = ({ children, onClose, open }) =>
  open ?
    createPortal(
      <div className='modal'>
        <button onClick={onClose} className='modal__close'>&times;</button>
        {children}
      </div>,
    document.body)
    : null

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div id="app" className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button >Another button</button>
        <button onClick={() => setOpen(!open)}>Show Modal?</button>
        <Modal open={open} onClose={() => setOpen(false)}>
          Test Modal
        </Modal>
      </header>
    </div>
  );
}

export default App;
