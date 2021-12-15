import React from "react";
import './board.scss'


const Board = () => {

    return (
        <div className="to-do__board">
            <p className="to-do__board-list-items" data-items="0">1item left</p>
            <label className="to-do__board-check">
                <button className="to-do__board-btn btn">All</button>
                <button className="to-do__board-btn btn to-do__active">Active</button>
                <button className="to-do__board-btn btn">Completed</button>
            </label>
            <div className="to-do__board-list-btn">
                <button className="to-do__board-btn btn">Clear completed</button>
            </div>
        </div>
    )
}



export default Board;