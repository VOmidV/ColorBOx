
import NewBoxForm from "./NewBoxForm";
import './App.css';
import React, {useState} from "react"
import Box from "./Box";

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  const add = boxObj => {
    setBoxes(boxes => [...boxes, boxObj]);
  };

  const remove = id =>{
    setBoxes(boxes => boxes.filter(box => box.id !== id))
  }

  const boxComponents = boxes.map(box => (
    <Box
      width={box.width}
      height={box.height}
      background={box.backgroundColor}
      id={box.id}
      remove={remove}
    />
  ));

  return (
    <div>
      <NewBoxForm func={add}/>
      {boxComponents}
    </div>
  );
}

export default BoxList;