import { memeApi } from "../apis/memeApi"
import {call,takeLatest,put} from 'redux-saga/effects'
import { FETCH_MEME } from "../actions/types"

export function* fetchMemeWorker(action){
console.log(action)
try{
const response = yield call(memeApi)
}catch(err){
    console.log(err)
}
}

export function* watchFetchMemeWorker(){
    yield takeLatest(FETCH_MEME,fetchMemeWorker)
}