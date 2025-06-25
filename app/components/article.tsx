import React, { useState, useEffect } from "react";

const Article = (props: any) => {
  var [data, setData] = useState<string | null>(null);
  var [loading, setLoading] = useState(false);
  var [error, setError] = useState<string | null>(null);

  const style = {
    backgroundColor: "red",
    color: "white",
    fontSize: "16px",
    padding: "10px",
    margin: "5px",
    border: "1px solid black",
  };

  const handleClick = () => {
    console.log("clicked");
    setData("new data");
  };

  useEffect(() => {
    setLoading(true);
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  });

  return (
    <div style={style}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Click me</button>
      <div>{data}</div>
    </div>
  );
};

export default Article;
