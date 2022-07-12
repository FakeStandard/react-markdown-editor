import React from "react";
import '../styles/preview.css'
import { marked } from 'marked';


interface IProps {
    theme: string
    content: string
}

const Preview: React.FC<IProps> = ({ theme, content }) => {
    const styles = `content ${theme}`
    const formattedContent = marked.parse(content)

    return (
        <div className="preview column">
            <h2>Preview</h2>
            <div
                className={styles}
                dangerouslySetInnerHTML={{ __html: formattedContent }} />
        </div>
    )
}

export default Preview