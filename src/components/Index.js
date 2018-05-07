import React from 'react';
import {SmallItem} from './SmallItem'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      collection: props.collection
    }

  }

  componentDidMount() {
    this.props.collection.fetch().done(function(){
      // this.setState((prevState, props) => {
      //   return {count: prevState.count + 1};
      // });

    }.bind(this));

  };

  componentWillUnmount() {
    this.props.collection.on("change", this.forceUpdate);
    this.props.collection.on("add", this.forceUpdate);
    this.props.collection.on("remove", this.forceUpdate);
    this.props.collection.on("reset", this.forceUpdate);
  };

  render () {
    var rows = this.state.collection.map(function(record, i) {
          return <SmallItem model={record} />;
      });
    return <div>{rows}</div>;
  };
};

export default Index
