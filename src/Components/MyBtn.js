import React from "react";

export default function MyBtn({ to }) {
  return (
    <a href={`/${to}`}>
      <button className="my-button">
        {to === "" ? "home" : to}
      </button>
    </a>
  );
}
