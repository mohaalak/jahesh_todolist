import React from 'react';
import { DataProvider } from './DataProvider';

export const Fetch = (url, Component) =>
  class extends React.Component {
    state = {
      data: [],
      loading: true
    };

    componentDidMount() {
      setTimeout(
        () =>
          fetch(url)
            .then(data => data.json())
            .then(data => {
              this.setState({ data, loading: false });
            }),
        1000
      );
    }

    render() {
      return (
        <Component
          loading={this.state.loading}
          data={this.state.data}
        ></Component>
      );
    }
  };
