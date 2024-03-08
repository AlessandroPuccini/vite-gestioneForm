
function Input({id, info, reg, error,errorMsg, type='text', rules={}}) {
    return (
        <div className='form-field-container'> 
        <label htmlFor={id}>{info}</label>
        <input 
        {...reg( info, rules)}
        type={type} 
        id={id} 
        placeholder={info} />
        {error && <span>{errorMsg}</span>}
    </div> 
    );
}
export default Input;