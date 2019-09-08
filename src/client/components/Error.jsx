import React from 'react';
export default class Error extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="container">
        404 - Page not Found
    </div>
    );
  }
}

Error.propTypes = {
};
