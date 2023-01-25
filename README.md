# And_Queiroz_WEB601Assignments_Gramado

Student Name: André Queiroz
Student Number: 0795223

 First project for the WEB601 class using Angular.

 Subject: City of Gramado, RS, Brazil
 Gramado is a city in the southern Brazilian state of Rio Grande do Sul. It is known for its German and Italian-influenced architecture, as well as its scenic views and natural surroundings. The city is a popular tourist destination, especially during the winter months, when visitors can enjoy activities such as skiing and snowboarding. Gramado also hosts a number of cultural events throughout the year, including the Gramado Film Festival and the Natal Luz Festival of Lights.


 Steps for the assignment

-Created an Angular application using Visual Studio Code
-Set the version of the application to 0.0.1 in the package.json
-Added the ability to run npm scripts to generate components, pipes, and directives from the terminal
-Created a folder called helper-files
-Inside the helper-files folder, created two files called content-interface.ts and content-list.ts
-In the content-interface.ts file, defined an interface called Content with parameters such as id, title, description, creator, imgURL, type, and tags
-In the content-list.ts file, created a class called ContentList with:
  -A private array of type Content
  -A constructor that initially sets the array to be empty
  -A getter function that returns the Content array
  -An add function that adds a Content item to the end of the array
  -A function that takes an input of an index of the array and returns a reader-friendly html output of a Content item's properties at that index
-Created a new component called Content-card, which utilizes the ContentList class to   display a list of content on the home page of the application
==================================================================
BONUS::::Handled the case when the index passed to the function getContentHTML is outside of the array's range, and the function will return an html error message instead.
==================================================================
=============ISSUES==============
The issue I am currently facing is that I am unable to import the '@angular/core' module and its corresponding type declarations in the content-card.component.ts file. This is causing an error "Cannot find module '@angular/core' or its corresponding type declarations.ts(2307)"

I have checked that the module is correctly installed and imported in the app.module.ts file, but the error persists. I have also tried restarting the server and clearing the cache, but to no avail.

As an alternative, I have attempted to manually import the module by including the path to the node_modules folder, but this did not resolve the issue. I am currently researching other potential solutions and will update my progress accordingly.
