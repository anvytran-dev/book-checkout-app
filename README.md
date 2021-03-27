# full-stack-booklist-checkout

This is a application where a teacher can create a book list of all the books they have in their classroom. When a book is checked out, the teacher can cross it out in the list. When the book is returned, the teacher can uncross the book information. 

Link to Project: https://booklist-checkout.herokuapp.com/

![Project Image](/public/pic/project.png)


### How It's Made:

This project uses EJS, CSS, and JavaScript on the front-end and Node.js + Express.js, and MongoDB on the back-end. 

The user fills out the book information and submits it. This submission is sent as a request to the server. The details of the book is sent and stored to a database in MongoDB. Then, the server requests the data from the database, the data is sent as a response to the front-end so that the information can be rendered dyanmically through EJS. 


### Lesson Learned

I learned how to use CRUD functions to operate on stored data in MongoDB. Also, I learned how to use EJS, a simple templating language that allow us to generate HTML markup with Javascript.  
 

###
