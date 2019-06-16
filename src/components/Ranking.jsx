import React from 'react';
import PropTypes from 'prop-types';

export default function Ranking({ categoryID }){
  return (
    <div>
      <h1>Ranking</h1>
      <p>カテゴリーID: {categoryID}</p>
    </div>
  )
}

Ranking.propTypes = {
  categoryID: PropTypes.string
};
Ranking.defaultProps = {
  categoryID: '1'
}
