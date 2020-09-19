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

/***/ "./node_modules/raw-loader/index.js!./src/app/_components/alert.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/_components/alert.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"{{cssClass(alert)}}\">\n    <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n    <span [innerHTML]=\"alert.message\"></span>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand navbar-light bg-light\" style=\"color: #48005c;\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"assets/logo-happy-stocks.png\" width=\"65\" height=\"45\" alt=\"\" loading=\"lazy\">\n  </a>\n  <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Home</a>\n      \n      <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n  </div>\n</nav> -->\n<div class=\"container home-page\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-white\">\n    <div class=\"d-flex flex-grow-1\">\n        <span class=\"w-100 d-lg-none d-block\"><!-- hidden spacer to center brand on mobile --></span>\n        <a class=\"navbar-brand\" href=\"#\">\n          <img src=\"assets/logo-happy-stocks.png\" class=\"img-fluid\" width=\"230\" alt=\"\" loading=\"lazy\">\n        </a>\n        <div class=\"w-100 text-right\">\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n        </div>\n    </div>\n    <div class=\"collapse navbar-collapse flex-grow-1\" id=\"myNavbar\">\n        <ul class=\"navbar-nav ml-auto flex-nowrap\">\n            <li class=\"nav-item\">\n                <a href=\"#\" class=\"nav-link m-2 mx-3 menu-item\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Products</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"#\" class=\"nav-link m-2 mx-3 menu-item\">Subscription</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"#\" class=\"nav-link m-2 mx-3 menu-item\">Equity</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"#\" class=\"nav-link m-2 mx-3 menu-item\">Strategy</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"#\" class=\"nav-link m-2 mx-3 menu-item\">Raize</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"#\" class=\"nav-link m-2 mx-3 menu-item\">Sign In</a>\n            </li>\n        </ul>\n    </div>\n  </nav>\n</div>\n\n<!-- main app container -->\n<div class=\"app-container\" [ngClass]=\"{ 'bg-light': user }\">\n  <alert></alert>\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/backtest/backtest.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/backtest/backtest.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"example\" #dataTable datatable [dtOptions]=\"dtOptions\" class=\"row-border hover\" style=\"width:100%\">\n    <thead>\n      <tr>\n        <th></th>\n        <th>Name</th>\n        <th>Position</th>\n        <th>Office</th>\n        <th>Salary</th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let item of data; let i=index;\">\n        <tr role=\"row\" (click)=\"itemClicked(i)\">\n          <td id=\"details-control\">&#43;</td>\n          <td>{{item.name}}</td>\n          <td>{{item.position}}</td>\n          <td>{{item.office}}</td>\n          <td>{{item.salary}}</td>\n        </tr>\n        <tr [hidden]=\"itemIndexList[i] == false\">\n          <td colspan=\"5\">{{item.name}}</td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"p-4\">\n    <div class=\"container\">\n        <h1>Hi {{user.firstName}}!</h1>\n        <p>You're logged in Happy Stocks.</p>\n        <p><a routerLink=\"/users\">Manage Users</a></p>\n    </div>\n</div> -->\n<div class=\"container\">\n    <!-- Master's Quote -->\n  <div class=\"p-4 quote-section\">\n    <div class=\"row\">\n      <div class=\"col col-sm d-flex font-italic master-quote\">\n        <blockquote class=\"blockquote text-left\">\n          <p class=\"mb-0\">\"Regulate your mind. DO not worry excessively about the future.If you have done everything that has to be done, the future will take care of itself.\"</p>\n          <footer class=\"blockquote-footer text-right yellow\"><cite title=\"Grand Master Choa Kok Sui\">Grand Master Choa Kok Sui</cite></footer>\n        </blockquote>\n      </div>\n      <div class=\"col col-sm-12 col-xs-12 col-md-2 d-flex master-image\">\n        <img src=\"assets/GMCKS-small.png\" class=\"img-fluid\" alt=\"\"/>\n      </div>\n    </div>\n  </div>\n</div>\n\n  <!-- Casrousal -->\n  <div class=\"container\">\n    <div id=\"homeCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n            <li data-target=\"#homeCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#homeCarousel\" data-slide-to=\"1\"></li>\n            <li data-target=\"#homeCarousel\" data-slide-to=\"2\"></li>\n            <li data-target=\"#homeCarousel\" data-slide-to=\"3\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n            <img src=\"assets/carousel/1.jpg\" class=\"d-block w-100\" alt=\"...\">\n            </div>\n            <div class=\"carousel-item\">\n            <img src=\"assets/carousel/2.jpg\" class=\"d-block w-100\" alt=\"...\">\n            </div>\n            <div class=\"carousel-item\">\n            <img src=\"assets/carousel/3.jpg\" class=\"d-block w-100\" alt=\"...\">\n            </div>\n            <div class=\"carousel-item\">\n            <img src=\"assets/carousel/4.jpg\" class=\"d-block w-100\" alt=\"...\">\n            </div>\n        </div>\n    </div>\n  </div>\n\n  <!--Products-->\n  <div class=\"container mt-4 mb-4\">\n    <div class=\"row justify-content-center mx-0 pt-4 bg-white\" style=\"box-shadow:inset 0 -4px 2px #ccc;\">\n        <div class=\"col-4\">\n            <h1 class=\"display-4 purple\">Our Products</h1>\n            <div class=\"product mt-4 pb-4\">\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-2 mr-1\">\n                        <img src=\"assets/logo-Raize.png\" alt=\"\" height=\"45\" width=\"45\"/>\n                    </div>\n                    <div class=\"col pt-2 ml-1\">\n                        <h3>Raize</h3>\n                        <small class=\"yellow font-weight-bold\">Algorithmic Trading</small>\n                    </div>\n                </div>\n            </div>\n            <div class=\"product mt-4 pb-4\">\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-2 mr-1\">\n                        <img src=\"assets/logo-TradeEd.png\" alt=\"\" height=\"45\" width=\"45\"/>\n                    </div>\n                    <div class=\"col pt-2 ml-1\">\n                        <h3>Trade Ed</h3>\n                        <small class=\"yellow font-weight-bold\">Trading education</small>\n                    </div>\n                </div>\n            </div>\n            <div class=\"product mt-4 pb-4\">\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-2 mr-1\">\n                        <img src=\"assets/logo-RaizeExp.png\" alt=\"\" height=\"45\" width=\"45\"/>\n                    </div>\n                    <div class=\"col pt-2 ml-1\">\n                        <h3>RaizeExp</h3>\n                        <small class=\"yellow font-weight-bold\">Experts' opinion on market</small>\n                    </div>\n                </div>\n            </div>\n            <div class=\"product mt-4 pb-4\">\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-2 mr-1\">\n                        <img src=\"assets/upcoming.png\" alt=\"\" height=\"45\" width=\"45\"/>\n                    </div>\n                    <div class=\"col pt-2 ml-1\">\n                        <h3>Upcoming</h3>\n                        <small class=\"yellow font-weight-bold\">Products and Tools</small>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-6 trade-quote d-flex align-items-center\">\n            <blockquote class=\"blockquote text-center purple\">\n                <p class=\"mb-0\">\"Investing in yourself is the best thing you can do, and as a part of investing in yourself; you should learn more about money managemnet.\"</p>\n                <footer class=\"blockquote-footer\"><cite title=\"Source Title\">Warren Buffett</cite></footer>\n            </blockquote>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"container\">\n      <footer class=\"footer\">\n        <div class=\"mb-4\">\n            <img src=\"assets/logo-happy-stocks-white.png\" alt=\"\" class=\"img-fluid\" width=150 />\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <p>\n                    <span><img src=\"assets/social/Call.png\" alt=\"\" width=\"30\" height=\"30\"/></span>\n                    <span class=\"pl-2\">+91 xxxxxxxxxx</span>\n                </p>\n                <p>\n                    <span><img src=\"assets/social/Facebook.png\" alt=\"\" width=\"30\" height=\"30\"/></span>\n                    <a href=\"https://www.facebook.com\" class=\"pl-2\">www.facebook.com</a>\n                </p>\n                <p>\n                    <span><img src=\"assets/social/Twiter.png\" alt=\"\" width=\"30\" height=\"30\"/></span>\n                    <a href=\"https://www.twitter.com\" class=\"pl-2\">www.twitter.com</a>\n                </p>\n                <p>\n                    <span><img src=\"assets/social/Instagram.png\" alt=\"\" width=\"30\" height=\"30\"/></span>\n                    <a href=\"https://www.instagram.com\" class=\"pl-2\">www.instagram.com</a>\n                </p>\n                <p>\n                    <span><img src=\"assets/social/LinkedIn.png\" alt=\"\" width=\"30\" height=\"30\"/></span>\n                    <a href=\"https://www.linkedin.com\" class=\"pl-2\">www.linkedin.com</a>\n                </p>\n                <p>\n                    <span><img src=\"assets/social/Telegram.png\" alt=\"\" width=\"30\" height=\"30\"/></span>\n                    <a href=\"https://www.telegram.com\" class=\"pl-2\">www.telegram.com</a>\n                </p>\n            </div>\n            <div class=\"col-6\">\n                <p><b>Terms of Use</b></p>\n                <p><b>Privacy Policy</b></p>\n                <p><b>Risk Disclosure</b></p>\n                <br>\n                <section class=\"disclaimer pb-2\">\n                    <p>Disclaimer: Investment in securities market are subject to market risks.read all the related documents carefully.</p>\n                    <p>Brokerage will not exceed the SEBI prescribed limit.</p>\n                </section>\n                <section class=\"other-links mt-2 pt-4\">\n                    <div class=\"row\">\n                        <div class=\"col-6\" style=\"line-height: 0.4rem;\">\n                            <p>Site Map</p>\n                            <p>Career</p>\n                            <p>Contact Us</p>\n                        </div>\n                        <div class=\"col-6\">\n                            <p><small>Made with love in <span class=\"yellow\">INDIA</span></small></p>\n                            <p><small>© Copyright 2020 <span class=\"yellow\">Happy Stocks</span></small></p>\n                        </div>\n                    </div>\n                </section>\n            </div>\n        </div>\n      </footer>\n  </div>\n"

/***/ }),

/***/ "./src/app/_components/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_components/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");





var AlertComponent = /** @class */ (function () {
    function AlertComponent(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(function (alert) {
            // clear alerts when an empty alert is received
            if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                _this.alerts = _this.alerts.filter(function (x) { return x.keepAfterRouteChange; });
                // remove 'keepAfterRouteChange' flag on the rest
                _this.alerts.forEach(function (x) { return delete x.keepAfterRouteChange; });
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
            // auto close alert if required
            if (alert.autoClose) {
                setTimeout(function () { return _this.removeAlert(alert); }, 3000);
            }
        });
        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.alertService.clear(_this.id);
            }
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        var _this = this;
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert))
            return;
        if (this.fade) {
            // fade out alert
            this.alerts.find(function (x) { return x === alert; }).fade = true;
            // remove alert after faded out
            setTimeout(function () {
                _this.alerts = _this.alerts.filter(function (x) { return x !== alert; });
            }, 250);
        }
        else {
            // remove alert
            this.alerts = this.alerts.filter(function (x) { return x !== alert; });
        }
    };
    AlertComponent.prototype.cssClass = function (alert) {
        var _a;
        if (!alert)
            return;
        var classes = ['alert', 'alert-dismissable', 'mt-4', 'container'];
        var alertTypeClass = (_a = {},
            _a[_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success] = 'alert alert-success',
            _a[_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error] = 'alert alert-danger',
            _a[_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info] = 'alert alert-info',
            _a[_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning] = 'alert alert-warning',
            _a);
        classes.push(alertTypeClass[alert.type]);
        if (alert.fade) {
            classes.push('fade');
        }
        return classes.join(' ');
    };
    AlertComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AlertComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AlertComponent.prototype, "fade", void 0);
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'alert', template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/_components/alert.component.html") })
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_components/index.ts":
/*!**************************************!*\
  !*** ./src/app/_components/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_components/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_helpers/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, accountService) {
        this.router = router;
        this.accountService = accountService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var user = this.accountService.userValue;
        if (user) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(accountService) {
        this.accountService = accountService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.accountService.logout();
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }
    ]; };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





// array in local storage for registered users
var users = JSON.parse(localStorage.getItem('users')) || [];
var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        var url = request.url, method = request.method, headers = request.headers, body = request.body;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                case url.match(/\/users\/\d+$/) && method === 'PUT':
                    return updateUser();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            var username = body.username, password = body.password;
            var user = users.find(function (x) { return x.username === username && x.password === password; });
            if (!user)
                return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'fake-jwt-token'
            });
        }
        function register() {
            var user = body;
            if (users.find(function (x) { return x.username === user.username; })) {
                return error('Username "' + user.username + '" is already taken');
            }
            user.id = users.length ? Math.max.apply(Math, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](users.map(function (x) { return x.id; }))) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }
        function getUsers() {
            if (!isLoggedIn())
                return unauthorized();
            return ok(users);
        }
        function getUserById() {
            if (!isLoggedIn())
                return unauthorized();
            var user = users.find(function (x) { return x.id === idFromUrl(); });
            return ok(user);
        }
        function updateUser() {
            if (!isLoggedIn())
                return unauthorized();
            var params = body;
            var user = users.find(function (x) { return x.id === idFromUrl(); });
            // only update password if entered
            if (!params.password) {
                delete params.password;
            }
            // update and save user
            Object.assign(user, params);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }
        function deleteUser() {
            if (!isLoggedIn())
                return unauthorized();
            users = users.filter(function (x) { return x.id !== idFromUrl(); });
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: body }));
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message: message } });
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
        function idFromUrl() {
            var urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    };
    FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["fakeBackendProvider"]; });







/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");




var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(accountService) {
        this.accountService = accountService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add auth header with jwt if user is logged in and request is to the api url
        var user = this.accountService.userValue;
        var isLoggedIn = user && user.token;
        var isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + user.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }
    ]; };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_models/alert.ts":
/*!**********************************!*\
  !*** ./src/app/_models/alert.ts ***!
  \**********************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
var Alert = /** @class */ (function () {
    function Alert(init) {
        Object.assign(this, init);
    }
    Alert.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/_models/index.ts":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: Alert, AlertType, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ "./src/app/_models/alert.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["Alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["AlertType"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/_models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["User"]; });





/***/ }),

/***/ "./src/app/_models/user.ts":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
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

/***/ "./src/app/_services/account.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/account.service.ts ***!
  \**********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var AccountService = /** @class */ (function () {
    function AccountService(router, http) {
        this.router = router;
        this.http = http;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }
    Object.defineProperty(AccountService.prototype, "userValue", {
        get: function () {
            return this.userSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AccountService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/login", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            _this.userSubject.next(user);
            return user;
        }));
    };
    AccountService.prototype.logout = function () {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    };
    AccountService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/signup", user);
    };
    AccountService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/users");
    };
    AccountService.prototype.getById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/user/" + id);
    };
    AccountService.prototype.update = function (id, params) {
        var _this = this;
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/user/update/" + id, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
            // update stored user if the logged in user updated their own record
            if (id == _this.userValue.id) {
                // update local storage
                var user = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.userValue, params);
                localStorage.setItem('user', JSON.stringify(user));
                // publish updated user to subscribers
                _this.userSubject.next(user);
            }
            return x;
        }));
    };
    AccountService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/user/delete/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
            // auto logout if the logged in user deleted their own record
            if (id == _this.userValue.id) {
                _this.logout();
            }
            return x;
        }));
    };
    AccountService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");





var AlertService = /** @class */ (function () {
    function AlertService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.defaultId = 'default-alert';
    }
    // enable subscribing to alerts observable
    AlertService.prototype.onAlert = function (id) {
        if (id === void 0) { id = this.defaultId; }
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (x) { return x && x.id === id; }));
    };
    // convenience methods
    AlertService.prototype.success = function (message, options) {
        this.alert(new _models__WEBPACK_IMPORTED_MODULE_4__["Alert"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, options, { type: _models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success, message: message })));
    };
    AlertService.prototype.error = function (message, options) {
        this.alert(new _models__WEBPACK_IMPORTED_MODULE_4__["Alert"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, options, { type: _models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error, message: message })));
    };
    AlertService.prototype.info = function (message, options) {
        this.alert(new _models__WEBPACK_IMPORTED_MODULE_4__["Alert"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, options, { type: _models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info, message: message })));
    };
    AlertService.prototype.warn = function (message, options) {
        this.alert(new _models__WEBPACK_IMPORTED_MODULE_4__["Alert"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, options, { type: _models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning, message: message })));
    };
    // main alert method    
    AlertService.prototype.alert = function (alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    };
    // clear alerts
    AlertService.prototype.clear = function (id) {
        if (id === void 0) { id = this.defaultId; }
        this.subject.next(new _models__WEBPACK_IMPORTED_MODULE_4__["Alert"]({ id: id }));
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AccountService, AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.service */ "./src/app/_services/account.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _account_service__WEBPACK_IMPORTED_MODULE_0__["AccountService"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });





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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _backtest_backtest_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backtest/backtest.component */ "./src/app/backtest/backtest.component.ts");





var accountModule = function () { return __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ./account/account.module */ "./src/app/account/account.module.ts")).then(function (x) { return x.AccountModule; }); };
var usersModule = function () { return __webpack_require__.e(/*! import() | users-users-module */ "users-users-module").then(__webpack_require__.bind(null, /*! ./users/users.module */ "./src/app/users/users.module.ts")).then(function (x) { return x.UsersModule; }); };
var routes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    // { path: 'login', component: LoginComponent },
    { path: 'backtest', component: _backtest_backtest_component__WEBPACK_IMPORTED_MODULE_4__["BacktestComponent"] },
    // { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    //{ path: 'account', loadChildren: './account/account.module#AccountModule' },
    { path: 'account', loadChildren: accountModule },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(accountService) {
        var _this = this;
        this.accountService = accountService;
        this.accountService.user.subscribe(function (x) { return _this.user = x; });
    }
    AppComponent.prototype.logout = function () {
        this.accountService.logout();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app', template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html") })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components */ "./src/app/_components/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _backtest_backtest_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./backtest/backtest.component */ "./src/app/backtest/backtest.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"],
                _home__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _backtest_backtest_component__WEBPACK_IMPORTED_MODULE_10__["BacktestComponent"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/backtest/backtest.component.scss":
/*!**************************************************!*\
  !*** ./src/app/backtest/backtest.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td.details-control {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3Rlc3QvRDpcXHByb2plY3RzXFxIYXBweVN0b2Nrcy1VSVxcVUkvc3JjXFxhcHBcXGJhY2t0ZXN0XFxiYWNrdGVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmFja3Rlc3QvYmFja3Rlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJBO0VBRUksZUFBQTtBQ3JCSiIsImZpbGUiOiJzcmMvYXBwL2JhY2t0ZXN0L2JhY2t0ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnRhYmxlIHRyIHtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gfVxyXG4vLyAudGFibGV7XHJcbi8vIFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIC5oZWRkaW5nIGgxe1xyXG4vLyBcdGNvbG9yOiNmZmY7XHJcbi8vIFx0Zm9udC1zaXplOjI1cHg7XHJcbi8vIH1cclxuLy8gLm1haW4tc2VjdGlvbntcclxuLy8gXHRtYXJnaW4tdG9wOiAxMjBweDtcclxuLy8gfVxyXG4vLyAuaGlkZGVuUm93IHtcclxuLy8gICAgIHBhZGRpbmc6IDAgNHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4vLyAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyB9XHJcbi8vIC5hY2NvcmRpYW4tYm9keSBzcGFue1xyXG4vLyBcdGNvbG9yOiNhMmEyYTIgIWltcG9ydGFudDtcclxuLy8gfVxyXG50ZC5kZXRhaWxzLWNvbnRyb2wge1xyXG4gICAgLy8gYmFja2dyb3VuZDogdXJsKCcuLi9yZXNvdXJjZXMvZGV0YWlsc19vcGVuLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbnRyLnNob3duIHRkLmRldGFpbHMtY29udHJvbCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoJy4uL3Jlc291cmNlcy9kZXRhaWxzX2Nsb3NlLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG59IiwidGQuZGV0YWlscy1jb250cm9sIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/backtest/backtest.component.ts":
/*!************************************************!*\
  !*** ./src/app/backtest/backtest.component.ts ***!
  \************************************************/
/*! exports provided: BacktestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BacktestComponent", function() { return BacktestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BacktestComponent = /** @class */ (function () {
    function BacktestComponent() {
        this.dtOptions = {};
        this.data = [];
        this.itemIndexList = [];
    }
    BacktestComponent.prototype.ngOnInit = function () {
        this.data = [
            {
                "id": "1",
                "name": "Tiger Nixon",
                "position": "System Architect",
                "salary": "$320,800",
                "start_date": "2011/04/25",
                "office": "Edinburgh",
                "extn": "5421"
            },
            {
                "id": "2",
                "name": "Garrett Winters",
                "position": "Accountant",
                "salary": "$170,750",
                "start_date": "2011/07/25",
                "office": "Tokyo",
                "extn": "8422"
            },
            {
                "id": "3",
                "name": "Ashton Cox",
                "position": "Junior Technical Author",
                "salary": "$86,000",
                "start_date": "2009/01/12",
                "office": "San Francisco",
                "extn": "1562"
            },
            {
                "id": "4",
                "name": "Cedric Kelly",
                "position": "Senior Javascript Developer",
                "salary": "$433,060",
                "start_date": "2012/03/29",
                "office": "Edinburgh",
                "extn": "6224"
            },
            {
                "id": "5",
                "name": "Airi Satou",
                "position": "Accountant",
                "salary": "$162,700",
                "start_date": "2008/11/28",
                "office": "Tokyo",
                "extn": "5407"
            },
            {
                "id": "6",
                "name": "Brielle Williamson",
                "position": "Integration Specialist",
                "salary": "$372,000",
                "start_date": "2012/12/02",
                "office": "New York",
                "extn": "4804"
            },
            {
                "id": "7",
                "name": "Herrod Chandler",
                "position": "Sales Assistant",
                "salary": "$137,500",
                "start_date": "2012/08/06",
                "office": "San Francisco",
                "extn": "9608"
            },
            {
                "id": "8",
                "name": "Rhona Davidson",
                "position": "Integration Specialist",
                "salary": "$327,900",
                "start_date": "2010/10/14",
                "office": "Tokyo",
                "extn": "6200"
            },
            {
                "id": "9",
                "name": "Colleen Hurst",
                "position": "Javascript Developer",
                "salary": "$205,500",
                "start_date": "2009/09/15",
                "office": "San Francisco",
                "extn": "2360"
            },
            {
                "id": "10",
                "name": "Sonya Frost",
                "position": "Software Engineer",
                "salary": "$103,600",
                "start_date": "2008/12/13",
                "office": "Edinburgh",
                "extn": "1667"
            },
            {
                "id": "11",
                "name": "Jena Gaines",
                "position": "Office Manager",
                "salary": "$90,560",
                "start_date": "2008/12/19",
                "office": "London",
                "extn": "3814"
            },
            {
                "id": "12",
                "name": "Quinn Flynn",
                "position": "Support Lead",
                "salary": "$342,000",
                "start_date": "2013/03/03",
                "office": "Edinburgh",
                "extn": "9497"
            },
            {
                "id": "13",
                "name": "Charde Marshall",
                "position": "Regional Director",
                "salary": "$470,600",
                "start_date": "2008/10/16",
                "office": "San Francisco",
                "extn": "6741"
            },
            {
                "id": "14",
                "name": "Haley Kennedy",
                "position": "Senior Marketing Designer",
                "salary": "$313,500",
                "start_date": "2012/12/18",
                "office": "London",
                "extn": "3597"
            },
            {
                "id": "15",
                "name": "Tatyana Fitzpatrick",
                "position": "Regional Director",
                "salary": "$385,750",
                "start_date": "2010/03/17",
                "office": "London",
                "extn": "1965"
            },
            {
                "id": "16",
                "name": "Michael Silva",
                "position": "Marketing Designer",
                "salary": "$198,500",
                "start_date": "2012/11/27",
                "office": "London",
                "extn": "1581"
            },
            {
                "id": "17",
                "name": "Paul Byrd",
                "position": "Chief Financial Officer (CFO)",
                "salary": "$725,000",
                "start_date": "2010/06/09",
                "office": "New York",
                "extn": "3059"
            },
            {
                "id": "18",
                "name": "Gloria Little",
                "position": "Systems Administrator",
                "salary": "$237,500",
                "start_date": "2009/04/10",
                "office": "New York",
                "extn": "1721"
            },
            {
                "id": "19",
                "name": "Bradley Greer",
                "position": "Software Engineer",
                "salary": "$132,000",
                "start_date": "2012/10/13",
                "office": "London",
                "extn": "2558"
            },
            {
                "id": "20",
                "name": "Dai Rios",
                "position": "Personnel Lead",
                "salary": "$217,500",
                "start_date": "2012/09/26",
                "office": "Edinburgh",
                "extn": "2290"
            },
            {
                "id": "21",
                "name": "Jenette Caldwell",
                "position": "Development Lead",
                "salary": "$345,000",
                "start_date": "2011/09/03",
                "office": "New York",
                "extn": "1937"
            },
            {
                "id": "22",
                "name": "Yuri Berry",
                "position": "Chief Marketing Officer (CMO)",
                "salary": "$675,000",
                "start_date": "2009/06/25",
                "office": "New York",
                "extn": "6154"
            },
            {
                "id": "23",
                "name": "Caesar Vance",
                "position": "Pre-Sales Support",
                "salary": "$106,450",
                "start_date": "2011/12/12",
                "office": "New York",
                "extn": "8330"
            },
            {
                "id": "24",
                "name": "Doris Wilder",
                "position": "Sales Assistant",
                "salary": "$85,600",
                "start_date": "2010/09/20",
                "office": "Sydney",
                "extn": "3023"
            },
            {
                "id": "25",
                "name": "Angelica Ramos",
                "position": "Chief Executive Officer (CEO)",
                "salary": "$1,200,000",
                "start_date": "2009/10/09",
                "office": "London",
                "extn": "5797"
            },
            {
                "id": "26",
                "name": "Gavin Joyce",
                "position": "Developer",
                "salary": "$92,575",
                "start_date": "2010/12/22",
                "office": "Edinburgh",
                "extn": "8822"
            },
            {
                "id": "27",
                "name": "Jennifer Chang",
                "position": "Regional Director",
                "salary": "$357,650",
                "start_date": "2010/11/14",
                "office": "Singapore",
                "extn": "9239"
            },
            {
                "id": "28",
                "name": "Brenden Wagner",
                "position": "Software Engineer",
                "salary": "$206,850",
                "start_date": "2011/06/07",
                "office": "San Francisco",
                "extn": "1314"
            },
            {
                "id": "29",
                "name": "Fiona Green",
                "position": "Chief Operating Officer (COO)",
                "salary": "$850,000",
                "start_date": "2010/03/11",
                "office": "San Francisco",
                "extn": "2947"
            },
            {
                "id": "30",
                "name": "Shou Itou",
                "position": "Regional Marketing",
                "salary": "$163,000",
                "start_date": "2011/08/14",
                "office": "Tokyo",
                "extn": "8899"
            },
            {
                "id": "31",
                "name": "Michelle House",
                "position": "Integration Specialist",
                "salary": "$95,400",
                "start_date": "2011/06/02",
                "office": "Sydney",
                "extn": "2769"
            },
            {
                "id": "32",
                "name": "Suki Burks",
                "position": "Developer",
                "salary": "$114,500",
                "start_date": "2009/10/22",
                "office": "London",
                "extn": "6832"
            },
            {
                "id": "33",
                "name": "Prescott Bartlett",
                "position": "Technical Author",
                "salary": "$145,000",
                "start_date": "2011/05/07",
                "office": "London",
                "extn": "3606"
            },
            {
                "id": "34",
                "name": "Gavin Cortez",
                "position": "Team Leader",
                "salary": "$235,500",
                "start_date": "2008/10/26",
                "office": "San Francisco",
                "extn": "2860"
            },
            {
                "id": "35",
                "name": "Martena Mccray",
                "position": "Post-Sales support",
                "salary": "$324,050",
                "start_date": "2011/03/09",
                "office": "Edinburgh",
                "extn": "8240"
            },
            {
                "id": "36",
                "name": "Unity Butler",
                "position": "Marketing Designer",
                "salary": "$85,675",
                "start_date": "2009/12/09",
                "office": "San Francisco",
                "extn": "5384"
            },
            {
                "id": "37",
                "name": "Howard Hatfield",
                "position": "Office Manager",
                "salary": "$164,500",
                "start_date": "2008/12/16",
                "office": "San Francisco",
                "extn": "7031"
            },
            {
                "id": "38",
                "name": "Hope Fuentes",
                "position": "Secretary",
                "salary": "$109,850",
                "start_date": "2010/02/12",
                "office": "San Francisco",
                "extn": "6318"
            },
            {
                "id": "39",
                "name": "Vivian Harrell",
                "position": "Financial Controller",
                "salary": "$452,500",
                "start_date": "2009/02/14",
                "office": "San Francisco",
                "extn": "9422"
            },
            {
                "id": "40",
                "name": "Timothy Mooney",
                "position": "Office Manager",
                "salary": "$136,200",
                "start_date": "2008/12/11",
                "office": "London",
                "extn": "7580"
            },
            {
                "id": "41",
                "name": "Jackson Bradshaw",
                "position": "Director",
                "salary": "$645,750",
                "start_date": "2008/09/26",
                "office": "New York",
                "extn": "1042"
            },
            {
                "id": "42",
                "name": "Olivia Liang",
                "position": "Support Engineer",
                "salary": "$234,500",
                "start_date": "2011/02/03",
                "office": "Singapore",
                "extn": "2120"
            },
            {
                "id": "43",
                "name": "Bruno Nash",
                "position": "Software Engineer",
                "salary": "$163,500",
                "start_date": "2011/05/03",
                "office": "London",
                "extn": "6222"
            },
            {
                "id": "44",
                "name": "Sakura Yamamoto",
                "position": "Support Engineer",
                "salary": "$139,575",
                "start_date": "2009/08/19",
                "office": "Tokyo",
                "extn": "9383"
            },
            {
                "id": "45",
                "name": "Thor Walton",
                "position": "Developer",
                "salary": "$98,540",
                "start_date": "2013/08/11",
                "office": "New York",
                "extn": "8327"
            },
            {
                "id": "46",
                "name": "Finn Camacho",
                "position": "Support Engineer",
                "salary": "$87,500",
                "start_date": "2009/07/07",
                "office": "San Francisco",
                "extn": "2927"
            },
            {
                "id": "47",
                "name": "Serge Baldwin",
                "position": "Data Coordinator",
                "salary": "$138,575",
                "start_date": "2012/04/09",
                "office": "Singapore",
                "extn": "8352"
            },
            {
                "id": "48",
                "name": "Zenaida Frank",
                "position": "Software Engineer",
                "salary": "$125,250",
                "start_date": "2010/01/04",
                "office": "New York",
                "extn": "7439"
            },
            {
                "id": "49",
                "name": "Zorita Serrano",
                "position": "Software Engineer",
                "salary": "$115,000",
                "start_date": "2012/06/01",
                "office": "San Francisco",
                "extn": "4389"
            },
            {
                "id": "50",
                "name": "Jennifer Acosta",
                "position": "Junior Javascript Developer",
                "salary": "$75,650",
                "start_date": "2013/02/01",
                "office": "Edinburgh",
                "extn": "3431"
            },
            {
                "id": "51",
                "name": "Cara Stevens",
                "position": "Sales Assistant",
                "salary": "$145,600",
                "start_date": "2011/12/06",
                "office": "New York",
                "extn": "3990"
            },
            {
                "id": "52",
                "name": "Hermione Butler",
                "position": "Regional Director",
                "salary": "$356,250",
                "start_date": "2011/03/21",
                "office": "London",
                "extn": "1016"
            },
            {
                "id": "53",
                "name": "Lael Greer",
                "position": "Systems Administrator",
                "salary": "$103,500",
                "start_date": "2009/02/27",
                "office": "London",
                "extn": "6733"
            },
            {
                "id": "54",
                "name": "Jonas Alexander",
                "position": "Developer",
                "salary": "$86,500",
                "start_date": "2010/07/14",
                "office": "San Francisco",
                "extn": "8196"
            },
            {
                "id": "55",
                "name": "Shad Decker",
                "position": "Regional Director",
                "salary": "$183,000",
                "start_date": "2008/11/13",
                "office": "Edinburgh",
                "extn": "6373"
            },
            {
                "id": "56",
                "name": "Michael Bruce",
                "position": "Javascript Developer",
                "salary": "$183,000",
                "start_date": "2011/06/27",
                "office": "Singapore",
                "extn": "5384"
            },
            {
                "id": "57",
                "name": "Donna Snider",
                "position": "Customer Support",
                "salary": "$112,000",
                "start_date": "2011/01/25",
                "office": "New York",
                "extn": "4226"
            }
        ];
        this.itemIndexList = new Array(this.data.length);
        this.itemIndexList.fill(false);
        this.dtOptions = {
            pagingType: 'full_numbers',
            order: [[1, 'asc']]
        };
    };
    BacktestComponent.prototype.format = function () {
        // `d` is the original data object for the row
        return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
            '<tr>' +
            '<td>Full name:</td>' +
            '<td>Details row!</td>' +
            '</tr>' +
            '</table>';
    };
    BacktestComponent.prototype.itemClicked = function (index) {
        // alert('row clicked: ' + index);
        this.itemIndexList[index] = !this.itemIndexList[index];
        // const tr = $('.details-control');
        // const row = this.dt.nativeElement.rows[0];
        // if ( row.child.isShown() ) {
        //   // This row is already open - close it
        //   row.child.hide();
        //   tr.removeClass('shown');
        // } else {
        //   // Open this row
        //   row.child( this.format());
        //   tr.addClass('shown');
        // }
    };
    BacktestComponent.prototype.prepareDataTable = function () {
        $(document).ready(function () {
            var table = $('#example').DataTable({
                "ajax": "assets/data.json",
                "columns": [
                    {
                        "className": 'details-control',
                        "orderable": false,
                        "data": null,
                        "defaultContent": ''
                    },
                    { "data": "name" },
                    { "data": "position" },
                    { "data": "office" },
                    { "data": "salary" }
                ],
                "order": [[1, 'asc']]
            });
            // Add event listener for opening and closing details
            $('#example tbody').on('click', 'td.details-control', function () {
                var tr = $(this).closest('tr');
                var row = table.row(tr);
                if (row.child.isShown()) {
                    // This row is already open - close it
                    row.child.hide();
                    tr.removeClass('shown');
                }
                else {
                    // Open this row
                    var d = row.data();
                    row.child('<table cellpadding="5" style="padding-left:50px;">' +
                        '<tr>' +
                        '<td>Full name:</td>' +
                        '<td>' + d.name + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>Extension number:</td>' +
                        '<td>' + d.extn + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td>Extra info:</td>' +
                        '<td>And any further details here (images etc)...</td>' +
                        '</tr>' +
                        '</table>').show();
                    tr.addClass('shown');
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTable', { static: true })
    ], BacktestComponent.prototype, "dt", void 0);
    BacktestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-backtest',
            template: __webpack_require__(/*! raw-loader!./backtest.component.html */ "./node_modules/raw-loader/index.js!./src/app/backtest/backtest.component.html"),
            styles: [__webpack_require__(/*! ./backtest.component.scss */ "./src/app/backtest/backtest.component.scss")]
        })
    ], BacktestComponent);
    return BacktestComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(accountService) {
        this.accountService = accountService;
        this.user = this.accountService.userValue;
    }
    HomeComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html") })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




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
    // apiUrl: 'http://127.0.0.1:5000'
    apiUrl: 'https://ikhhj8sxb5.execute-api.us-east-2.amazonaws.com/Prod'
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

module.exports = __webpack_require__(/*! D:\projects\HappyStocks-UI\UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map