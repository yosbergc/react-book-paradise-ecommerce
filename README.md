# React Book Paradise

This project implements the technical test ‘Development of a Book List Application’ proposed by [Midudev]([https://www.linkedin.com/in/yosbergc/](https://github.com/midudev/pruebas-tecnicas/tree/main/pruebas/01-reading-list)). The goal was to design and implement a small web application for a book list.

The application allows users to view a catalog of available books and create a personalized reading list. Users can filter the list of available books by genre, and a counter is displayed with the number of available books and the number of books on the reading list.

The application maintains a synchronization of the global state that reflects the number of books on the reading list and the number of books currently filtered. If a book is moved from the available list to the reading list, the count of both is updated accordingly.

The reading list data is persisted in the browser’s local storage, so the reading list is maintained when reloading the page. Also, if the user opens the application in two tabs, changes made in one tab are reflected in the other.

The project is deployed on a free hosting service and is accessible through a public URL. The code is well-organized, easy to read, and consistently formatted. In addition, it has been prepared thinking that any team member may have to work on it in the future.
