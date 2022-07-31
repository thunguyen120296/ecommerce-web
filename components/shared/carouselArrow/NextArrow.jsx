import React from 'react';

export default function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#119744' }}
      onClick={onClick}
    />
  );
}
