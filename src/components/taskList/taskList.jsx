import React from "react";
import TaskItem from "../taskItem/taskItem";
import './taskList.scss';

const TaskList = ({data, onDelete, doneTask}) => {

    const elements = data.map(item => {
        const {id, done, ...itemProps} = item;
        return (
            <TaskItem 
                key={id} 
                {...itemProps}
                doneTask={() => doneTask(done)}
                onDelete={() => onDelete(id)}
            />
        )
    })

    return (
        <div className="to-do__tasks__item">
            <ul className="to-do__list">
                {elements}
            </ul>
        </div>
    );
}


export default TaskList;



