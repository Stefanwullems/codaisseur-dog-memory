import React from "react";
import { Link } from "react-router-dom";

function Warning(props) {
  const { toggleShowWarningNextTime } = props;
  return (
    <div>
      <p>
        Are you sure you want to leave the page? You will lose all your progress
        if you do.
      </p>
      <Link to="/">
        <button>Continue</button>
      </Link>
      <button>Cancel</button>
      <label>
        Don't show again
        <input type="checkbox" onChange={toggleShowWarningNextTime} />
      </label>
    </div>
  );
}

export default Warning;
