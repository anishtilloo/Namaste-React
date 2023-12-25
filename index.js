import React from "react"; 
import ReactDOM from "react-dom/client";

//  React Element is basically an object when we render it on to the DOM it becomes HTML Element
// const heading = React.createElement("h1", {id: "heading"}, "Namaster Javascript");
// console.log(heading);

// JSX - It is an HTML-like or XML-like syntax 
// JSX is transpiled before it reaches JS Engine => Parcel does it for us 
// but parcel does not do it by itself => babel comes with parcel which does the actual transpilation

// JSX is converted into => React.createElement which is converted into => JS-Object which is rendered as => HTML Element
// const jsxHeading = <h1 id="heading">Namaste React from JSX</h1>
// console.log(jsxHeading);

const TitleComponent = () => (
    <h1 className="head" tabIndex="5">Namaste React using JSX</h1>
);

// This is Component Composition that is using a component inside another component;
const HeadingComponent = () => (
    <div id="container">
        <TitleComponent></TitleComponent>
        {/* Inside these curly braces we can run any piece of JS expression */}
        {/* {JSX can sanatize the XSS (Cross site scription ) attack it dosen't blindly runs the code inside the curly brackets it sanatizes it} */}
        {}
        <h1 id="heading">Namaste React Functional Component.</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);