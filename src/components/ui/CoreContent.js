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
         <Route exact path='/ideaForm' render={(p) => (<IdeaForm />)} />
         <Route exact path='/ideaForm/:id/' render={(props) => (<IdeaForm id={props.match.params.id} />)} />
         <Route path='/about' component={About} />
      </switch>
    </main>
  );
}

export default CoreContent;
