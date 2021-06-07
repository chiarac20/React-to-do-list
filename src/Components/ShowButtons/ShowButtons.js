import { useContext } from 'react';

import { Context } from '../../Context';

export function ShowButtons () {
    const context=useContext(Context);

    function showAll() {
        context.setShowDone(false);
        context.setShowToDo(false);
    }

    function showDone(){
        context.setShowDone(true);
        context.setShowToDo(false);
    }

    function showToDo(){
        context.setShowToDo(true);
        context.setShowDone(false);
    }
    return <div>
        <button onClick={showAll}>Show All</button>
        <button onClick={showDone}>Show Done</button>
        <button onClick={showToDo}>Show To do</button>
    </div>
}