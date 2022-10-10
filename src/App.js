import React from "react";
import Control from "./component/Control";
import './App.css';
import Header from "./component/Header";
import Input from "./component/Input";
import { useState } from "react";

const App = () => {

    const [result, setResult] = useState('');
    const [total, setTotal] = useState('');

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const blank = () => {
        setResult("");
        setTotal("");
    }

    const clean = () => {
        setResult(result.slice(0, -1));
    }

    const final = () => {
        const finalAnswer = eval(result);
        setTotal(finalAnswer);
        //or... setTotal(eval(result));
    }

    return (
        <>
            <div className="container">
                <Header />
                <Input results={result} total={total} />
                <Control handleClick={handleClick} blank={blank} clean={clean} final={final}/>
                
            </div>
        </>
    );
}
 
export default App;