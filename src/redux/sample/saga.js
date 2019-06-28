import { all, takeEvery, put, fork } from "redux-saga/effects";
import actions from "./actions";
import { axiosGet } from "../axiosHelper";


export function* sampleStart({ payload} }) {
	try {
		yield put(actions.sampleSuccess(payload));
	} catch (error) {
		console.log(error);
		yield put(actions.sampleError(error.message));
	}
}
export default function* rootSaga() {
	yield all([
		takeEvery(actions.SAMPLE_START, sampleStart),
	]);
}
