import { useState } from "react";


export const Test = () => {

  const [items, setItems] = useState('');

  const getItem = async (e) => {
    e.preventDefault();
    const res = await fetch('https://retoolapi.dev/X9nA53/dummy');
    const data = await res.json();
    setItems(data)
  }

  return (
    <div>
      <button onClick={getItem}>
        fetch
      </button>
      {items && items.map(item => (
        <div key={item.id}>
          <h3>{item.fullName}</h3>
        </div>
      ))}
    </div>
  )

}

export default Test;