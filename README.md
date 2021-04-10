# music-player-application

This Javascript React Redux and Rails Application is an online music player and playlist creation application built to simulate the most popular online music player, Spotify. This application is powered by the Spotify SDK and API. 
 
To watch a demo of the Rails Application in action you can visit: 

## Installation and Usage

Before using this application, you will need an application id and client secret from the Spotify website. Login to developer.spotify.com, create an application with any name, and edit the settings of that application. In the redirectURI, you should put whatever local host URL you intend on running the frontend side of the applciation on, for me it was localhost:3001. In a config.js file in the master branch of the frontend, save your clientId, clientSecret, and redirectUri as exportable const variables so they can be used by the SpotifyAuthButton component.

To use this app:


    -The app will be using localhost:3000 for the backend server by default.
    -The front end should be run on whatever URL specified in the Spotify Dev redirect URI
    -cd into backend
    -Migrate the database tables with 'rails db:migrate'
    -Start the server with 'rails s'
    -cd into the frontend
    -start the redux project with npm install, npm start
    -Users are required to have a Spotify premium account to use this app, Spotify will collect your credentials upon login


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/hopegipson/Music-Player-Application. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/hopegipson/Music-Player-Application/blob/main/CODE_OF_CONDUCT.md).


## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Music Player Application project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/hopegipson/Music-Player-Application/blob/main/CODE_OF_CONDUCT.md).