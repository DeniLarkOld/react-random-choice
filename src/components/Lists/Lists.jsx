import React from "react";
import { useParams } from "react-router-dom";
import Form from "../Form";
import { addList, setModalDelete } from "../../redux/reducers/listGroupReducer";
import RandomButton from "../RandomButton";

const ListItem = ({ id, title, deleteList }) => {

  return (
    <div className="list__item">
      <div className="item-choice">
        <div className="item-choice__title">{title}</div>
        <button onClick={() => deleteList(id, title)} className="item-choice__btn-delete">&times;</button>
      </div>
    </div>
  );
};

const Lists = ({ lists, dispatch }) => {
  let { idGroup } = useParams();
  idGroup = parseInt(idGroup);

  let listsTarget = lists.filter(l => l.parentId === idGroup);

  const clickDeleteList = (id, title) => {
    dispatch(setModalDelete({
      idList: id,
      title: title
    }))
  }

  return (
    <div>
      <Form dispatch={dispatch} actionCreater={addList} parentId={idGroup} />
      <div className="list">
        {listsTarget.map(l => (
          <ListItem deleteList={clickDeleteList} key={l.id} id={l.id} title={l.title} />
        ))}
      </div>
      <RandomButton lists={listsTarget} dispatch={dispatch} />
    </div>
  );
};

export default Lists;
