import React from 'react';
import { stylesColors } from '../../utils/publicVariables';

const { blue } = stylesColors;

const classes = {
  container: {
    backgroundColor: blue,
    height: '0.3rem', 
    width: '5rem'
  },
}

export default function Divider() {
  return (
    <div style={classes.container}/>
  )
}
