import React from 'react';
import PropTypes from 'prop-types';

export default class Ranking extends React.Component{
  componentWillMount(){
    this.props.onMount(this.props.categoryID);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.categoryID !== nextProps.categoryID){
      this.props.onUpdate(nextProps.categoryID);
    }
  }

  render(){
    const { category, ranking, error } = this.props;
    return (
      <div>
        <h1>{
          typeof category !== 'undefined'
            ? `${category.name}のランキング`
            : ''
        }</h1>
        {(() => {
          if(error){
            return <p>Error</p>;
          }else if(typeof ranking === 'undefined'){
            return <p>Now Loading...</p>;
          }else{
            return (
              <ol>
                {ranking.map(item => (
                  <li key={`ranking-item-${item.code}`}>
                    <img alt={item.name} src={item.imageUrl} />
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              </ol>
            );
          }
        })()}
      </div>
    );
  }
}

Ranking.propTypes = {
  categoryID: PropTypes.string.isRequired,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};
Ranking.defaultProps = {
  categoryID: '1'
}
