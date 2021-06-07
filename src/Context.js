import { useState, createContext } from 'react';


export const Context=createContext();

export function ContextWrapper({children}) {
    const [inputValue, setInputValue]=useState('');
    const [tasks, setTasks]=useState([]);
    const [showDone, setShowDone]=useState(false);
    const [showToDo, setShowToDo]=useState(false);

    const contextValue={
        inputValue,
        setInputValue,
        tasks,
        setTasks,
        showDone, 
        setShowDone,
        showToDo, 
        setShowToDo
    }

    return <Context.Provider value={contextValue}>
        {children}
    </Context.Provider>
}


