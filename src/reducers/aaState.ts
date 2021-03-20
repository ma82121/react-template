import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { aaActions } from '../actions/aaActions';

export interface State {
  inputValue: string
  selectedValue: string
  clickCount: number
}

export const initialState: State = {
  inputValue: '',
  selectedValue: '',
  clickCount: 0
}

export const Reducer = reducerWithInitialState(initialState)
  .case(aaActions.updateTextInputValue, (state, inputValue) => {
    return { ...state, inputValue }
  })
  .case(aaActions.updateSelectedValue, (state, selectedValue) => {
    return { ...state, selectedValue }
  })
  .case(aaActions.updateClickCount, (state) => {
    return { ...state, clickCount: state.clickCount + 1 }
  })