# chat-app
This is a web-based chat application that allows users to communicate in real-time. Users can enter their name, choose a background color for the chat screen, send text messages, images, and share location data. The application stores data both online and offline, ensuring a seamless user experience.

# Features
User Registration/Login: Users can register or log in to access the chat features.

Profile Setup: Users can create a profile by entering their name and choosing a background color for the chat screen.

Chat Interface: The chat interface displays conversation history, allowing users to send text messages. Each message includes the sender's name, message content, timestamp, and background color.

File Upload: Users can upload and send images to the chat. The application handles image storage and retrieval.

Location Sharing: Users can share their location data, integrating with services like Google Maps.

Online and Offline Data Storage: Chat messages, user profiles, and metadata are stored both online and offline for data persistence.

# Technologies Used
Front-End:

HTML, CSS, JavaScript, React Native

Back-End:

Firebase

# Setting up Environment
To use this application, use the Expo app in iOS or use an Android emmulator. Make sure to have the Expo CLI installed. You'll also need to create an account with Expo. If testing on an Android simulator, use Android Studio.

# Database Configuration
This app utilizes FireStore Database to store the data. You can configure the database by going to https://firebase.google.com/ and creating a new project if you dont already have one set up. When setting up the database, make sure to change "allow read, write: if false;" to "allow read, write: if true;" in the rules tab. Then copy the FireBase configuration from the database and put it in the App.js file

# Using the Chat App
Once the environment and database have been created and configured, you can now use the app. To start the app, navigate to the root folder of the project and use -npm expo start (if using android emmulator, you can also run using -npm expo start --android). Starting the app with -npm expo start --offline with enable offline testing.
Note: Expo only supports Node up to version 16.19.0 so make sure to change the version if you are running a newer version of node (use version manager -nvm use 16.19.0)

# Contributors
Kevin A Corcino
