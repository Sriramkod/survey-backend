
// mock out Sequelize
const sequelize = jest.mock('sequelize');
//mock out database model
const db = require('../../app/models');
///db.surverymanager = require("./surveymanager.model.js")(sequelize, Sequelize);
db.surverymanager = {};

const app = require('../../server.js');
const request = require('supertest');

describe('Survey-Feed Surveys controller', () => {

 

  describe('get all surveys ', () => {
    it('calls findAll without query', async () => {
      db.surverymanager.findAll = jest.fn().mockResolvedValue(Promise.resolve([]));
      await request(app)
        .get('/surveyapi/admin/managers')
        .expect(200)
        .then((response) => {
          expect(db.surverymanager.findAll).toHaveBeenCalled();
        });
    });

    
  });
});
