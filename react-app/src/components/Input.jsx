const Input = ({ type, name, value, setValue }) => {
    return (
        <div>
            <label>{name}</label>
            <input type={type} value={value} onChange={(e) => { setValue(e.target.value) }} />
        </div>
    );
}

export default Input;