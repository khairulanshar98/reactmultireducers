import * as React from 'react'
import { ReducerAction } from '../index';


export function increase(value: number): any {
    return async (dispatch: React.Dispatch<ReducerAction>) => {
        await dispatch({ type: "++", data: value + 1 })
    }
}

export function decrease(value: number): any {
    return async (dispatch: React.Dispatch<ReducerAction>) => {
        await dispatch({ type: "--", data: value - 1 })
    }
}