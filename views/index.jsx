var React = require('react');

class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
        <br></br>
        <Link to='/auth/google'>Login</Link>
      </div>
    );
  }
}

module.exports = HomeComponent;
