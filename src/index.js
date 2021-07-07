import React from "react";
import ReactDom from "react-dom";

function Booklist() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <div>
        <Image></Image>
        <Author />
        <Title />
      </div>
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/51b-JoV-1xS._AC_SX184_.jpg"
      alt=""
    />
  );
};

const Author = () => {
  return <p>This is a author</p>;
};

const Title = () => {
  return <h4>This is a title</h4>;
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
