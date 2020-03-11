import React from 'react';
import { addGroup, setModalDelete } from '../../redux/reducers/listGroupReducer';
import { NavLink } from 'react-router-dom';
import Form from '../Form';

const Group = ({id, title, deleteGroup}) => {
  return(
    <div className="list__item">
      <NavLink className="item-choice item-choice--link" to={`/list/${id}`}>
        <div className="item-choice__title">{title}</div>
        <button onClick={e => deleteGroup(e, id, title)} className="item-choice__btn-delete">&times;</button>
      </NavLink>
    </div>
  )
}

const Groups = ({groups, dispatch}) => {

  const clickDeleteGroup = (e, id, title) => {
    e.preventDefault();
    // dispatch(deleteGroup(id));
    dispatch(setModalDelete({
      idGroup: id,
      title: title
    }))
  }

  return(
    <div>
      <Form dispatch={dispatch}
            actionCreater={addGroup}/>
      <div className="list">
        {groups.map(g => (<Group deleteGroup={clickDeleteGroup} key={g.id} id={g.id} title={g.title} />))}
      </div>
    </div>
  )
}

export default Groups;