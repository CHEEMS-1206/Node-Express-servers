# Node-Express-servers
A repository created to store all the codes, as I learn creation, handling, and using servers and API using NodeJS and Express-JS.

# PET_SHOP_API_PROJECT
This is the repository for the API project that I have created using the MongoDb, Express and NodeJs, while following the Model,Controller and Routes structure.

The API has details of all the pet animals available for sale at the pet shop.
Available pet categories are:
> Cats
> Dogs
> Birds
> Rabbits
> Fish
> Hamster

. To proceed with using the api download all files / install all dependencies using npm i / create .env file and provide the following in the file 
> DB_URI
> DB_NAME
> DB_USERNAME
> DB_PASSWORD

. To post any new animal 
  POST request @ url/animalType/
  body > raw >
                {
                    "petName" : "",
                    "petNickName" : "",
                    "petAge": "",
                    "petGender" : "",
                    "petImage" : "",
                    "petPrice" : "",
                    "petId" : "",
                    "petBio": "",
                    "petBreed" : "",
                    "petPrevOwner" : ""
                }