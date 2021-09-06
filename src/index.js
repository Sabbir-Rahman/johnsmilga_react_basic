import React from "react";
import ReactDom from "react-dom";
import './index.css'

function Booklist() {
  return (
    <section className="booklist">
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
    <article className="book">
      <div>
        <Image></Image>
        <Title />
        <Author/>
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
  return <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '.25rem'}}>This is author</h4>;
};

const Title = () => {
  return <h1>This is a title</h1>;
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
