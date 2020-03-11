import React from 'react';
import { setModalResult } from '../../redux/reducers/listGroupReducer';

export const Modal = ({text, dispatch}) => {

  const closeModal = () => {
    dispatch(setModalResult(null));
  }

  return(
    <div onClick={closeModal} className="modal">
      <div className="modal__inner">
        <div className="modal__text">
          {text}
        </div>
        <div className="modal__close-container">
          <button onClick={closeModal} className="modal__close">
            OK
          </button>
        </div>
      </div>
    </div>
  )
}