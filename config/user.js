module.exports = function(user){
  this.name = user.name || '';
  this.email = user.email || '';
  this.lastname = user.lastname || '';
  this.firstname = user.firstname || '';
  this.token = user.token || '';
  this.id=user.id || '';
  this.photo=user.photo || '';
  this.domain= user.domain || '';
};
