import Button from "../Button/index"

import { MdRemoveCircleOutline, MdModeEditOutline } from "react-icons/md";

import "./index.scss";

const ListItem = ({ item, removeItem, editItem }) => {
  return (
    <>
      <li className="list-item">
        { item.text }
        <div className="button-group">
          <Button onClick={editItem} icon={<MdModeEditOutline color="white" size={20}/>}></Button>
          <Button onClick={removeItem} icon={<MdRemoveCircleOutline color="white" size={20}/>}></Button>
        </div>
      </li>
    </>
  );
}

export default ListItem;