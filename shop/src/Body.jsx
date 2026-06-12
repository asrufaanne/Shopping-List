import {useState} from "react";
import List from "./List";
import Form from "./Form";

function Body({items,handleAddItems,onDeleteItems,onDoneItems}) {
  const [sortBy,setSortBy]=useState("input");
   
  let sortedItems;
  if(sortBy==="input"){
    sortedItems=items;
  }
  else if(sortBy==="packed"){
    sortedItems=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed));
  }

  return (
    <div>
        <Form handleAddItems={handleAddItems}/>
        <ul className="bodyWrapper">
        {sortedItems.map((item)=>(
            <List item={item} key={item.id} onDeleteItems={onDeleteItems}
            onDoneItems={onDoneItems}/>
        ))}
    </ul>
    <div>
      <select className="select" value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
        <option value="input">Sort by Input</option>
        <option value="packed">Sort by Packed</option>
      </select>
    </div>
    </div>
  )
}

export default Body