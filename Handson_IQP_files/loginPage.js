"use strict";
exports.__esModule = true;
var login = /** @class */ (function () {
    function login() {
    }
    login.prototype.submit = function () {
        //Write the code to perform the validation and accordingly navigate to QuizPage or 
        //render validation error messages.
    };
    return login;
}());
var objectCreate;
(function (objectCreate) {
    objectCreate.loginObject = new login();
})(objectCreate || (objectCreate = {}));
function invokeSubmit() {
    objectCreate.loginObject.submit();
}
