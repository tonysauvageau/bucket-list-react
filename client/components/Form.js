import React from 'react';

const Form = ({ add, placeholder }) => {
  let input;

  return (
    <form
      onSubmit={ e => {
        e.preventDefault();
        add(input.value)
        input.value = null;
      }}
    >
      <input 
        placeholder={placeholder}
        ref={ n => input = n }
        required
      />
    </form>
  )

}

export default Form;
