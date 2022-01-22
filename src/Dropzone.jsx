import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import * as classes from './Dropzone.module.css';
import Field from './Field';

export default ({ droppableProvided, droppableSnapshot, items }) => (
  <div
    {...droppableProvided.droppableProps}
    ref={droppableProvided.innerRef}
    className={`${classes.dropzone} ${droppableSnapshot.isDraggingOver ? classes.draggingOver : ''}`}
  >
    <div className={classes.row}>
      {items.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {(draggableProvided, draggableSnapshot) => (
            <Field
              item={item}
              draggableProvided={draggableProvided}
              draggableSnapshot={draggableSnapshot}
            />
          )}
        </Draggable>
      ))}
    </div>
    {!droppableSnapshot.isDraggingOver
      && items.length === 0
      && <div className={classes.noResults}>Drop form elements here</div>}
    {droppableProvided.placeholder}
  </div>
);
