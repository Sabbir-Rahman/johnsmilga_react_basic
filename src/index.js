import React, { Children } from "react";
import ReactDom from "react-dom";
import "./index.css";

//setup vars

const books = [
  {
    id:1,
    title: "I love you to the moon and back",
    author: "Amelia Hepworth",
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  },

  {
    id:2,
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
        <Book key={book.id} {...book}></Book>
        )
      })}
      
    </section>
  );
}

const Book = ({img,author,title}) => {
  

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>

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
