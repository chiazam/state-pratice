
import React from 'react';

export function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}