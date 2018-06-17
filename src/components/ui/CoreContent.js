import React from 'react';
import Entries from "./Entries";
import IdeaForm from "./IdeaForm";
import {Route} from 'react-router-dom'

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const CoreContent = (props) => {

  return (
    <main>
     <switch>
         <Route path='/' render={(p) => (<Entries {...p} entries={props.entries} />)}/>
         <Route path='/ideaForm' component={IdeaForm}/>
         <Route path='/about' component={About} />
      </switch>  
    </main>
  );
}

export default CoreContent;
