import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addBook } from '../../redux/slices/booksSlice';
import createBookWithID from '../../utils/createBookWithID';
import booksData from '../../data/books.json';
import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleOnRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];

    dispatch(addBook(createBookWithID(randomBook, 'random')));
  };

  const handleOnRandomBookViaAPI = async () => {
    try {
      const res = await axios.get('http://localhost:4000/random-book');
      if (res?.data?.title && res?.data?.author) {
        dispatch(addBook(createBookWithID(res.data, 'API')));
      }
    } catch (error) {
      console.log('Error fetching random book', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author }, 'manual')));

      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleOnRandomBook}>
          Add Random
        </button>
        <button type="button" onClick={handleOnRandomBookViaAPI}>
          Add Random via API
        </button>
      </form>
    </div>
  );
};

export default BookForm;
