import React from 'react';
import { Alert } from 'react-bootstrap';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="text-center">
      <Alert >
        <Alert.Heading>© 2018 -2019 South Indian Trekkers </Alert.Heading>
        <p>
                We Connecting Souls, let's explore the western ghats and it's beauty
        </p>
      </Alert>
    </div>;
  }
}

Footer.propTypes = {
};
