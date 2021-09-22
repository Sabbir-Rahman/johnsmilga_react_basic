import React, { Children } from "react";
import ReactDom from "react-dom";
import "./index.css";

//setup vars


import {books} from './books'

//no need for same name for default export
import Book from "./Book";

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}


ReactDom.render(<Booklist />, document.getElementById("root"));
