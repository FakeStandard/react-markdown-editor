import React from "react";
import '../styles/main.css'
import Editor from "./Editor";
import Preview from "./Preview";

const Main = () => {
    return (
        <main className="main">
            <Editor />
            <Preview />
        </main>
    )
}

export default Main