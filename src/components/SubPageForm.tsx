import React from 'react'

import { SubPageHandler } from '../containers/SubPageContainer';

import { TextInput } from './TextInput';
import { RadioInput } from './RadioInput';
import { ShowState } from './ShowState';
import { SubmitButton } from './SubmitButton';

interface OwnProps {
  inputValue: string
  selectedValue: string
  clickCount: number
}

type Props = OwnProps & SubPageHandler

export class SubPageForm extends React.Component<Props> {
  render(){
    return(
      <div>
        Sub
        <React.Fragment>
          <TextInput title='入力' inputValue={this.props.inputValue} onChangeValue={this.props.handleOnChangeValue}/>
          <RadioInput title='ラジオ' selectedValue={this.props.selectedValue} onChangeValue={this.props.handleOnSelectValue}/>
          <SubmitButton title='Click me' onClick={this.props.handleOnClick}/>
          <ShowState inputValue={this.props.inputValue} selectedValue={this.props.selectedValue} clickCount={this.props.clickCount}/>
        </React.Fragment>
      </div>
    )
  }
}