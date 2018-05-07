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
    this.props.collection.on("change", function(){
      this.forceUpdate()
    }.bind(this));
    this.props.collection.on("add", function(){
      this.forceUpdate()
    }.bind(this));
    this.props.collection.on("remove", function(){
      this.forceUpdate()
    }.bind(this));
    this.props.collection.on("reset", function(){
      this.forceUpdate()
    }.bind(this));
    this.props.collection.fetch();
  };

  componentWillUnmount() {
    this.props.collection.on("change", function(){
      this.forceUpdate()
    }.bind(this));
    this.props.collection.on("add", function(){
      this.forceUpdate()
    }.bind(this));
    this.props.collection.on("remove", function(){
      this.forceUpdate()
    }.bind(this));
    this.props.collection.on("reset", function(){
      this.forceUpdate()
    }.bind(this));
  };

  render () {
    var rows = this.state.collection.map(function(record, i) {
          return <SmallItem model={record} />;
      });
    return <div>{rows}</div>;
  };
};

export default Index
