import React, {Component} from "react";
import './taskItem.scss';


class TaskItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            done: ''
        }
    }
    

    render() {
        const {title, onDelete, doneTask} = this.props;
        const {done} = this.state;
        const className = "to-do__text" + (done ? ' to-do__done' : '')

        return (
            <li className="to-do__list-li">
                <label className="to-do__checkbox">
                    <input className="to-do__checkbox-input" onChange={doneTask} type="checkbox" checked={done}/>
                    <span className="to-do__checkbox-elem"></span>
                    <button className="to-do__checkbox-btn" onClick={onDelete}>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.31487" y1="0.954676" x2="19.8513" y2="18.6839" stroke="#A71717"/>
                        <line y1="-0.5" x2="25.65" y2="-0.5" transform="matrix(-0.722667 0.691197 0.691197 0.722667 19.5057 1.31601)" stroke="#A71717"/>
                        </svg>
                    </button>
                </label>
                <p className={className}>{title}</p>
            </li>

        );
    }
    
}


export default TaskItem;



