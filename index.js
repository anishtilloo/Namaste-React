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

// Assignment
//  Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
// const h1 = React.createElement('h1', {}, "Hello From H1");
// const h2 = React.createElement('h2', {}, "Hello From H2");
// const h3 = React.createElement('h3', {}, "Hello From H3");
// const div = React.createElement('div', {className: "title"}, [h1, h2, h3]);

// Create the same element as above using JSX
// const div = (
//     <div className="title">
//         <h1>Hello From H1</h1>
//         <h2>Hello From H2</h2>
//         <h3>Hello From H3</h3>
//     </div>
// );

// Create a functional component of the same with JSX (same as above)
// const Div = () => (
//     <div className="title">
//         <h1>Hello From H1</h1>
//         <h2>Hello From H2</h2>
//         <h3>Hello From H3</h3>
//     </div>
// )

// Create a Header Component from scratch using Functional Components with JSX
// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice

const Header = () => (
    <div className="container">
        <h3 className="logo">LOGO</h3>
        <div className="search-bar">
            <input type="text" />
        </div>
        <div className="user">
            UserIcon
        </div>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);