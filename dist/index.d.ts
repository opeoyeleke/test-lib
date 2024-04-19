import React from "react";
interface MyComponentProps {
    name: string;
}
declare const MyComponent: ({ name }: MyComponentProps) => React.JSX.Element;
export default MyComponent;
