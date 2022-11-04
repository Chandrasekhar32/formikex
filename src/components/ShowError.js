import React from "react";

export default function ShowError(props) {
  return (
    <div>
      <p className="error">{props.children}</p>
    </div>
  );
}
