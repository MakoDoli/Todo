import { useState, useEffect } from "react";
import { StyledContainer } from "./TodoContainer.styled";
import ListItem from "./ListItem";
import check from "../../../public/assets/images/check.png";
import empty from "../../../public/assets/images/Oval.png";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface Props {
  theme: boolean;
}
export default function TodoContainer(props: Props) {
  const initialList = JSON.parse(localStorage.getItem("taskList") as string)
    ? JSON.parse(localStorage.getItem("taskList") as string)
    : [];

  const [taskList, setTaskList] = useState(initialList);
  const [newInput, setNewInput] = useState("");
  const [showList, setShowList] = useState(taskList);
  const [amount, setAmount] = useState(taskList.length);

  function showInput() {
    if (newInput) {
      setTaskList([
        { task: newInput, checked: false, id: Date.now() },
        ...taskList,
      ]);
    }
    setNewInput("");

    localStorage.setItem("taskList", JSON.stringify(taskList));
  }

  const clearCompleted = () => {
    const updatedTaskList = [...taskList].filter(
      (item) => item.checked === false
    );
    setTaskList(updatedTaskList);
  };

  const showActive = () => {
    const activeArray = taskList.filter(
      (elem: elemTypes) => elem.checked === false
    );
    setShowList(activeArray);
    setAmount(activeArray.length);
  };

  const showChecked = () => {
    const checkedArray = taskList.filter(
      (elem: elemTypes) => elem.checked === true
    );
    setShowList(checkedArray);
    setAmount(taskList.length - 1);
  };

  const reorderList = (final) => {
    if (!final.destination) return;
    const newList = [...taskList];
    const [movedItem] = newList.splice(final.source.index, 1);
    newList.splice(final.destination.index, 0, movedItem);
    console.log(newList);
    setTaskList(newList);
  };

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
    setShowList(taskList);
    const activeArray = taskList.filter(
      (elem: elemTypes) => elem.checked === false
    );
    setAmount(activeArray.length);
  }, [taskList]);

  interface elemTypes {
    task: string;
    checked: boolean;
    id: number;
    isDragging: boolean;
  }

  return (
    <StyledContainer mode={props.theme}>
      <div className="input">
        <div onClick={showInput} className="input-circle"></div>
        <input
          type="text"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
          placeholder="Create a new todo.."
          onKeyDown={(e) => {
            if (e.key === "Enter") showInput();
          }}
        />
      </div>
      <DragDropContext onDragEnd={reorderList}>
        <Droppable droppableId="list-container">
          {(provided) => (
            <div
              className="list-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {showList
                ? showList.map((elem: elemTypes, index: number) => (
                    <Draggable
                      key={elem.id}
                      draggableId={elem.task}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <ListItem
                            isDragging={snapshot.isDragging}
                            text={elem.task}
                            src={elem.checked ? check : empty}
                            style={elem.checked ? "crossed" : ""}
                            handler={() => {
                              const updatedTaskList = [...taskList];
                              updatedTaskList[index].checked = !elem.checked;
                              setTaskList(updatedTaskList);
                              setShowList(updatedTaskList);
                            }}
                            handleRemove={() => {
                              const updatedTaskList = [...taskList];
                              updatedTaskList.splice(index, 1);
                              setTaskList(updatedTaskList);
                            }}
                          />{" "}
                        </div>
                      )}
                    </Draggable>
                  ))
                : null}

              <div className="item">
                <div>
                  <p className="summary">{amount} items left</p>
                </div>
                <div onClick={clearCompleted}>
                  <p className="summary">Clear completed</p>
                </div>
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="item">
        <button onClick={() => setShowList(taskList)} className="all">
          All
        </button>
        <button onClick={showActive} className="active">
          Active
        </button>
        <button onClick={showChecked} className="completed">
          Completed
        </button>
      </div>
      <p style={{ marginTop: 28 }}>Drag and drop to reorder list</p>
    </StyledContainer>
  );
}
