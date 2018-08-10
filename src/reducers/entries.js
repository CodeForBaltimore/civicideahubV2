import camelCase from 'camel-case';


//Why isnt SubmitIdea below
const REDUCERS = {
  submitIdeaSucceeded: (state, action) => ({
    ...state, //spread operator allows for entries to state
    entries: [{
      id: action.id,
      username: action.username,
      title: action.title,
      problem: action.problem,
      potential_solution: action.solution
      ,//TODO: Finish datecreatedAt: Date()
    }]
  }),
};

const initialState = {
  entries: [],
};

export default function (state = initialState, { type, ...payload }) {
  const reducer = REDUCERS[camelCase(type)];
  return reducer ? reducer(state, payload) : state;
}
