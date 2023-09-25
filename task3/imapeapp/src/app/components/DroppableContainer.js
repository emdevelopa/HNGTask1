import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

const DroppableContainer = ({ items }) => {
  return (
    <Droppable droppableId="droppable">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="bg-gray-100 p-4 h-80 overflow-y-auto"
        >
          {items.map((item, index) => (
            <DraggableItem key={item.id} item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DroppableContainer;
