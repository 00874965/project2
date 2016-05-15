# Assignment 2 - web API for Assignment 1 using Node, Express, MongoDB, Mongoose.

This project was created from scratch with Node, Express, MongoDB, Mongoose & AngularJS .. (versus Assignment 1 whch was developed using Yeoman - angular generator).

## Getting Started

### Prerequisites


- [Git](https://git-scm.com/)
- [Gitbash](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run GitBash on project2 folder.

5. Run `node app` to start the development server. You should get a message telling you node is running on port 3000... navigate there in your browser to view application


###Overview.

This is the extension of Assignment 1 (www.github.com/00874965/project).
There are 2 user types for this web application. (Login / Authorisation not encorporated)
Members - mothers and people effected by GD. Can access recipes to help control blood sugars and can also record blood sugar readings in application. Healthcare users - can access patient / member information on their view.
Assignment 1 took care of the AngularJS front end - This Assignment integrates MongoDB, Mongoose, Node and Express for a fully functioning Web application where records can be accessed via Web and full CRUD functionality exists there for 4 main tables of this applciation: Recipes, Patients, Readings and News Articles.

###Features - Routing & Web API reference 

##### Welcome Page: Static Page to welcome users.
##### About GD Page: Static Page about Gestational Diabetes. Information and FAQs.

##### Latest Recipes: (API Integration for Assignment 2) 

| Method        | ENDPOINT           | Usage                   | RETURNS					   |
| :------------ |:------------------ | :---------------------  | :---------------------------  |
| GET           | /api/recipes       | Gets all recipes        | all recipes                   |
| GET           | /api/recipes/:_id  | Gets specific recipe    | recipe per mongodb _id        |
| POST          | /api/recipes       | Adds a recipe           | all recipes incl new one      |
| PUT           | /api/recipes/:_id  | Updates specific recipe | all recipes incl updated one  |
| DELETE        | /api/recipes/:_id  | Deletes specific recipe | all recipes minus removed one |


##### Patient Records: (API Integration for Assignment 2)

| Method        | ENDPOINT            | Usage                    | RETURNS					     |
| :------------ |:------------------- | :----------------------  | :---------------------------- |
| GET           | /api/patients       | Gets all patients        | all patients                  |
| GET           | /api/patients/:_id  | Gets specific patients   | patient per mongodb _id       |
| POST          | /api/patients       | Adds a patient           | all patients incl new one     |
| PUT           | /api/patients/:_id  | Updates specific patient | all patients incl updated one |
| DELETE        | /api/patients/:_id  | Deletes specific patient | all patients minus removed one|

##### Manage Readings: (API Integration for Assignment 2)

| Method        | ENDPOINT            | Usage                     | RETURNS					      |
| :------------ |:------------------- | :-----------------------  | :---------------------------- |
| GET           | /api/readings       | Gets all readings         | all readings                  |
| GET           | /api/readings/:_id  | Gets specific reading     | reading per mongodb _id       |
| POST          | /api/readings       | Adds a reading            | all readings incl new one     |
| PUT           | /api/readings/:_id  | Updates specific reading  | all readings incl updated one |
| DELETE        | /api/readings/:_id  | Deletes specific reading  | all readings minus removed one|

##### NewsRoom: (API Integration for Assignment 2)

| Method        | ENDPOINT              | Usage                     | RETURNS					     |
| :------------ |:--------------------- | :-----------------------  | :----------------------------- |
| GET           | /api/newsitems        | Gets all newsitems        | all newsitems                  |
| GET           | /api/newsitems/:_id   | Gets specific newsitem    | newsitem per mongodb _id       |
| POST          | /api/newsitems        | Adds a newsitem           | all newsitems incl new one     |
| PUT           | /api/newsitems/:_id   | Updates specific newsitem | all newsitems incl updated one |
| DELETE        | /api/newsitems/:_id   | Deltes specific newsitem  | all newsitems minus removed one|

### REST Client, MongoDB, API GET/POST/PUT/DELETE using recipes as example:

![][Image18]
![][Image4]
![][Image5]
![][Image6]
![][Image7]
![][Image8]
![][Image9]
![][Image10]
![][Image11]
![][Image12]

###Data Model Design.

![][Image1]

###App Design.

![][Image2]
![][Image3]

###UI Design.

![][Image13]
![][Image14]
![][Image15]
![][Image16]
![][Image17]



[image1]: ./DataModel.PNG
[image2]: ./AppDesign.PNG
[image3]: ./AppDesignPackage.PNG
[image4]: ./RestClient_Testing_API_GET.PNG
[image5]: ./LocalHost_Testing_API_GET.png
[image6]: ./RestClient_Testing_API_GETBYID.PNG
[image7]: ./LocalHost_Testing_API_GETBYID.PNG
[image8]: ./RestClient_Testing_API_POST.PNG
[image9]: ./Mongo_Rest_POST_result.PNG
[image10]: ./RestClient_Testing_API_PUT.PNG
[image11]: ./LocalHost_Testing_API_PUT_Update.PNG
[image12]: ./RestClient_Testing_API_DELETE.PNG
[image13]: ./Home_NavBar.PNG
[image14]: ./Recipes.PNG
[image15]: ./Patients.PNG
[image16]: ./Readings.PNG
[image17]: ./NewsRoom.PNG
[image18]: ./MongoDB_Collections.PNG