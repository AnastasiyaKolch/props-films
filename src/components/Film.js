import React from 'react';

import MoreLink from './MoreLink';
import Preview from './Preview';
import Share from './Share';
import Tag from './Tag';
import Stars from './Stars';
import PropTypes from 'prop-types'


export default function Film({ info }) {

  return (
    <div className="card u-clearfix">
      <div className="card-media">
        <img src={info.poster} alt="" className="card-media-img" />
        <Preview />
        <Tag title={info.type} color={info.color} />
      </div>
      <div className="card-body">
        <h2 className="card-body-heading">{info.title}</h2>
        <div className="card-body-options">
          <Share />
        </div>
        <Stars count={info.stars} />
        <a href="#/" className="card-button card-button-cta">
          Купить {info.price}₽
        </a>
        <a href="#/" className="card-button card-button-link">
          Подробнее
          <MoreLink />
        </a>
      </div>
    </div>
  );
}

Film.propTypes = {
  info: PropTypes.array.isRequired
}