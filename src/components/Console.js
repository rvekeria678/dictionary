import React from "react";

export default function Console() {
    function getWord() {
        console.log("word..")
    }

    return (
        <div className="console">
            <h1 className="console--title">Start Searching Today!</h1>
            <div className="console--form">
                <input className="console--input" placeholder="Type in a word"></input>
                <button className="console--button" onClick={getWord()}>Define</button>
            </div>
        </div>
    );
}