import { select, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import API from '../util/api'; //TODO:  Finish out what this is supposed to be 
import {
  SUBMIT_IDEA,
  SUBMIT_IDEA_SUCCEEDED, //What purpose do the name constants serve?
  submitIdeaSucceeded,
  toggleProcessStatus,
  addIdea
} from '../actions'; 
//meetings to get government opinion
//
function* submitIdea({payload}) {
  try {
    // const token = yield select(getToken);
    yield put(toggleProcessStatus(true)); //Todo: add spinner

    yield put(addIdea(payload));

    //Artificial delay simply for mocking db roudtrip process
    const delay = (ms) => new Promise(res => setTimeout(res, ms))
    yield delay(1000);

    yield put(toggleProcessStatus(false));

    // yield put(submitIdeaSucceeded({
    //   id: 44, //Todo: Databse needs to create this
    //  // title: title,
    //  // problem: problem,
    //  // potential_solution: solution,
    //   user: 'username of submitted user'
    // }));

  } catch (e) {
    // handle failure
  }
}

//function* processIdea()

export default function* rootSaga() {
  yield takeEvery(SUBMIT_IDEA, submitIdea);
}
