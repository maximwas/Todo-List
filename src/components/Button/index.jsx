import classNames from "classnames";
import "./index.scss";

const Button = ({ text, onClick, icon, className }) => {
  const getClassNameHandlerButton = () => {
    return classNames({
      button__handler: true,
      button__handler__icon: Boolean(icon),
      button__handler__text: Boolean(text),
    });
  }

  return (
    <div className={classNames("button", className)}>
      <button onClick={onClick} className={getClassNameHandlerButton()}>
        {text ?? icon}
      </button>
    </div>
  );
};

export default Button;
