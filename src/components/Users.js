import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    debugger
    return (
      <div>
        <ul>
          Users! Total: {this.props.userCount}
          {this.props.users.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {users: state.users,
          userCount: state.users.length
        }
}

export default connect(mapStateToProps)(Users)
