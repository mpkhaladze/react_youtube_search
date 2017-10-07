import { FETCH_WEAHER } from '../actions/index'

export default function (state = [], action) {
	switch(action.type){
		case FETCH_WEAHER:
			return [action.payload.data, ...state]
	}
	return state
}