import React, { Component } from 'react'
import { connect } from 'react-redux'


class Users extends Component {

  renderUsers() {
    return this.props.users.map(user => {
      return (
        <li key={user.username}>
          <div>{user.username}</div>
          <div>{user.hometown}</div>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderUsers()}
        </ul>
        <h3>Total Users: {this.props.userCount}</h3>
      </div>
    )
  }
}

const mapStateToProps = state => ({ users: state.users, userCount: state.users.length })

export default connect(mapStateToProps)(Users)
