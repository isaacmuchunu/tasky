import React from "react";

const But = (props) => {
  const { tagName, selectTag, selected } = props;
  const tagStyle = {
    default: {
      backgroundColor: "gray",
      color: "white",
    },
    HTML: {
      backgroundColor: "purple",
      color: "white",
    },
    TailwindCSS: {
      backgroundColor: "red",
      color: "white",
    },
    JavaScript: {
      backgroundColor: "yellow",
      color: "black",
    },
    React: {
      backgroundColor: "green",
      color: "white",
    },
  };

  return (
    <div>
      <button
        onClick={() => selectTag(tagName)}
        style={selected ? tagStyle[tagName] : null}
        className="px-1 py-1 bg-blue-500 font-poppins text-white rounded-md hover:bg-blue-600"
        type="button"
      >
        {tagName}
      </button>
    </div>
  );
};

export default But;
