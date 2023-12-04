import React from "react"; 
import ReactDOM from "react-dom/client";

// The react in "react" is basically referring to the react backage in the node_modules


// created an h1 element using React.createElement
/* It takes 3 arguments 
    - Tag Name as string
        -- for example: 
            'h1', 'div'
    - Object of attributes
        -- we can pass an empty object
        -- or {id: "child"}, we are passing id as a child and many other attributes
    - Content of the tag
        -- we can either send a string or nest another element
        -- 'hello world from react' or 
            --- const h2 = React.createElement('h1', {}, 'hello world from react');
                const h1 = React.createElement('h1', {}, h2);

*/
const h1 = React.createElement('h1', {}, 'hello world from react');
       

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(h1);