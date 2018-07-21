import React from 'react';
import Entries from "./Entries";
import IdeaForm from "./IdeaForm";
import {Route} from 'react-router-dom'
import IdeaCard from './IdeaCard';

//Fix date on entries 
//API ideas - Elixir Phoenix   vs.   Express JS
//Host on Heroku 

const About = () => (
  <div>
    <h1 style={{ padding: 100 }}>About</h1>
  </div>
);

const CoreContent = (props) => {

  return (
    <main>
     <switch>            
              <Route exact path='/' render={(p) => (<Entries entries={props.entries} />)} />
              <Route path='/ideaForm/:id' render={(p) => (<IdeaForm addEntry={props.addEntry} idea={IdeaCard} />)} />        
         <Route path='/about' component={About} />
      </switch>  
    </main>
  );
}

export default CoreContent;
