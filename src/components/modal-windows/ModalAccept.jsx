import React from 'react';
import { setModalDelete, deleteGroup, deleteList } from '../../redux/reducers/listGroupReducer';

export const ModalAccept = ({infoObj, dispatch}) => {

  const text = `Вы уверенны, что хотите удалить ${infoObj.title}`;
  console.log('infoObj', infoObj)

  const closeModal = () => {
    dispatch(setModalDelete(null));
  }

  const pressYes = () => {
    if(infoObj.idGroup) dispatch(deleteGroup(infoObj.idGroup));
    if(infoObj.idList) dispatch(deleteList(infoObj.idList));
  }

  return(
    <div onClick={closeModal} className="modal">
      <div className="modal__inner">
        <div className="modal__text">
          {text}
        </div>
        <div onClick={pressYes} className="modal__close-container">
          <button className="modal__close">
            Да
          </button>
          <button onClick={closeModal} className="modal__close">
            Нет
          </button>
        </div>
      </div>
    </div>
  )
}