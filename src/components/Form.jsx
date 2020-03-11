import React from 'react';

const Form = ({dispatch, actionCreater, parentId}) => {
  const refInputTitleGroup = React.createRef();
  
  const submitForm = e => {
    e.preventDefault();
    let text = refInputTitleGroup.current.value;
    if(text !== '') {
      if(parentId) dispatch(actionCreater(refInputTitleGroup.current.value, parentId));
      else dispatch(actionCreater(refInputTitleGroup.current.value));
      
      refInputTitleGroup.current.value = '';
    } else {
      alert('Введите текст');
    }
  }

  return(
    <form className="form" onSubmit={submitForm}>
      <input placeholder="Введите текст" type="text" name="group-title" ref={refInputTitleGroup}/>
    </form>
  )
}

export default Form;