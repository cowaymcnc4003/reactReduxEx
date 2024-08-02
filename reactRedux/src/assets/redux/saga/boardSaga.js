import { put, takeLatest } from "redux-saga/effects";
import { resetBoard, resetBoardSagaFail, resetBoardSagaRequested, resetBoardSagaSucceede } from "../slices/boardSlice";
import { resetTodo } from "../slices/todoSlice";

function* resetBoardSage() {
  try {
    yield put(resetBoard());
    yield put(resetTodo());
    yield put(resetBoardSagaSucceede('succeede'));
  } catch (error) {
    yield put(resetBoardSagaFail('error'));
  }
}

export function* saga() {
  yield takeLatest(resetBoardSagaRequested, resetBoardSage);
}