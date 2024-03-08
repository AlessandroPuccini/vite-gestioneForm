 
function CheckBox({info, reg, text, error, errorMsg,rules= {} }) {
    return(
        <div className='form-field-container'> 
        <input className='checkbox' type='checkbox' {...reg(info, rules)}/>
        {text}
        {error && <span>{errorMsg}</span>}
    </div> 
    );
}
export default CheckBox;