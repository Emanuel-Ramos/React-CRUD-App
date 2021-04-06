import React, {Fragment, useState} from 'react';
import './index.css';
import Books from './Books';
import Addbook from './Components/Addbook';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditBook from './Components/Editbook';

function App() {

  const bookData = [
    { id: 1, name: 'Being and Nothingness', author: 'Jean-Paul Sartre', year: '1947'},
    { id: 2, name: 'A Happy Death', author: 'Albert Camus', year: '1933'}
  ]

  const formState = {id:null, name:'', author:'', year:''}

  const [books, setBooks] = useState(bookData);
  const [edit, setEdit] = useState(false);
  const [currentBook, setCurrentBook] = useState(formState);

  // CRUD OPERATIONS
  // CREATE
  const addBook = book => {
    book.id = books.length + 1;
    setBooks([...books, book]);
  }

  // UPDATE
  const editBook = book => {
    setEdit(true)
    setCurrentBook({ id:null, name:book.name, author:book.author, year:book.year })
  }

  const updateBook = (id, updatedBook) => {
    setEdit(false)
    setBooks(books.map(book => (book.id === id ? updatedBook : book )))
  }



  return (
    <div className="container">
      <div className="header">
        <h1>LIBRARY APP WITH REACT JS</h1>
      </div>
      <div className="row library">
      <div className="col-sm-6 add-book">
        {edit ? (
          <Fragment>
              <h2>Edit Book</h2>
              <EditBook 
                edit={edit}
                setEdit={setEdit}
                currentBook={currentBook}
                updateBook={updateBook}
              />
          </Fragment>
        ) : (
          <Fragment>
            <h4>Add A Book</h4>
              <Addbook
                addBook={addBook}
            />
          </Fragment>
        )}
      </div>
      <div className="col-sm-6 all-books">
        <h1>Available Books</h1>
          <Books
            books={books}
            editBook={editBook}
          />
      </div>
      </div>
    </div>
  );
}

export default App;
