const Button = ({name, className, handleClick}) => {
    return ( 
        <button onClick={handleClick} className={className}>{name}</button>
     );
}
 
export default Button;