//for one single form item component is weast 

function Input({type,className,placeholder}) {
    return ( 
        <>
            <input type={type} className={className} placeholder={placeholder} />
        </>
     );
}

export default Input;