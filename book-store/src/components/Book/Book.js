import React from "react";
import "./Book.css";

const Book = (props) => {
  const { name, author, description, price, image, available } = props.book;

  return (
    <div className="card">
      <img style={{ height: "300px", width: "250px" }} src={image} alt="book" />
      <article>By {author}</article>
      <h3>{name}</h3>
      <h2>Price(in rs):{price}</h2>
      <h4>{description}</h4>
      <h4>{available}</h4>
      <button>Update</button>
      <button>Delete</button>
    </div>
  );
};

export default Book;
