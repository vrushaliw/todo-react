import React from "react"

class SmallItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.forceUpdate();
  }

  componentDidMount() {
    this.props.model.on('change', this.handleChange);
  }

  componentWillUnmount() {
    this.props.model.off('change', this.handleChange);
  }

  render () {
    return (
      this.props.model.metadata.columns.map(function(column){
        return (<React.Fragment>
          {column}: {this.props.model.get(column)}
        </React.Fragment>)
      }.bind(this))

    );
  }
};
export {SmallItem};
