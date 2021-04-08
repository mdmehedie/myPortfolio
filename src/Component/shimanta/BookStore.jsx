import React from "react";
import Book from "./Book.js";
class BookStrore extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [
        { title: "The ultimate goal", writer: "Goerse Barnner" },
        { title: "History of Blackhole", writer: "Ali Ashraf" },
        { title: "When pogitron fixed", writer: "Khudart e khuda" },
      ],
    };
  }
  changeTitle = (title) => {
    this.setState({
      books: [
        { title: title, writer: "Ali Ashraf" },
        { title: "kalbela", writer: "Somres Mojumder" },
        { title: "The Alkemist", writer: "Morish morpho" },
      ],
    });
  };

  inputHandelar = (event, index) => {
    this.setState((prevState) => {
      const books = prevState;

      books[index] = { title: event.target.value };
      return {
        books: books,
      };
    });
  };
  render() {
    const book = this.state.books.map((book, index) => {
      return (
        <Book
          title={book.title}
          writer={book.writer}
          inputChange={this.inputHandelar.bind(this, index)}
        />
      );
    });
    return (
      <div>
        <button
          onClick={() => {
            this.changeTitle("One Eighty Nine");
          }}
        >
          Change Title
        </button>

        {/* <Book
          inputChange={this.inputHandelar}
          title={this.state.books[0].title}
          writer={this.state.books[0].writer}
        />
        <Book
          title={this.state.books[1].title}
          writer={this.state.books[1].writer}
        />
        <Book
          title={this.state.books[2].title}
          writer={this.state.books[2].writer}
          change={this.changeTitle.bind(this, "Think be a positive")}
        /> */}
        {book}
      </div>
    );
  }
}

export default BookStrore;
