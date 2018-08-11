import camelCase from 'camel-case';


//Why isnt SubmitIdea below
const REDUCERS = {
  submitIdea: (entries, payload) => (
    entries.concat({
      id: entries.sort((entryA, entryB) => entryA.id < entryB.id)[0].id + 1,
      username: payload.username,
      title: payload.title,
      problem: payload.problem,
      potential_solution: payload.solution
      ,//TODO: Finish datecreatedAt: Date()
    })
  ),
  addAllIdeas: (state, payload) => (
    payload.entries
  ),
  updateIdea: (entries, payload) => {
    const index = entries.findIndex(entry => entry.id === payload.id);
    const newEntries = entries.slice(0, index).concat(payload).concat(entries.slice(index + 1));
    return newEntries;
  },
};

const initialEntries = [];

export default function (state = initialEntries, { type, payload }) {
  const reducer = REDUCERS[camelCase(type)];
  return reducer ? reducer(state, payload) : state;
}
