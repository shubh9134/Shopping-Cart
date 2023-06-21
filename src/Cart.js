import React from "react";

 export default function Carty({box,handletrash}){
    let k = 0;
    let count = 0;
    let n = 0;
    let myMap = new Map();
    let newmap = new Map();
    {box.map((cur) => {
        myMap.set(cur.id,(myMap.get(cur.id) || 0)+1)
    })}
    console.log('clicked')
    return (
        <table className="table">
            <tr>
                <th> Sr No.</th>
                <th> ItemName</th>
                <th> Price</th>
                <th>Quantity</th>
                <th>Action</th>

            </tr>
         {box.map((element) =>{
            if(newmap.has(element.id)){return}
            else{
            newmap.set(element.id,1)
            {k += myMap.get(element.id) * element.price}
            {count += myMap.get(element.id)}
            {n += 1}
            return <tr>
            <td>{n}</td>
            <td><img src = {element.src} className = "iimagesize"/>
            {element.title}</td>
            <td>{element.price}</td>
            <td>{myMap.get(element.id)} </td>
            <td><img src = "images/trash.jpg" alt = "Delete"  className = "trash"  onClick={() => handletrash(element.id)}/></td>
        </tr>
 }})}
        <div className="total"> Total : {k} </div> 
         <div className="item-count"> Number of items : {count}</div>
        </table>


)
 }