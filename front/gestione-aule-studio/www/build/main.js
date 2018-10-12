webpackJsonp([8],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_study_room_study_room__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, navParams, studyRoomService, modalCtrl, alertCtrl, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.studyRoomService = studyRoomService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.initializeItems();
    }
    //Provvisorio
    AdminPage.prototype.initializeItems = function () {
        this.items = [
            { title: 'Polo Informatico Lodovici' },
            { title: 'Campus Universitario' },
            { title: 'Polo Scienze della Terra' },
            { title: 'Polo El Fuego' },
            { title: 'Polo Gyros Pita' }
        ];
    };
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.addStudyRoom = function () {
        var _this = this;
        console.log('presenta il prompt');
        var prompt = this.alertCtrl.create({
            title: 'Aggiungi un\'aula studio',
            message: 'Inserisci i dati:',
            inputs: [
                {
                    name: 'nome',
                    placeholder: 'Nome Aula'
                },
                {
                    name: 'numeroPosti',
                    placeholder: 'Numero posti disponibili'
                }
            ],
            buttons: [
                {
                    text: 'Annulla'
                },
                {
                    text: 'Aggiungi Aula',
                    handler: function (studyRoom) {
                        if (studyRoom) {
                            _this.showLoader();
                            _this.studyRoomService.addStudyRoom(studyRoom).then(function (result) {
                                _this.loading.dismiss();
                                _this.studyRoom = result;
                                console.log("Aula studio creata");
                            }, function (err) {
                                _this.loading.dismiss();
                                console.log("not allowed");
                            });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    AdminPage.prototype.removeStudyRoom = function (studyRoom) {
        //TODO
    };
    AdminPage.prototype.editStudyRoom = function (studyRoom) {
        //TODO
    };
    AdminPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Creazione Aula...'
        });
        this.loading.present();
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\admin\admin.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Amministratore</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n  <ion-item-sliding *ngFor="let item of items">\n\n \n\n    <ion-item>\n\n    {{item.title}}\n\n    </ion-item>\n\n \n\n    <ion-item-options>\n\n      <button ion-button color="danger" (click)="removeItem(item)"><ion-icon name="trash"></ion-icon> Elimina </button>\n\n      <button ion-button (click)="editItem(item)"><ion-icon name="brush"></ion-icon> Modifica </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-fab bottom center #fab>\n\n  <button ion-fab (click)="addStudyRoom()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_study_room_study_room__["a" /* StudyRoomProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_study_room_study_room__["a" /* StudyRoomProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _g || Object])
    ], AdminPage);
    return AdminPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StudyRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudyRoomPage = /** @class */ (function () {
    function StudyRoomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StudyRoomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudyRoomPage');
    };
    StudyRoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-study-room',template:/*ion-inline-start:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\study-room\study-room.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Aula Studio</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label color="primary">Nome Aula: </ion-label>\n\n      <ion-input placeholder="Nome"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary">Posti Disponibili: </ion-label>\n\n      <ion-input placeholder="Numero Posti"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary"> <button ion-button color="primary">Carica Foto Aula</button> </ion-label> \n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary"> <button ion-button color="primary"> Aggiungi Aula</button></ion-label>\n\n    </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\study-room\study-room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], StudyRoomPage);
    return StudyRoomPage;
}());

//# sourceMappingURL=study-room.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menuCtrl, authService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LoginPage');
        this.showLoader();
        //Check if already authenticated
        this.authService.checkAuthentication().then(function (res) {
            console.log("Already authorized");
            console.log(res);
            _this.loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__main_main__["a" /* MainPage */], { data: res });
        }, function (err) {
            console.log("Not already authorized");
            _this.loading.dismiss();
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoader();
        var credentials = {
            email: this.email,
            password: this.password
        };
        this.authService.login(credentials).then(function (result) {
            _this.loading.dismiss();
            console.log(result);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__main_main__["a" /* MainPage */], { data: result });
        }, function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Errore',
                message: 'Username o password errati!',
                buttons: ['Ok']
            });
            alert.present();
            _this.loading.dismiss();
            console.log(err);
        });
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Autenticazione in corso...'
        });
        this.loading.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\login\login.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-input placeholder="Email" [(ngModel)]="email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input placeholder="Password" type="password" [(ngModel)]="password"></ion-input>\n\n    </ion-item>\n\n\n\n</ion-list>\n\n\n\n<button ion-button full (click)="login()"> Login </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, profileProvider, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileProvider = profileProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.result = this.navParams.get('data');
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        console.log(this.result.user._id);
    };
    //CRUD dati utente
    //Funzione per l'eliminazione del profilo utente
    ProfilePage.prototype.deleteProfile = function () {
        var _this = this;
        var userId = this.result.user._id;
        var confirm = this.alertCtrl.create({
            title: "Sei sicuro di voler procedere?",
            message: "L'operazione di eliminazione del profilo è irreversibile.",
            buttons: [
                {
                    text: "Indietro"
                },
                {
                    text: "Conferma",
                    handler: function () {
                        _this.profileProvider.deleteProfile(userId).then(function (result) {
                            var toast = _this.toastCtrl.create({
                                message: 'Eliminazione profilo completata',
                                duration: 1000,
                                position: 'middle'
                            });
                            toast.onDidDismiss(function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                            });
                            toast.present();
                        }, function (err) {
                            var alert = _this.alertCtrl.create({
                                title: 'Oooops!',
                                message: 'C\'è stato un errore, eliminazione non effettuata',
                                buttons: ['Ok']
                            });
                            console.log(err);
                            alert.present();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    //Funzione per la modifica dell'immagine del profilo utente
    ProfilePage.prototype.updateProfilePicture = function () {
    };
    //Funzione per la modifica password
    ProfilePage.prototype.updatePassword = function () {
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\profile\profile.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Gestione Profilo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div id="proPic" align="center">\n\n      <ion-img width="200" height="200" src="../../assets/imgs/GyrosPita.jpg"></ion-img>\n\n  </div>\n\n  <br>\n\n  <ion-list>\n\n      <ion-item>\n\n        <ion-label color="primary">Nome</ion-label>\n\n        <ion-input placeholder="Nome" disabled></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary">Cognome</ion-label>\n\n        <ion-input placeholder="Cognome" disabled></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary">E-mail</ion-label>\n\n        <ion-input placeholder="email@email.com" disabled></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary">Facoltà</ion-label>\n\n        <ion-input placeholder="Facoltà" disabled></ion-input>\n\n      </ion-item>\n\n  </ion-list>    \n\n  <button ion-button icon-start>\n\n    <ion-icon name = "brush"></ion-icon>\n\n    Modifica Profilo\n\n  </button>\n\n  <button ion-button color = "danger" icon-start (click) ="deleteProfile()" >\n\n    <ion-icon name = "trash"></ion-icon>\n\n    Elimina Profilo\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, alertCtrl, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.showLoader();
        console.log("Email: " + this.email);
        console.log("Password: " + this.password);
        console.log("Password Conferma: " + this.passwordConfirm);
        if (this.password != this.passwordConfirm) {
            //Creo l'alert se le due password non corrispondono
            var alert_1 = this.alertCtrl.create({
                title: 'Errore',
                message: 'Le password inserite non corrispondono!',
                buttons: ['Ok']
            });
            alert_1.present();
        }
        var details = {
            name: this.nome,
            surname: this.cognome,
            email: this.email,
            password: this.password,
            passwordConfirm: this.passwordConfirm
        };
        this.authService.createAccount(details).then(function (result) {
            _this.loading.dismiss();
            var confirm = _this.alertCtrl.create({
                title: 'Registrazione effettuata!',
                message: 'Registrazione avvenuta con successo!',
                buttons: [
                    {
                        text: 'Vai alla pagina principale',
                        handler: function () { _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__main_main__["a" /* MainPage */], { data: result }); }
                    }
                ]
            });
            confirm.present();
        }, function (err) {
            _this.loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Oooops!',
                message: 'C\'è stato un errore, registrazione non effettuata',
                buttons: ['Ok']
            });
            console.log(err);
            alert.present();
        });
    };
    RegisterPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Creazione account in corso...'
        });
        this.loading.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\register\register.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Registrazione</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n  <ion-item>\n\n     <ion-input placeholder="Nome" [(ngModel)]="nome"></ion-input>\n\n  </ion-item>\n\n\n\n   <ion-item>\n\n       <ion-input placeholder="Cognome" [(ngModel)]="cognome"></ion-input>\n\n   </ion-item>\n\n     \n\n   <ion-item>\n\n     <ion-input placeholder="Email" [(ngModel)]="email"></ion-input>\n\n   </ion-item>\n\n\n\n   <ion-item>    <ion-input placeholder="Password" type="password" [(ngModel)]="password"></ion-input>\n\n   </ion-item>\n\n\n\n   <ion-item>\n\n     <ion-input placeholder="Conferma Password" type="password" [(ngModel)]="passwordConfirm"></ion-input>\n\n   </ion-item>\n\n\n\n  <button ion-button full (click)="register()"> Registrati </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReservePage = /** @class */ (function () {
    function ReservePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.isEnabled = true;
        this.immagine = new Image();
        this.id = navParams.get('data');
    }
    //Funzione di creazione di un messaggio d'alert per l'utente
    ReservePage.prototype.confirmationAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Prenotazione Effettuata!',
            subTitle: 'Puoi modificare o cancellare la tua prenotazione in qualsiasi momento',
            buttons: ['OK']
        });
        alert.present();
    };
    //Funzione per la conferma della prenotazione da parte dell'utente
    ReservePage.prototype.createReservation = function () {
        //Comunico all'utente l'avvenuta prenotazione
        this.confirmationAlert();
        //Riduco i posti disponibili di 1
        //Da sistemare inserendo un'interazione con il database per il numero dei posti
        this.numeroPostiDisponibili--;
        //Ritorno al menù principale
        this.navCtrl.popToRoot();
    };
    //Funzione di load dell'aula in base a quella selezionata dall'utente
    ReservePage.prototype.selectClass = function () {
        switch (this.id) {
            case 0: {
                this.titolo = "Polo Informatico Lodovici";
                //Interrogare il database per estrarre il numero di posti disponibili
                this.numeroPostiDisponibili = 16;
                this.numeroPosti = 30;
                this.immagine.src = '../../assets/imgs/PoloLodovici.png';
                //Inserisco l'immagine nell'HTML
                document.getElementById("img").appendChild(this.immagine);
                break;
            }
            case 1: {
                this.titolo = "Campus Universitario";
                //Interrogare il database per estrarre il numero di posti disponibili
                this.numeroPostiDisponibili = 5;
                this.numeroPosti = 40;
                this.immagine.src = '../../assets/imgs/CampusUniversitario.jpg';
                //Inserisco l'immagine nell'HTML
                document.getElementById("img").appendChild(this.immagine);
                break;
            }
            case 2: {
                this.titolo = "Polo Geologia";
                //Interrogare il database per estrarre il numero di posti disponibili
                this.numeroPostiDisponibili = 12;
                this.numeroPosti = 25;
                this.immagine.src = '../../assets/imgs/PoloGeologia.jpg';
                //Inserisco l'immagine nell'HTML
                document.getElementById("img").appendChild(this.immagine);
                break;
            }
            case 3: {
                this.titolo = "Polo El Fuego";
                //Interrogare il database per estrarre il numero di posti disponibili
                this.numeroPostiDisponibili = 0;
                this.numeroPosti = 15;
                this.immagine.src = '../../assets/imgs/ElFuego.jpg';
                //Inserisco l'immagine nell'HTML
                document.getElementById("img").appendChild(this.immagine);
                break;
            }
            case 4: {
                this.titolo = "Polo Gyros Pita";
                //Interrogare il database per estrarre il numero di posti disponibili
                this.numeroPostiDisponibili = 4;
                this.numeroPosti = 20;
                this.immagine.src = '../../assets/imgs/GyrosPita.jpg';
                //Inserisco l'immagine nell'HTML
                document.getElementById("img").appendChild(this.immagine);
                break;
            }
        }
    };
    //Funzione che controlla se ci sono posti disponibili, altrimenti disabilita il tasto della prenotazione
    ReservePage.prototype.checkAvailability = function () {
        console.log(this.numeroPostiDisponibili);
        if (this.numeroPostiDisponibili == 0) {
            this.isEnabled = false;
        }
    };
    ReservePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservePage');
    };
    ReservePage.prototype.ionViewWillEnter = function () {
        this.selectClass();
        this.checkAvailability();
    };
    ReservePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reserve',template:/*ion-inline-start:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\reserve\reserve.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title><div id="title" [innerHtml]="titolo"></div></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n\n    <div id="img"></div>\n\n    <ion-card-content>\n\n          <ion-card-title>\n\n          </ion-card-title>\n\n        <div id="container">\n\n          <table>\n\n            <tr>\n\n              <td id="postiDisponibili">Posti Disponibili:  </td>\n\n              <td id="postiD" [innerHtml]="numeroPostiDisponibili"></td>\n\n              <td>/</td>\n\n              <td id="posti" [innerHtml]="numeroPosti"></td>\n\n            </tr>\n\n          </table>\n\n        </div>\n\n        <table>\n\n          <tr>\n\n            <td id="ora">\n\n              Ora:\n\n            </td>\n\n            <td>\n\n                <ion-item>\n\n                    <ion-datetime displayFormat="HH:mm" pickerFormat="HH mm" [(ngModel)]="startTime" placeholder="00:00"></ion-datetime>\n\n                </ion-item>\n\n            </td>\n\n            <td>\n\n                <ion-item>\n\n                    <ion-datetime displayFormat="HH:mm" pickerFormat="HH mm" [(ngModel)]="endTime" placeholder="01:00"></ion-datetime>\n\n                </ion-item>\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td id="giorno">\n\n              Giorno:\n\n            </td>\n\n            <td>\n\n              <ion-item>\n\n                <ion-datetime displayFormat="DD-MM" pickerFormat ="DD MM" [(ngModel)]="date" placeholder="01-01"></ion-datetime>\n\n              </ion-item>\n\n            </td>\n\n          </tr>\n\n        </table>\n\n\n\n        \n\n        <button ion-button (click)="createReservation()" [disabled]="!isEnabled">\n\n          Prenota \n\n        </button>\n\n      </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\reserve\reserve.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ReservePage);
    return ReservePage;
}());

//# sourceMappingURL=reserve.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reserve_reserve__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.initializeItems();
    }
    SearchPage.prototype.initializeItems = function () {
        this.items = [
            'Polo Informatico Lodovici',
            'Campus Universitario',
            'Polo Scienze della Terra',
            'Polo El Fuego',
            'Polo Gyros Pita'
        ];
    };
    SearchPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SearchPage.prototype.reserve = function (item) {
        this.id = item;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reserve_reserve__["a" /* ReservePage */], { data: this.id });
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\search\search.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Ricerca Aula Studio</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n  <ion-list>\n\n      <button ion-item *ngFor="let item of items" (click)="reserve(items.indexOf(item))" >\n\n      {{ item }}\n\n    </button>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		291,
		7
	],
	"../pages/login/login.module": [
		292,
		6
	],
	"../pages/main/main.module": [
		293,
		5
	],
	"../pages/profile/profile.module": [
		294,
		4
	],
	"../pages/register/register.module": [
		295,
		3
	],
	"../pages/reserve/reserve.module": [
		296,
		2
	],
	"../pages/search/search.module": [
		297,
		1
	],
	"../pages/study-room/study-room.module": [
		298,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileProvider = /** @class */ (function () {
    function ProfileProvider(http) {
        this.http = http;
        console.log('Hello ProfileProvider Provider');
    }
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_main_main__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_search__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_reserve_reserve__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_admin_admin__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_study_room_study_room__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_profile_profile__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_study_room_study_room__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_reserve_reserve__["a" /* ReservePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_study_room_study_room__["a" /* StudyRoomPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserve/reserve.module#ReservePageModule', name: 'ReservePage', segment: 'reserve', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/study-room/study-room.module#StudyRoomPageModule', name: 'StudyRoomPage', segment: 'study-room', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_reserve_reserve__["a" /* ReservePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_study_room_study_room__["a" /* StudyRoomPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__providers_auth_auth__["a" /* AuthProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_study_room_study_room__["a" /* StudyRoomProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_search__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_admin_admin__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, app, menuCtrl, authService) {
        var _this = this;
        this.app = app;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this.menuCtrl.swipeEnable(false);
        });
    }
    MyApp.prototype.logout = function () {
        this.menuCtrl.close();
        this.authService.logout();
        this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        this.app.getActiveNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.search = function () {
        this.menuCtrl.close();
        this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_5__pages_search_search__["a" /* SearchPage */]);
    };
    MyApp.prototype.admin = function () {
        this.menuCtrl.close();
        this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_7__pages_admin_admin__["a" /* AdminPage */]);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\app\app.html"*/'<ion-menu [content]="content" id="menu">\n\n    <ion-content padding>\n\n        <ion-list>\n\n            <button ion-item (click)="search()" (click)="hide">\n\n                <ion-icon name="search" end></ion-icon> Ricerca Aule Studio\n\n            </button>\n\n            <button ion-item (click)="admin()" (click)="hide">\n\n                <ion-icon name="book" end></ion-icon> Visualizza Prenotazione\n\n            </button>\n\n            <button ion-item (click)="logout()" (click)="hide">\n\n                <ion-icon name="exit" end></ion-icon> Logout\n\n            </button>\n\n          </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  \n\n<ion-nav [root]="rootPage" #content></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyRoomProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the StudyRoomProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StudyRoomProvider = /** @class */ (function () {
    function StudyRoomProvider(http, authService) {
        this.http = http;
        this.authService = authService;
        console.log('Hello StudyRoomProvider Provider');
    }
    StudyRoomProvider.prototype.addStudyRoom = function (studyRoom) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', _this.authService.token);
            _this.http.post('http://localhost:3000/addStudyRoom', JSON.stringify(studyRoom), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudyRoomProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthProvider */]])
    ], StudyRoomProvider);
    return StudyRoomProvider;
}());

//# sourceMappingURL=study-room.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    //TODO: Rivedere per la route
    AuthProvider.prototype.checkAuthentication = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('token: \n');
            console.log(_this.storage.get('token'));
            //Load token if exists
            _this.storage.get('token').then(function (value) {
                //TODO il token qui è null ma segna che si è comunque loggati
                _this.token = value;
                console.log(_this.token);
                var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
                headers.append('Authorization', _this.token);
                _this.http.get('http://localhost:3000/protected', { headers: headers })
                    .subscribe(function (res) {
                    resolve(res);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    AuthProvider.prototype.createAccount = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            var body = JSON.stringify(details);
            var url = 'http://localhost:3000/register';
            headers.append('Content-Type', 'application/json');
            _this.http.post(url, body, { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                _this.storage.set('token', data.token);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('http://localhost:3000/login', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                _this.storage.set('token', data.token);
                resolve(data);
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.logout = function () {
        this.storage.set('token', '');
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    //pusho la pagina di login sulla pila delle pagine
    HomePage.prototype.loginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    //pusho la pagina di registrazione sulla pila delle pagine
    HomePage.prototype.registerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title align = "center">Gestione Aule Studio Unicam</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<button ion-button full (click)="loginPage();">Login</button>\n\n<button ion-button full (click)="registerPage();">Registrazione</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* import { LoginPage } from '../login/login'; */

var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //Setto la pagina Main come root in modo da non poter tornare indietro
        //this.navCtrl.setRoot(MainPage);
        this.result = this.navParams.get('data');
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
        console.log(this.result);
    };
    MainPage.prototype.profile = function () {
        //Vado al profilo mettendolo sulla pila
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], { data: this.result });
    };
    MainPage.prototype.logout = function () {
        //Torno all'homepage mettendola sulla pila e la setto come Root
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\main\main.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    \n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\'></ion-icon>\n\n    </button>\n\n  \n\n    <ion-title>\n\n      Gestione Aule Studio Unicam\n\n    </ion-title>\n\n  <ion-buttons end>\n\n    <button ion-button icon-only (click)="profile()" >\n\n      <ion-icon name="person" end></ion-icon>\n\n    </button>\n\n  </ion-buttons> \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<div id="prenotazione"></div>\n\n\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        <h2> <b> Prenotazione </b> </h2>\n\n      </ion-card-title>\n\n      Nessuna prenotazione effettuata\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marco03\Desktop\Ingegneria del Software\GestioneAuleStudioUnicam\front\gestione-aule-studio\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map