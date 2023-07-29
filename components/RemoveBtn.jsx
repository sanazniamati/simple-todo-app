import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

function RemoveBtn(props) {
  return (
    <button className=" text-red-500">
      <HiOutlineTrash size={24} />
    </button>
  );
}

export default RemoveBtn;
