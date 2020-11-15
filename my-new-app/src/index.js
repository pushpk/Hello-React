import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import * as serviceWorker from "./serviceWorker";
import faker, { fake } from "faker";
import ComponentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  const btnText = "Click Me!";
  return (
    <div className="ui container comments">
      <ApprovalCard>
      <ComponentDetail
        author="Sam"
        timeAgo="Today at 4:45 PM"
        content="Nice Post!"
        imgSource={faker.image.avatar()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <ComponentDetail
        author="Jane"
        timeAgo="Today at 2:45 PM"
        content="Thank you,  Informative!"
        imgSource={faker.image.avatar()}
      />
      </ApprovalCard>
       <ApprovalCard>
      <ComponentDetail
        author="Kelly"
        timeAgo="Yesterday at 11 AM"
        content="Awesome!"
        imgSource={faker.image.avatar()}
      />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
