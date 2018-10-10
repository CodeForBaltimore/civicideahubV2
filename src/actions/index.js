export const SUBMIT_IDEA = 'SUBMIT_IDEA';
export const SUBMIT_IDEA_SUCCEEDED = 'SUBMIT_IDEA_SUCCEEDED';
export const SUBMIT_IDEA_FAILED = 'SUBMIT_IDEA_FAILED';
export const TOGGLE_PROCESS_STATUS = 'TOGGLE_PROCESS_STATUS';
export const ADD_IDEA = 'ADD_IDEA'

export function submitIdea(idea) {
  return {
    type: SUBMIT_IDEA,
    idea,
  };
}

export function addIdea (idea){
  return { type: ADD_IDEA, payload: {
      username: "TODO: create username",
      title: idea.title,
      problem: idea.problem,
      potential_solution: idea.potential_solution,
    } 
  };
};

export function toggleProcessStatus (statusBool) {
  return { 
    type: TOGGLE_PROCESS_STATUS, 
    payload: statusBool 
  };
};
// var ideaHubState = {
//   entries: entriesRetrieved,
//   config:{
//     loading: false
//   }
// };

export function submitIdeaSucceeded(idea) {
  return {
    type: SUBMIT_IDEA_SUCCEEDED,
    idea,
  };
}
