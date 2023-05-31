import remove from "../../assets/images/icon-cross.svg";
import tick from "../../assets/images/icon-check.svg";
interface Props {
  text: string;
  src: string;
  handler: () => void;
  handleRemove: () => void;
  style: string;
  isDragging: boolean;
}

export default function ListItem(props: Props) {
  return (
    <div className="item" style={{ opacity: props.isDragging ? 0.5 : 1 }}>
      <div className="single">
        <img
          onClick={props.handler}
          className="checked"
          src={props.src}
          alt=""
        ></img>
        <img
          onClick={props.handler}
          className={`tick ${props.style}`}
          src={tick}
        ></img>
        <p className={props.style}>{props.text}</p>
      </div>
      <img onClick={props.handleRemove} className="delete" src={remove}></img>
    </div>
  );
}
