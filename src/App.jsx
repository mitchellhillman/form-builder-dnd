import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as classes from './App.module.css';
import elements from './elements.data';
import Dropzone from './Dropzone';
import Element from './Element';

export default () => {
  const [canvasFields, setCanvasFields] = useState([]);
  const [elementFields, setElementFields] = useState(elements);

  const addField = (list, item, atIndex) => {
    const result = [...list];
    result.splice(atIndex, 0, item);
    return result;
  };

  const removeField = (list, index) => {
    const result = [...list];
    result.splice(index, 1);
    return result;
  };

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) return;

    const sourceList = source.droppableId === 'canvas' ? canvasFields : elementFields;
    const destList = destination.droppableId === 'canvas' ? canvasFields : elementFields;
    const reordered = addField(
      removeField(destList, source.index), sourceList[source.index], destination.index
    );
    const removed = removeField(sourceList, source.index);
    const added = addField(destList, sourceList[source.index], destination.index);

    if (source.droppableId === 'elementTray' && destination.droppableId === 'canvas') {
      setElementFields(removed);
      setCanvasFields(added);
    }
    if (source.droppableId === 'elementTray' && destination.droppableId === 'elementTray') {
      setElementFields(reordered);
    }
    if (source.droppableId === 'canvas' && destination.droppableId === 'elementTray') {
      setCanvasFields(removed);
      setElementFields(added);
    }
    if (source.droppableId === 'canvas' && destination.droppableId === 'canvas') {
      setCanvasFields(reordered);
    }
  };

  return (
    <div className={classes.app}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className={classes.elementTray}>
          <h1 className={classes.title}>📋 Form Builder</h1>
          <Droppable droppableId="elementTray">
            {(droppableProvided) => (
              <div
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
              >
                {elementFields.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(draggableProvided, draggableSnapshot) => (
                      <Element
                        item={item}
                        draggableProvided={draggableProvided}
                        draggableSnapshot={draggableSnapshot}
                      />
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div className={classes.canvas}>
          <Droppable droppableId="canvas">
            {(droppableProvided, droppableSnapshot) => (
              <Dropzone
                items={canvasFields}
                droppableProvided={droppableProvided}
                droppableSnapshot={droppableSnapshot}
              />
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};
