import React from "react";
import { Link, Outlet } from "react-router-dom";

function MessageBoard() {
    return (
        <div className="message-board-container">
            <Link to="/1">
                <h2 className="message-board-header-link">Message Board</h2>
            </Link>
            <Outlet />
        </div>
    );
}

export default MessageBoard;
