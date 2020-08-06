import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface DetailComponentOwnProps {
  data: string[]
}

type AllTheProps = RouteComponentProps & DetailComponentOwnProps

class DetailComponent extends React.Component<AllTheProps> {
  render() {
    return <div>{this.props.location}</div>
  }
}

export default DetailComponent
