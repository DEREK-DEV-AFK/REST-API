-> RESTful Services also called as RESTful apis

-> Client Server Architecture, Not all apps follow this architecture
   - App it self is the client or the fronted part.
   - Under the hood it need to talk to the Server or the backend to get or save the 
   data.
   - This communication happens usgin the HTTP protocal, same protcal that powers 
   our web.
   - So on Server you expose bunch of services that gonna accessable waya the 
   HTTP protocal

-> REST is the short form of Representational State Transfer it is an convention to 
build this http services,
   - We use http protocal to :  1)Create    data, 
                                2)Read 
                                3)Update 
                                4)Delete 
      we refer to this Operation as CRUD Operations 

   Example :
   Let say we have company call vidly for renting out movies, we have an client app 
   where we manage the list of our customers on the server, we should expose a 
   service at an endpoint like this : `http://vidly.com/api/customers` so the 
   client cqn send HTTP requests to this endpoint to talk to our service now, a few 
   things about this endpoint you need to know :
     -First of all address can start with HTTP or HTTPS that depends on the 
     application and its requirements. If you want the data to be exchange on a 
     secure channel you would use HTTPS.
     - after that we have the domain of the application
     - Next we have `/api` this is not compulsory but you see lot of companies 
     follow this convention to expose their RESTful services, they include the word 
     API somewhere in the address.there is no hard and fast rules
     - after that we have `/customers` we refers to this collection of costumers in 
     our application,  there various endpoints so this is our 
     endpoint to work with the costomers all the operations around coustumers such 
     as creating or updating costumer would be done by sedning an HTTP request to 
     this endpoint.
     standard HTTP methods :
     1) GET - to get data
     2) POST - for creating data
     3) PUT - for  updating the data
     4) DELETE - for deleting the data

   Examples :
   - GET /api/customers - to get all the list of customers.
   - GET /api/customers/1 - to get the cosutemr who's id is 1
   - PUT /api/costumers/1 - to update details of costumers of id 1
   - DELETE /api/costumers/1 - to delete the data of customer of id 1
   - POST /api/costumers - to create new costumer


   EXPRESS :
   
   It comes into the picture to give proper structure so we can easily add more 
    routes while keeping our application code maintainable, there are various app 
    appilcation building web application and web servers on top of node but the 
    most popular one is express.
