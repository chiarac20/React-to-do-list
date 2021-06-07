import { useContext } from 'react';

import { Context } from '../../Context';

export function TaskCreation () {
    const context=useContext(Context);

    function addTask(evt) {
        evt.preventDefault();
        context.setTasks([...context.tasks, {name:context.inputValue, checked:false}]);
        context.setInputValue('');
    }

    function onChangeInput (evt) {
        context.setInputValue(evt.target.value);
    }

    return <form onSubmit={addTask}>
        <input 
            type='text' 
            placeholder='New task' 
            value={context.inputValue} 
            onChange={ (evt) => onChangeInput(evt)} 
        />
        <button disabled={!context.inputValue}>Add</button>
    </form>
}