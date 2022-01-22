import React from 'react';
import * as classes from './Header.module.css';

export default ({ item }) => (
  <h3 className={classes.header}>{item.content}</h3>
);
