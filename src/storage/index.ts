export interface counter {
    value: number
}
export const initialData: counter = { value: 0 };
export interface ReducerAction {
    type: string
    data: any
}

