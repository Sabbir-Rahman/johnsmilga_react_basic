import React, { Children } from "react";
import ReactDom from "react-dom";
import "./index.css";

//setup vars

const book1 = {
  title: "I love you to the moon and back",
  author: "Amelia Hepworth",
  img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
};

const book2 = {
  title: "Little Blue Truck's Halloween",
  author: "Alice Schertle",
  img: "https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._AC_UL200_SR200,200_.jpg",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book img={book1.img} title={book1.title} author={book1.author}>
        <p>
          Voluptate dolore veniam laboris consectetur in est est proident officia. Ad aliquip consequat laboris Lorem ut reprehenderit consectetur. Voluptate velit voluptate cupidatat quis aliqua sit enim anim non dolore. Occaecat pariatur reprehenderit aliquip eu eiusmod tempor quis consequat aliquip nisi non ea. Nulla ullamco reprehenderit culpa amet fugiat exercitation anim nulla.
        </p>
      </Book>
      <Book img={book2.img} title={book2.title} author={book2.author} />
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
