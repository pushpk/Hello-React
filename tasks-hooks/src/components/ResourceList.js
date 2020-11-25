import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResouce = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    console.log(response.data);
    setResources(response.data);
  };

  useEffect(() => {
    fetchResouce(resource);
  }, [resource]);
  return <div>{resources.length}</div>;
};

export default ResourceList;
