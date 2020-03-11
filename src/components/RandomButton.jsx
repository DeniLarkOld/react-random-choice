import React from 'react';
import { setModalResult } from '../redux/reducers/listGroupReducer';

const RandomButton = ({lists, dispatch}) => {
  const pressBtnRandom = () => {
    let index = Math.floor(Math.random() * lists.length);
    dispatch(setModalResult(lists[index].title));
  }

  if(lists.length === 0) {
    return null;
  }

  return(
    <button className="btn-random" onClick={pressBtnRandom}>Случайный выбор</button>
  )
}

export default RandomButton;