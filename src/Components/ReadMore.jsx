import { useState } from "react";

const ReadMoreText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded state
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>
        {isExpanded ? text : `${text.slice(0, 150)}...`}{" "}
        <button
          onClick={toggleReadMore}
          className=" font-semibold hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
        {/* Display 100 characters */}
      </p>
    </div>
  );
};

export default ReadMoreText;
