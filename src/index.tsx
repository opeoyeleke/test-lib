import React from "react";

interface MyComponentProps {
  name: string;
}

const MyComponent = ({ name }: MyComponentProps) => {
  return (
    <div>
      <button>{name}</button>
    </div>
  );
};
export default MyComponent;
