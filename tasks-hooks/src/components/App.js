import React, {useState} from "react";

const App = () => {
   const [resource, setResouce] = useState('posts')

  return (
    <div>
      <div>
        <button onClick={() => setResouce('posts')}>
          Post
        </button>
        <button onClick={() => setResouce('todos')}>
          Todos
        </button>
      </div>
      {resource}
    </div>
  );
};

export default App;
