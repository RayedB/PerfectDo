app.controller('SigninCtrl', ['$state', '$scope', '$timeout', '$window', 'Auth', function($state, $scope, $timeout, $window, Auth) {

    var signinCtrl = this;

    // #############################################################################
    // ------------------------------------------------------- Exposed to view-model
    // #############################################################################

    signinCtrl.credentials = {
        email: "",
        password: ""
    };

    signinCtrl.invalidSignin = false;
    signinCtrl.isWaiting = false;
    signinCtrl.signIn = signIn;
    signinCtrl.signin_form = {
        email_focused: false,
        password_focused: false,
        refreshPass: refreshPass
    }
    signinCtrl.forgot_password = {
        email_focused: false,
        email_value: null,
        email_sent: false,
        email_not_found: false,
        resetPassword: resetPassword
    }
    // #############################################################################
    // ---------------------------------------------------------- Private Functions
    // #############################################################################

    function signIn() {
        signinCtrl.isWaiting = true;
        signinCtrl.invalidSignin = false;
        Auth.login(signinCtrl.credentials).then(function(user) {
            signinCtrl.isWaiting = false;
            $state.go('home.user.profile',{userid: user.id});
        }, function(error) {
            signinCtrl.invalidSignin = true;
            signinCtrl.isWaiting = false;
        });
    }

    function resetPassword() {
        signinCtrl.forgot_password.email_not_found = false;
        var parameters = {email: signinCtrl.forgot_password.email_value}
        Auth.sendResetPasswordInstructions(parameters).then(function() {
            signinCtrl.forgot_password.email_sent = true;
        }, function(error) {
            if (error.data.errors.email[0] == "not found") {
                signinCtrl.forgot_password.email_not_found = true;
            }
        });
    }

    function refreshPass() {
        var focus_password = function() {
            var element = $window.document.getElementById("password-field");
            var element_email = $window.document.getElementById("email-field");
            if(signinCtrl.credentials.email) {
                element.focus();
            } else {
                element_email.focus();
            }
        }

        $timeout(focus_password, 50);

    }
}]);
