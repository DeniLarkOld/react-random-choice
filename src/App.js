import React from 'react';
import Groups from './components/Groups/Groups';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Lists from './components/Lists/Lists';
import { Header } from './components/Header';
import { Modal } from './components/modal-windows/Modal';
import { ModalAccept } from './components/modal-windows/ModalAccept';

function App({state, dispatch}) {

  console.log('state.modalResult', state);

  return (
    <BrowserRouter>
      <Header />
      <div className="main container">
        <Switch>
          <Route path="/" exact
                render={() => <Groups 
                                    groups={state.groups}
                                    dispatch={dispatch}/>}/>
          <Route path="/list/:idGroup"
                render={() => <Lists
                                    lists={state.lists}
                                    dispatch={dispatch}/>}/>
        </Switch>
        
      </div>
      {state.modalResult &&
        <Modal 
          text={state.modalResult}
          dispatch={dispatch}
        />
      }
      {state.modalDelete &&
        <ModalAccept
          infoObj={state.modalDelete} 
          dispatch={dispatch}
        />
      }
    </BrowserRouter>
  );
}

export default App;
