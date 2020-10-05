import React, { useEffect , useRef } from 'react';
import { useField } from 'unform'

// import { Container } from './styles';

function Input({name, value , disabled, functionEdit,  indexList ,...rest}) {

 const inputRef = useRef(null)
    const { fieldName , registerField, defaultValue, error } = useField(name)
  //field name o nome final do nosso input
  //register = func q vai dispara assim q for montado em tela

  useEffect(()=>{
    registerField({
        name:fieldName,
        ref: inputRef.current,
        path:'value'
    })

  },[fieldName, registerField]);

  return (
    <input ref={inputRef} defaultValue={defaultValue} {...rest} value={value} disabled={disabled} onChange={(event) => functionEdit?functionEdit(event , indexList):null}/>
    );
}

export default Input;
