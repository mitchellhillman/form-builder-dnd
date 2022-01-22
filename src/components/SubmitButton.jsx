import React from 'react';
import * as classes from './SubmitButton.module.css';

export default ({ item }) => (
  <button className={classes.button} type="submit">{item.content}</button>
);
