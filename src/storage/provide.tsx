
import * as React from 'react'
import { counter, initialData, ReducerAction } from './index';
import { reducer1 } from './reducers/increase';
import { reducer2 } from './reducers/decrease';

const reducer = (state: counter, action: ReducerAction): counter => {
    var data: counter = { ...state };
    data = reducer1(data, action)
    data = reducer2(data, action)
    return data;
}

export const ctx = React.createContext<[counter, React.Dispatch<ReducerAction>]>([initialData, (() => 0)]);

export const Provider: React.FC = (props) => {
    const [store, dispatch] = React.useReducer(reducer, initialData);
    const [oldStore, setOldStore] = React.useState<counter | undefined>(undefined);
    React.useEffect(() => {
        if (oldStore) {
            console.log("OLD>>", oldStore)
            console.log("NEW>>", store)
            setOldStore(store);
        } else {
            setOldStore(initialData);
        }
    }, [store]);
    return (
        <ctx.Provider value={[store, dispatch]} >
            {props.children}
        </ctx.Provider>
    );
}