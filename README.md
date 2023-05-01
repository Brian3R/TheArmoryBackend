# The Armory
The Armory website is a clothing inventory and outfit generator. Users are able to add items using our interface
into a inventory. Users can also generate outfits based on the clothing in hte inventory using the genrerator page.
The genator tries to produce outfits that the user prefers. Users can also provide feedback on these generated outfits.

# TheArmoryBackend
 Welcome to the Armory backend. The code in this repository is the 
 backend to the frontend armory found at this link (https://github.com/Brian3R/TheArmoryFrontend.git).
 The backend is created node.js and express. In order to use this code node.js should be installed and up to date (version 16.17.0).
 The server is connected to a mongodb database using mongdb atlas. The mongodb key can be placed in a new .env file under the name MONGO_URI (this is called
 in the code).
 
 # Dependencies
 * Users should have node.js and npm install in the directory
 * Users should use command npm i express mongoose morgan cors dotenv nodemon
 # The command to run the code is npm run dev or npm start
