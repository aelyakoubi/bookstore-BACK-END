Made with:
Windows, Visual Studio Code
-----------------------------------------------------
Computer language: JavaScript, Node.JS, Prisma, MySQL
------------------------------------------------------
Logic: Routes, Middleware, Errorhandling
------------------------------------------------------
Security Authentication: Normal level with username and password / login and token
----------------------------------------------------------------------------------

Set up:
npm install, npm run dev
-----------------------------------------------------------------------------------

This was my first Back-end project at the WincAcademy what was real educational and fun!

special was the learning of enum ItemType in my prisma.schema file to be able to create the record in the database:

 enum ItemType {
  BOOK
  RECORD
} 

Be aware of the right code: 

curl --request POST \
--url https://dev-1s8fgraw4evcfthb.eu.auth0.com/oauth/token \
--header "content-type: application/json" \
--data '{"client_id":"CkBH7CFaQmUuku3xbQOgyi2WN0gO3fmo","client_secret":"1OqvZgUTVe4nIbEg-AIjEa6nwuLMcFXHirjaJTVoQQTKl0hPoVw47qA7fvdTHObv","audience":"https://book-store-api","grant_type":"client_credentials"}' \
--ssl-no-revoke