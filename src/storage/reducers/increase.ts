import { counter } from '../index'
import { ReducerAction } from '../index'
export const reducer1 = (state: counter, action: ReducerAction): counter => {
    var data: counter = { ...state };
    switch (action.type) {
        case "++":
            data.value = action.data;
            return data;
        default:
            return data
    }
}