import React from "react";
import SelectedResult from './SelectedResult'

export default class SearchResults extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cursor: this.props.cursor
    }

    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)

  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      cursor: this.props.cursor
    }
  }

  handleKeyDown(e) {
    const {cursor} = this.state
    const users = this.props.Users

    if (e.keyCode === 38 && cursor > 0) {
      this.setState(prevState => ({
        cursor: prevState.cursor - 1
      }))
    } else if (e.keyCode === 40 && cursor < users.length - 1) {
      this.setState(prevState => ({
        cursor: prevState.cursor + 1
      }))
    }
  }

  render() {

    const users = this.props.Users
    const {cursor} = this.state

    return (
      <div className="SearchResults">
        {users.length > 0 && <div>
          <div className="Header">
            <p>Github Users</p>
          </div>
          <div className="resultsBody">
            {users.map((user, index) => {
              return (<SelectedResult key={index} user={user} highlighted={cursor === index}/>);
            })}
          </div>
        </div>}
      </div>
    );
  }
}
