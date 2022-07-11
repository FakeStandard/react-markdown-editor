import React, { useState } from "react";
import '../styles/main.css'
import Editor from "./Editor";
import Preview from "./Preview";
import '../styles/shared/index.css'

interface IProps {
    theme: string
}

const Main: React.FC<IProps> = ({ theme }) => {
    const [content, setContent] = useState<string>(
        `
        # H1
        ## H2
        ### H3
        #### H4
        ##### H5

        __bold__
        **bold**
        _italic_
        `
    )

    return (
        <div className="row main">
            <Editor />
            <Preview />
        </div>
    )
}

export default Main