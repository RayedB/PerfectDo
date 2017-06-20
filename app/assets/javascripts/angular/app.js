(function(){
  angular
    .module('EffectiveDo',['ui.router','templates','Devise','navbar'])
    .config(function(AuthInterceptProvider) {
        // Intercept 401 Unauthorized everywhere
        AuthInterceptProvider.interceptAuth(true);
    })

}())


// app.config(['AuthProvider', 'AuthInterceptProvider', function(AuthProvider, AuthInterceptProvider) {
//   AuthProvider.resourceName('user');
//   AuthProvider.loginMethod('POST');
//   AuthProvider.loginPath('/users/sign_in.json');
//   AuthProvider.logoutMethod('GET');
//   AuthProvider.logoutPath('/users/sign_out.json');
// }])
