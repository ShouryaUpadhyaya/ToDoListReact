import React, { useState } from "react";

const AddTask = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white bg-blue-600 rounded-md p-2 mt-5 "
    >
      Add
    </button>
  );
};

export default AddTask;
