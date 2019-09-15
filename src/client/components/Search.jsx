import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Form } from 'react-bootstrap';
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.renderSearchBar = this.renderSearchBar.bind(this);
    this.onSearch$ = new Rx.Subject();
  }
  componentDidMount() {
    this.subscription = this.onSearch$
      .debounceTime(400)
      .subscribe(debounced => {
        this.props.searchActivities(debounced);
      });
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  renderSearchBar() {
    return <Form className="container">
      <Form.Group controlId="formBasicEmail" className="mt-4">
        <Form.Control type="text"
          placeholder="Search"
          className="search-box"
          onChange={(e) => this.onSearch$.next({ searchText: e.target.value })} />
      </Form.Group>
    </Form>;
  }
  render() {
    return this.renderSearchBar();
  }
}

Search.propTypes = {
  searchActivities: PropTypes.func,
};
