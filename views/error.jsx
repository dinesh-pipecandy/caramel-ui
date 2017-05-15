var React = require('react');

class ErrorMessage extends React.Component {
  render() {
    return <div>Errorx {this.props.error}</div>;
  }
}

module.exports = ErrorMessage;
