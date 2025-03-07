import React from "react";

export function Button({ children, onClick, className }) {
  return (
    <button className={`p-2 border rounded ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}