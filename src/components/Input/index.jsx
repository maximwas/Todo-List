import "./index.scss";

const Input = ({ onChange, onEnterKeyDown, ...props }) => {
  function onKeyDown(event) {
    const code = event.keyCode;
    const value = event.target.value;

    if(code === 13) {
      onEnterKeyDown(value);
    }
  }

  return (
    <>
      <input onKeyDown={onKeyDown} onChange={(event) => onChange(event.target.value)} className="input" {...props}/>
    </>
  );
}

export default Input;