(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"container\">\n    <div class=\"alert alert-info w80 text-center\" role=\"alert\">\n      404 Not Found \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/question/question.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/question/question.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<div *ngIf=\"question != null\" class=\"container-fluid bg-info\">\n  \n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h3><span class=\"label label-warning\" id=\"qid\">{{ number }}</span> {{ question.title }} </h3>\n            <button *ngIf=\"role=='teacher' && quiz_status != 'published'\" (click)=\"deleteQuestion()\" class=\"btn btn-danger\" style=\"margin-top: 20px;\">Delete This Question</button>\n        </div>\n        <div class=\"modal-body\">\n\n          <div class=\"quiz\" data-toggle=\"buttons\" *ngFor=\"let answer of answers; let i = index\">\n           <label class=\"element-animation1 btn btn-lg btn-primary btn-block\">\n             <span class=\"btn-label\"><i class=\"glyphicon glyphicon-chevron-right\"></i></span>\n             <input type=\"radio\" name=\"q_answer\" value=\"1\">{{answer.title}}\n             <span *ngIf=\"role=='teacher' && answer.is_correct\" class=\"btn-label-right\"><i class=\"glyphicon glyphicon-thumbs-up\"></i></span>\n             <span *ngIf=\"role=='teacher' && !answer.is_correct\" class=\"btn-label-right\"><i class=\"glyphicon glyphicon-thumbs-down\"></i></span>\n             <span *ngIf=\"role=='teacher' && quiz_status=='pending'\" (click)=\"removeAnswer(answer._id)\" class=\"btn-label-delete\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n           </label>\n          </div>\n        </div>\n        <div class=\"modal-footer text-muted\">\n          <span id=\"answer\"></span>\n        </div>\n        <form *ngIf=\"quiz_status == 'pending'\" #answerForm1=\"ngForm\" (ngSubmit)=\"answerForm1.valid && onSubmit(answerForm1)\">\n            <div class=\"form-group\" style=\"padding: 0 10px;\">\n                <input type=\"text\" required class=\"form-control\" #title=\"ngModel\" name=\"title\"\n                 placeholder=\"Enter Answer Body\" [(ngModel)]=\"answerTitle\">\n                 <input type=\"hidden\" name=\"question_id\" [(ngModel)]=\"question._id\">\n            </div>\n            <div style=\"padding: 0 15px;\" *ngIf=\"(answerForm1.touched || answerForm1.submitted) && title.errors\">\n                <label *ngIf=\"title.errors.required\" class=\"validation-message\">Answer is required.</label>\n            </div>\n\n            <fieldset class=\"form-group\">\n                <div class=\"row\" style=\"padding: 0 25px;\">\n                  <legend class=\"col-form-label col-sm-2 pt-0\">Type</legend>\n                  <div class=\"col-sm-10\">\n                    <div class=\"form-check\">\n                      <input class=\"form-check-input\" id=\"correct{{number}}\" type=\"radio\" required #is_correct=\"ngModel\" name=\"is_correct\" [(ngModel)]=\"correct\" value=\"true\">\n                      <label class=\"form-check-label\" for=\"correct{{number}}\" style=\"padding: 0 25px;\">\n                        Correct\n                      </label>\n                    </div>\n                    <div class=\"form-check\">\n                      <input class=\"form-check-input\" id=\"wrong{{number}}\" type=\"radio\" required #is_correct=\"ngModel\" name=\"is_correct\" [(ngModel)]=\"correct\" value=\"false\">\n                      <label class=\"form-check-label\" for=\"wrong{{number}}\" style=\"padding: 0 25px;\">\n                        Wrong\n                      </label>\n                    </div>\n                  </div>\n                </div>\n              </fieldset>\n              <div style=\"padding: 0 15px;\" *ngIf=\"(answerForm1.touched || answerForm1.submitted) && is_correct.errors\">\n                <label *ngIf=\"is_correct.errors.required\" class=\"validation-message\">Type is required.</label>\n            </div>\n            <p *ngIf=\"!hasCorrectAnswer.hasCorrect\" style=\"color: red; padding: 0 15px;\">This Question Does not have a correct answer yet</p>\n            <p style=\"color: red; padding: 0 15px;\">{{ errMsg }}</p>\n            <div class=\"col view\"><button type=\"submit\" class=\"btn btn-primary\">Add Answer</button></div>\n          </form>\n          <br>\n      </div>\n    </div>\n  \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quiz/quiz.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quiz/quiz.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n<nav class=\"navbar navbar-dark bg-dark navbar-expand-sm\">\n  <a class=\"navbar-brand\" style=\"margin-bottom: 20px;\" routerLink=\"/teacher/profile\" routerLinkActive=\"active\">\n    <img src=\"https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png\" width=\"30\" height=\"30\" alt=\"logo\">\n    <span>Quiz App</span>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-list-2\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbar-list-2\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/user\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"javascript:void()\"></a>\n        </li>\n    </ul>\n  </div>\n  <div class=\"navbar-nav actions\"><a class=\"nav-link\" (click)=\"Logout()\" href=\"javascript:void()\">Logout</a></div>\n</nav>\n<div class=\"container-fluid bg-info\">\n    <div class=\"modal-dialog\" *ngIf=\"quiz.status == 'pending'\">\n        <div class=\"modal-content\">\n           <div class=\"modal-header\">\n              <h3><span class=\"label label-warning\" id=\"qid\">+</span> Add New Question</h3>\n          </div>\n          <div class=\"modal-body\">\n  \n              <ul class=\"list-group\">\n                  <li class=\"list-group-item\">\n                      <div class=\"row no-gutters\">\n                          <div class=\"col\">\n                              <div class=\"row\">\n                                  <div class=\"col\">\n                                    <form #questionForm=\"ngForm\" (ngSubmit)=\"questionForm.valid && onSubmit(questionForm)\">\n                                      <div class=\"form-group\">\n                                          <input type=\"text\" required class=\"form-control\" #title=\"ngModel\" name=\"title\"\n                                           placeholder=\"Enter Question Body\" [(ngModel)]=\"quizTitle\">\n                                           <input type=\"hidden\" name=\"quiz_id\" [(ngModel)]=\"quiz_id\">\n                                      </div>\n                                      <div *ngIf=\"(questionForm.touched || questionForm.submitted) && title.errors\">\n                                          <label *ngIf=\"title.errors.required\" class=\"validation-message\"> Question Body is required.</label>\n                                      </div>\n                                      <p style=\"color: red; padding: 0 15px;\">\n                                        {{ errMsg }}\n                                      </p>\n                                      <div class=\"col view\"><button type=\"submit\" class=\"btn btn-primary\">Add</button></div>\n                                    </form>    \n                                  </div>                \n                              </div>\n                          </div>\n                          \n                      </div>\n                  </li>\n              </ul>\n            <br>\n            <div>\n              <p style=\"font-size: 17px; color:green\">Quiz Status : {{ quiz.status }}</p>\n              <div class=\"col view\"><button (click)=\"publish()\" class=\"btn btn-warning\">Publish</button></div>\n            </div>\n            <br>\n            <!-- <p style=\"font-size: 15px; color:red\">This quiz Can't be published. There is Question Wtih no correct answers given</p> -->\n        </div>    \n      </div> \n    </div>\n    <div *ngFor=\"let question of quiz_questions; let i = index\">\n      <app-question (questionEvent)=\"check_state($event)\" [question]=\"question\" [number]=\"i+1\" [quiz_status]=\"quiz.status\"></app-question>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student/student.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student/student.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark navbar-expand-sm\">\n  <a class=\"navbar-brand\" href=\"javascript:void()\">\n    <img src=\"https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png\" width=\"30\" height=\"30\" alt=\"logo\">\n    Quiz App\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-list-2\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbar-list-2\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/student/profile\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"javascript:void()\"></a>\n        </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"javascript:void()\">Welcome {{ userDetails.name }}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"navbar-nav actions\"><a class=\"nav-link\" (click)=\"Logout()\" href=\"javascript:void()\">Logout</a></div>\n</nav>\n<div class=\"container\">\n<div class=\"row justify-content-center\">\n    <div class=\"col-md\">\n        <div class=\"row mt-4\">\n            <div class=\"col-lg-6\">\n                <div class=\"card\" id=\"upcomingEvents\">\n                    <div class=\"card-header\">Published Quizzes</div>\n                    <ul class=\"list-group\">\n                        <li class=\"list-group-item\" *ngFor=\"let published of publishedQuiz\">\n                            <div class=\"row no-gutters\">\n                                <div class=\"col\">\n                                    <div class=\"row\">\n                                        <div class=\"col\">{{ published.title }}</div>\n                                    </div>\n                                    <div class=\"row\">\n                                      <div class=\"col small\">By Mr.{{ published.user_id.name }}</div>\n                                  </div>\n                                </div>\n                                <div class=\"col view\"><button (click)=\"goToQuiz(published._id)\" class=\"btn btn-primary\">View</button></div>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/teacher/teacher-profile/teacher-profile.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/teacher/teacher-profile/teacher-profile.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark navbar-expand-sm\">\n    <a class=\"navbar-brand\" routerLink=\"/teacher/profile\" routerLinkActive=\"active\">\n      <img src=\"https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png\" width=\"30\" height=\"30\" alt=\"logo\">\n      Quiz App\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-list-2\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbar-list-2\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/teacher/profile\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void()\"></a>\n          </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"javascript:void()\">Welcome {{ userDetails.name }}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"navbar-nav actions\"><a class=\"nav-link\" (click)=\"Logout()\" href=\"javascript:void()\">Logout</a></div>\n  </nav>\n<div class=\"container\">\n  <div class=\"row justify-content-center\">\n      <div class=\"col-md\">\n          <div class=\"row mt-4\">\n\n              <div class=\"col-lg-12\">\n                  <div class=\"card\" id=\"upcomingEvents\">\n                      <div class=\"card-header\">Create New Quiz</div>\n                      <ul class=\"list-group\">\n                          <li class=\"list-group-item\">\n                              <div class=\"row no-gutters\">\n                                  <div class=\"col\">\n                                      <div class=\"row\">\n                                          <div class=\"col\">\n                                            <form #quizForm=\"ngForm\" (ngSubmit)=\"quizForm.valid && onSubmit(quizForm)\">\n                                              <div class=\"form-group\">\n                                                  <input type=\"text\" required class=\"form-control\" #title=\"ngModel\" name=\"title\"\n                                                   placeholder=\"Enter Quiz Name\" [(ngModel)]=\"quizTitle\">\n                                              </div>\n                                              <div *ngIf=\"quizForm.touched && title.errors\">\n                                                  <label *ngIf=\"title.errors.required\" class=\"validation-message\">Title is required.</label>\n                                              </div>\n                                              <p style=\"color: red\">\n                                                {{ errMsg }}\n                                              </p>\n                                              <div class=\"col view\"><button (onclick)=\"quizForm.submit\" type=\"submit\" class=\"btn btn-primary\">Create</button></div>\n                                            </form>    \n                                          </div>\n                                      </div>\n                                  </div>\n              \n                              </div>\n                          </li>\n                      </ul>\n                  </div>\n              </div>\n\n              <div class=\"col-lg-6\">\n                  <div class=\"card\" id=\"upcomingEvents\">\n                      <div class=\"card-header\">Pending Quizzes</div>\n                      <ul class=\"list-group\">\n                          <li class=\"list-group-item\" *ngFor=\"let pending of pendingQuiz\">\n                              <div class=\"row no-gutters\">\n                                  <div class=\"col\">\n                                      <div class=\"row\">\n                                          <div class=\"col\">{{ pending.title }}</div>\n                                      </div>\n                                  </div>\n                                  <div class=\"col view\"><button (click)=\"goToQuiz(pending._id)\" class=\"btn btn-primary\">View </button></div> &nbsp;\n                                  <div class=\"col view\"><button (click)=\"deleteQuiz(pending._id)\" class=\"btn btn-danger\">Delete</button></div>\n                              </div>\n                          </li>\n                      </ul>\n                  </div>\n              </div>\n\n              <div class=\"col-lg-6\">\n                  <div class=\"card\" id=\"upcomingEvents\">\n                      <div class=\"card-header\">Published Quizzes</div>\n                      <ul class=\"list-group\">\n                          <li class=\"list-group-item\" *ngFor=\"let published of publishedQuiz\">\n                              <div class=\"row no-gutters\">\n                                  <div class=\"col\">\n                                      <div class=\"row\">\n                                          <div class=\"col\">{{ published.title }}</div>\n                                      </div>\n                                  </div>\n                                  <div class=\"col view\"><button (click)=\"goToQuiz(published._id)\" class=\"btn btn-primary\">View</button></div>\n                              </div>\n                          </li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/teacher/teacher.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/teacher/teacher.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper fadeInDown\">\n  <div id=\"formContent\">\n    <!-- Tabs Titles -->\n\n    <h2 *ngIf=\"(register == true)\">Registeration Form</h2>\n    <h2 *ngIf=\"(register == false)\">Login Form</h2>\n\n    <!-- Login & Register Form -->\n    <form #userForm=\"ngForm\">\n\n      <input type=\"text\" required [pattern]=\"emailRegex\" #email=\"ngModel\" name=\"email\" placeholder=\"Email\"\n      [(ngModel)]=\"User.email\" >\n      <div *ngIf=\"userForm.touched && email.errors\">\n          <label *ngIf=\"email.errors.required\" class=\"validation-message\">This field is required.</label>\n          <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n      </div>\n\n      <!-- Add Name Field if it is in registeration form -->\n      <div *ngIf=\"(register == true)\">\n        <input type=\"text\" required #username=\"ngModel\" name=\"name\" placeholder=\"Name\"\n        [(ngModel)]=\"User.name\">\n        \n        <div *ngIf=\"userForm.touched  && username.errors\">\n            <label *ngIf=\"username.errors.required\" class=\"validation-message\">Name is required.</label>\n        </div>\n      </div>  \n\n      <input type=\"password\" required #password=\"ngModel\" name=\"password\" placeholder=\"password\"\n      [(ngModel)]=\"User.password\">\n\n      <div *ngIf=\"userForm.touched  && password.errors\">\n          <label *ngIf=\"password.errors.required\" class=\"validation-message\">Password is required.</label>\n      </div>\n\n\n      <br><br>\n      <input type=\"radio\" required #role=\"ngModel\" id=\"teacher\" name=\"role\" [(ngModel)]=\"User.role\" value=\"teacher\">\n       <label for=\"teacher\"> Teacher</label>\n      <br>\n      <input type=\"radio\" required #role=\"ngModel\" id=\"student\" name=\"role\" [(ngModel)]=\"User.role\" value=\"student\">\n      <label for=\"student\"> Student</label>\n      <br>\n\n      <div *ngIf=\"userForm.touched && role.errors\">\n          <label *ngIf=\"role.errors.required\" class=\"validation-message\">The Role is required.</label>\n      </div>\n\n\n      <input type=\"submit\" class=\"fadeIn second\" value=\"Reigster\" *ngIf=\"(register == true)\" (click)=\"signUp(userForm)\">\n      <input type=\"submit\" class=\"fadeIn second\" value=\"Log In\" *ngIf=\"(register == false)\" (click)=\"signIn(userForm)\">\n      <hr>\n    </form>\n    <div class=\"alert alert-warning\" role=\"alert\" [textContent]=\"msg\" *ngIf=\"(msg)\">\n         \n    </div>\n    <div id=\"formFooter\">\n      <p class=\"underlineHover\" (click)=\"register=true\" *ngIf=\"(register == false)\">Don't have Account ? Register Now</p>\n      <p class=\"underlineHover\" (click)=\"register=false\" *ngIf=\"(register == true)\">Already have Account ? Login Now</p>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _guards_sign_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/sign.guard */ "./src/app/guards/sign.guard.ts");
/* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teacher/teacher.component */ "./src/app/teacher/teacher.component.ts");
/* harmony import */ var _guards_teacher_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/teacher.guard */ "./src/app/guards/teacher.guard.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _teacher_teacher_profile_teacher_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teacher/teacher-profile/teacher-profile.component */ "./src/app/teacher/teacher-profile/teacher-profile.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _guards_student_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/student.guard */ "./src/app/guards/student.guard.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");













var routes = [
    { path: "user", component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], canActivate: [_guards_sign_guard__WEBPACK_IMPORTED_MODULE_5__["SignGuard"]] },
    {
        path: 'teacher', component: _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_6__["TeacherComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _guards_teacher_guard__WEBPACK_IMPORTED_MODULE_7__["TeacherGuard"]],
        children: [{ path: 'profile', component: _teacher_teacher_profile_teacher_profile_component__WEBPACK_IMPORTED_MODULE_9__["TeacherProfileComponent"] },
            { path: '', redirectTo: '/teacher/profile', pathMatch: 'full' }
        ]
    },
    {
        path: 'quiz/:quiz_id', component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_10__["QuizComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
    },
    {
        path: 'student/profile', component: _student_student_component__WEBPACK_IMPORTED_MODULE_12__["StudentComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _guards_student_guard__WEBPACK_IMPORTED_MODULE_11__["StudentGuard"]],
    },
    { path: "", redirectTo: "user", pathMatch: "full" },
    { path: "**", component: _error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Client-Angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _guards_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.interceptor */ "./src/app/guards/auth.interceptor.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./teacher/teacher.component */ "./src/app/teacher/teacher.component.ts");
/* harmony import */ var _teacher_teacher_profile_teacher_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./teacher/teacher-profile/teacher-profile.component */ "./src/app/teacher/teacher-profile/teacher-profile.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"],
                _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_12__["TeacherComponent"],
                _teacher_teacher_profile_teacher_profile_component__WEBPACK_IMPORTED_MODULE_13__["TeacherProfileComponent"],
                _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_14__["QuizComponent"],
                _question_question_component__WEBPACK_IMPORTED_MODULE_15__["QuestionComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_16__["StudentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _guards_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"],
                    multi: true
                }, _user_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        console.log(this.userService.getUserPayload());
        if (!this.userService.isLoggedIn()) {
            this.userService.deleteToken();
            this.router.navigateByUrl('/user');
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/guards/auth.interceptor.ts ***!
  \********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('noauth') == "true") {
            return next.handle(req.clone());
        }
        else {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            console.log(req.headers);
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) { }, function (err) {
                console.log(err);
                if (err.status == 422) {
                    _this.userService.deleteToken();
                    _this.router.navigate(['/user']);
                }
                //this.router.navigateByUrl('/user');
            }));
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/guards/sign.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/sign.guard.ts ***!
  \**************************************/
/*! exports provided: SignGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignGuard", function() { return SignGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");




var SignGuard = /** @class */ (function () {
    function SignGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    SignGuard.prototype.canActivate = function (next, state) {
        var payload = this.userService.getUserPayload();
        if (this.userService.isLoggedIn()) {
            if (payload.role === "teacher") {
                this.router.navigateByUrl('/teacher/profile');
            }
            else if (payload.role === "student") {
                this.router.navigateByUrl('/student/profile');
            }
            return false;
        }
        return true;
    };
    SignGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignGuard);
    return SignGuard;
}());



/***/ }),

/***/ "./src/app/guards/student.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/student.guard.ts ***!
  \*****************************************/
/*! exports provided: StudentGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentGuard", function() { return StudentGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");




var StudentGuard = /** @class */ (function () {
    function StudentGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    StudentGuard.prototype.canActivate = function (next, state) {
        var payload = this.userService.getUserPayload();
        if (payload.role !== "student") {
            this.userService.deleteToken();
            this.router.navigate(['/user']);
            return false;
        }
        else
            return true;
    };
    StudentGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StudentGuard);
    return StudentGuard;
}());



/***/ }),

/***/ "./src/app/guards/teacher.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/teacher.guard.ts ***!
  \*****************************************/
/*! exports provided: TeacherGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherGuard", function() { return TeacherGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");




var TeacherGuard = /** @class */ (function () {
    function TeacherGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    TeacherGuard.prototype.canActivate = function (next, state) {
        var payload = this.userService.getUserPayload();
        if (payload.role !== "teacher") {
            this.userService.deleteToken();
            this.router.navigate(['/user']);
            return false;
        }
        else
            return true;
    };
    TeacherGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TeacherGuard);
    return TeacherGuard;
}());



/***/ }),

/***/ "./src/app/question/question.component.css":
/*!*************************************************!*\
  !*** ./src/app/question/question.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#qid {\n    padding: 10px 15px;\n    border-radius: 20px;\n  }\n  label.btn {\n      padding: 18px 60px;\n      white-space: normal;\n      -webkit-transform: scale(1.0);\n      -moz-transform: scale(1.0);\n      -o-transform: scale(1.0);\n      -webkit-transition-duration: .3s;\n      -moz-transition-duration: .3s;\n      -o-transition-duration: .3s;\n      transform: scale(1.0);\n      transition-duration: .3s;\n  }\n  label.btn:hover {\n      text-shadow: 0 3px 2px rgba(0,0,0,0.4);\n      -webkit-transform: scale(1.1);\n      transform: scale(1.1);\n  }\n  label.btn-block {\n      text-align: left;\n      position: relative\n  }\n  label .btn-label {\n      position: absolute;\n      left: 0;\n      top: 0;\n      display: inline-block;\n      padding: 0 10px;\n      background: rgba(0,0,0,.15);\n      height: 100%\n  }\n  label .btn-label-right {\n    position: absolute;\n    right: 40px;\n    top: 0;\n    display: inline-block;\n    padding: 0 10px;\n    background: rgba(0,0,0,.15);\n    height: 100%\n}\n  label .btn-label-delete {\n    position: absolute;\n    right: 0px;\n    top: 0;\n    display: inline-block;\n    padding: 0 10px;\n    background: rgba(236, 7, 7);\n    height: 100%\n}\n  label .glyphicon {\n      top: 34%\n  }\n  .element-animation1 {\n      animation: animationFrames ease .8s;\n      animation-iteration-count: 1;\n      transform-origin: 50% 50%;\n      -webkit-animation: animationFrames ease .8s;\n      -webkit-animation-iteration-count: 1;\n      -webkit-transform-origin: 50% 50%;\n      -ms-animation: animationFrames ease .8s;\n      -ms-animation-iteration-count: 1;\n      -ms-transform-origin: 50% 50%\n  }\n  .element-animation2 {\n      animation: animationFrames ease 1s;\n      animation-iteration-count: 1;\n      transform-origin: 50% 50%;\n      -webkit-animation: animationFrames ease 1s;\n      -webkit-animation-iteration-count: 1;\n      -webkit-transform-origin: 50% 50%;\n      -ms-animation: animationFrames ease 1s;\n      -ms-animation-iteration-count: 1;\n      -ms-transform-origin: 50% 50%\n  }\n  .element-animation3 {\n      animation: animationFrames ease 1.2s;\n      animation-iteration-count: 1;\n      transform-origin: 50% 50%;\n      -webkit-animation: animationFrames ease 1.2s;\n      -webkit-animation-iteration-count: 1;\n      -webkit-transform-origin: 50% 50%;\n      -ms-animation: animationFrames ease 1.2s;\n      -ms-animation-iteration-count: 1;\n      -ms-transform-origin: 50% 50%\n  }\n  .element-animation4 {\n      animation: animationFrames ease 1.4s;\n      animation-iteration-count: 1;\n      transform-origin: 50% 50%;\n      -webkit-animation: animationFrames ease 1.4s;\n      -webkit-animation-iteration-count: 1;\n      -webkit-transform-origin: 50% 50%;\n      -ms-animation: animationFrames ease 1.4s;\n      -ms-animation-iteration-count: 1;\n      -ms-transform-origin: 50% 50%\n  }\n  @keyframes animationFrames {\n      0% {\n          opacity: 0;\n          -webkit-transform: translate(-1500px,0px);\n                  transform: translate(-1500px,0px)\n      }\n  \n      60% {\n          opacity: 1;\n          -webkit-transform: translate(30px,0px);\n                  transform: translate(30px,0px)\n      }\n  \n      80% {\n          -webkit-transform: translate(-10px,0px);\n                  transform: translate(-10px,0px)\n      }\n  \n      100% {\n          opacity: 1;\n          -webkit-transform: translate(0px,0px);\n                  transform: translate(0px,0px)\n      }\n  }\n  @-webkit-keyframes animationFrames {\n      0% {\n          opacity: 0;\n          -webkit-transform: translate(-1500px,0px)\n      }\n      60% {\n          opacity: 1;\n          -webkit-transform: translate(30px,0px)\n      }\n  \n      80% {\n          -webkit-transform: translate(-10px,0px)\n      }\n  \n      100% {\n          opacity: 1;\n          -webkit-transform: translate(0px,0px)\n      }\n  }\n  .modal-header {\n      background-color: transparent;\n      color: inherit\n  }\n  .modal-body {\n      min-height: 205px\n  }\n  #loadbar {\n      position: absolute;\n      width: 62px;\n      height: 77px;\n      top: 2em\n  }\n  @-webkit-keyframes fadeG {\n      0% {\n          background-color: #000\n      }\n  \n      100% {\n          background-color: #FFF\n      }\n  }\n  @keyframes fadeG {\n      0% {\n          background-color: #000\n      }\n  \n      100% {\n          background-color: #FFF\n      }\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUdsQixtQkFBbUI7RUFDckI7RUFDQTtNQUNJLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsNkJBQTZCO01BQzdCLDBCQUEwQjtNQUMxQix3QkFBd0I7TUFDeEIsZ0NBQWdDO01BQ2hDLDZCQUE2QjtNQUM3QiwyQkFBMkI7TUFDM0IscUJBQXFCO01BQ3JCLHdCQUF3QjtFQUM1QjtFQUVBO01BQ0ksc0NBQXNDO01BQ3RDLDZCQUE2QjtNQUc3QixxQkFBcUI7RUFDekI7RUFDQTtNQUNJLGdCQUFnQjtNQUNoQjtFQUNKO0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsT0FBTztNQUNQLE1BQU07TUFDTixxQkFBcUI7TUFDckIsZUFBZTtNQUNmLDJCQUEyQjtNQUMzQjtFQUNKO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE1BQU07SUFDTixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQjtBQUNKO0VBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQjtBQUNKO0VBQ0U7TUFDSTtFQUNKO0VBQ0E7TUFDSSxtQ0FBbUM7TUFDbkMsNEJBQTRCO01BQzVCLHlCQUF5QjtNQUN6QiwyQ0FBMkM7TUFDM0Msb0NBQW9DO01BQ3BDLGlDQUFpQztNQUNqQyx1Q0FBdUM7TUFDdkMsZ0NBQWdDO01BQ2hDO0VBQ0o7RUFDQTtNQUNJLGtDQUFrQztNQUNsQyw0QkFBNEI7TUFDNUIseUJBQXlCO01BQ3pCLDBDQUEwQztNQUMxQyxvQ0FBb0M7TUFDcEMsaUNBQWlDO01BQ2pDLHNDQUFzQztNQUN0QyxnQ0FBZ0M7TUFDaEM7RUFDSjtFQUNBO01BQ0ksb0NBQW9DO01BQ3BDLDRCQUE0QjtNQUM1Qix5QkFBeUI7TUFDekIsNENBQTRDO01BQzVDLG9DQUFvQztNQUNwQyxpQ0FBaUM7TUFDakMsd0NBQXdDO01BQ3hDLGdDQUFnQztNQUNoQztFQUNKO0VBQ0E7TUFDSSxvQ0FBb0M7TUFDcEMsNEJBQTRCO01BQzVCLHlCQUF5QjtNQUN6Qiw0Q0FBNEM7TUFDNUMsb0NBQW9DO01BQ3BDLGlDQUFpQztNQUNqQyx3Q0FBd0M7TUFDeEMsZ0NBQWdDO01BQ2hDO0VBQ0o7RUFDQTtNQUNJO1VBQ0ksVUFBVTtVQUNWLHlDQUFnQztrQkFBaEM7TUFDSjs7TUFFQTtVQUNJLFVBQVU7VUFDVixzQ0FBNkI7a0JBQTdCO01BQ0o7O01BRUE7VUFDSSx1Q0FBOEI7a0JBQTlCO01BQ0o7O01BRUE7VUFDSSxVQUFVO1VBQ1YscUNBQTRCO2tCQUE1QjtNQUNKO0VBQ0o7RUFFQTtNQUNJO1VBQ0ksVUFBVTtVQUNWO01BQ0o7TUFDQTtVQUNJLFVBQVU7VUFDVjtNQUNKOztNQUVBO1VBQ0k7TUFDSjs7TUFFQTtVQUNJLFVBQVU7VUFDVjtNQUNKO0VBQ0o7RUFzQkE7TUFDSSw2QkFBNkI7TUFDN0I7RUFDSjtFQUVBO01BQ0k7RUFDSjtFQUNBO01BQ0ksa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxZQUFZO01BQ1o7RUFDSjtFQWFBO01BQ0k7VUFDSTtNQUNKOztNQUVBO1VBQ0k7TUFDSjtFQUNKO0VBcUJBO01BQ0k7VUFDSTtNQUNKOztNQUVBO1VBQ0k7TUFDSjtFQUNKIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNxaWQge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbiAgbGFiZWwuYnRuIHtcbiAgICAgIHBhZGRpbmc6IDE4cHggNjBweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgfVxuICBcbiAgbGFiZWwuYnRuOmhvdmVyIHtcbiAgICAgIHRleHQtc2hhZG93OiAwIDNweCAycHggcmdiYSgwLDAsMCwwLjQpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuICBsYWJlbC5idG4tYmxvY2sge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICB9XG4gIFxuICBsYWJlbCAuYnRuLWxhYmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4xNSk7XG4gICAgICBoZWlnaHQ6IDEwMCVcbiAgfVxuICBcbiAgbGFiZWwgLmJ0bi1sYWJlbC1yaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA0MHB4O1xuICAgIHRvcDogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjE1KTtcbiAgICBoZWlnaHQ6IDEwMCVcbn1cblxubGFiZWwgLmJ0bi1sYWJlbC1kZWxldGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM2LCA3LCA3KTtcbiAgICBoZWlnaHQ6IDEwMCVcbn1cbiAgbGFiZWwgLmdseXBoaWNvbiB7XG4gICAgICB0b3A6IDM0JVxuICB9XG4gIC5lbGVtZW50LWFuaW1hdGlvbjEge1xuICAgICAgYW5pbWF0aW9uOiBhbmltYXRpb25GcmFtZXMgZWFzZSAuOHM7XG4gICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRpb25GcmFtZXMgZWFzZSAuOHM7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgICAtbXMtYW5pbWF0aW9uOiBhbmltYXRpb25GcmFtZXMgZWFzZSAuOHM7XG4gICAgICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlXG4gIH1cbiAgLmVsZW1lbnQtYW5pbWF0aW9uMiB7XG4gICAgICBhbmltYXRpb246IGFuaW1hdGlvbkZyYW1lcyBlYXNlIDFzO1xuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0aW9uRnJhbWVzIGVhc2UgMXM7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgICAtbXMtYW5pbWF0aW9uOiBhbmltYXRpb25GcmFtZXMgZWFzZSAxcztcbiAgICAgIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCVcbiAgfVxuICAuZWxlbWVudC1hbmltYXRpb24zIHtcbiAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uRnJhbWVzIGVhc2UgMS4ycztcbiAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGlvbkZyYW1lcyBlYXNlIDEuMnM7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgICAtbXMtYW5pbWF0aW9uOiBhbmltYXRpb25GcmFtZXMgZWFzZSAxLjJzO1xuICAgICAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJVxuICB9XG4gIC5lbGVtZW50LWFuaW1hdGlvbjQge1xuICAgICAgYW5pbWF0aW9uOiBhbmltYXRpb25GcmFtZXMgZWFzZSAxLjRzO1xuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0aW9uRnJhbWVzIGVhc2UgMS40cztcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICAgIC1tcy1hbmltYXRpb246IGFuaW1hdGlvbkZyYW1lcyBlYXNlIDEuNHM7XG4gICAgICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlXG4gIH1cbiAgQGtleWZyYW1lcyBhbmltYXRpb25GcmFtZXMge1xuICAgICAgMCUge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MDBweCwwcHgpXG4gICAgICB9XG4gIFxuICAgICAgNjAlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsMHB4KVxuICAgICAgfVxuICBcbiAgICAgIDgwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsMHB4KVxuICAgICAgfVxuICBcbiAgICAgIDEwMCUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDBweClcbiAgICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGlvbkZyYW1lcyB7XG4gICAgICAwJSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTAwcHgsMHB4KVxuICAgICAgfVxuICAgICAgNjAlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwwcHgpXG4gICAgICB9XG4gIFxuICAgICAgODAlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LDBweClcbiAgICAgIH1cbiAgXG4gICAgICAxMDAlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDBweClcbiAgICAgIH1cbiAgfVxuICBcbiAgQC1tcy1rZXlmcmFtZXMgYW5pbWF0aW9uRnJhbWVzIHtcbiAgICAgIDAlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwMHB4LDBweClcbiAgICAgIH1cbiAgXG4gICAgICA2MCUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsMHB4KVxuICAgICAgfVxuICAgICAgODAlIHtcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsMHB4KVxuICAgICAgfVxuICBcbiAgICAgIDEwMCUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwwcHgpXG4gICAgICB9XG4gIH1cbiAgXG4gIC5tb2RhbC1oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogaW5oZXJpdFxuICB9XG4gIFxuICAubW9kYWwtYm9keSB7XG4gICAgICBtaW4taGVpZ2h0OiAyMDVweFxuICB9XG4gICNsb2FkYmFyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgaGVpZ2h0OiA3N3B4O1xuICAgICAgdG9wOiAyZW1cbiAgfVxuXG4gIFxuICBALW1vei1rZXlmcmFtZXMgZmFkZUcge1xuICAgICAgMCUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDBcbiAgICAgIH1cbiAgXG4gICAgICAxMDAlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGXG4gICAgICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlRyB7XG4gICAgICAwJSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMFxuICAgICAgfVxuICBcbiAgICAgIDEwMCUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZcbiAgICAgIH1cbiAgfVxuICBcbiAgQC1tcy1rZXlmcmFtZXMgZmFkZUcge1xuICAgICAgMCUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDBcbiAgICAgIH1cbiAgXG4gICAgICAxMDAlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGXG4gICAgICB9XG4gIH1cbiAgXG4gIEAtby1rZXlmcmFtZXMgZmFkZUcge1xuICAgICAgMCUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDBcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZcbiAgICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlRyB7XG4gICAgICAwJSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMFxuICAgICAgfVxuICBcbiAgICAgIDEwMCUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZcbiAgICAgIH1cbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/question/question.component.ts":
/*!************************************************!*\
  !*** ./src/app/question/question.component.ts ***!
  \************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _sharedServices_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../sharedServices/question.service */ "./src/app/sharedServices/question.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sharedServices_answer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../sharedServices/answer.service */ "./src/app/sharedServices/answer.service.ts");
/* harmony import */ var _question_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question.model */ "./src/app/question/question.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(router, userService, questionService, answerService) {
        this.router = router;
        this.userService = userService;
        this.questionService = questionService;
        this.answerService = answerService;
        this.index = 1;
        this.hasCorrectAnswer = { hasCorrect: false };
        this.role = this.userService.getUserPayload().role;
        this.questionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    }
    QuestionComponent.prototype.getAnswers = function () {
        var _this = this;
        this.answerService.getQuestionAnswers(this.question._id).subscribe(function (res) {
            _this.answers = res;
            console.log(res);
        }, function (err) {
            _this.errMsg = err.error;
        });
    };
    QuestionComponent.prototype.hasCorrect = function () {
        var _this = this;
        this.questionService.hasCorrectAnswer(this.question._id).subscribe(function (res) {
            _this.hasCorrectAnswer = res;
            _this.fireEvent({ number: _this.number, correct: res });
            // console.log(this.hasCorrectAnswer)
        }, function (err) {
            console.log(err);
        });
    };
    QuestionComponent.prototype.deleteQuestion = function () {
        var _this = this;
        var sure = confirm("DO You Want to delete This Question");
        if (sure) {
            this.questionService.removeQuestion(this.question._id).subscribe(function (res) {
                console.log(res);
                _this.question = null;
            }, function (err) {
                _this.errMsg = err.error.message;
            });
        }
    };
    QuestionComponent.prototype.removeAnswer = function (ans_id) {
        var _this = this;
        var sure = confirm("DO You Want to delete This Answer");
        if (sure) {
            this.answerService.removeAnswer(ans_id).subscribe(function (res) {
                console.log(res);
                _this.hasCorrect();
                _this.getAnswers();
            }, function (err) {
                _this.errMsg = err.error.message;
            });
        }
    };
    QuestionComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.errMsg = "";
        this.answerService.addAnswer(form.value).subscribe(function (res) {
            _this.hasCorrect();
            _this.getAnswers();
        }, function (err) {
            if (err.status == 409) {
                _this.errMsg = err.error.message;
            }
            else {
                console.log(err);
                _this.errMsg = err.error;
            }
        });
    };
    QuestionComponent.prototype.fireEvent = function (question_state) {
        this.questionEvent.emit(question_state);
    };
    QuestionComponent.prototype.ngOnInit = function () {
        this.hasCorrect();
        this.getAnswers();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _question_model__WEBPACK_IMPORTED_MODULE_5__["Question"])
    ], QuestionComponent.prototype, "question", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], QuestionComponent.prototype, "number", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuestionComponent.prototype, "quiz_status", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuestionComponent.prototype, "questionEvent", void 0);
    QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! raw-loader!./question.component.html */ "./node_modules/raw-loader/index.js!./src/app/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/question/question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _sharedServices_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"], _sharedServices_answer_service__WEBPACK_IMPORTED_MODULE_4__["AnswerService"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/question/question.model.ts":
/*!********************************************!*\
  !*** ./src/app/question/question.model.ts ***!
  \********************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#qid {\n    padding: 10px 15px;\n    border-radius: 20px;\n  }\n  label.btn {\n      padding: 18px 60px;\n      white-space: normal;\n      -webkit-transform: scale(1.0);\n      -moz-transform: scale(1.0);\n      -o-transform: scale(1.0);\n      -webkit-transition-duration: .3s;\n      -moz-transition-duration: .3s;\n      -o-transition-duration: .3s;\n      transform: scale(1.0);\n      transition-duration: .3s;\n  }\n  label.btn:hover {\n      text-shadow: 0 3px 2px rgba(0,0,0,0.4);\n      -webkit-transform: scale(1.1);\n      transform: scale(1.1);\n  }\n  label.btn-block {\n      text-align: left;\n      position: relative\n  }\n  label .btn-label {\n      position: absolute;\n      left: 0;\n      top: 0;\n      display: inline-block;\n      padding: 0 10px;\n      background: rgba(0,0,0,.15);\n      height: 100%\n  }\n  label .glyphicon {\n      top: 34%\n  }\n  .modal-header {\n      background-color: transparent;\n      color: inherit\n  }\n  .modal-body {\n      min-height: 205px\n  }\n  #loadbar {\n      position: absolute;\n      width: 62px;\n      height: 77px;\n      top: 2em\n  }\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFHbEIsbUJBQW1CO0VBQ3JCO0VBQ0E7TUFDSSxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLDZCQUE2QjtNQUM3QiwwQkFBMEI7TUFDMUIsd0JBQXdCO01BQ3hCLGdDQUFnQztNQUNoQyw2QkFBNkI7TUFDN0IsMkJBQTJCO01BQzNCLHFCQUFxQjtNQUNyQix3QkFBd0I7RUFDNUI7RUFFQTtNQUNJLHNDQUFzQztNQUN0Qyw2QkFBNkI7TUFHN0IscUJBQXFCO0VBQ3pCO0VBQ0E7TUFDSSxnQkFBZ0I7TUFDaEI7RUFDSjtFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLE9BQU87TUFDUCxNQUFNO01BQ04scUJBQXFCO01BQ3JCLGVBQWU7TUFDZiwyQkFBMkI7TUFDM0I7RUFDSjtFQUVBO01BQ0k7RUFDSjtFQUVBO01BQ0ksNkJBQTZCO01BQzdCO0VBQ0o7RUFFQTtNQUNJO0VBQ0o7RUFDQTtNQUNJLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsWUFBWTtNQUNaO0VBQ0oiLCJmaWxlIjoic3JjL2FwcC9xdWl6L3F1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNxaWQge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbiAgbGFiZWwuYnRuIHtcbiAgICAgIHBhZGRpbmc6IDE4cHggNjBweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgfVxuICBcbiAgbGFiZWwuYnRuOmhvdmVyIHtcbiAgICAgIHRleHQtc2hhZG93OiAwIDNweCAycHggcmdiYSgwLDAsMCwwLjQpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuICBsYWJlbC5idG4tYmxvY2sge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICB9XG4gIFxuICBsYWJlbCAuYnRuLWxhYmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4xNSk7XG4gICAgICBoZWlnaHQ6IDEwMCVcbiAgfVxuICBcbiAgbGFiZWwgLmdseXBoaWNvbiB7XG4gICAgICB0b3A6IDM0JVxuICB9XG4gIFxuICAubW9kYWwtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IGluaGVyaXRcbiAgfVxuICBcbiAgLm1vZGFsLWJvZHkge1xuICAgICAgbWluLWhlaWdodDogMjA1cHhcbiAgfVxuICAjbG9hZGJhciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogNjJweDtcbiAgICAgIGhlaWdodDogNzdweDtcbiAgICAgIHRvcDogMmVtXG4gIH1cblxuICAiXX0= */"

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _quiz_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz.model */ "./src/app/quiz/quiz.model.ts");
/* harmony import */ var _sharedServices_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../sharedServices/question.service */ "./src/app/sharedServices/question.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sharedServices_quiz_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sharedServices/quiz.service */ "./src/app/sharedServices/quiz.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");







var QuizComponent = /** @class */ (function () {
    function QuizComponent(router, userService, route, quizService, questionService) {
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.quizService = quizService;
        this.questionService = questionService;
        this.quiz = new _quiz_model__WEBPACK_IMPORTED_MODULE_1__["Quiz"]();
        this.canPublish = new Array();
        this.index = 1;
    }
    QuizComponent.prototype.getQuiz = function () {
        var _this = this;
        this.quizService.findQuiz(this.quiz_id).subscribe(function (res) {
            _this.quiz = res;
            // console.log(res)
        }, function (err) {
            _this.errMsg = err.error.message;
        });
    };
    QuizComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questionService.getQuizQuestions(this.quiz_id).subscribe(function (res) {
            _this.quiz_questions = res;
            // console.log(res)
        }, function (err) {
            _this.router.navigate(["**"]);
            _this.errMsg = err.error.message;
        });
    };
    QuizComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.errMsg = "";
        this.questionService.addQuestion(form.value).subscribe(function (res) {
            _this.getQuestions();
        }, function (err) {
            if (err.status == 409) {
                _this.errMsg = err.error.message;
            }
            else {
                console.log(err);
                _this.errMsg = err.error;
            }
        });
    };
    QuizComponent.prototype.questionhasCorrect = function (question) {
        var _this = this;
        this.questionService.hasCorrectAnswer(question._id).subscribe(function (res) {
            _this.canPublish.push(res);
        }, function (err) {
            console.log(err);
        });
    };
    QuizComponent.prototype.publish = function () {
        var _this = this;
        var sure = confirm('Once You publish This Quiz You Will not be able to Edit it\nDo you want to publish ?');
        if (sure) {
            var publishable_1 = true;
            this.canPublish.forEach(function (elm) {
                if (elm.hasCorrect === false) {
                    publishable_1 = false;
                }
            });
            console.log(publishable_1);
            if (!publishable_1) {
                alert('Please Make Sure that Every Question has at least 1 correct answer');
                return;
            }
            else {
                this.quizService.publishQuiz(this.quiz_id).subscribe(function (res) {
                    _this.quiz = res;
                }, function (err) {
                    console.log(err.error);
                    alert(err.error.message);
                });
            }
        }
    };
    QuizComponent.prototype.check_state = function (is_correct) {
        this.canPublish[is_correct.number - 1] = is_correct.correct;
        console.log(this.canPublish);
    };
    QuizComponent.prototype.Logout = function () {
        this.userService.deleteToken();
        this.router.navigate(['/user']);
    };
    QuizComponent.prototype.ngOnInit = function () {
        this.quiz_id = this.route.snapshot.paramMap.get('quiz_id');
        this.getQuiz();
        this.getQuestions();
    };
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! raw-loader!./quiz.component.html */ "./node_modules/raw-loader/index.js!./src/app/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _sharedServices_quiz_service__WEBPACK_IMPORTED_MODULE_5__["QuizService"], _sharedServices_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.model.ts":
/*!************************************!*\
  !*** ./src/app/quiz/quiz.model.ts ***!
  \************************************/
/*! exports provided: Quiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
var Quiz = /** @class */ (function () {
    function Quiz() {
    }
    return Quiz;
}());



/***/ }),

/***/ "./src/app/sharedServices/answer.service.ts":
/*!**************************************************!*\
  !*** ./src/app/sharedServices/answer.service.ts ***!
  \**************************************************/
/*! exports provided: AnswerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerService", function() { return AnswerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AnswerService = /** @class */ (function () {
    function AnswerService(http) {
        this.http = http;
    }
    AnswerService.prototype.addAnswer = function (answer) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/answers/create', answer);
    };
    AnswerService.prototype.getQuestionAnswers = function (question_id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/answers/get', { "question_id": question_id });
    };
    AnswerService.prototype.removeAnswer = function (answer_id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/answers/' + answer_id);
    };
    AnswerService.prototype.updateAnswer = function (answer) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/answers/update', answer);
    };
    AnswerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AnswerService);
    return AnswerService;
}());



/***/ }),

/***/ "./src/app/sharedServices/question.service.ts":
/*!****************************************************!*\
  !*** ./src/app/sharedServices/question.service.ts ***!
  \****************************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var QuestionService = /** @class */ (function () {
    function QuestionService(http) {
        this.http = http;
    }
    QuestionService.prototype.addQuestion = function (question) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/questions/create', question);
    };
    QuestionService.prototype.getQuizQuestions = function (quiz_id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/questions/get', { "quiz_id": quiz_id });
    };
    //Teacher Pending Quizzes
    QuestionService.prototype.removeQuestion = function (question_id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/questions/' + question_id);
    };
    QuestionService.prototype.hasCorrectAnswer = function (question_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/questions/' + question_id + '/hasCorrectAnswer');
    };
    QuestionService.prototype.updateQuestion = function (question) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/questions/update', question);
    };
    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/sharedServices/quiz.service.ts":
/*!************************************************!*\
  !*** ./src/app/sharedServices/quiz.service.ts ***!
  \************************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var QuizService = /** @class */ (function () {
    function QuizService(http) {
        this.http = http;
    }
    QuizService.prototype.addQuiz = function (quiz) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/quiz/create', quiz);
    };
    QuizService.prototype.findQuiz = function (quiz_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/quiz/get/' + quiz_id);
    };
    QuizService.prototype.deleteQuiz = function (quiz_id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/quiz/' + quiz_id);
    };
    QuizService.prototype.publishQuiz = function (quiz_id) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/quiz/updateStatus', { "quiz_id": quiz_id });
    };
    //Teacher Pending Quizzes
    QuizService.prototype.getPending = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/quiz/pending');
    };
    QuizService.prototype.getPublished = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/quiz/published');
    };
    QuizService.prototype.getStudentQuiz = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/quiz/allPublished');
    };
    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\");\nhtml, body {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  background: #e0e0e0;\n  color: #616161;\n}\n.bg-custom-1 {\n    background-color: #85144b;\n  }\n.bg-custom-2 {\n  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);\n  }\n.cover {\n  height: 200px;\n  background: #2d682f;\n}\n.btn {\n  cursor: pointer;\n}\n.btn.btn-primary {\n  background: #4caf50;\n  border-color: #4caf50;\n}\n.btn.btn-primary:hover {\n  background: #3d8b40;\n  border-color: #2d682f;\n}\n.btn.btn-primary:focus {\n  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.5);\n}\n.btn.btn-secondary {\n  background: #3d8b40;\n  color: #fff;\n  border-color: #3d8b40;\n}\n.btn.btn-secondary:hover {\n  background: #2d682f;\n  border-color: #1e441f;\n}\n.btn.btn-secondary:focus {\n  box-shadow: 0 0 0 2px rgba(61, 139, 64, 0.5);\n}\n.bg-primary {\n  background: #4caf50 !important;\n}\n.navbar-nav.actions {\n  flex-direction: row;\n}\n.navbar-nav.actions .nav-link {\n  position: relative;\n  font-size: 16px;\n  padding: 4px 12px;\n}\n.navbar-nav.actions .nav-link .badge {\n  position: absolute;\n  right: 1px;\n  top: 1px;\n  background: #3d8b40;\n}\n.small {\n  color: rgba(97, 97, 97, 0.8);\n}\n.card {\n  border: none;\n  border-top: 5px solid lightgray;\n  border-radius: 0;\n  margin-bottom: 30px;\n}\n.card .card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 700;\n}\n.card .row {\n  width: 100%;\n}\n.alert {\n  margin-bottom: 30px;\n}\na.action {\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 500;\n  color: #03a9f4;\n}\na.action:hover {\n  color: #0288d1;\n}\n#left {\n  margin-top: -150px;\n  flex: 0 0 300px;\n}\n#user .fa {\n  font-size: 20px;\n}\n#user #userImage {\n  background: #4caf50;\n  height: 200px;\n}\n#user #renew {\n  display: block;\n  width: 100%;\n}\n#user .row {\n  width: auto;\n}\n#connections .list {\n  margin: 15px 30px;\n}\n#connections .list .list-item {\n  width: 30px;\n  height: 30px;\n  margin: 5px;\n  background: #4caf50;\n  color: #fff;\n  cursor: pointer;\n}\n#connections .list .list-item:hover {\n  background: #3d8b40;\n}\n#upcomingEvents .view {\n  flex: 0 0 60px;\n}\n#goals .row .details {\n  flex: 0 0 60px;\n}\n.signup {\n  flex: 0 0 125px;\n}\n#recentActivity em {\n  font-style: normal;\n  color: #4caf50;\n}\n#recentActivity .right {\n  flex: 0 0 100px;\n  height: 100%;\n}\n#recentActivity .right .view {\n  display: flex;\n  justify-content: center;\n}\n.icon {\n  position: relative;\n  flex: 0 0 40px;\n  text-align: center;\n  flex-shrink: 0;\n  margin-right: 10px;\n  font: normal normal normal 14px/1 FontAwesome;\n}\n.icon.warning:after {\n  content: \"\\f071\";\n  color: #ff9800;\n  position: absolute;\n  font-size: 18px;\n  top: 3px;\n  left: 28px;\n}\n.icon .fa-stack-1x {\n  color: #fff;\n}\n@media (max-width: 768px) {\n  .navbar-nav.actions {\n    position: absolute;\n    right: 70px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFO0FBQzVFO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUVBO0lBQ0kseUJBQXlCO0VBQzNCO0FBRUE7RUFDQSxrRUFBa0U7RUFDbEU7QUFFRjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDRDQUE0QztBQUM5QztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixRQUFRO0VBQ1IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDQwMCw3MDBcIik7XG5odG1sLCBib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIGNvbG9yOiAjNjE2MTYxO1xufVxuXG4uYmctY3VzdG9tLTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTE0NGI7XG4gIH1cbiAgXG4gIC5iZy1jdXN0b20tMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNWRlZywgIzEzNTQ3YSAwJSwgIzgwZDBjNyAxMDAlKTtcbiAgfVxuICBcbi5jb3ZlciB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQ6ICMyZDY4MmY7XG59XG5cbi5idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzRjYWY1MDtcbiAgYm9yZGVyLWNvbG9yOiAjNGNhZjUwO1xufVxuLmJ0bi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzZDhiNDA7XG4gIGJvcmRlci1jb2xvcjogIzJkNjgyZjtcbn1cbi5idG4uYnRuLXByaW1hcnk6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSg3NiwgMTc1LCA4MCwgMC41KTtcbn1cbi5idG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6ICMzZDhiNDA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICMzZDhiNDA7XG59XG4uYnRuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMmQ2ODJmO1xuICBib3JkZXItY29sb3I6ICMxZTQ0MWY7XG59XG4uYnRuLmJ0bi1zZWNvbmRhcnk6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSg2MSwgMTM5LCA2NCwgMC41KTtcbn1cblxuLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjNGNhZjUwICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItbmF2LmFjdGlvbnMge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLm5hdmJhci1uYXYuYWN0aW9ucyAubmF2LWxpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogNHB4IDEycHg7XG59XG4ubmF2YmFyLW5hdi5hY3Rpb25zIC5uYXYtbGluayAuYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcHg7XG4gIHRvcDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjM2Q4YjQwO1xufVxuXG4uc21hbGwge1xuICBjb2xvcjogcmdiYSg5NywgOTcsIDk3LCAwLjgpO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5jYXJkIC5yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFsZXJ0IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuYS5hY3Rpb24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDNhOWY0O1xufVxuYS5hY3Rpb246aG92ZXIge1xuICBjb2xvcjogIzAyODhkMTtcbn1cblxuI2xlZnQge1xuICBtYXJnaW4tdG9wOiAtMTUwcHg7XG4gIGZsZXg6IDAgMCAzMDBweDtcbn1cblxuI3VzZXIgLmZhIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuI3VzZXIgI3VzZXJJbWFnZSB7XG4gIGJhY2tncm91bmQ6ICM0Y2FmNTA7XG4gIGhlaWdodDogMjAwcHg7XG59XG4jdXNlciAjcmVuZXcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4jdXNlciAucm93IHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbiNjb25uZWN0aW9ucyAubGlzdCB7XG4gIG1hcmdpbjogMTVweCAzMHB4O1xufVxuI2Nvbm5lY3Rpb25zIC5saXN0IC5saXN0LWl0ZW0ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDVweDtcbiAgYmFja2dyb3VuZDogIzRjYWY1MDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjb25uZWN0aW9ucyAubGlzdCAubGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNkOGI0MDtcbn1cblxuI3VwY29taW5nRXZlbnRzIC52aWV3IHtcbiAgZmxleDogMCAwIDYwcHg7XG59XG5cbiNnb2FscyAucm93IC5kZXRhaWxzIHtcbiAgZmxleDogMCAwIDYwcHg7XG59XG5cbi5zaWdudXAge1xuICBmbGV4OiAwIDAgMTI1cHg7XG59XG5cbiNyZWNlbnRBY3Rpdml0eSBlbSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgY29sb3I6ICM0Y2FmNTA7XG59XG4jcmVjZW50QWN0aXZpdHkgLnJpZ2h0IHtcbiAgZmxleDogMCAwIDEwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jcmVjZW50QWN0aXZpdHkgLnJpZ2h0IC52aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAwIDAgNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG59XG4uaWNvbi53YXJuaW5nOmFmdGVyIHtcbiAgY29udGVudDogXCJcXGYwNzFcIjtcbiAgY29sb3I6ICNmZjk4MDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0b3A6IDNweDtcbiAgbGVmdDogMjhweDtcbn1cbi5pY29uIC5mYS1zdGFjay0xeCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhci1uYXYuYWN0aW9ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA3MHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _sharedServices_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedServices/quiz.service */ "./src/app/sharedServices/quiz.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user.model */ "./src/app/user/user.model.ts");






var StudentComponent = /** @class */ (function () {
    function StudentComponent(userService, quizService, router) {
        this.userService = userService;
        this.quizService = quizService;
        this.router = router;
        this.userDetails = new _user_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
    }
    StudentComponent.prototype.getStudentDetails = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            _this.errMsg = err.error.message;
        });
    };
    StudentComponent.prototype.getPublishedQuiz = function () {
        var _this = this;
        this.quizService.getStudentQuiz().subscribe(function (res) {
            _this.publishedQuiz = res;
        }, function (err) {
            _this.errMsg = err.error.message;
        });
    };
    StudentComponent.prototype.goToQuiz = function (quiz_id) {
        this.router.navigate(["/quiz", quiz_id]);
    };
    StudentComponent.prototype.ngOnInit = function () {
        this.getStudentDetails();
        this.getPublishedQuiz();
    };
    StudentComponent.prototype.Logout = function () {
        this.userService.deleteToken();
        this.router.navigate(['/user']);
    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! raw-loader!./student.component.html */ "./node_modules/raw-loader/index.js!./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _sharedServices_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/teacher/teacher-profile/teacher-profile.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/teacher/teacher-profile/teacher-profile.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\");\nhtml, body {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  background: #e0e0e0;\n  color: #616161;\n}\n.bg-custom-1 {\n    background-color: #85144b;\n  }\n.bg-custom-2 {\n  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);\n  }\n.cover {\n  height: 200px;\n  background: #2d682f;\n}\n.btn {\n  cursor: pointer;\n}\n.btn.btn-primary {\n  background: #4caf50;\n  border-color: #4caf50;\n}\n.btn.btn-primary:hover {\n  background: #3d8b40;\n  border-color: #2d682f;\n}\n.btn.btn-primary:focus {\n  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.5);\n}\n.btn.btn-secondary {\n  background: #3d8b40;\n  color: #fff;\n  border-color: #3d8b40;\n}\n.btn.btn-secondary:hover {\n  background: #2d682f;\n  border-color: #1e441f;\n}\n.btn.btn-secondary:focus {\n  box-shadow: 0 0 0 2px rgba(61, 139, 64, 0.5);\n}\n.bg-primary {\n  background: #4caf50 !important;\n}\n.navbar-nav.actions {\n  flex-direction: row;\n}\n.navbar-nav.actions .nav-link {\n  position: relative;\n  font-size: 16px;\n  padding: 4px 12px;\n}\n.navbar-nav.actions .nav-link .badge {\n  position: absolute;\n  right: 1px;\n  top: 1px;\n  background: #3d8b40;\n}\n.small {\n  color: rgba(97, 97, 97, 0.8);\n}\n.card {\n  border: none;\n  border-top: 5px solid lightgray;\n  border-radius: 0;\n  margin-bottom: 30px;\n}\n.card .card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 700;\n}\n.card .row {\n  width: 100%;\n}\n.alert {\n  margin-bottom: 30px;\n}\na.action {\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 500;\n  color: #03a9f4;\n}\na.action:hover {\n  color: #0288d1;\n}\n#left {\n  margin-top: -150px;\n  flex: 0 0 300px;\n}\n#user .fa {\n  font-size: 20px;\n}\n#user #userImage {\n  background: #4caf50;\n  height: 200px;\n}\n#user #renew {\n  display: block;\n  width: 100%;\n}\n#user .row {\n  width: auto;\n}\n#connections .list {\n  margin: 15px 30px;\n}\n#connections .list .list-item {\n  width: 30px;\n  height: 30px;\n  margin: 5px;\n  background: #4caf50;\n  color: #fff;\n  cursor: pointer;\n}\n#connections .list .list-item:hover {\n  background: #3d8b40;\n}\n#upcomingEvents .view {\n  flex: 0 0 60px;\n}\n#goals .row .details {\n  flex: 0 0 60px;\n}\n.signup {\n  flex: 0 0 125px;\n}\n#recentActivity em {\n  font-style: normal;\n  color: #4caf50;\n}\n#recentActivity .right {\n  flex: 0 0 100px;\n  height: 100%;\n}\n#recentActivity .right .view {\n  display: flex;\n  justify-content: center;\n}\n.icon {\n  position: relative;\n  flex: 0 0 40px;\n  text-align: center;\n  flex-shrink: 0;\n  margin-right: 10px;\n  font: normal normal normal 14px/1 FontAwesome;\n}\n.icon.warning:after {\n  content: \"\\f071\";\n  color: #ff9800;\n  position: absolute;\n  font-size: 18px;\n  top: 3px;\n  left: 28px;\n}\n.icon .fa-stack-1x {\n  color: #fff;\n}\n@media (max-width: 768px) {\n  .navbar-nav.actions {\n    position: absolute;\n    right: 70px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci90ZWFjaGVyLXByb2ZpbGUvdGVhY2hlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFO0FBQzVFO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUVBO0lBQ0kseUJBQXlCO0VBQzNCO0FBRUE7RUFDQSxrRUFBa0U7RUFDbEU7QUFFRjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDRDQUE0QztBQUM5QztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixRQUFRO0VBQ1IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdGVhY2hlci90ZWFjaGVyLXByb2ZpbGUvdGVhY2hlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDQwMCw3MDBcIik7XG5odG1sLCBib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIGNvbG9yOiAjNjE2MTYxO1xufVxuXG4uYmctY3VzdG9tLTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTE0NGI7XG4gIH1cbiAgXG4gIC5iZy1jdXN0b20tMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNWRlZywgIzEzNTQ3YSAwJSwgIzgwZDBjNyAxMDAlKTtcbiAgfVxuICBcbi5jb3ZlciB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQ6ICMyZDY4MmY7XG59XG5cbi5idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzRjYWY1MDtcbiAgYm9yZGVyLWNvbG9yOiAjNGNhZjUwO1xufVxuLmJ0bi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzZDhiNDA7XG4gIGJvcmRlci1jb2xvcjogIzJkNjgyZjtcbn1cbi5idG4uYnRuLXByaW1hcnk6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSg3NiwgMTc1LCA4MCwgMC41KTtcbn1cbi5idG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6ICMzZDhiNDA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICMzZDhiNDA7XG59XG4uYnRuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMmQ2ODJmO1xuICBib3JkZXItY29sb3I6ICMxZTQ0MWY7XG59XG4uYnRuLmJ0bi1zZWNvbmRhcnk6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSg2MSwgMTM5LCA2NCwgMC41KTtcbn1cblxuLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjNGNhZjUwICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItbmF2LmFjdGlvbnMge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLm5hdmJhci1uYXYuYWN0aW9ucyAubmF2LWxpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogNHB4IDEycHg7XG59XG4ubmF2YmFyLW5hdi5hY3Rpb25zIC5uYXYtbGluayAuYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcHg7XG4gIHRvcDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjM2Q4YjQwO1xufVxuXG4uc21hbGwge1xuICBjb2xvcjogcmdiYSg5NywgOTcsIDk3LCAwLjgpO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5jYXJkIC5yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFsZXJ0IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuYS5hY3Rpb24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDNhOWY0O1xufVxuYS5hY3Rpb246aG92ZXIge1xuICBjb2xvcjogIzAyODhkMTtcbn1cblxuI2xlZnQge1xuICBtYXJnaW4tdG9wOiAtMTUwcHg7XG4gIGZsZXg6IDAgMCAzMDBweDtcbn1cblxuI3VzZXIgLmZhIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuI3VzZXIgI3VzZXJJbWFnZSB7XG4gIGJhY2tncm91bmQ6ICM0Y2FmNTA7XG4gIGhlaWdodDogMjAwcHg7XG59XG4jdXNlciAjcmVuZXcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4jdXNlciAucm93IHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbiNjb25uZWN0aW9ucyAubGlzdCB7XG4gIG1hcmdpbjogMTVweCAzMHB4O1xufVxuI2Nvbm5lY3Rpb25zIC5saXN0IC5saXN0LWl0ZW0ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDVweDtcbiAgYmFja2dyb3VuZDogIzRjYWY1MDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjb25uZWN0aW9ucyAubGlzdCAubGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNkOGI0MDtcbn1cblxuI3VwY29taW5nRXZlbnRzIC52aWV3IHtcbiAgZmxleDogMCAwIDYwcHg7XG59XG5cbiNnb2FscyAucm93IC5kZXRhaWxzIHtcbiAgZmxleDogMCAwIDYwcHg7XG59XG5cbi5zaWdudXAge1xuICBmbGV4OiAwIDAgMTI1cHg7XG59XG5cbiNyZWNlbnRBY3Rpdml0eSBlbSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgY29sb3I6ICM0Y2FmNTA7XG59XG4jcmVjZW50QWN0aXZpdHkgLnJpZ2h0IHtcbiAgZmxleDogMCAwIDEwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jcmVjZW50QWN0aXZpdHkgLnJpZ2h0IC52aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAwIDAgNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG59XG4uaWNvbi53YXJuaW5nOmFmdGVyIHtcbiAgY29udGVudDogXCJcXGYwNzFcIjtcbiAgY29sb3I6ICNmZjk4MDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0b3A6IDNweDtcbiAgbGVmdDogMjhweDtcbn1cbi5pY29uIC5mYS1zdGFjay0xeCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhci1uYXYuYWN0aW9ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA3MHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/teacher/teacher-profile/teacher-profile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/teacher/teacher-profile/teacher-profile.component.ts ***!
  \**********************************************************************/
/*! exports provided: TeacherProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherProfileComponent", function() { return TeacherProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_sharedServices_quiz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sharedServices/quiz.service */ "./src/app/sharedServices/quiz.service.ts");
/* harmony import */ var src_app_user_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user/user.model */ "./src/app/user/user.model.ts");






var TeacherProfileComponent = /** @class */ (function () {
    function TeacherProfileComponent(userService, quizService, router) {
        this.userService = userService;
        this.quizService = quizService;
        this.router = router;
        this.userDetails = new src_app_user_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
    }
    TeacherProfileComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.errMsg = "";
        this.quizService.addQuiz(form.value).subscribe(function (res) {
            _this.getPendingQuiz();
        }, function (err) {
            if (err.status == 409) {
                _this.errMsg = err.error.message;
            }
            else {
                _this.errMsg = err.error;
            }
        });
    };
    TeacherProfileComponent.prototype.getTeacherDetails = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (res) {
            _this.userDetails = res;
        }, function (err) {
            _this.errMsg = err.error.message;
        });
    };
    TeacherProfileComponent.prototype.getPendingQuiz = function () {
        var _this = this;
        this.quizService.getPending().subscribe(function (res) {
            console.log(res);
            _this.pendingQuiz = res;
        }, function (err) {
            _this.errMsg = err.error.message;
        });
    };
    TeacherProfileComponent.prototype.getPublishedQuiz = function () {
        var _this = this;
        this.quizService.getPublished().subscribe(function (res) {
            _this.publishedQuiz = res;
        }, function (err) {
            _this.errMsg = err.error.message;
        });
    };
    TeacherProfileComponent.prototype.goToQuiz = function (quiz_id) {
        this.router.navigate(["/quiz", quiz_id]);
    };
    TeacherProfileComponent.prototype.deleteQuiz = function (quiz_id) {
        var _this = this;
        var sure = confirm("Delete This Quiz with all its content");
        if (sure) {
            this.quizService.deleteQuiz(quiz_id).subscribe(function (res) {
                console.log(res);
                _this.getPendingQuiz();
                _this.getPublishedQuiz();
            }, function (err) {
                _this.errMsg = err.error.message;
            });
        }
    };
    TeacherProfileComponent.prototype.ngOnInit = function () {
        this.getTeacherDetails();
        this.getPendingQuiz();
        this.getPublishedQuiz();
    };
    TeacherProfileComponent.prototype.Logout = function () {
        this.userService.deleteToken();
        this.router.navigate(['/user']);
    };
    TeacherProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teacher-profile',
            template: __webpack_require__(/*! raw-loader!./teacher-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/teacher/teacher-profile/teacher-profile.component.html"),
            styles: [__webpack_require__(/*! ./teacher-profile.component.css */ "./src/app/teacher/teacher-profile/teacher-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_sharedServices_quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TeacherProfileComponent);
    return TeacherProfileComponent;
}());



/***/ }),

/***/ "./src/app/teacher/teacher.component.css":
/*!***********************************************!*\
  !*** ./src/app/teacher/teacher.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvdGVhY2hlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/teacher/teacher.component.ts":
/*!**********************************************!*\
  !*** ./src/app/teacher/teacher.component.ts ***!
  \**********************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeacherComponent = /** @class */ (function () {
    function TeacherComponent() {
    }
    TeacherComponent.prototype.ngOnInit = function () {
    };
    TeacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teacher',
            template: __webpack_require__(/*! raw-loader!./teacher.component.html */ "./node_modules/raw-loader/index.js!./src/app/teacher/teacher.component.html"),
            styles: [__webpack_require__(/*! ./teacher.component.css */ "./src/app/teacher/teacher.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeacherComponent);
    return TeacherComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* BASIC */\n\nhtml {\n    background-color: #56baed;\n  }\n\nbody {\n    font-family: \"Poppins\", sans-serif;\n    height: 100vh;\n  }\n\na {\n    color: #92badd;\n    display:inline-block;\n    text-decoration: none;\n    font-weight: 400;\n  }\n\nh2 {\n    text-align: center;\n    font-size: 16px;\n    font-weight: 600;\n    text-transform: uppercase;\n    display:inline-block;\n    margin: 40px 8px 10px 8px; \n    color: #cccccc;\n  }\n\n/* STRUCTURE */\n\n.wrapper {\n    display: flex;\n    align-items: center;\n    flex-direction: column; \n    justify-content: center;\n    width: 100%;\n    min-height: 100%;\n    padding: 20px;\n  }\n\n#formContent {\n    border-radius: 10px 10px 10px 10px;\n    background: #fff;\n    padding: 30px;\n    width: 90%;\n    max-width: 450px;\n    position: relative;\n    padding: 0px;\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n    text-align: center;\n  }\n\n#formFooter {\n    background-color: #f6f6f6;\n    border-top: 1px solid #dce8f1;\n    padding: 25px;\n    text-align: center;\n    border-radius: 0 0 10px 10px;\n  }\n\n/* TABS */\n\nh2.inactive {\n    color: #cccccc;\n  }\n\nh2.active {\n    color: #0d0d0d;\n    border-bottom: 2px solid #5fbae9;\n  }\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button], input[type=submit], input[type=reset]  {\n    background-color: #56baed;\n    border: none;\n    color: white;\n    padding: 15px 80px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 13px;\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n    border-radius: 5px 5px 5px 5px;\n    margin: 5px 20px 40px 20px;\n    transition: all 0.3s ease-in-out;\n  }\n\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\n    background-color: #39ace7;\n  }\n\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95);\n  }\n\ninput[type=text], input[type=password] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 85%;\n    border: 2px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n  }\n\ninput[type=text]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9;\n  }\n\ninput[type=text]:placeholder {\n    color: #cccccc;\n  }\n\n/* ANIMATIONS */\n\n/* Simple CSS3 Fade-in-down Animation */\n\n.fadeInDown {\n    -webkit-animation-name: fadeInDown;\n    animation-name: fadeInDown;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n  }\n\n@-webkit-keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, -100%, 0);\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: none;\n      transform: none;\n    }\n  }\n\n@keyframes fadeInDown {\n    0% {\n      opacity: 0;\n      -webkit-transform: translate3d(0, -100%, 0);\n      transform: translate3d(0, -100%, 0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: none;\n      transform: none;\n    }\n  }\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fadeIn {\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n  \n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n  \n    -webkit-animation-duration:1s;\n    animation-duration:1s;\n  }\n\n.fadeIn.first {\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n  }\n\n.fadeIn.second {\n    -webkit-animation-delay: 0.6s;\n    animation-delay: 0.6s;\n  }\n\n.fadeIn.third {\n    -webkit-animation-delay: 0.8s;\n    animation-delay: 0.8s;\n  }\n\n.fadeIn.fourth {\n    -webkit-animation-delay: 1s;\n    animation-delay: 1s;\n  }\n\n/* Simple CSS3 Fade-in Animation */\n\n.underlineHover:after {\n    display: block;\n    left: 0;\n    bottom: -10px;\n    width: 0;\n    height: 2px;\n    background-color: #56baed;\n    content: \"\";\n    transition: width 0.2s;\n  }\n\n.underlineHover:hover {\n    cursor: pointer;\n    color: #0d0d0d;\n  }\n\n.underlineHover:hover:after{\n    width: 100%;\n  }\n\n/* OTHERS */\n\n*:focus {\n      outline: none;\n  }\n\n#icon {\n    width:60%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFVBQVU7O0FBRVY7SUFDSSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsYUFBYTtFQUNmOztBQUVBO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsY0FBYztFQUNoQjs7QUFJQSxjQUFjOztBQUVkO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztBQUVBO0lBRUUsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUVaLHlDQUF5QztJQUN6QyxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixrQkFBa0I7SUFFbEIsNEJBQTRCO0VBQzlCOztBQUlBLFNBQVM7O0FBRVQ7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGdDQUFnQztFQUNsQzs7QUFJQSxtQkFBbUI7O0FBRW5CO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0lBRWYsOENBQThDO0lBRTlDLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFLMUIsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBRUUsOEJBQThCO0lBRzlCLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVix5QkFBeUI7SUFLekIsZ0NBQWdDO0lBRWhDLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUlBLGVBQWU7O0FBRWYsdUNBQXVDOztBQUN2QztJQUNFLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsMkNBQTJDO01BQzNDLG1DQUFtQztJQUNyQztJQUNBO01BQ0UsVUFBVTtNQUNWLHVCQUF1QjtNQUN2QixlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLFVBQVU7TUFDViwyQ0FBMkM7TUFDM0MsbUNBQW1DO0lBQ3JDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsdUJBQXVCO01BQ3ZCLGVBQWU7SUFDakI7RUFDRjs7QUFFQSxrQ0FBa0M7O0FBQ2xDLDRCQUE0QixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7O0FBRWxFLG9CQUFvQixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7O0FBRTFEO0lBQ0UsU0FBUztJQUNULGtDQUFrQztJQUVsQywwQkFBMEI7O0lBRTFCLG9DQUFvQztJQUVwQyw0QkFBNEI7O0lBRTVCLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQTZCO0lBRTdCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSwyQkFBMkI7SUFFM0IsbUJBQW1CO0VBQ3JCOztBQUVBLGtDQUFrQzs7QUFDbEM7SUFDRSxjQUFjO0lBQ2QsT0FBTztJQUNQLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBSUEsV0FBVzs7QUFFWDtNQUNJLGFBQWE7RUFDakI7O0FBRUE7SUFDRSxTQUFTO0VBQ1giLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogQkFTSUMgKi9cblxuaHRtbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcbiAgfVxuICBcbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgXG4gIGEge1xuICAgIGNvbG9yOiAjOTJiYWRkO1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIFxuICBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDsgXG4gICAgY29sb3I6ICNjY2NjY2M7XG4gIH1cbiAgXG4gIFxuICBcbiAgLyogU1RSVUNUVVJFICovXG4gIFxuICAud3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgI2Zvcm1Db250ZW50IHtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gICNmb3JtRm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlOGYxO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICB9XG4gIFxuICBcbiAgXG4gIC8qIFRBQlMgKi9cbiAgXG4gIGgyLmluYWN0aXZlIHtcbiAgICBjb2xvcjogI2NjY2NjYztcbiAgfVxuICBcbiAgaDIuYWN0aXZlIHtcbiAgICBjb2xvcjogIzBkMGQwZDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcbiAgfVxuICBcbiAgXG4gIFxuICAvKiBGT1JNIFRZUE9HUkFQSFkqL1xuICBcbiAgaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdICB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE1cHggODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gICAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyICB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzBkMGQwZDtcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHdpZHRoOiA4NSU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNjY2NjY2M7XG4gIH1cbiAgXG4gIFxuICBcbiAgLyogQU5JTUFUSU9OUyAqL1xuICBcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xuICAuZmFkZUluRG93biB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbiAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuICBcbiAgLmZhZGVJbiB7XG4gICAgb3BhY2l0eTowO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICBcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246MXM7XG4gIH1cbiAgXG4gIC5mYWRlSW4uZmlyc3Qge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgfVxuICBcbiAgLmZhZGVJbi5zZWNvbmQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgfVxuICBcbiAgLmZhZGVJbi50aGlyZCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICB9XG4gIFxuICAuZmFkZUluLmZvdXJ0aCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICB9XG4gIFxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xuICAudW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcbiAgfVxuICBcbiAgLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICMwZDBkMGQ7XG4gIH1cbiAgXG4gIC51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgXG4gIFxuICAvKiBPVEhFUlMgKi9cbiAgXG4gICo6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgfSBcbiAgXG4gICNpY29uIHtcbiAgICB3aWR0aDo2MCU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.model */ "./src/app/user/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user/user.service.ts");





var UserComponent = /** @class */ (function () {
    function UserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.baseurl = 'http://localhost:8000/api/user/';
        //private baseurl='https://safe-ravine-48359.herokuapp.com/api/user/';
        this.User = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.register = false;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    UserComponent.prototype.signUp = function (form) {
        var _this = this;
        this.userService.addUser(form.value).subscribe(function (res) {
            _this.userService.setToken(res['token']);
            if (form.value.role === "student")
                _this.router.navigateByUrl('/student/profile');
            else if (form.value.role === "teacher")
                _this.router.navigateByUrl('/teacher/profile');
        }, function (err) {
            if (err.status === 409 || err.status === 403) {
                _this.msg = err.error.message;
            }
            else
                _this.msg = 'Something went wrong.Please contact admin.';
        });
    };
    UserComponent.prototype.signIn = function (form) {
        var _this = this;
        this.userService.login(form.value).subscribe(function (res) {
            _this.userService.setToken(res['token']);
            if (form.value.role === "student")
                _this.router.navigateByUrl('/student/profile');
            else if (form.value.role === "teacher")
                _this.router.navigateByUrl('/teacher/profile');
        }, function (err) {
            console.log(err.error);
            _this.msg = err.error.message;
        });
    };
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.model.ts":
/*!************************************!*\
  !*** ./src/app/user/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.model */ "./src/app/user/user.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ "noauth": "true" }) };
    }
    UserService.prototype.addUser = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/user/signup', user, this.noAuthHeader);
    };
    UserService.prototype.login = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/user/signin', user, this.noAuthHeader);
    };
    UserService.prototype.getUser = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/user');
    };
    UserService.prototype.editUser = function (user) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/user', user);
    };
    // helpers
    UserService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    UserService.prototype.deleteToken = function () {
        localStorage.removeItem('token');
    };
    UserService.prototype.getUserPayload = function () {
        var token = this.getToken();
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else
            return null;
    };
    UserService.prototype.isLoggedIn = function () {
        var userPayload = this.getUserPayload();
        if (userPayload)
            return userPayload.exp > Date.now() / 1000;
        else
            return false;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    //apiBaseUrl: "http://localhost:8000/api",
    apiBaseUrl: "https://quiz-3d-app.herokuapp.com/api",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ahmed/Desktop/3D Task/Client-Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map