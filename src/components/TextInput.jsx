import React from 'react';
import * as classes from './TextInput.module.css';

export default ({ item }) => (
  <div>
    <label className={classes.label} htmlFor={item.name}>{item.label}</label>
    <input id={item.id} name={item.name} className={classes.input} placeholder={item.content} />
  </div>
);
