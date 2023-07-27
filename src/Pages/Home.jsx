import { useState } from "react";


const Home =() => {

const [inputValue, setInputValue] = useState("");
    console.log(inputValue)

const onInputChange = (ev) => {
setInputValue(ev.target.value);
};
return (
<div>
    <div>{inputValue}</div>
    <button type="button" onClick={() =>{
        setInputValue('Abhishek')
    }}>Update to random</button>
    <input type="text" value ={inputValue} onChange={onInputChange}/>
</div>

);
};

export default Home;