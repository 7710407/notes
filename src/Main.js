import React, { lazy } from 'react'

const Main = ({ activeNote, onUpdateNote }) => {
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now()
        })
    }
    
    if (!activeNote) return <div className="no-active-note">No Active Note</div>;
    return (
        <div className='app-main'>
            <div className='app-main-note-edit'>
                <input
                    type='text'
                    id="title"
                    value={activeNote.title}
                    onChange={(e) => onEditField("title", e.target.value)}
                    autoFocus
                    />
                <textarea
                    id='body'
                    placeholder='Write your note here...'
                    value={activeNote.body}
                    onChange={(e) => onEditField("body", e.target.value)}
                />
            </div>
            <div className='app-main-note-preview'>
                    <h1 className='preview-title'>{activeNote.title}</h1>
                    
                    <h1 className='markdown-preview'>{activeNote.body}</h1>
            </div>
        </div>
    )
}

export default Main