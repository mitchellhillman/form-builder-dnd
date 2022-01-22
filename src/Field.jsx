import React from 'react';
import * as classes from './Field.module.css';
// eslint-disable-next-line import/extensions
import * as Components from './components/index.js';

export default ({ draggableProvided, draggableSnapshot, item }) => {
  const FieldComponent = Components[item.component];
  return (
    <div className={`${classes.cell} ${item.fullWidth ? classes.fullWidth : ''}`}>
      <div
        className={draggableSnapshot.isDragging ? classes.isDragging : ''}
        ref={draggableProvided.innerRef}
        {...draggableProvided.draggableProps}
        {...draggableProvided.dragHandleProps}
      >
        <FieldComponent item={item} />
      </div>
    </div>
  );
};
