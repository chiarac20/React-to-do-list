import './App.css';


import { ContextWrapper } from './Context';

import { TaskCreation } from './Components/TaskCreation/TaskCreation';
import { TasksList } from './Components/TasksList/TasksList';
import { ShowButtons } from './Components/ShowButtons/ShowButtons';


function App() {

  return <ContextWrapper>
    <h1>TO DO LIST</h1>
    <TaskCreation />
    <ShowButtons />
    <TasksList />
  </ContextWrapper>
}

export default App;