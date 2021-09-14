import React, { useContext, useEffect } from "react";
import "./Options.scss";
import { ImCross } from "react-icons/all";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import FieldContext from "../../context/FieldContext";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import {
  getOptions,
  deleteOption,
  addOption,
} from "../../actions/optionActions";

const Options = () => {
  // Getting the options for a specific field
  const options = useSelector((state: RootStateOrAny) => state.option.options);
  const dispatch = useDispatch();

  // Getting the specific field_key
  const key = useContext(FieldContext);

  useEffect(() => {
    dispatch(getOptions(key) as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  // Default option object
  const optionDefault = {
    option_label: "",
    option_value: "",
  };

  // Deleting a option
  const handleDelete = (i: number) => dispatch(deleteOption(i) as any);

  // Adding a option
  const handleAdd = () => dispatch(addOption(optionDefault) as any);

  // Drag and drop
  let characters = options;
  function handleOnDragEnd(result) {
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    characters = items;
  }

  return (
    <div className="options">
      <h1>Options:</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="options">
          {(provided) => (
            <ul
              className="optionsList"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {characters.map((option: any, i: number) => {
                return (
                  <Draggable
                    key={option.option_label}
                    draggableId={option.option_label}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="optionBar"
                      >
                        <h1>{i + 1}</h1>
                        <input
                          type="text"
                          placeholder={
                            option.option_label === ""
                              ? "Option label"
                              : option.option_label
                          }
                        />
                        <input
                          type="text"
                          placeholder={
                            option.option_value === ""
                              ? "Option value"
                              : option.option_value
                          }
                        />
                        <ImCross
                          className="delete"
                          onClick={() => handleDelete(i)}
                        />
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div className="addOption">
        <button className="addOptionButton" onClick={handleAdd}>
          Add option
        </button>
      </div>
    </div>
  );
};

export default Options;
