import React from "react";
import Author from "./Author";
import BookImg from "./BookImg";
import Title from "./Title";

const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);

  return (
    <article>
      <BookImg img={img} />
      <Title title={title} />
      <Author author={author} />
      {children}
    </article>
  );
};

export default Book;
