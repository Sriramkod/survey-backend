const SurveyManagerController = require('./controllers/SurveyManagerController.js')
const SurveyManagerControllerPolicy = require('./policies/SurveyManagerControllerPolicy.js')
const AuthenticationController = require('./controllers/AuthenticationController.js')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js')
const albums = require("./controllers/album.controller.js");
const songs = require("./controllers/song.controller.js");
const questions  = require("./controllers/question.controller.js");
const surveys  = require("./controllers/survey.controller.js");
const answers  = require("./controllers/answer.controller.js");

module.exports = (app) => {

    app.post('/surveyapi/surveymanager/register', 
        AuthenticationControllerPolicy.register,
        AuthenticationController.register
    )
    app.post('/surveyapi/surveymanager/register', 
        SurveyManagerControllerPolicy.register,
        SurveyManagerController.register
    )
    app.post('/surveyapi/surveymanager/login', 
        SurveyManagerController.login
    )
    //Submit a new Question.....
    app.post('/surveyapi/question', questions.create)
    // find question by survey id
    app.get("/surveyapi/question/survey/:id", questions.findAllBySurveyId)
    
    //create new survey 
    app.post('/surveyapi/survey', surveys.create)

    //get All surveys for a manager...

    app.get('/surveyapi/admin/survey',surveys.findAll)

    app.get('/surveyapi/admin/managers',surveys.findAllSurveyManagers);
    
    // get survey by a survey manager email...
    
    app.get('/surveyapi/survey/:surveymanager',surveys.findAllBySurveyManagers)

    app.post('/surveyapi/answer', answers.create)

    
  app.delete("/surveyapi/question/:id", questions.delete);
  // Create a new album
  app.post("/album", albums.create);

  // Retrieve all albums
  app.get("/album", albums.findAll);

  // Retrieve a single album with id
  app.get("/album/:id", albums.findOne);

  // Update a album with id
  app.put("/album/:id", albums.update);

  // Delete a album with id
  app.delete("/album/:id", albums.delete);

  // Delete all albums
  app.delete("/album", albums.deleteAll);

  //get Albums by artist title
  app.get("/artist",albums.findAllByArtist);


  // Create a new song
  app.post("/song", songs.create);

  // Retrieve all albums
  app.get("/song", songs.findAll);

  // Retrieve a single album with id
  app.get("/song/:id", songs.findOne);

  // Update a song with id
  app.put("/song/:id", songs.update);

  // Delete a song with id
  app.delete("/song/:id", songs.delete);

  // Delete all songs
  app.delete("/song", songs.deleteAll);
  
  app.get("/songs/:id", songs.findAllByAlbum)
}
