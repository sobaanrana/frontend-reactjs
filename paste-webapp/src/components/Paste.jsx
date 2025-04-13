import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes);

  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = React.useState("");

  const filteredPastes = pastes?.filter((paste) =>
    paste.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
    console.log("delete paste with id", pasteId);
  }

  return (
    <>
      <input
        type="search"
        placeholder="Search here"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div>
        {filteredPastes.map((paste) => (
          <div key={paste.id} className="flex flex-col gap-2 bg-red-300">
            <h2 className="text-xl font-bold">{paste.title}</h2>
            <p>{paste.content}</p>
            <button>
              <Link to={`/?pasteId=${paste?.id}`}>Edit</Link>
            </button>
            <button>
              <Link to={`/pastes/${paste.id}`}>View</Link>
            </button>
            <button onClick={() => handleDelete(paste?.id)}>Delete</button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(paste?.content);
                toast.success("Copied to clipboard", {
                  icon: "✍️",
                  style: {
                    background: "#333",
                    color: "#fff",
                  },
                });
              }}
            >
              Copy
            </button>
            <button>Share</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Paste;
