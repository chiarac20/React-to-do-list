import { useContext } from 'react';

import { Context } from '../../Context';

export function TasksList() {
    const context=useContext(Context);

    function removeTask(taskToRemove) {
        const updatedTasksList=context.tasks.filter((task) => {
            return taskToRemove !== task;
        })
        context.setTasks(updatedTasksList);
    }

    function changeStatus (taskToUpdate) {
        const updatedTasks=context.tasks.map(task => 
            taskToUpdate!==task ? task : {name:task.name, checked:!task.checked}
        )
        context.setTasks(updatedTasks);
    }

    return <div>
        <ul>
        {!context.showDone && !context.showToDo && context.tasks.map((task, key) =>
            <li key={key}>
                <input type='checkbox' checked={task.checked} onChange={() => changeStatus(task)}></input>
                {task.name}
                <button onClick={() => removeTask(task)}>delete</button>
            </li>  
        )}
        {context.showDone && context.tasks.filter(task => task.checked)
            .map((task, key) => 
            <li key={key}>
                <input type='checkbox' checked={task.checked} onChange={() => changeStatus(task)}></input>
                {task.name}
                <button onClick={() => removeTask(task)}>delete</button>
            </li>  
            )}
        {context.showToDo && context.tasks.filter(task => !task.checked)
            .map ((task, key) => 
            <li key={key}>
                <input type='checkbox' checked={task.checked} onChange={() => changeStatus(task)}></input>
                {task.name}
                <button onClick={() => removeTask(task)}>delete</button>
            </li> 
            )}
        </ul>
    </div>
}