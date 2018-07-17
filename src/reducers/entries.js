import camelCase from 'camel-case';

const REDUCERS = {
  submitIdeaSucceeded: (state, action) => ({
    ...state,
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
