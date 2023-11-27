const EditInput = ({name, value, setValue, type, editEntity, editProperty}) => {
    return (
        <div>
            <label>{name}</label>
            <input type={type} value={value} onChange={(e) => { setValue({...editEntity, [editProperty]: e.target.value}) }} />
        </div>
    );
}

export default EditInput;