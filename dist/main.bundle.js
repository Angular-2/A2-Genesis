webpackJsonp([0,3],{

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var user = { username: username, password: password };
        return this.http
            .post('/api/authenticate', JSON.stringify(user), this.options)
            .toPromise()
            .then(function (response) {
            var token = response.json().id_token;
            var role = response.json().role;
            var groupName = response.json().group;
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({ username: username }));
                localStorage.setItem('token', JSON.stringify({ token: token }));
                localStorage.setItem('role', role);
                localStorage.setItem('groupName', groupName);
                alert("You have logged in successfully");
                _this.router.navigateByUrl('/home');
                return true;
            }
            else {
                alert("Wrong password or username. Please try again");
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        alert("You have successfully logged out");
        localStorage.clear();
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (localStorage.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/authentication.service.js.map

/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });
var User = (function () {
    function User(firstName, lastName, username, email, password, profilePictureUrl) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.profilePictureUrl = profilePictureUrl;
        this.groupName = "My group";
        this.createdAt = new Date();
        this.lastUpdated = new Date();
    }
    return User;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/user.js.map

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return JobsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobsService = (function () {
    function JobsService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
    }
    JobsService.prototype.addJob = function (job) {
        var _this = this;
        return this.http
            .post('/api/jobs', JSON.stringify(job), this.options)
            .toPromise()
            .then(function (response) {
            _this.router.navigateByUrl('/jobs');
            alert("You have created job successfully.");
            response.json().data;
        })
            .catch(function (er) { return alert(JSON.parse(er._body).error); });
    };
    JobsService.prototype.getAllJobs = function () {
        return this.http
            .get('/api/jobs', this.options)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    JobsService.prototype.getJobById = function (id) {
        return this.http
            .get('/api/jobs/' + id)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(function (er) { return alert(JSON.parse(er._body).error); });
    };
    JobsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], JobsService);
    return JobsService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/jobs.service.js.map

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = (function () {
    function UsersService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
    }
    UsersService.prototype.getUsers = function () {
        return this.http
            .get('/api/users')
            .toPromise()
            .then(function (response) {
            response.json().data;
        })
            .catch(function (er) { return alert(JSON.parse(er._body).error); });
    };
    UsersService.prototype.addUser = function (user) {
        var _this = this;
        return this.http
            .post('/api/users', JSON.stringify(user), this.options)
            .toPromise()
            .then(function (response) {
            _this.router.navigateByUrl('/login');
            alert("You have registered successfully");
            response.json().data;
        })
            .catch(function (er) { return alert(JSON.parse(er._body).error); });
    };
    UsersService.prototype.getUserByUsername = function (username) {
        return this.http
            .get('/api/users/' + username)
            .toPromise()
            .catch(function (er) { return alert(JSON.parse(er._body).error); });
    };
    UsersService.prototype.updateUser = function (user) {
        return this.http
            .post('/api/users/update', JSON.stringify(user), this.options)
            .toPromise()
            .catch(function (er) { return alert(JSON.parse(er._body).error); });
    };
    UsersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], UsersService);
    return UsersService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/users.service.js.map

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Job; });
var Job = (function () {
    function Job(title, workHours, salary, description, author, pictureUrl) {
        this.title = title;
        this.workHours = workHours;
        this.salary = salary;
        this.description = description;
        this.author = author;
        this.pictureUrl = pictureUrl;
        this.dateCreated = new Date();
    }
    return Job;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/job.js.map

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jobs_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_job__ = __webpack_require__(220);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddJobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddJobComponent = (function () {
    function AddJobComponent(jobsService) {
        this.jobsService = jobsService;
    }
    AddJobComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_2__models_job__["a" /* Job */]('', 0, 0, '', '', '');
        this.model.author = JSON.parse(localStorage['currentUser']).username;
    };
    AddJobComponent.prototype.addJob = function () {
        this.jobsService.addJob(this.model);
    };
    AddJobComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-add-job',
            template: __webpack_require__(710),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_jobs_service__["a" /* JobsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_jobs_service__["a" /* JobsService */]) === 'function' && _a) || Object])
    ], AddJobComponent);
    return AddJobComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/add-job.component.js.map

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddTaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddTaskComponent = (function () {
    function AddTaskComponent() {
    }
    AddTaskComponent.prototype.ngOnInit = function () {
    };
    AddTaskComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-add-task',
            template: __webpack_require__(711),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [])
    ], AddTaskComponent);
    return AddTaskComponent;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/add-task.component.js.map

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_job__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_jobs_service__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return JobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobsComponent = (function () {
    function JobsComponent(jobsService) {
        this.jobsService = jobsService;
        this.jobs = [];
    }
    JobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllJobs()
            .then(function (result) {
            for (var i = 0; i < result.length; i += 1) {
                var job = result[i];
                var currentJob = new __WEBPACK_IMPORTED_MODULE_1__models_job__["a" /* Job */](job.title, job.workHours, job.salary, job.description, job.author, job.pictureUrl);
                currentJob.id = job._id;
                _this.jobs.push(currentJob);
            }
        });
    };
    JobsComponent.prototype.getAllJobs = function () {
        return this.jobsService.getAllJobs();
    };
    JobsComponent.prototype.compareJobs = function (leftJob, rightJob) {
        if (leftJob.title < rightJob.title)
            return -1;
        if (leftJob.title > rightJob.title)
            return 1;
        return 0;
    };
    JobsComponent.prototype.sortJobs = function () {
        this.jobs.sort(this.compareJobs);
    };
    JobsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-jobs',
            template: __webpack_require__(712),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_jobs_service__["a" /* JobsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_jobs_service__["a" /* JobsService */]) === 'function' && _a) || Object])
    ], JobsComponent);
    return JobsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/jobs.component.js.map

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MyGroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyGroupComponent = (function () {
    function MyGroupComponent() {
        this.showClass = true;
        this.showClass1 = true;
    }
    MyGroupComponent.prototype.ngOnInit = function () {
    };
    MyGroupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-my-group',
            template: __webpack_require__(713),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [])
    ], MyGroupComponent);
    return MyGroupComponent;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/my-group.component.js.map

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MyProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyProfileComponent = (function () {
    function MyProfileComponent(usersService) {
        var _this = this;
        this.usersService = usersService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', '');
        var username = localStorage['currentUser'];
        this.usersService.getUserByUsername(username)
            .then(function (response) {
            var dbUser = response.json();
            _this.user.email = dbUser.email;
            _this.user.firstName = dbUser.firstName;
            _this.user.lastName = dbUser.lastName;
            _this.user.password = dbUser.password;
            _this.user.username = dbUser.username;
            _this.user.profilePictureUrl = dbUser.profilePictureUrl;
        });
    }
    MyProfileComponent.prototype.ngOnInit = function () { };
    MyProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-my-profile',
            template: __webpack_require__(714),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === 'function' && _a) || Object])
    ], MyProfileComponent);
    return MyProfileComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/my-profile.component.js.map

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_jobs_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_job__ = __webpack_require__(220);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SingleJobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleJobComponent = (function () {
    function SingleJobComponent(jobsService, route) {
        var _this = this;
        this.jobsService = jobsService;
        this.route = route;
        this.job = new __WEBPACK_IMPORTED_MODULE_3__models_job__["a" /* Job */]('', 0, 0, '', '', '');
        var id = this.route.params['_value'].id;
        this.jobsService.getJobById(id)
            .then(function (job) {
            _this.setCurrentJob(job);
        });
    }
    SingleJobComponent.prototype.ngOnInit = function () {
    };
    SingleJobComponent.prototype.setCurrentJob = function (job) {
        this.job.title = job.title;
        this.job.workHours = job.workHours;
        this.job.salary = job.salary;
        this.job.description = job.description;
        this.job.author = job.author;
        this.job.pictureUrl = job.pictureUrl;
    };
    SingleJobComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-single-job',
            template: __webpack_require__(715),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_jobs_service__["a" /* JobsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_jobs_service__["a" /* JobsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], SingleJobComponent);
    return SingleJobComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/single-job.component.js.map

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UpdateInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateInfoComponent = (function () {
    function UpdateInfoComponent(userService) {
        this.userService = userService;
    }
    UpdateInfoComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', '');
    };
    UpdateInfoComponent.prototype.update = function () {
        this.model.userToChange = JSON.parse(localStorage['currentUser']).username;
        this.userService.updateUser(this.model)
            .then(function (user) { return console.log(user); });
    };
    UpdateInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-update-info',
            template: __webpack_require__(716),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === 'function' && _a) || Object])
    ], UpdateInfoComponent);
    return UpdateInfoComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/update-info.component.js.map

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__(717),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/about-us.component.js.map

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-contacts',
            template: __webpack_require__(718),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactsComponent);
    return ContactsComponent;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/contacts.component.js.map

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DonateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DonateComponent = (function () {
    function DonateComponent() {
    }
    DonateComponent.prototype.ngOnInit = function () {
    };
    DonateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-donate',
            template: __webpack_require__(719),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [])
    ], DonateComponent);
    return DonateComponent;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/donate.component.js.map

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(720),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/footer.component.js.map

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(721),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/home.component.js.map

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HowToUseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowToUseComponent = (function () {
    function HowToUseComponent() {
    }
    HowToUseComponent.prototype.ngOnInit = function () {
    };
    HowToUseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-how-to-use',
            template: __webpack_require__(722),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [])
    ], HowToUseComponent);
    return HowToUseComponent;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/how-to-use.component.js.map

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ParentGuideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParentGuideComponent = (function () {
    function ParentGuideComponent() {
    }
    ParentGuideComponent.prototype.ngOnInit = function () {
    };
    ParentGuideComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-parent-guide',
            template: __webpack_require__(725),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [])
    ], ParentGuideComponent);
    return ParentGuideComponent;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/parent-guide.component.js.map

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TeenJobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeenJobsComponent = (function () {
    function TeenJobsComponent() {
    }
    TeenJobsComponent.prototype.ngOnInit = function () {
    };
    TeenJobsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-teen-jobs',
            template: __webpack_require__(727),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [])
    ], TeenJobsComponent);
    return TeenJobsComponent;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/teen-jobs.component.js.map

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GroupsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupsService = (function () {
    function GroupsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
    }
    GroupsService.prototype.create = function (group) {
        return this.http
            .post('/api/groups', JSON.stringify(group), this.options)
            .toPromise()
            .then(function (response) {
            response.json().data;
        })
            .catch(function (er) { return alert(JSON.parse(er._body).error); });
    };
    GroupsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], GroupsService);
    return GroupsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/groups.service.js.map

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoggedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggedInGuard = (function () {
    function LoggedInGuard(authService) {
        this.authService = authService;
    }
    LoggedInGuard.prototype.canActivate = function () {
        return !this.authService.isLoggedIn();
    };
    LoggedInGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], LoggedInGuard);
    return LoggedInGuard;
    var _a;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/logged.in.guard.js.map

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotLoggedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotLoggedInGuard = (function () {
    function NotLoggedInGuard(authService) {
        this.authService = authService;
    }
    NotLoggedInGuard.prototype.canActivate = function () {
        return this.authService.isLoggedIn();
    };
    NotLoggedInGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], NotLoggedInGuard);
    return NotLoggedInGuard;
    var _a;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/not.logged.in.guard.js.map

/***/ },

/***/ 405:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 405;


/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(524);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/main.js.map

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_public_register_register_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_public_login_login_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_public_how_to_use_how_to_use_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_public_about_us_about_us_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_public_contacts_contacts_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_public_parent_guide_parent_guide_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_public_teen_jobs_teen_jobs_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_public_home_home_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_not_logged_in_guard__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_private_my_profile_my_profile_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_private_update_info_update_info_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_private_jobs_jobs_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_private_my_group_my_group_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_private_single_job_single_job_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_private_add_job_add_job_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_public_donate_donate_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_private_add_task_add_task_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_public_footer_footer_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_logged_in_guard__ = __webpack_require__(350);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routedComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var routes = [
    {
        "path": '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        "path": 'home',
        component: __WEBPACK_IMPORTED_MODULE_9__components_public_home_home_component__["a" /* HomeComponent */],
    },
    {
        "path": 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__components_public_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_logged_in_guard__["a" /* LoggedInGuard */]]
    },
    {
        "path": 'register',
        component: __WEBPACK_IMPORTED_MODULE_2__components_public_register_register_component__["a" /* RegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_logged_in_guard__["a" /* LoggedInGuard */]]
    },
    {
        "path": 'how-to-use',
        component: __WEBPACK_IMPORTED_MODULE_4__components_public_how_to_use_how_to_use_component__["a" /* HowToUseComponent */]
    },
    {
        "path": 'about-us',
        component: __WEBPACK_IMPORTED_MODULE_5__components_public_about_us_about_us_component__["a" /* AboutUsComponent */]
    },
    {
        "path": 'contacts',
        component: __WEBPACK_IMPORTED_MODULE_6__components_public_contacts_contacts_component__["a" /* ContactsComponent */]
    },
    {
        "path": 'parent-guide',
        component: __WEBPACK_IMPORTED_MODULE_7__components_public_parent_guide_parent_guide_component__["a" /* ParentGuideComponent */],
    },
    {
        "path": 'teen-jobs',
        component: __WEBPACK_IMPORTED_MODULE_8__components_public_teen_jobs_teen_jobs_component__["a" /* TeenJobsComponent */]
    },
    {
        "path": 'my-profile',
        component: __WEBPACK_IMPORTED_MODULE_11__components_private_my_profile_my_profile_component__["a" /* MyProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_not_logged_in_guard__["a" /* NotLoggedInGuard */]]
    },
    {
        "path": 'update-info',
        component: __WEBPACK_IMPORTED_MODULE_12__components_private_update_info_update_info_component__["a" /* UpdateInfoComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_not_logged_in_guard__["a" /* NotLoggedInGuard */]]
    },
    {
        "path": 'my-group',
        component: __WEBPACK_IMPORTED_MODULE_14__components_private_my_group_my_group_component__["a" /* MyGroupComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_not_logged_in_guard__["a" /* NotLoggedInGuard */]]
    },
    {
        "path": 'jobs',
        component: __WEBPACK_IMPORTED_MODULE_13__components_private_jobs_jobs_component__["a" /* JobsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_not_logged_in_guard__["a" /* NotLoggedInGuard */]]
    },
    {
        "path": 'jobs/:id',
        component: __WEBPACK_IMPORTED_MODULE_15__components_private_single_job_single_job_component__["a" /* SingleJobComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_not_logged_in_guard__["a" /* NotLoggedInGuard */]]
    },
    {
        "path": 'add-job',
        component: __WEBPACK_IMPORTED_MODULE_16__components_private_add_job_add_job_component__["a" /* AddJobComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_not_logged_in_guard__["a" /* NotLoggedInGuard */]]
    },
    {
        "path": 'donate',
        component: __WEBPACK_IMPORTED_MODULE_17__components_public_donate_donate_component__["a" /* DonateComponent */],
    },
    {
        "path": 'add-task',
        component: __WEBPACK_IMPORTED_MODULE_18__components_private_add_task_add_task_component__["a" /* AddTaskComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_not_logged_in_guard__["a" /* NotLoggedInGuard */]]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__components_public_register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_3__components_public_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_4__components_public_how_to_use_how_to_use_component__["a" /* HowToUseComponent */], __WEBPACK_IMPORTED_MODULE_5__components_public_about_us_about_us_component__["a" /* AboutUsComponent */], __WEBPACK_IMPORTED_MODULE_6__components_public_contacts_contacts_component__["a" /* ContactsComponent */], __WEBPACK_IMPORTED_MODULE_7__components_public_parent_guide_parent_guide_component__["a" /* ParentGuideComponent */], __WEBPACK_IMPORTED_MODULE_8__components_public_teen_jobs_teen_jobs_component__["a" /* TeenJobsComponent */], __WEBPACK_IMPORTED_MODULE_9__components_public_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_19__components_public_footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_11__components_private_my_profile_my_profile_component__["a" /* MyProfileComponent */], __WEBPACK_IMPORTED_MODULE_12__components_private_update_info_update_info_component__["a" /* UpdateInfoComponent */], __WEBPACK_IMPORTED_MODULE_14__components_private_my_group_my_group_component__["a" /* MyGroupComponent */], __WEBPACK_IMPORTED_MODULE_13__components_private_jobs_jobs_component__["a" /* JobsComponent */], __WEBPACK_IMPORTED_MODULE_15__components_private_single_job_single_job_component__["a" /* SingleJobComponent */], __WEBPACK_IMPORTED_MODULE_16__components_private_add_job_add_job_component__["a" /* AddJobComponent */], __WEBPACK_IMPORTED_MODULE_17__components_public_donate_donate_component__["a" /* DonateComponent */], __WEBPACK_IMPORTED_MODULE_18__components_private_add_task_add_task_component__["a" /* AddTaskComponent */]];
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/app-routing.module.js.map

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("ASDSD");
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: "app-root",
            template: __webpack_require__(709),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/app.component.js.map

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_public_navigation_navigation_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_public_how_to_use_how_to_use_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_public_about_us_about_us_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_public_teen_jobs_teen_jobs_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_public_parent_guide_parent_guide_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_public_contacts_contacts_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_public_home_home_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_public_footer_footer_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_private_my_profile_my_profile_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_private_update_info_update_info_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_private_jobs_jobs_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_private_my_group_my_group_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_private_single_job_single_job_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_private_add_job_add_job_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_public_donate_donate_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_private_add_task_add_task_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_groups_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_jobs_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_logged_in_guard__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_not_logged_in_guard__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_users_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_authentication_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_sort_pipe__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipes_capitalize_pipe__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipes_remove_spaces_pipe__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_filter_by_role_pipe__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__directives_hightlight_item_directive__ = __webpack_require__(528);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_public_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* routedComponents */],
                __WEBPACK_IMPORTED_MODULE_7__components_public_how_to_use_how_to_use_component__["a" /* HowToUseComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_public_about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_public_teen_jobs_teen_jobs_component__["a" /* TeenJobsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_public_parent_guide_parent_guide_component__["a" /* ParentGuideComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_public_contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_public_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_public_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_private_my_profile_my_profile_component__["a" /* MyProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_private_update_info_update_info_component__["a" /* UpdateInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_private_jobs_jobs_component__["a" /* JobsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_private_my_group_my_group_component__["a" /* MyGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_private_single_job_single_job_component__["a" /* SingleJobComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_private_add_job_add_job_component__["a" /* AddJobComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_public_donate_donate_component__["a" /* DonateComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_private_add_task_add_task_component__["a" /* AddTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pipes_sort_pipe__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_29__pipes_capitalize_pipe__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_30__pipes_remove_spaces_pipe__["a" /* RemoveSpacesPipe */],
                __WEBPACK_IMPORTED_MODULE_31__pipes_filter_by_role_pipe__["a" /* FilterByRolePipe */],
                __WEBPACK_IMPORTED_MODULE_32__directives_hightlight_item_directive__["a" /* HightlightItemDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["b" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_26__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_27__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_24__services_logged_in_guard__["a" /* LoggedInGuard */], __WEBPACK_IMPORTED_MODULE_25__services_not_logged_in_guard__["a" /* NotLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_23__services_jobs_service__["a" /* JobsService */], __WEBPACK_IMPORTED_MODULE_22__services_groups_service__["a" /* GroupsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/app.module.js.map

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', '');
    };
    LoginComponent.prototype.login = function () {
        this.authenticationService.login(this.model.username, this.model.password);
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(723),
            styles: [__webpack_require__(704)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/login.component.js.map

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(authService) {
        this.authService = authService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    NavigationComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__(724),
            styles: [__webpack_require__(705)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/navigation.component.js.map

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_groups_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_group__ = __webpack_require__(529);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(userService, groupService) {
        this.userService = userService;
        this.groupService = groupService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', '');
    };
    RegisterComponent.prototype.add = function () {
        this.userService.addUser(this.model);
        this.groupService.create(new __WEBPACK_IMPORTED_MODULE_4__models_group__["a" /* Group */]("My Group"));
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__(726),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_groups_service__["a" /* GroupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_groups_service__["a" /* GroupsService */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/register.component.js.map

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_invert_color__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HightlightItemDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DEFAULT_BG_COLOR = 'black', DEFAULT_HIGHLIGHT_SELECT_CLASS = 'highlight-item-selected';
var HightlightItemDirective = (function () {
    function HightlightItemDirective(element) {
        this.element = element;
    }
    Object.defineProperty(HightlightItemDirective.prototype, "highlightSelectClass", {
        get: function () {
            return this._highlightSelectClass || DEFAULT_HIGHLIGHT_SELECT_CLASS;
        },
        set: function (className) {
            this._highlightSelectClass = className;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HightlightItemDirective.prototype, "bgColor", {
        get: function () {
            return this._bgColor || DEFAULT_BG_COLOR;
        },
        set: function (bgColor) {
            this._bgColor = bgColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HightlightItemDirective.prototype, "fontColor", {
        get: function () {
            var invertedColor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_invert_color__["a" /* invert */])(this.bgColor);
            return invertedColor.toString();
        },
        enumerable: true,
        configurable: true
    });
    HightlightItemDirective.prototype.onItemClick = function () {
        var oldElement = document.getElementsByClassName(this.highlightSelectClass)[0];
        if (oldElement) {
            oldElement.classList.remove(this.highlightSelectClass);
            oldElement.parentElement.style.color = '';
            oldElement.parentElement.style.background = '';
        }
        this.element.nativeElement.classList.add(this.highlightSelectClass);
        this.element.nativeElement.parentElement.style.color = this.fontColor;
        this.element.nativeElement.parentElement.style.background = this.bgColor;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Input */])('hightlight-select-class'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], HightlightItemDirective.prototype, "highlightSelectClass", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Input */])('hightlight-color'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], HightlightItemDirective.prototype, "bgColor", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* HostListener */])('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HightlightItemDirective.prototype, "onItemClick", null);
    HightlightItemDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* Directive */])({
            selector: '[hightlight-item]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["g" /* ElementRef */]) === 'function' && _a) || Object])
    ], HightlightItemDirective);
    return HightlightItemDirective;
    var _a;
}());
;
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/hightlight-item.directive.js.map

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Group; });
var Group = (function () {
    function Group(title) {
        this.title = title;
        this.dateCreated = new Date();
    }
    return Group;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/group.js.map

/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CapitalizePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, args) {
        if (!value) {
            return value;
        }
        return value.replace(/\w\S*/g, function (str) {
            return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
        });
    };
    CapitalizePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({
            name: 'capitalize'
        }), 
        __metadata('design:paramtypes', [])
    ], CapitalizePipe);
    return CapitalizePipe;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/capitalize.pipe.js.map

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FilterByRolePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterByRolePipe = (function () {
    function FilterByRolePipe() {
    }
    FilterByRolePipe.prototype.transform = function (users, role) {
        if (role == "parent") {
            return true;
        }
        return false;
        //return users.filter(us => us.role == "parent")
    };
    FilterByRolePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({
            name: 'filterByRole'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterByRolePipe);
    return FilterByRolePipe;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/filter-by-role.pipe.js.map

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RemoveSpacesPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RemoveSpacesPipe = (function () {
    function RemoveSpacesPipe() {
    }
    RemoveSpacesPipe.prototype.transform = function (value) {
        return value.replace(/ /g, "");
    };
    RemoveSpacesPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({
            name: 'removeSpaces'
        }), 
        __metadata('design:paramtypes', [])
    ], RemoveSpacesPipe);
    return RemoveSpacesPipe;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/remove-spaces.pipe.js.map

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SortPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.compareJobs = function (leftJob, rightJob) {
        if (leftJob.title < rightJob.title)
            return -1;
        if (leftJob.title > rightJob.title)
            return 1;
        return 0;
    };
    SortPipe.prototype.transform = function (value, sortBy) {
        if (sortBy) {
            if (sortBy.startsWith('-')) {
                sortBy = sortBy.substr(1);
                return value.sort(function (x, y) {
                    return y[sortBy].toString()
                        .localeCompare(x[sortBy].toString());
                });
            }
            else {
                sortBy = sortBy.startsWith('+')
                    ? sortBy.substr(1)
                    : sortBy;
                return value.sort(function (x, y) {
                    return x[sortBy].toString()
                        .localeCompare(y[sortBy].toString());
                });
            }
        }
        else {
            return value.sort(this.compareJobs);
        }
    };
    SortPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({
            name: 'sort'
        }), 
        __metadata('design:paramtypes', [])
    ], SortPipe);
    return SortPipe;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/sort.pipe.js.map

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RGB; });
var RGB = (function () {
    function RGB(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    RGB.fromRgbString = function (colorString) {
        var _a = colorString.substring('rgb()'.length, colorString.length - 1)
            .split(',')
            .map(Number), red = _a[0], green = _a[1], blue = _a[2];
        return new RGB(red, green, blue);
    };
    RGB.prototype.invert = function () {
        return new RGB(255 - this.red, 255 - this.green, 255 - this.blue);
    };
    RGB.prototype.toString = function () {
        return "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";
    };
    return RGB;
}());
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/RGB.js.map

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RGB__ = __webpack_require__(534);
/* harmony export (immutable) */ exports["a"] = invert;

function invert(color) {
    if (color instanceof __WEBPACK_IMPORTED_MODULE_0__RGB__["a" /* RGB */]) {
        return color.invert();
    }
    var div = document.createElement('div');
    div.style.color = color;
    document.body.appendChild(div);
    var style = window.getComputedStyle(div);
    var rgbColor = __WEBPACK_IMPORTED_MODULE_0__RGB__["a" /* RGB */].fromRgbString(style.color);
    return rgbColor.invert();
}
;
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/invert-color.js.map

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/environment.js.map

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/prot3/OneDrive/Documents/GitHub/A2-Genesis/src/polyfills.js.map

/***/ },

/***/ 690:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 691:
/***/ function(module, exports) {

module.exports = "h2 {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    margin-top: 30px;\r\n}\r\n\r\ninput,\r\nselect {\r\n    width: 85%;\r\n}\r\n\r\nform {\r\n    margin-bottom: 135px;\r\n    margin-top: 5%;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}\r\n\r\ntextarea {\r\n    max-width: 800px\r\n}"

/***/ },

/***/ 692:
/***/ function(module, exports) {

module.exports = "h2 {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    margin-top: 30px;\r\n}\r\n\r\ninput,\r\nselect {\r\n    width: 85%;\r\n}\r\n\r\nform {\r\n    margin-bottom: 135px;\r\n    margin-top: 5%;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}\r\n\r\ntextarea {\r\n    max-width: 800px\r\n}\r\n\r\nspan {\r\n    margin-left: 40px\r\n}"

/***/ },

/***/ 693:
/***/ function(module, exports) {

module.exports = ".form-actions {\r\n    margin: 0;\r\n    background-color: transparent;\r\n    text-align: center;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}\r\n\r\nimg {\r\n    max-width: 250px;\r\n    max-height: 150px;\r\n    /*\r\n    max-width: 100%;\r\n    height: auto */\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    display: block;\r\n}\r\n\r\nli {\r\n    display: inline-block;\r\n}"

/***/ },

/***/ 694:
/***/ function(module, exports) {

module.exports = "img {\r\n    margin-left: 20%;\r\n}\r\n\r\n.container {\r\n    margin-top: -15px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#members {\r\n    margin-top: -10px;\r\n}\r\n\r\n.link {\r\n    color: white;\r\n    background-color: royalblue;\r\n    padding: 10px\r\n}\r\n\r\n.important {\r\n    border-radius: unset;\r\n}\r\n\r\n.important-box {\r\n    border: 2px solid darkslategrey;\r\n    padding: 10px\r\n}\r\n\r\n.right {\r\n    float: right;\r\n    margin-top: 20px\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}\r\n\r\nimg {\r\n    max-width: 200px;\r\n    height: auto\r\n}\r\n\r\n.submit {\r\n    margin-left: -58px;\r\n    margin-top: 5px;\r\n}\r\n\r\n#childName {\r\n    margin-left: -15px;\r\n}\r\n\r\n#Avatar {\r\n    margin-left: -15px;\r\n}"

/***/ },

/***/ 695:
/***/ function(module, exports) {

module.exports = "img {\r\n    margin-left: 20%;\r\n}\r\n\r\n.container {\r\n    margin-top: -15px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#members {\r\n    margin-top: -10px;\r\n}\r\n\r\n.link {\r\n    color: white;\r\n    background-color: royalblue;\r\n    padding: 10px\r\n}\r\n\r\n.important {\r\n    border-radius: unset;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}\r\n\r\nimg {\r\n    max-width: 200px;\r\n    height: auto\r\n}"

/***/ },

/***/ 696:
/***/ function(module, exports) {

module.exports = ".container {\r\n    margin-top: 50px\r\n}\r\n\r\nh2 {\r\n    text-align: center\r\n}\r\n\r\n.important {\r\n    color: white;\r\n    background-color: royalblue;\r\n    padding: 10px;\r\n    text-align: center\r\n}\r\n\r\nimg {\r\n    max-width: 720px;\r\n    max-height: 500px\r\n}"

/***/ },

/***/ 697:
/***/ function(module, exports) {

module.exports = "h2 {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    margin-top: 30px;\r\n}\r\n\r\ninput,\r\nselect {\r\n    width: 85%;\r\n}\r\n\r\nform {\r\n    margin-bottom: 135px;\r\n    margin-top: 5%;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}"

/***/ },

/***/ 698:
/***/ function(module, exports) {

module.exports = ".jumbotron {\r\n    height: 700px;\r\n    background-image: url('./../../../../Resources/positive.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n    height: 500px\r\n}\r\n\r\n.right-align {\r\n    float: right;\r\n    margin-top: -100px\r\n}\r\n\r\n.important {\r\n    color: black;\r\n    background-color: #FFE086;\r\n    padding: 10px\r\n}\r\n\r\n.important-box {\r\n    border: 2px solid darkslategrey\r\n}\r\n\r\n.helpguide {\r\n    text-decoration: underline;\r\n    margin-top: 20px\r\n}\r\n\r\n.link {\r\n    background-color: #8DB8F2;\r\n    padding: 10px\r\n}\r\n\r\n.link a {\r\n    color: white;\r\n}\r\n\r\n.drug-abuse {\r\n    text-decoration: underline;\r\n    color: #8DB8F2\r\n}\r\n\r\n.center {\r\n    border: none;\r\n    background-color: #FFE086;\r\n    font-weight: bold;\r\n    color: black;\r\n    margin-right: 100px;\r\n    margin-top: 20px\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}"

/***/ },

/***/ 699:
/***/ function(module, exports) {

module.exports = "img {\r\n    margin-left: 20%;\r\n}\r\n\r\n.container {\r\n    margin-top: -15px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#members {\r\n    margin-top: -10px;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}"

/***/ },

/***/ 700:
/***/ function(module, exports) {

module.exports = ".jumbotron {\r\n    background-image: url('./../../../../Resources/cosmos_background_logo.PNG');\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    height: 500px\r\n}\r\n\r\n.right-align {\r\n    float: right\r\n}"

/***/ },

/***/ 701:
/***/ function(module, exports) {

module.exports = "footer {\r\n    background-color: #222222;\r\n    height: 100\r\n}\r\n\r\n.ul-footer {\r\n    margin-left: -40px;\r\n    padding-top: 1%;\r\n}\r\n\r\n.footer-link {\r\n    display: inline-block;\r\n    margin-right: 25px\r\n}\r\n\r\nspan {\r\n    margin-left: 50px;\r\n    margin-right: 50px\r\n}\r\n\r\n.copyright {\r\n    color: lightgrey\r\n}"

/***/ },

/***/ 702:
/***/ function(module, exports) {

module.exports = ".header-banner {\r\n    max-width: 100%;\r\n    max-height: 75%;\r\n    width: 100%;    \r\n}\r\n\r\n.well {\r\n    height: 100\r\n}\r\n\r\n.background {\r\n    background-color: black\r\n}"

/***/ },

/***/ 703:
/***/ function(module, exports) {

module.exports = ".video-container {\r\n    position: relative;\r\n    padding-bottom: 45%;\r\n    padding-top: 30px;\r\n    height: 0;\r\n    overflow: hidden;\r\n    margin-left: 150px;\r\n}\r\n\r\n.video-container iframe,\r\n.video-container object,\r\n.video-container embed {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    margin: 30px;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}"

/***/ },

/***/ 704:
/***/ function(module, exports) {

module.exports = "h2 {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    margin-top: 30px;\r\n}\r\n\r\ninput {\r\n    width: 85%;\r\n}\r\n\r\nform {\r\n    margin-top: 5%;\r\n    margin-bottom: 282px;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}"

/***/ },

/***/ 705:
/***/ function(module, exports) {

module.exports = ".navbar {\r\n    margin-bottom: 0;\r\n    border-radius: 0;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.logo {\r\n    height: 150%;\r\n    margin-top: -5px;\r\n}"

/***/ },

/***/ 706:
/***/ function(module, exports) {

module.exports = ".form-actions {\r\n    margin: 0;\r\n    background-color: transparent;\r\n    text-align: center;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}\r\n\r\n.helpguide {\r\n    text-decoration: underline;\r\n    margin-top: 20px\r\n}\r\n\r\n.link {\r\n    background-color: royalblue;\r\n    padding: 10px\r\n}\r\n\r\n.link a {\r\n    color: white;\r\n}\r\n\r\n.drug-abuse {\r\n    text-decoration: underline;\r\n    color: royalblue\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}"

/***/ },

/***/ 707:
/***/ function(module, exports) {

module.exports = "h2 {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    margin-top: 30px;\r\n}\r\n\r\ninput,\r\nselect {\r\n    width: 85%;\r\n}\r\n\r\nform {\r\n    margin-bottom: 135px;\r\n    margin-top: 5%;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px\r\n}\r\n\r\nspan {\r\n    margin-left: 40px\r\n}"

/***/ },

/***/ 708:
/***/ function(module, exports) {

module.exports = ".jumbotron {\r\n    background-image: url('./../../../../Resources/classroom_english.png');\r\n    height: 500px\r\n}\r\n\r\n.right-align {\r\n    float: right;\r\n    margin-top: -40px\r\n}\r\n\r\n.important {\r\n    color: white;\r\n    background-color: #449D44;\r\n    padding: 10px\r\n}\r\n\r\n.important-box {\r\n    border: 2px solid darkslategrey\r\n}\r\n\r\n.helpguide {\r\n    text-decoration: underline;\r\n    margin-top: 20px\r\n}\r\n\r\n.link {\r\n    background-color: #8DB8F2;\r\n    padding: 10px\r\n}\r\n\r\n.link a {\r\n    color: white;\r\n}\r\n\r\n.drug-abuse {\r\n    text-decoration: underline;\r\n    color: #8DB8F2\r\n}\r\n\r\n.center {\r\n    margin-right: 100px;\r\n    margin-top: 20px\r\n}"

/***/ },

/***/ 709:
/***/ function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ },

/***/ 710:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>ADD NEW JOB</h2>\r\n    <hr>\r\n    <form class=\"form-horizontal\" #addJobForm=\"ngForm\" (ngSubmit)=\"addJob();\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\"><span class=\"glyphicon glyphicon-check\"></span></label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Title\" name=\"title\" [(ngModel)]=\"model.title\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\"><span class=\"glyphicon glyphicon-edit\"></span></label>\r\n            <div class=\"col-sm-10\">\r\n                <textarea class=\"form-control\" placeholder=\"Description\" name=\"description\" [(ngModel)]=\"model.description\"></textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\"><span class=\"glyphicon glyphicon-euro\"></span></label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Salary\" name=\"salary\" name=\"salary\" [(ngModel)]=\"model.salary\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\"><span class=\"glyphicon glyphicon-hourglass\"></span></label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Work hours\" name=\"workHours\" [(ngModel)]=\"model.workHours\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\"><span class=\"glyphicon glyphicon-picture\"></span></label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"avatar\" class=\"form-control\" placeholder=\"Add photo URL\" name=\"pictureUrl\" [(ngModel)]=\"model.pictureUrl\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">ADD JOB</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<br>"

/***/ },

/***/ 711:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>ADD NEW TASK</h2>\r\n    <hr>\r\n    <form class=\"form-horizontal\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"email\"><span class=\"glyphicon glyphicon-check\"></span></label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"name\" class=\"form-control\" placeholder=\"Task title\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"email\"><span class=\"glyphicon glyphicon-edit\"></span></label>\r\n            <div class=\"col-sm-10\">\r\n                <textarea class=\"form-control\" placeholder=\"Description\"></textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"email\"><span class=\"glyphicon glyphicon-user\"></span></label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"name\" class=\"form-control\" placeholder=\"Author\" name=\"username\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"pwd\"><span class=\"glyphicon glyphicon-hourglass\"></span></label>\r\n            <div class=\"col-sm-10\">\r\n                <label class=\"radio-inline\">\r\n                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\"> <span> DAILY</span>\r\n                </label>\r\n                <label class=\"radio-inline\">\r\n                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\"> <span> WEEKLY</span>\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button type=\"submit\" class=\"btn btn-success\">ADD NEW TASK</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<br>"

/***/ },

/***/ 712:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"container-fluid bg-3 text-center\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 center\">\r\n                <h2 class=\"page-header\">JOBS <small>at TEEN@home</small>\r\n                </h2>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"input-group\">\r\n                <!--<p><a class=\"btn btn-lg btn-primary\" routerLink=\"№\" role=\"button\">SORT JOBS BY TITLE</a></p>-->\r\n                <button (click)=\"sortJobs\" class=\"btn btn-lg btn-warning\" type=\"button\">SORT JOBS BY TITLE</button>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\r\n                <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-primary\" type=\"button\"><span class=\"glyphicon glyphicon-search\" placeholder=\"Search...\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder ='Search...'\"></span></button>\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <br> <br>\r\n        <div class=\"col-lg-12 center\">\r\n            <ul>\r\n                <li>\r\n                    <div id=\"picture-container\" *ngFor=\"let job of this.jobs;\" class=\"col-sm-3\">\r\n                        <a routerLink=\"/jobs/{{job.id}}\"> {{job.title | uppercase}}\r\n                        <img src=\"{{job.pictureUrl}}\" class=\"img-responsive img-thumbnail\" alt=\"Image\">\r\n                    </a>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <br>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 text-center\">\r\n            <p><a class=\"btn btn-lg btn-primary\" routerLink=\"/add-job\" role=\"button\">ADD NEW JOB</a></p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br><br>\r\n<br>"

/***/ },

/***/ 713:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h2 class=\"page-header\">FAMILY GROUP <small>TEEN@home</small>\r\n            </h2>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"members\" class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h3 class=\"page-header\">Group Overview</h3>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6 text-center\">\r\n            <!--<img class=\"img-circle img-responsive img-center\" src=\"http://placehold.it/200x200\" alt=\"\">-->\r\n            <img class=\"img-responsive img-rounded img-center\" src=\"http://placehold.it/200x200\" alt=\"\">\r\n            <h3><strong>GROUP NAME</strong>\r\n                <br><small>Parent/Child organization</small><br>\r\n            </h3>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-8 text-left\">\r\n\r\n        </div>\r\n        <!--<div class=\"col-lg-4 col-sm-6 text-center\">\r\n        </div>-->\r\n        <div class=\"col-lg-4 col-sm-6 text-left\">\r\n            <h4 class=\"link\"><strong>GROUP INFORMATION</strong></h4>\r\n            <p><strong>Child members: </strong> Childrens</p>\r\n            <p><strong>Created by: </strong> Parent Name</p>\r\n            <p><strong>Created At: </strong> DD:MM:SS</p>\r\n            <br>\r\n            <h4 class=\"link\"><strong>OPTIONS</strong></h4>\r\n            <p><a class=\"btn btn-lg btn-warning\" routerLink=\"#\" role=\"button\" (click)=\"showClass = !showClass\">ADD CHILD</a></p>\r\n            <label [ngClass]=\"{ 'hidden': showClass }\">\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"childName\" placeholder=\"Child Name\">\r\n                </div>\r\n                <div class=\"col-sm-offset-2 col-sm-10\">\r\n                    <button type=\"submit\" class=\"btn btn-primary submit\">SUBMIT</button>\r\n                </div>\r\n            </label>\r\n            <p><a class=\"btn btn-lg btn-info\" routerLink=\"#\" role=\"button\" (click)=\"showClass1 = !showClass1\">ADD GROUP AVATAR</a></p>\r\n            <label [ngClass]=\"{ 'hidden': showClass1 }\">\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"Avatar\" placeholder=\"Avatar Url\">\r\n                </div>\r\n                <div class=\"col-sm-offset-2 col-sm-10\">\r\n                    <button type=\"submit\" class=\"btn btn-primary submit\">SUBMIT</button>\r\n                </div>\r\n            </label>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6 text-left\">\r\n            <h4 class=\"link\"><strong>TODO LIST</strong></h4>\r\n            <div class=\"important-box\">\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                <input type=\"checkbox\" value=\"\">\r\n                To study all new lessons for school\r\n              </label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                <input type=\"checkbox\" value=\"\">\r\n                To do all homework for tomorrow\r\n              </label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                <input type=\"checkbox\" value=\"\">\r\n                To go to swimming pool for workout\r\n              </label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                <input type=\"checkbox\" value=\"\">\r\n                To clean and organize your bedroom\r\n              </label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                <input type=\"checkbox\" value=\"\" >\r\n                To wash the dishes\r\n              </label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                    <label>\r\n                <input type=\"checkbox\" value=\"\">\r\n                Go to walk with the dog\r\n              </label>\r\n                </div>\r\n            </div>\r\n            <p><a class=\"btn btn-lg btn-success right\" routerLink=\"/add-task\" role=\"button\">ADD NEW TASK</a></p>\r\n        </div>\r\n        <br><br>\r\n        <!--<div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n            </div>\r\n        </div>-->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <br><br>\r\n                <p>Fin more information about the app here: <a href=\"/about-us\" target=\"_blank\">ABOUT THE APP</a></p>\r\n                <p>Video tuttorial: <a href=\"/how-to-use\" target=\"_blank\">HOW TO USE IT</a></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br>"

/***/ },

/***/ 714:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h2 class=\"page-header\"><small>You are logged successfully at</small> TEEN@home\r\n            </h2>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"members\" class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h3 class=\"page-header\">Account Overview</h3>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6 text-center profile-left-panel\">\r\n            <!--<img class=\"img-responsive img-circle img-center\" src=\"{{this.user.profilePictureUrl}}\" alt=\"profilePic\">-->\r\n            <img class=\"img-responsive img-rounded img-center\" src=\"{{this.user.profilePictureUrl}}\" alt=\"profilePic\">\r\n            <h3><strong>{{this.user.username | uppercase | removeSpaces}}</strong>\r\n                <br><small>Parent/Child</small><br>{{this.user.firstName}} {{this.user.lastName}}\r\n            </h3>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6 text-left\">\r\n            <h4 class=\"link\"><strong>PROFILE INFORMATION</strong></h4>\r\n            <p><strong>Name: </strong> {{this.user.firstName | capitalize}} {{this.user.lastName | capitalize}}</p>\r\n            <p><strong>Email: </strong> {{this.user.email}}</p>\r\n            <p><strong>Nickname: </strong> {{this.user.username | lowercase | removeSpaces}}</p>\r\n            <p><strong>Created At: </strong> {{this.user.createdAt | date}}</p>\r\n            <p><strong>Updated At: </strong> {{this.user.lastUpdated | date}}</p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6 text-left\">\r\n            <h4 class=\"link\"><strong>OPTIONS</strong></h4>\r\n            <p><a class=\"btn btn-lg btn-info\" routerLink=\"/update-info\" role=\"button\"> UPDATE INFORMATION</a></p>\r\n            <p><a class=\"btn btn-lg btn-success right-align\" routerLink=\"/donate\" role=\"button\">DONATE NOW!</a></p>\r\n        </div>\r\n        <br><br>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <br><br>\r\n                <p>Find more information about the app here: <a routerLink=\"/about-us\" target=\"_blank\">ABOUT THE APP</a></p>\r\n                <p>Video tuttorial: <a routerLink=\"/how-to-use\" target=\"_blank\">HOW TO USE IT</a></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br>"

/***/ },

/***/ 715:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>{{job.title | uppercase}}</h2>\r\n    <hr>\r\n    <div class=\"col-md-8 col-md-offset-2\">\r\n        <img src=\"{{job.pictureUrl}}\" class=\"img-responsive img-thumbnail\" style=\"width:100%\" alt=\"Image\">\r\n    </div>\r\n\r\n    <div class=\"row marketing\">\r\n        <div class=\"col-md-8 col-md-offset-2\">\r\n            <h4 class=\"important\"><strong>JOB DETAILS</strong></h4>\r\n            <p><strong>Description: </strong> {{job.description}}</p>\r\n            <p><strong>Author: </strong> {{job.author | capitalize}}</p>\r\n            <p><strong>Work Hours: </strong> {{job.workHours}}</p>\r\n            <p><strong>Salary: </strong> {{job.salary | currency:'EUR':true}}</p>\r\n            <p><strong>Date Created: </strong> {{job.dateCreated | date:\"MM/dd/yy\"}}</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br><br><br>"

/***/ },

/***/ 716:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>UPDATE ACCOUNT INFORMATION</h2>\r\n    <hr>\r\n    <form class=\"form-horizontal\" #updateForm=\"ngForm\" (ngSubmit)=\"update();\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"email\"><span class=\"glyphicon glyphicon-send\"></span></label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"name\" class=\"form-control\" id=\"firstName\" placeholder=\"First Name\" name=\"firstName\" [(ngModel)]=\"model.firstName\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"email\"><span class=\"glyphicon glyphicon-edit\"></span></label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"name\" class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\" name=\"lastName\" [(ngModel)]=\"model.lastName\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"email\"><span class=\"glyphicon glyphicon-user\"></span></label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"name\" class=\"form-control\" id=\"userName\" placeholder=\"User Name\" name=\"username\" [(ngModel)]=\"model.username\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"email\"><span class=\"glyphicon glyphicon-transfer\"></span></label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"email\" [(ngModel)]=\"model.email\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"pwd\"><span class=\"glyphicon glyphicon-lock\"></span></label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"password\" [(ngModel)]=\"model.password\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"pwd\"><span class=\"glyphicon glyphicon-check\"></span></label>\r\n            <div class=\"col-sm-10\">\r\n                <select id=\"category-register\" name=\"category\" required=\"true\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder ='Category'\" class=\"form-control\">\r\n                    <option value=\"male\">child</option>\r\n                    <option value=\"female\">parent</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"pwd\"><span class=\"glyphicon glyphicon-picture\"></span></label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"avatar\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter avatar URL (optional)\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button type=\"submit\" class=\"btn btn-info\">SUBMIT</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<br>"

/***/ },

/***/ 717:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n    </div>\r\n    <h1 class=\"display-3\">TEEN@home</h1>\r\n    <p class=\"lead\">Be a helper if you like our app <a routerLink=\"/donate\">donate</a> to help develop it better!</p>\r\n    <p><a class=\"btn btn-lg btn-primary right-align\" routerLink=\"/donate\" role=\"button\">DONATE NOW!</a></p>\r\n\r\n    <div class=\"row marketing\">\r\n        <div class=\"col-lg-12\">\r\n            <h4><strong>PARENTS vs. CHILDRENS</strong></h4>\r\n            <p>It’s not easy being a teenager in today’s world. From depression to bullying and cutting, teens grapple with a wide range of issues as they grow and develop. But here’s the good news: you’re not alone and you can feel better.<br> Learn more\r\n                about the signs and symptoms of some common teen challenges, what you can do to help yourself, and how to reach out and talk about tough subjects with your friends and family members.\r\n            </p>\r\n            <p>Тeens are knowledgeable, smart, and confident. They have little challenge to make the right choice when these topics are presented. However, it is important to recognize that these issues are possibly effecting the families and friends with\r\n                which spends time.\r\n            </p>\r\n            <p>Parenting has often been described as a full-time job. Moms and dads have to organize children’s schedules, find kid-friendly places to eat, and remember all the things that their family needs from the grocery store this week. Fortunately,\r\n                there is <strong>TEEN@home</strong> app that can help busy parents to keep track of everything. We are here to help parents with all parenting challenges from those everyday situations to the most serious issue of child abuse.\r\n            </p>\r\n            <h4><strong>TEEN AT HOME</strong></h4>\r\n            <p>This application is specially developed for Parents and Children. The main idea is to help both groups to have better communication, easier life, and positive emotions. If you are busy Parent and don't have enough time for your children. If\r\n                you have the full-time job and cannot stay at home to organize children’s schedules, to study whit them and do all homework, to remember all the things in schedules as sport, lessons etc. If you have a lazy teen at home, who doesn't want\r\n                to help with the domestic work, want to do their homework and Learn new things! If you are TEEN and don't have enough money for school.. and many more reasons. Here is the simple solve of everything! <br>\r\n                <br><strong>TEEN@home</strong> is here! <br><br> This APP is amazing! Its provide opportunity to make daily/week Task list for your child. With everything needed for school lessons, homework, training, sport and domestic tasks. You can\r\n                add tasks and wish improvement for their solving like - picture, video etc. TEEN AT HOME provide you best opportunity to control your Children when you aren't at home and to manage successful their daily/weekly schedules. For every solved\r\n                task, the teens receive points. They collect their points in the wallet because every point is 1 $/Euro. This mean that you can control the money as well. If some child solves all necessary tasks for the day, it can receive daily cash\r\n                for tomorrow or for next week, depends on the Task list type (daily / weekly). <br> TEEN AT HOME is perfect HELPER for Parents and successful motive for better Children.\r\n                <br> If you are the parent of trouble TEEN you can find <a routerLink=\"/parent-helper\">help</a> in our app! You are not alone, every child grow up! <br>If you are TEEN who need more money for a week, you can find <a href=\"/teen-jobs\">help</a>                in our the app as well!\r\n            </p>\r\n            <h4 class=\"helpguide\"><a routerLink=\"/how-to-use\"><strong>TUTTORIAL HOW TO USE THE APP</strong></a></h4>\r\n            <p>In this page you can find video tuttorial about how to use succesful our application.</p>\r\n            <h4 class=\"important\"><strong>What you can find here</strong></h4>\r\n            <div class=\"box important-box\">\r\n                <ol>\r\n                    <li>Are you a teenager looking for a job? Or perhaps a parent who is helping your kid to get their first job? You can find jobs for teens</li>\r\n                    <li>You can find help if you are parent of trouble TEEN!</li>\r\n                    <li>Can find help for busy Parents.</li>\r\n                    <li>Can add daily / weekly tasks for your child.</li>\r\n                    <li>Can have full control of your child and manage successful child's schedules.</li>\r\n                    <li>Motivate you Children to study and help with house work as well.</li>\r\n                    <li>Have full control of the weekly money.</li>\r\n                    <li>All childrens can receive more money when they do bonus tasks.</li>\r\n                </ol>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-6\">\r\n            <h4 class=\"link\"><a href=\"http://www.hireteen.com/\"><strong>Hire Teen</strong></a></h4>\r\n            <p>Job application should be processed in the website of the company you are applying for or you need to follow the guideline which is provided on each company review.</p>\r\n            <h4 class=\"link\"><a href=\"http://www.snagajob.com/job-search/q-teen\"><strong>Snaga job</strong></a></h4>\r\n            <p>Get solutions across the entire hiring process—more applications, qualified hires, easier scheduling and more.</p>\r\n            <h4 class=\"link\"><a href=\"http://www.dreamhomebasedwork.com/online-jobs-for-teens/\"><strong>Dream home based work</strong></a></h4>\r\n            <p>Most people who have a regular job during the day, end up taking jobs that they can do in the evening or the night. You can actually spend your time in a more constructive way and make some money while at it.</p>\r\n            <h4 class=\"drug-abuse\"><strong>Popular part-time jobs and small business opportunities:</strong></h4>\r\n            <div class=\"box important-box\">\r\n                <ul>\r\n                    <li><strong>Animal Shelter Worker</strong></li>\r\n                    <li><strong>Arts and Crafts Production and Sales</strong></li>\r\n                    <li><strong>Babysitting</strong></li>\r\n                    <li><strong>Car Wash Attendant</strong></li>\r\n                    <li><strong>Document and Photograph Archival Services</strong></li>\r\n                </ul>\r\n            </div>\r\n            <a class=\"btn btn-lg btn-success center\" routerLink=\"/teen-jobs\" role=\"button\">FIND MORE</a>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n            <h4 class=\"link\"><a href=\"http://www.parenthelp.org.nz/\"><strong>Parent Help</strong></a></h4>\r\n            <p>At Parent Help we offer the only designated free national parenting helpline in New Zealand that is available seven days a week. We are here to help parents. of child abuse.</p>\r\n            <h4 class=\"link\"><a href=\"http://busyparentsnetwork.com/\"><strong>Busy Parents Network</strong></a></h4>\r\n            <p>Busy Parents Network is a community social enterprise set up with the specific intention of bringing families together in the local community for fun and more.</p>\r\n            <h4 class=\"link\"><a href=\"http://www.teendrugrehabs.com/\"><strong>Teen drug rehabs</strong></a></h4>\r\n            <p>Drug abuse and addiction that starts in the teenage years can lead to lifelong abuse and addiction if the problem isn’t addressed early on. Parents need to know what to look for and how to get help.</p>\r\n            <h4 class=\"drug-abuse\"><strong>You Need to Know About Teenage Drug Abuse:</strong></h4>\r\n            <div class=\"box important-box\">\r\n                <ul>\r\n                    <li><strong>Family History.</strong></li>\r\n                    <li><strong>Relationships.</strong></li>\r\n                    <li><strong>Mental Health.</strong></li>\r\n                    <li><strong>Personal Development.</strong></li>\r\n                    <li><strong>Availability.</strong></li>\r\n                </ul>\r\n            </div>\r\n            <a class=\"btn btn-lg btn-success center\" routerLink=\"/parent-guide\" role=\"button\">FIND MORE</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br><br>\r\n<br><br>"

/***/ },

/***/ 718:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <!-- Introduction Row -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h2 class=\"page-header\">A2 GENESIS - TEEN@home\r\n                <small>It's Nice to Meet You!</small>\r\n            </h2>\r\n            <p>View the source code: <a href=\"https://github.com/Angular-2/A2-Genesis\" target=\"_blank\">Github</a></p>\r\n\r\n            <p>Please visit: <a href=\"https://github.com/Angular-2/A2-Genesis/blob/master/CourseProject.md\" target=\"_blank\">Project Requirements</a></p>\r\n            <p>This application was developed as a part of Telerik Academy's Angular 2 course.</p>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Team Members Row -->\r\n    <div id=\"members\" class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h3 class=\"page-header\">Our Team</h3>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6 text-center\">\r\n            <img class=\"img-circle img-responsive img-center\" src=\"./../../../../Resources/rumen-tsanev.jpg\" alt=\"\">\r\n            <h3>Rumen Tsanov\r\n                <br><small>Front-End Developer</small>\r\n            </h3>\r\n            <p>\r\n                <a href=\"https://telerikacademy.com/Users/RumenTsanov\" target=\"blank\"> <strong>RumenTsanov</strong></a>\r\n            </p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6 text-center\">\r\n            <img class=\"img-circle img-responsive img-center\" src=\"./../../../../Resources/niya-keranova.jpg\" alt=\"\">\r\n            <h3>Niya Keranova\r\n                <br><small>Designer/Front-End Developer</small>\r\n            </h3>\r\n            <p>\r\n                <a href=\"https://telerikacademy.com/Users/Nayata\" target=\"blank\"> <strong>Nayata</strong></a>\r\n            </p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6 text-center\">\r\n            <img class=\"img-circle img-responsive img-center\" src=\"./../../../../Resources/georgi-karaboichev.jpg\" alt=\"\">\r\n            <h3>Georgi Karaboichev\r\n                <br><small>Back-End Developer</small>\r\n            </h3>\r\n            <p>\r\n                <a href=\"https://telerikacademy.com/Users/prot3ct\" target=\"blank\"> <strong>prot3ct</strong></a>\r\n            </p>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<br>"

/***/ },

/***/ 719:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n    </div>\r\n    <h1 class=\"display-3\">TEEN@home <small>application</small></h1>\r\n    <!--hightlight-item-->\r\n    <p class=\"lead\" hightlight-item>Be a helper <a routerLink=\"/donate\">donate</a> to help develop it better!</p>\r\n    <div class=\"row marketing\">\r\n        <div class=\"col-md-8 col-md-offset-2\">\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">\r\n                <span class=\"input-group-addon\">.00</span>\r\n            </div>\r\n            <br>\r\n            <p><a class=\"btn btn-lg btn-success right-align\" routerLink=\"/donate\" role=\"button\">DONATE NOW!</a></p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br><br>\r\n<br>"

/***/ },

/***/ 720:
/***/ function(module, exports) {

module.exports = "<footer class=\"container-fluid text-center navbar-fixed-bottom\">\r\n    <ul class=\"ul-footer\">\r\n        <li class=\"footer-link\"><a class=\"a-nav-bottom a-nav-bottom-footer\" routerLink=\"/how-to-use\">How to use it</a><span>|</span></li>\r\n        <li class=\"footer-link\"><a class=\"a-nav-bottom a-nav-bottom-footer\" routerLink=\"/about-us\">About the App</a><span>|</span></li>\r\n        <li class=\"footer-link\"><a class=\"a-nav-bottom a-nav-bottom-footer\" routerLink=\"/teen-jobs\">Teen Jobs</a><span>|</span></li>\r\n        <li class=\"footer-link\"><a class=\"a-nav-bottom a-nav-bottom-footer\" routerLink=\"/parent-guide\">Parent helper</a><span></span></li>\r\n        <li class=\"footer-link copyright\"><strong>TEEN@home</strong> | <em>by A2 Genesis</em> &copy; Telerik Academy</li>\r\n    </ul>\r\n    <!--<ul class=\"list-inline\">\r\n        <li>\r\n            <a href=\"https://twitter.com/intent/tweet?text=Hello%20world\">\r\n                <button class=\"btn btn-twitter\"><i class=\"fa fa-twitter\"></i> | Share to Twitter</button>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"https://www.facebook.com/\">\r\n                <button class=\"btn btn-facebook\"><i class=\"fa fa-facebook\"></i> | Share to Facebook</button></a>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"https://www.linkedin.com/\">\r\n                <button class=\"btn btn-linkedin\"><i class=\"fa fa-linkedin\"></i> | Share to Linkedin</button>\r\n            </a>\r\n        </li>\r\n    </ul>-->\r\n</footer>"

/***/ },

/***/ 721:
/***/ function(module, exports) {

module.exports = "<div class=\"col-lg-12 background\">\r\n    <div>\r\n        <img class=\"header-banner\" src=\"./../../../../Resources/cosmos_background_logo.PNG\" alt=\"Image\">\r\n        <div class=\"carousel-caption\">\r\n            <p>TEEN@home</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container text-center\">\r\n    <h3>What We Do</h3><br>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <img src=\"./../../../../Resources/lazy-teen.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">\r\n            <p><strong>LAZY TEENS</strong></p>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <img src=\"./../../../../Resources/busy-parent.jpg\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\">\r\n            <p><strong>BUSY PARENTS</strong></p>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"well\">\r\n                <p><strong>TEEN PROBLEMS</strong> <br> It’s not easy being a teenager in today’s world. From depression to bullying and cutting, teens grapple with a wide range of issues as they grow and develop. But here’s the good news: you’re not alone\r\n                    and you can feel better.\r\n                </p>\r\n            </div>\r\n            <div class=\"well\">\r\n                <p><strong>PARENT HELPER</strong> <br> Parenting has often been described as a full-time job. Moms and dads have to organize children’s schedules, find kid-friendly places to eat, and remember all the things that their family needs from the\r\n                    grocery store this week.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div><br><br>"

/***/ },

/***/ 722:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>Learn how to use our product!</h2>\r\n    <hr>\r\n    <div class=\"video-container\">\r\n        <iframe width=\"853\" height=\"480\" src=\"http://www.screencast.com/t/8gs9mqlr9lF\" frameborder=\"0\" allowfullscreen></iframe>\r\n    </div>\r\n</div>\r\n<br>"

/***/ },

/***/ 723:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>LOGIN</h2>\r\n    <hr>\r\n    <form class=\"form-horizontal\" #superheroesForm=\"ngForm\" (ngSubmit)=\"login();\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"email\">User Name:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"name\" class=\"form-control\" id=\"userName\" placeholder=\"User Name\" name=\"username\" [(ngModel)]=\"model.username\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"pwd\">Password:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"password\" [(ngModel)]=\"model.password\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<br>"

/***/ },

/***/ 724:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" routerLink=\"/home\"><img class=\"logo\" src=\"./../../../../Resources/logo.PNG\"> </a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a routerLink=\"/how-to-use\">HOW TO USE IT</a></li>\r\n                <li><a routerLink=\"/about-us\">ABOUT THE APP</a></li>\r\n                <li><a routerLink=\"/teen-jobs\">TEEN JOBS</a></li>\r\n                <li><a routerLink=\"/parent-guide\">PARENT HELPER</a></li>\r\n                <li><a routerLink=\"/contacts\">CONTACTS</a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <!--<li class=\"dropdown\" *ngIf=\"isLoggedIn()\">\r\n                    <a routerLink=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-user\"></span> PROFILE\r\n                        <span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\" role=\"menu\">\r\n                        <li><a routerLink=\"#\">MY PROFILE</a></li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a routerLink=\"#\">EDIT PROFILE</a></li>\r\n                        <li><a routerLink=\"#\">JOBS VIEW</a></li>\r\n                        <li><a routerLink=\"#\">GROUP</a></li>\r\n                        <li><a routerLink=\"#\">TASKS</a></li>\r\n                    </ul>\r\n                </li>-->\r\n                <li *ngIf=\"isLoggedIn()\"><a routerLink=\"/my-group\"><span class=\"glyphicon glyphicon-globe\"></span> MY GROUP</a></li>\r\n                <li *ngIf=\"isLoggedIn()\"><a routerLink=\"/jobs\"><span class=\"glyphicon glyphicon-equalizer\"></span> JOBS</a></li>\r\n                <li *ngIf=\"isLoggedIn()\"><a routerLink=\"/my-profile\"><span class=\"glyphicon glyphicon-user\"></span> MY PROFILE</a></li>\r\n                <li *ngIf=\"isLoggedIn()\"><a (click)=\"logout()\" routerLink=\"/home\"><span class=\"glyphicon glyphicon-log-out\"></span> LOGOUT</a></li>\r\n                <li *ngIf=\"!isLoggedIn()\"><a routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\" ></span> LOGIN</a></li>\r\n                <li *ngIf=\"!isLoggedIn()\"><a routerLink=\"/register\"><span class=\"glyphicon glyphicon-lock\"></span> REGISTER</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ },

/***/ 725:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n        <h1 class=\"display-3\">Help parents of troubled teens</h1>\r\n        <p class=\"lead\">Be a helper share your knowledge about rasing troubled children or <a routerLink=\"/donate\">donate</a> to help them get professional help!</p>\r\n        <p><a class=\"btn btn-lg btn-success\" routerLink=\"/donate\" role=\"button\">DONATE NOW!</a></p>\r\n    </div>\r\n\r\n    <div class=\"row marketing\">\r\n        <div class=\"col-lg-6\">\r\n            <h4><strong>PARENT HELPER</strong></h4>\r\n            <p>Parenting has often been described as a full-time job. Moms and dads have to organize children’s schedules, find kid-friendly places to eat, and remember all the things that their family needs from the grocery store this week. Fortunately,\r\n                there is TEEN@home app that can help busy parents to keep track of everything. <br> We are here to help parents with all parenting challenges from those everyday situations to the most serious issue of child abuse.</p>\r\n            <p>Parenting a teenager is never easy, but when your teen is violent, depressed, abusing alcohol or drugs, or engaging in other reckless behaviors, it can seem overwhelming. You may feel exhausted from lying awake at night worrying about where\r\n                your child is, who he or she is with, and what they're doing. You may despair over failed attempts to communicate, the endless fights, and the open defiance. Or you may live in fear of your teen's violent mood swings and explosive anger.\r\n                While parenting a troubled teen can often seem like an impossible task, there are steps you can take to ease the stress you and your teen feel. This can significantly reduce the chaos at home and help your teen transition into a happier,\r\n                more successful young adult.</p>\r\n            <h4 class=\"important\"><strong>What you can do</strong></h4>\r\n            <div class=\"box important-box\">\r\n                <ol>\r\n                    <li>Invest in focused face-to-face time with your teenager each day</li>\r\n                    <li>Listen without judging or giving advice</li>\r\n                    <li>Find common ground, such as sports or movies</li>\r\n                    <li>Create structure, such as regular mealtimes and bedtimes, to make a teen feel safe and secure</li>\r\n                    <li>Encourage exercise to help ease depression, boost energy and mood, and improve your teen’s self-esteem</li>\r\n                    <li>Encourage 7 to 9 hours of restful sleep every night</li>\r\n                    <li>Learn more by reading the related articles</li>\r\n                </ol>\r\n            </div>\r\n            <h4 class=\"helpguide\"><a href=\"http://www.helpguide.org/articles/teen-issues/helping-troubled-teens.htm\"><strong>HELPGUIDE</strong></a></h4>\r\n            <p>As the parent of a troubled teen, you’re faced with even greater challenges. This is especially true if your teen is abusing drugs or alcohol. A troubled teen faces behavioral, emotional, or learning problems beyond the normal teenage issues.\r\n                They may repeatedly practice at-risk behaviors such as violence, skipping school, drinking, drug use, sex, self-harming, shoplifting, or other criminal acts.</p>\r\n        </div>\r\n\r\n        <div class=\"col-lg-6\">\r\n            <h4 class=\"link\"><a href=\"http://www.parenthelp.org.nz/\"><strong>Parent Help</strong></a></h4>\r\n            <p>At Parent Help we offer the only designated free national parenting helpline in New Zealand that is available from 9am to 11pm – seven days a week. The Parent Helpline has no time limit on calls – the greatest gift we can give parents is to\r\n                listen and listen well. We are here to help parents with all parenting challenges from those everyday situations to the most serious issue of child abuse.</p>\r\n            <h4 class=\"link\"><a href=\"http://busyparentsnetwork.com/\"><strong>Busy Parents Network</strong></a></h4>\r\n            <p>Busy Parents Network is a community social enterprise set up with the specific intention of bringing families together in the local community for fun, education, companionship and friendship. We are interested in building community cohesion,\r\n                empowering families to make the communities they live in better places to be and creating social change.</p>\r\n            <h4 class=\"link\"><a href=\"http://www.teendrugrehabs.com/\"><strong>Teen drug rehabs</strong></a></h4>\r\n            <p>Drug abuse and addiction that starts in the teenage years can lead to lifelong abuse and addiction if the problem isn’t addressed early on. Parents need to know what to look for and how to get help.</p>\r\n            <h4 class=\"drug-abuse\"><strong>You Need to Know About Teenage Drug Abuse:</strong></h4>\r\n            <div class=\"box important-box\">\r\n                <ul>\r\n                    <li><strong>Family History.</strong> a parent or other close family member has a history of drug or alcohol abuse, it can mean that the teen is at a higher risk.</li>\r\n                    <li><strong>Relationships.</strong> If a teenager is close to family or friends who abuse drugs or alcohol, they are more susceptible to experimenting themselves.</li>\r\n                    <li><strong>Mental Health.</strong> When a child is diagnosed with a mental health or behavioral health condition early on (such as depression, anxiety or ADHD), often times they are medicated which can lead to prescription drug abuse\r\n                        or even “self-medication” with street drugs and/or alcohol.</li>\r\n                    <li><strong>Personal Development.</strong> Low self-esteem, poor social skills and other insecurities can also lead a teen to “self-medicate” with drugs or alcohol as a coping mechanism.</li>\r\n                    <li><strong>Availability.</strong> Relationships with peers who abuse drugs or alcohol gives access to drugs and alcohol –teens are more likely to experiment with substances that are easy to get.</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br><br>\r\n<br><br>"

/***/ },

/***/ 726:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2>CREATE NEW ACCOUNT</h2>\r\n    <hr>\r\n    <form class=\"form-horizontal\" #registerForm=\"ngForm\" (ngSubmit)=\"add();\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"email\">First Name:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"name\" class=\"form-control\" id=\"firstName\" placeholder=\"First Name\" name=\"firstName\" [(ngModel)]=\"model.firstName\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"email\">Last Name:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"name\" class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\" name=\"lastName\" [(ngModel)]=\"model.lastName\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"email\">User Name:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"name\" class=\"form-control\" id=\"userName\" placeholder=\"User Name\" name=\"username\" [(ngModel)]=\"model.username\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"email\">Email:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"email\" [(ngModel)]=\"model.email\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"pwd\">Password:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"password\" [(ngModel)]=\"model.password\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"pwd\">Avatar:</label>\r\n            <div class=\"col-sm-10\">\r\n                <input type=\"avatar\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter avatar URL (optional)\" name=\"profilePictureUrl\" [(ngModel)]=\"model.profilePictureUrl\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"pwd\">Category:</label>\r\n            <div class=\"col-sm-10\">\r\n                <!--<select id=\"category-register\" name=\"category\" required=\"true\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder ='Category'\" class=\"form-control\">\r\n                    <option value=\"male\">child</option>\r\n                    <option value=\"female\">parent</option>\r\n                </select>-->\r\n                <label class=\"radio-inline\">\r\n                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"parent\" name=\"role\" [(ngModel)]=\"model.role\"> <span> PARENT</span>\r\n                </label>\r\n                <label class=\"radio-inline\">\r\n                    <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"child\" name=\"role\" [(ngModel)]=\"model.role\"> <span> CHILD</span>\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<br>"

/***/ },

/***/ 727:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n    </div>\r\n    <h1 class=\"display-3\">TEEN@home a.k.a Teen Topics</h1>\r\n    <p class=\"lead\">Be a helper share your experience about finding a job throw our app or <a routerLink=\"/donate\">donate</a> to help them get professional HR help!</p>\r\n    <p><a class=\"btn btn-lg btn-success right-align\" routerLink=\"/donate\" role=\"button\">DONATE NOW!</a></p>\r\n\r\n    <div class=\"row marketing\">\r\n        <div class=\"col-lg-6\">\r\n            <h4><strong>TEEN HELPER</strong></h4>\r\n            <p>It’s not easy being a teenager in today’s world. From depression to bullying and cutting, teens grapple with a wide range of issues as they grow and develop. But here’s the good news: you’re not alone and you can feel better.<br> Learn more\r\n                about the signs and symptoms of some common teen challenges, what you can do to help yourself, and how to reach out and talk about tough subjects with your friends and family members.\r\n            </p>\r\n            <p>Тeens are knowledgeable, smart, and confident. They have little challenge to make the right choice when these topics are presented. However, it is important to recognize that these issues are possibly effecting the families and friends with\r\n                which spends time.</p>\r\n            <h4 class=\"helpguide\"><a href=\"http://www.helpguide.org/articles/teen-issues/helping-troubled-teens.htm\"><strong>JOB AND CAREER RESOURCES FOR TEENS</strong></a></h4>\r\n            <p>Are you a teenager looking for a job? Or perhaps a parent who is helping your kid to get their first job? Whether you are looking for a part-time job or internship, we have 169 companies in our database which may hire teenagers.</p>\r\n            <h4 class=\"important\"><strong>What you can do</strong></h4>\r\n            <div class=\"box important-box\">\r\n                <ol>\r\n                    <li><strong>Start researching.</strong>Find organizations and other places that you know pay teens to work.</li>\r\n                    <li><strong>Get the word out.</strong> You can post flyers in your neighborhood detailing jobs that you can do</li>\r\n                    <li><strong>Use your connections.</strong> Talk to friends and family about any paying jobs they might know of, and follow through.</li>\r\n                    <li><strong>Volunteer.</strong> Sometimes, the best way to get a paying job is to begin as a volunteer and work your way up</li>\r\n                    <li><strong>Make a resume.</strong> Even if most jobs you apply for don't ask for a resume, it's a good exercise, and it's useful to have your work history and education details</li>\r\n                    <li><strong>Apply early!</strong> The most important key to getting jobs with these places is to apply as soon as you hear about jobs</li>\r\n                    <li><strong>Go to an interview.</strong> One of the most often asked questions is: Why do you feel you are qualified for this job?</li>\r\n                    <li><strong>Increase your earnings. </strong> After working at the entry level position for a few summers or after school, you will the have the experience to work at a higher level</li>\r\n                </ol>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-6\">\r\n            <h4 class=\"link\"><a href=\"http://www.hireteen.com/\"><strong>Hire Teen</strong></a></h4>\r\n            <p>Job application should be processed in the website of the company you are applying for or you need to follow the guideline which is provided on each company review.</p>\r\n            <h4 class=\"link\"><a href=\"http://www.snagajob.com/job-search/q-teen\"><strong>Snaga job</strong></a></h4>\r\n            <p>Get solutions across the entire hiring process—more applications, qualified hires, easier scheduling and more.</p>\r\n            <h4 class=\"link\"><a href=\"http://www.dreamhomebasedwork.com/online-jobs-for-teens/\"><strong>Dream home based work</strong></a></h4>\r\n            <p>Most people who have a regular job during the day, end up taking jobs that they can do in the evening or the night. If you are a night owl, you do not need to spend all your time flipping through channels on late night TV. You can actually\r\n                spend your time in a more constructive way and make some money while at it. Here are 21 jobs flexible enough.</p>\r\n            <h4 class=\"drug-abuse\"><strong>Popular part-time jobs and small business opportunities:</strong></h4>\r\n            <div class=\"box important-box\">\r\n                <ul>\r\n                    <li><strong>Animal Shelter Worker</strong></li>\r\n                    <li><strong>Arts and Crafts Production and Sales</strong></li>\r\n                    <li><strong>Babysitting</strong></li>\r\n                    <li><strong>Car Wash Attendant</strong></li>\r\n                    <li><strong>Document and Photograph Archival Services</strong></li>\r\n                </ul>\r\n            </div>\r\n            <a class=\"btn btn-lg btn-success center\" href=\"http://www.hireteen.com/\" role=\"button\">FIND MORE</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br><br>\r\n<br>"

/***/ },

/***/ 743:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(406);


/***/ }

},[743]);
//# sourceMappingURL=main.bundle.map