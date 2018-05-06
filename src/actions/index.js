export const SUBMIT_IDEA = 'SUBMIT_IDEA';
export const SUBMIT_IDEA_SUCCEEDED = 'SUBMIT_IDEA_SUCCEEDED';
export const SUBMIT_IDEA_FAILED = 'SUBMIT_IDEA_FAILED';

export function submitIdea(idea) {
  return {
    type: SUBMIT_IDEA,
    idea,
  };
}

export function submitIdeaSucceeded(idea) {
  return {
    type: SUBMIT_IDEA_SUCCEEDED,
    idea,
  };
}
