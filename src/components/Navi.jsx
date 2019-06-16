import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navi({ categories }){
  const to = category => (
    category.id == '1'
      ? '/all'
      : `/category/${category.id}`
  );

  return (
    <ul>
      {categories.map(category => (
        <li key={`navi-item-${category.id}`}>
          <Link to={to(category)}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

Navi.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};
