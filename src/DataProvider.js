import React from 'react';

export class DataProvider extends React.Component {
  state = {
    data: [],
    loading: true
  };

  componentDidMount() {
    setTimeout(
      () =>
        fetch(this.props.url)
          .then(data => data.json())
          .then(data => {
            this.setState({ data, loading: false });
          }),
      1000
    );
  }

  render() {
    return this.props.children(this.state);
  }
}
