import React from 'react';
import { Button } from 'react-bootstrap';

import { stylesColors } from '../../utils/publicVariables';

const { blue } = stylesColors;

const classes = {
  blue: {
    backgroundColor: blue,
    fontSize: '1rem'
  }
}

export function LgButton({ text }) {
  return (
    <Button variant="primary" size="lg" className="pl-5 pr-5 pt-2 pb-2" style={classes.blue}>{ text }</Button>
  )
}
