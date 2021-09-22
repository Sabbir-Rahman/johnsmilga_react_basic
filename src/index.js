import React, { Children } from "react";
import ReactDom from "react-dom";
import "./index.css";

//setup vars

const books = [
  {
    id: 1,
    title: "I love you to the moon and back",
    author: "Amelia Hepworth",
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  },

  {
    id: 2,
    title: "Little Blue Truck's Halloween",
    author: "Alice Schertle",
    img: "https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._AC_UL200_SR200,200_.jpg",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, author, title }) => {
  // attribute, eventHandler
  // onClick, onMouseOver

  const complexExample = (author) =>{
    console.log(author)
  }
  const clickHandler = () => {
    console.log('Hello World')
  };

  const mouseOver = (author) =>{
    console.log(author)
  }

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => alert(title)}>{title}</h1>
      <h4 onMouseOver={()=> mouseOver(author)}>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Button
      </button>
      <button type="button" onClick={() => complexExample(author)}>More complex Example</button>
    </article>
  );
};

// ======= function calll ==========
// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello world")
//   );
// };

ReactDom.render(<Booklist />, document.getElementById("root"));
