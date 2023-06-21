import React from "react";

export default function Render({list,handlecart})

{
    let k = 0;
return(
        <>
        {list.map((item) => {
        
        return <div className="box">
            <div className="render">
            <li key = {item.id}>
            <h1 className="boxtitle"> {item.title}</h1>
            <img src = {item.src} alt = {item.title} className="imagesize"/>
            <div className="price">₹ {item.price}.</div>
            <img src = "images/carticon1.jpg" className="iiimagesize" onClick={() =>{handlecart(item.id)}}/>
            </li>

    </div>
    </div>
        
    })}
        </>
    

)
};