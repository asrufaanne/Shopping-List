import {useState} from "react";

function Form({handleAddItems}) {
    const [name,setName]=useState("");
    const[quantity,setQuantity]=useState(1);
    
   
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name)
        {
            const newTodo={
            id:Date.now(),
            packed:false,
            name:name,
            quantity:quantity
        }
        console.log(newTodo);
        handleAddItems(newTodo);
        setName(" ");
        setQuantity(1);
        }
        
    }
  return (
<form className="form" onSubmit={handleSubmit}>
    <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))} className="select">
        {[...Array(20)].map((_,index)=>(
            <option  value={index+1} key={index+1}>
                {index+1}
            </option>
        ))}
    </select>
    <input className="input" type="text" placeholder="Item Name" value={name} onChange={(e)=>{
        setName(e.target.value);
        console.log(e.target.value);
    
    }
    }/>
    <button className="add" >Add</button>
</form>  )
}

export default Form