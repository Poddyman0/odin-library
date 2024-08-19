<strong>Project Title: Interactive Library App</strong>

<strong>Description:</strong>

For this project, I extended a basic "Book" example into a fully functional Library app. The app allows users to manage a collection of books by adding new entries, displaying them, and modifying their details. The main functionalities include adding books to a library, displaying them in an organized manner, and providing options to remove or update book statuses.

<strong>Technologies Used:</strong>

<ul>
  <li><strong>HTML:</strong> For the structure of the web page.</li>
  <li><strong>CSS:</strong> For styling the page and layout.</li>
  <li><strong>JavaScript:</strong> For the interactive functionality of the app.</li>
</ul>
<strong>Features:</strong>

<ul>
  <li><strong>Book Management:</strong>
    <ul>
      <li><strong>Book Constructor:</strong> Created a Book constructor function to initialize new book objects.</li>
      <li><strong>Book Array:</strong> Maintained an array <code>myLibrary</code> to store the book objects.</li>
    </ul>
  </li>
  <li><strong>Add Book Functionality:</strong>
    <ul>
      <li><strong>addBookToLibrary() Function:</strong> Implemented a function to add new book objects to the <code>myLibrary</code> array based on user input.</li>
      <li><strong>Form Handling:</strong> Added a form for users to input book details (author, title, number of pages, read status). Implemented event handling to prevent default form submission behavior using <code>event.preventDefault()</code>.</li>
    </ul>
  </li>
  <li><strong>Display Books:</strong>
    <ul>
      <li><strong>Book Display Function:</strong> Wrote a function to loop through the <code>myLibrary</code> array and display each book on the page. Used HTML elements like tables or cards to present the books.</li>
      <li><strong>Initial Data:</strong> Added a few books manually to the array for initial testing and display.</li>
    </ul>
  </li>
  <li><strong>User Interface Elements:</strong>
    <ul>
      <li><strong>“NEW BOOK” Button:</strong> Added a button to open a form where users can enter details for new books.</li>
      <li><strong>Book Display Buttons:</strong> Included buttons on each book display to allow users to:
        <ul>
          <li><strong>Remove Books:</strong> Remove a book from the library.</li>
          <li><strong>Change Read Status:</strong> Toggle the read status of the book.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><strong>Dynamic Interaction:</strong>
    <ul>
      <li><strong>Data Attributes:</strong> Used data attributes to associate DOM elements with book objects for removal and status update operations.</li>
      <li><strong>Status Toggle Function:</strong> Created a function to toggle the read status of a book using the Book prototype.</li>
    </ul>
  </li>
</ul>
