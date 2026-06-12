import Header from "./Header"
import Footer from "./Footer"
import Body from "./Body"
import {useState} from "react";

function App() {
  const [items,setItems]=useState([]);
  const handleAddItems=(item)=>{
        setItems(items=>[...items,item])
    };
    const handleDeleteItems=(id)=>{
        setItems(items=>items.filter(item=>item.id!==id))
    };
    
    const handleDoneItems=(id)=>{
      setItems(items=>items.map(item=>item.id===id? {...item, packed: !item.packed}: item))
    }
    

  return (
    <div className="appWrapper">
    <Header/>
    <Body items={items} 
    handleAddItems={handleAddItems}
    onDeleteItems={handleDeleteItems}
    onDoneItems={handleDoneItems}/>
    <Footer items={items}/>
    </div>
  )
}

export default App