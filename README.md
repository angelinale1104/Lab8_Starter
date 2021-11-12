# Lab 8 - Starter
I worked on this lab alone. (Angelina Le - A16128941)

--- 

**Question 1**: Where would you fit your automated tests in your Recipe project development pipeline?

**Answer**: Within a Github action that runs whenever code is pushed 

---

**Question 2**: Would you use an end to end test to check if a function is returning the correct output? (yes/no)

**Answer**: No. If we want to check if a function is returning a correct output or not, we should unit testing instead of end-to-end test. End-to-end testing is usually used for testing the entire workflow of the application.

--- 

**Question 3**: Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

**Answer**: No. In this case, the "message" feature allows user to interact with other user, which requires different components of the application to interact with one another. This cannot be achieved through the a unit test, but rather an end-to-end testing.

--- 

**Question 4**: Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

**Answer**: Yes. We can use a unit test because we want to check the value of an output, specifically the "max message length". There's no need for different components to interact with another in this case so end-to-end testing is not necessary!