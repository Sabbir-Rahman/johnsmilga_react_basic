import React, { Children } from "react";
import ReactDom from "react-dom";
import "./index.css";

//setup vars

const books = [
  {
    title: "I love you to the moon and back",
    author: "Amelia Hepworth",
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  },

  {
    title: "Little Blue Truck's Halloween",
    author: "Alice Schertle",
    img: "https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._AC_UL200_SR200,200_.jpg",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book)=>{
        return(
        <Book img={book.img} title={book.title} author={book.author}></Book>
        )
      })}
      
    </section>
  );
}

const Book = (props) => {
  console.log(props);

  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      {props.children}
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
