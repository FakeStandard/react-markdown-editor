import React from "react";
import '../styles/editor.css'
import '../styles/shared/index.css'

interface IProps {
    theme: string
    content: string
    setContent: (value: string) => void
}

const Editor: React.FC<IProps> = ({ theme, content, setContent }) => {
    return (
        <div className="editor column">
            <h2 className="h2">Editor</h2>
            <textarea
                className={theme}
                rows={9}
                value={content}
                onChange={(e) => setContent(e.target.value)} />
        </div>
    )
}

export default Editor