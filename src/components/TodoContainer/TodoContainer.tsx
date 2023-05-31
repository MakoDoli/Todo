import { useState, useEffect } from "react";
import { StyledContainer } from "./TodoContainer.styled";
import ListItem from "./ListItem";
import check from "../../../public/assets/images/check.png";
import empty from "../../../public/assets/images/Oval.png";

interface Props {
  theme: boolean;
}
export default function TodoContainer(props: Props) {
  const initialList = JSON.parse(localStorage.getItem("taskList") as string)
    ? JSON.parse(localStorage.getItem("taskList") as string)
    : [];

  const [taskList, setTaskList] = useState(initialList);
  const [newInput, setNewInput] = useState("");
  const [placeholder, setPlaceholder] = useState("Create a new todo");
  const [showList, setShowList] = useState(taskList);
  const [amount, setAmount] = useState(taskList.length);

  function showInput() {
    if (newInput) {
      setTaskList([{ task: newInput, checked: false }, ...taskList]);

      setPlaceholder("Create a new todo");
    } else {
      setPlaceholder("Create a new todo");
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
  console.log(props.theme);

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
  }
  return (
    <StyledContainer mode={props.theme}>
      <div className="input">
        <div onClick={showInput} className="input-circle"></div>
        <input
          type="text"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (e.key === "Enter") showInput();
          }}
        />
      </div>
      <div className="list-container">
        {showList
          ? showList.map((elem: elemTypes, index: number) => (
              <ListItem
                key={index}
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
                  //setShowList(updatedTaskList);
                }}
              />
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
      </div>

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
    </StyledContainer>
  );
}
