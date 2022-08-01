import "./index.scss";

const Button = ({ text, onClick, icon }) => {
  return (
    <div className="button">
      <button onClick={onClick} className="button__handler">{ text ?? icon }</button>
    </div>
  );
}

export default Button;
