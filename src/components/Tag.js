import React from 'react'

export default function Tag({ title, color }) {
  return (
    <span className={`card-media-tag card-media-tag-${color}`}>{title}</span>
  );
}