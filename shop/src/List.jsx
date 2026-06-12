function List({item,onDeleteItems,onDoneItems}) {
    const{name,quantity,packed,id}=item;
  return (
    <li className="listWrapper">
        <span>{quantity}</span>
        <p style={packed?{textDecoration: 'line-through'}:{}}>
            {name}
        </p>
        <div>
            <button onClick={()=>onDoneItems(id)} className="donebtn">Done</button>
            <button onClick={()=>onDeleteItems(id)} className="deletebtn">Delete</button>
        </div>
    </li>
  )
}

export default List