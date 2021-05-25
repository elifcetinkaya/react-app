import React from 'react';
import ReactDOM from 'react-dom';



function App() {
    return (
    <div>
        <button type="button" style={{padding:'10px', color:'white', backgroundColor:'red'}}>JSX Button</button>
    </div>
    );
}

/*class App extends React.Component{
    render() {
        return <h1>React App</h1>
    }
}*/

ReactDOM.render(
    <App></App>, 
    document.querySelector('#root') //document.getElementById('root') 
);