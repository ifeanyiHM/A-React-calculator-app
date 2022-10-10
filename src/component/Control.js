import arrow from "./Arrow.svg";
import dot from "./dot.svg";


const Control = (props) => {

    return ( 
        <div className="button">
            <button onClick={props.blank}>c</button>
            <button onClick={props.clean}><img className="mage" src={arrow} alt="backspace" /></button>
            <button name="/" onClick={props.handleClick}>&divide;</button>
            <button name="*" onClick={props.handleClick}>x</button>
            <button name="8" onClick={props.handleClick}>8</button>
            <button name="9" onClick={props.handleClick}>9</button>
            <button name="7" onClick={props.handleClick}>7</button>
            <button name="-" onClick={props.handleClick}>-</button>
            <button name="4" onClick={props.handleClick}>4</button>
            <button name="5" onClick={props.handleClick}>5</button>
            <button name="6" onClick={props.handleClick}>6</button>
            <button name="+" onClick={props.handleClick}>+</button>
            <button name="1" onClick={props.handleClick}>1</button>
            <button name="2" onClick={props.handleClick}>2</button>
            <button name="3" onClick={props.handleClick}>3</button>
            <button name="=" onClick={props.final} className="equal">=</button>
            <button name="00" onClick={props.handleClick}>00</button>
            <button name="0" onClick={props.handleClick}>0</button>
            <button name="." onClick={props.handleClick}><img src={dot} alt="point" /></button>
        </div>
    );
}
 
export default Control;