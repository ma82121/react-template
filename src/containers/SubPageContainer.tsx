import { connect } from "react-redux";
import { Dispatch } from "redux";
import { aaActions } from "../actions/aaActions";
import { SubPageForm } from "../components/SubPageForm";
import { AppState } from "../store";

export interface SubPageHandler {
  handleOnChangeValue(value: string): void
  handleOnSelectValue(value: string): void
  handleOnClick(): void
}

const mapStateToProps = (appState: AppState) => {
  return {
    inputValue: appState.state.inputValue,
    selectedValue: appState.state.selectedValue,
    clickCount: appState.state.clickCount
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleOnChangeValue: (value: string) => { dispatch(aaActions.updateTextInputValue(value)) },
    handleOnSelectValue: (value: string) => { dispatch(aaActions.updateSelectedValue(value)) },
    handleOnClick: () => { dispatch(aaActions.updateClickCount()) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SubPageForm)