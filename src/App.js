import React,{useState} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {items} from './data'
import Navigation from './Navbar';
import Render from "./Render";
import Carty from "./Cart"
import "./App.css";

function App() {
  const[arr,setArr] = useState(items);
  const[cart,setCart] = useState([]);
  const[visible,setVisible] = useState(false)

  
  function handlerendering(para){
    if(para === "All"){
      return setArr(items)
    }

    const listeditems = items.filter((e) =>{
      return (e.category === (para));
        
    });
    setArr(listeditems);

    
  }
  function handlecart(num){
    items.map((ele)  => {
       if(ele.id === num){
          setCart([...cart,ele])
       };

    })
  }
  function handledelete(Id){
    const next = cart.filter((item) =>{
      return item.id !== Id;

  })
  setCart(next)
  }

  function handlevisible(){
    setVisible(!visible)
  }



    return (
      <div>
        <h1 className='title'>EVERYTHING.com</h1>
        <div className='container'>
        <img src = "images/cart.jpg" onClick = {handlevisible} className='buttton' />
        {visible && <div className='dropdown-box'><Carty box = {cart}  handletrash={handledelete}/></div>}
        </div>
        <Navigation handlenav = {handlerendering}/>
        <Render  list = {arr} handlecart = {handlecart}/>
        

        
      </div>

    )
    }

    

export default App;
