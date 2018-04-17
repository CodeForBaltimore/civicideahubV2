import React from 'react';
import Entries from "./Entries.react.jsx"
import IdeaForm from "./IdeaForm.react.jsx"

const CoreContent = (props) => {
    return (
        <div>
            <IdeaForm />
            <Entries entries={props.entries} />
        </div>
    );
}

export default CoreContent;
