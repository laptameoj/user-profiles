const profileCtrl = require('./profileCtrl');
const userCtrl = require('./userCtrl');

module.exports = app => {
  app.post('/api/login', userCtrl.login);
  app.get('/api/profile', profileCtrl.pushProfilesToNewFriendsArray);
}
