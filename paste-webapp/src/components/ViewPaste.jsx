import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();

  const pastes = useSelector((state) => state.paste.pastes);

  const paste = pastes.find((paste) => paste.id === id);

  return (
    <div>
      <div className="flex flex-col gap-2 bg-red-300">
        <h2 className="text-xl font-bold">{paste?.title}</h2>
        <p>{paste?.content}</p>
        <p>{paste?.created_at}</p>
      </div>
    </div>
  );
};

export default ViewPaste;
