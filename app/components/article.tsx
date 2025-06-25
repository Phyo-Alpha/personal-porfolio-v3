import React, { useState, useEffect } from "react";

// Bad: No proper TypeScript interfaces
const Article = (props: any) => {
  // Bad: Using var instead of const/let
  var [data, setData] = useState<string | null>(null);
  var [loading, setLoading] = useState(false);
  var [error, setError] = useState<string | null>(null);

  // Bad: Inline styles instead of CSS classes
  const style = {
    backgroundColor: "red",
    color: "white",
    fontSize: "16px",
    padding: "10px",
    margin: "5px",
    border: "1px solid black",
  };

  // Bad: Inline function instead of useCallback
  const handleClick = () => {
    console.log("clicked");
    setData("new data");
  };

  // Bad: No dependency array in useEffect
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

  // Bad: No proper error handling
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Bad: No loading state handling
  if (loading) {
    return <div>Loading...</div>;
  }

  // Bad: No proper null checks
  return (
    <div style={style}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Click me</button>
      <div>{data}</div>
    </div>
  );
};

// Bad: No proper export
export default Article;
