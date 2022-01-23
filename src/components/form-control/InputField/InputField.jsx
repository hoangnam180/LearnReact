const InputField = (props) => {
    const {register,name,type,defaultValue} = props
    return (  
        <div>
            <input defaultValue={defaultValue} {...register(name)} name={name} type={type}/>
        </div>
    );
}
 
export default InputField;