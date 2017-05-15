var React = require('react');

class ProfileComponent extends React.Component {
  render() {
    var user = this.props.user;
    return (
      <div>
          <p>Hello {user.name} {' '} {user.email} {' '} {user.domain}</p>
          <br></br>
          <a href="/logout">Logout</a>
      </div>
    );
  }
}

module.exports = ProfileComponent;
