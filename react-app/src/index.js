import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/Card";
import Collapse from "./components/Collapse";

const App = () => {
  return (
    <div>
      <div className="card-group">
        
        <Collapse href="collapseExample1"> 
          <Card
            cardTitle="Card Title I"
            cardText="Lorem ipsum text 1"
            updatedTime="Last updated 1 min ago"
            image="https://picsum.photos/id/1/200/300"
          />
        </Collapse>

        <Collapse href="collapseExample2">
          <Card
            cardTitle="Card Title II"
            cardText="Lorem ipsum text 2"
            updatedTime="Last updated 2 min ago"
            image="https://picsum.photos/id/10/200/300"
          />
        </Collapse>

        <Collapse href="collapseExample3">
          <Card
            cardTitle="Card Title III"
            cardText="Lorem ipsum text 3"
            updatedTime="Last updated 3 min ago"
            image="https://picsum.photos/id/100/200/300"
          />
        </Collapse>
      </div>
    </div>
  );
};

/*class App extends React.Component{
    render() {
        return <h1>React App</h1>
    }
}*/

ReactDOM.render(
  <App> </App>,
  document.querySelector("#root") //document.getElementById('root')
);
