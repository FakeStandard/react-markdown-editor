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
        `# H1
## H2
### H3
#### H4
##### H5
###### H6

**bold text**
__bold text__

*italicized text*
_italic text_

---

1. First item
2. Second item
3. Third item

- First item
- Second item
- Third item
`

    )

    return (
        <div className="main row">
            <Editor theme={theme} content={content} setContent={setContent} />
            <Preview theme={theme} content={content} />
        </div>
    )
}

export default Main