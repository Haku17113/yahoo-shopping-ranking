import React from 'react';
import PropTypes from 'prop-types';

export default class Ranking extends React.Component{
  componentWillMount(){
    this.props.onMount(this.props.categoryID);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.categoryID !== nextProps.categoryID){
      this.props.onUpdate(this.props.categoryID);
    }
  }

  render(){
    return (
      <div>
        <h1>Ranking</h1>
        <p>カテゴリーID: {this.props.categoryID}</p>
      </div>
    );
  }
}

Ranking.propTypes = {
  categoryID: PropTypes.string,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};
Ranking.defaultProps = {
  categoryID: '1'
}
