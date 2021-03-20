import React from 'react'

import { AboutPageHandler } from '../containers/AboutPageContainer';

interface OwnProps {
  inputValue: string
}

type Props = OwnProps & AboutPageHandler

export class AboutPageForm extends React.Component<Props> {
  render(){
    return(
      <div>
        about
      </div>
    )
  }
}