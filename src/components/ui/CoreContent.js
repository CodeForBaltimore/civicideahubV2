import React from 'react';
import Entries from "./Entries";
import IdeaForm from "./IdeaForm";

const CoreContent = (props) => {
  return (
    <div>
      <IdeaForm addEntry={props.addEntry}/>
      <Entries entries={props.entries} />
    </div>
  );
}

export default CoreContent;
