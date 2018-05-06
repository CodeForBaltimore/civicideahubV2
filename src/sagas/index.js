import { select, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import API from '../util/api';
import {
  SUBMIT_IDEA,
  SUBMIT_IDEA_SUCCEEDED,
  submitIdeaSucceeded,
} from '../actions';

function* submitIdea({ title, problem, solution }) {
  try {
    // const token = yield select(getToken);

    yield put(submitIdeaSucceeded({
      id: 44,
      title: title,
      problem: problem,
      potential_solution: solution,
      user: 'username of submitted user'
    }));

  } catch (e) {
    // handle failure
  }
}

export default function* rootSaga() {
  yield takeEvery(SUBMIT_IDEA, submitIdea);
}
