(function(){
  angular
    .module('EffectiveDo',['ui.router','templates','Devise','navbar']);

}())


// app.config(['AuthProvider', 'AuthInterceptProvider', function(AuthProvider, AuthInterceptProvider) {
//   AuthProvider.resourceName('user');
//   AuthProvider.loginMethod('POST');
//   AuthProvider.loginPath('/users/sign_in.json');
//   AuthProvider.logoutMethod('GET');
//   AuthProvider.logoutPath('/users/sign_out.json');
// }])
