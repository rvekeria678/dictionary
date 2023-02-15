import React from "react";

export default function NavigationBar() {
    return (
        <nav className="nav">
            <div>
                <h1 className="nav--brand">Dictionary</h1>
            </div>
            <ul className="nav--items">
                <li>Word of the Day</li>
                <li>About</li>
            </ul>
        </nav>
    );
}