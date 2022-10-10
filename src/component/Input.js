const Input = (props) => {
    return ( 
        <div className="input">
            <p className="one">{props.results}</p>
            <p className="two">{props.total}</p>
        </div>
     );
}
 
export default Input;