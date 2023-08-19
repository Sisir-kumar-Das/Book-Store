import { useEffect, useState } from "react";
import Book from "./Book";
import axios from "axios";
import "./Book.css";
const fetchHandler = async () => {
  return await axios
    .get("http://localhost:8080/books")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchHandler().then((data) => {
      setBooks(data.books);
    });

    fetchHandler();
  }, []);

  return (
    <div>
      <ul>
        {books &&
          books.map((book) => (
            <li className="book" key={book._id}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
