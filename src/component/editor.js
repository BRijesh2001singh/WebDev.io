import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
const Editor = (props) => {
    const { displayname, language, value, onChange } = props;
    const [open, setopen] = useState(true);
    function handleChange(editor, data, value) {
        onChange(value);
    }
    return (
        <div className={`editor-container ${open ? '' : "collapsed"}`}>
            <div className='editor-title'>{displayname}
                <button onClick={() => setopen(prevopen => !prevopen)}><FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} /></button>
            </div>
            <Controlled
                onBeforeChange={handleChange}
                value={value}
                className='code-mirror-container'
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                }}
            />
        </div>
    )
}

export default Editor
