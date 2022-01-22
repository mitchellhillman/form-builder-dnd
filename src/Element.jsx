import React from 'react';
import * as classes from './Element.module.css';

export default ({ draggableProvided, draggableSnapshot, item }) => (
  <div
    item={item}
    className={`${classes.element} ${draggableSnapshot.isDragging ? classes.dragging : ''}`}
    ref={draggableProvided.innerRef}
    {...draggableProvided.draggableProps}
    {...draggableProvided.dragHandleProps}
  >
    <div className={classes.label}>{item.component}</div>
    {item.content}
  </div>
);
