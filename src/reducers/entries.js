import camelCase from 'camel-case';

const REDUCERS = {  //All methods below return the new "state" of the store in one statement
  // submitIdea: (entries, payload) => (
  //   //Append new idea to existing array
  //   entries.concat({
  //     id: entries.sort((entryA, entryB) => entryA.id < entryB.id)[0].id + 1,
  //     username: payload.username,
  //     title: payload.title,
  //     problem: payload.problem,
  //     potential_solution: payload.solution,
  //     //TODO: Finish datecreatedAt: Date()
  //   })
  // ),
  submitIdea: (submitedIdeaHubState, payload) => {

    var newEntries = submitedIdeaHubState.entries.concat({
      id: submitedIdeaHubState.entries.sort((entryA, entryB) => entryA.id < entryB.id)[0].id + 1,
      username: payload.username,
      title: payload.title,
      problem: payload.problem,
      potential_solution: payload.solution,
      //TODO: Finish datecreatedAt: Date()
    })

    var newState = {...submitedIdeaHubState,
      entries: newEntries
    };

    return newState;
  },

  addAllIdeas: (entries, payload) => {
    return payload.initialSetup;
  },

  updateIdea: (updatedIdeaAndHubState, payload) => {

    const index = updatedIdeaAndHubState.entries.findIndex(entry => entry.id === payload.id);
    const newEntries = updatedIdeaAndHubState.entries.slice(0, index).concat(payload).concat(updatedIdeaAndHubState.entries.slice(index + 1));

    var newState = {...updatedIdeaAndHubState,
      entries: newEntries
    };

    return newState;
  },
};

const ideaHubState = {
  entries: [],
  config:{}
};

export default function (state = ideaHubState, { type, payload }) {
  const reducer = REDUCERS[camelCase(type)];
  return reducer ? reducer(state, payload) : state;
}
