import React from 'react'

const Book = ({ img, author, title }) => {
  // attribute, eventHandler
  // onClick, onMouseOver

  const complexExample = (author) => {
    console.log(author);
  };
  const clickHandler = () => {
    console.log("Hello World");
  };

  const mouseOver = (author) => {
    console.log(author);
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => alert(title)}>{title}</h1>
      <h4 onMouseOver={() => mouseOver(author)}>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Button
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More complex Example
      </button>
    </article>
  );
};

export default Book

