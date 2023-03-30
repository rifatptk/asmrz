import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { BsBorderWidth } from "react-icons/bs";

export default function RiDnD() {
  const [fruits, setfruits] = useState(["Apple", "Orange", "Banana"]);

  // ref for dragged item and dragged over item
  const draggedItem = useRef(null);
  const draggedOverItem = useRef(null);

  function onDragStart(e, i) {
    draggedItem.current = i;
  }

  function onDragEnter(e, i) {
    draggedOverItem.current = i;
  }

  function onDragOver(e) {
    e.preventDefault();
  }

  function handleSort() {
    // copy last state of the items
    let _fruits = [...fruits];
    // remove the dragged item and store temporarily
    const draggedItemContent = _fruits.splice(draggedItem.current, 1)[0];
    // switch the position
    _fruits.splice(draggedOverItem.current, 0, draggedItemContent);
    // reset position refs
    draggedItem.current = null;
    draggedOverItem.current = null;
    // update state
    setfruits(_fruits);
  }
  return (
    <div className="bg-gray-900 p-10">
      <h1 className="tracking-widest mb-5">RI DRAG AND DROP REORDER</h1>

      <div className="bg-gray-800 rounded-lg p-5 space-y-4">
        {fruits.map((fruit, i) => (
          <div
            draggable
            onDragStart={(e) => onDragStart(e, i)}
            onDragEnter={(e) => onDragEnter(e, i)}
            onDragEnd={handleSort}
            onDragOver={onDragOver}
            className="p-4 bg-gray-700 hover:bg-gray-600 rounded-md flex items-center gap-2 cursor-move"
            key={i}
          >
            <BsBorderWidth className="w-5 cursor-pointer hover:text-gray-300 active:text-blue-300" />
            <span>{fruit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
