import * as React from 'react'
import { ctx } from '../storage/provide'
import { increase, decrease } from '../storage/actions/index';
interface RootProps { compiler: string; framework: string; store: string; }

export const Root: React.FC<RootProps> = (props) => {
    const [store, dispatch] = React.useContext(ctx);
    return (
        <div>
            <h1 style={{ marginBottom: "30px" }}>Counter with {props.compiler}, {props.framework} and {props.store}! <a className="btn btn-primary" target="_blank" href="https://github.com/khairulanshar98/reactmultireducers">source</a></h1>
            <h3>Counter:{store.value}</h3>
            <button onClick={() => {
                increase(store.value)(dispatch)
            }}>+</button>
            <button onClick={() => {
                decrease(store.value)(dispatch)
            }}>-</button>
        </div>
    )
}