import React from 'react';
import Entries from "./Entries.react.jsx"

const CoreContent = (props) => {
    return (
        <div>
            <Entries entries={props.entries} />
        </div>
    );
}

export default CoreContent;
