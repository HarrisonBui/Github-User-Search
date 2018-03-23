import React from "react";
import SearchResults from './SearchResults'
import {FormGroup, FormControl, Glyphicon} from 'react-bootstrap'
import {connect} from "react-redux";

import {getUsers} from '../actions/UsersActions'

export class Searchbar extends React.Component {

  constructor(props) {
    super(props)
    
  }

  render() {
console.log(this.props.users);
    return (
      <div className="SearchbarComponent">
        <FormGroup >
          <FormControl type="text" placeholder="Search Users" ref="user_input" onChange={(e)=>{this.props.onChangeHandle(e)}}/>
          <FormControl.Feedback>
            <Glyphicon glyph="search"/>
          </FormControl.Feedback>
        </FormGroup>
        <SearchResults Users={this.props.users.users} cursor={0}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {users: state.UsersThunkReducer}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeHandle: (event) => {
      dispatch(getUsers(event.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
