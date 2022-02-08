const InputField = (props) => {
    const {register,name,type,defaultValue,id} = props
    return (  
            <input id={id} defaultValue={defaultValue} {...register(name)} name={name} type={type}/>
    );
}
 
export default InputField;