import React from 'react'
import  Films  from './Films'
import PropTypes from 'prop-types';

export default function Films({ list }) {
  const films = list.map(film => <Film key={film.id} info={film} />);
  return <div className="container">{films}</div>;
}

Films.propTypes = {
  list: PropTypes.array.isRequired
};