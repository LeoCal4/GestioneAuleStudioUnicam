var AuthenticationController = require('../app/controllers/authentication'), 
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport'),
    UserController = require('../app/controllers/users'),
    StudyRoomController = require('../app/controllers/study_rooms'),
    ReservationController = require('../app/controllers/reservations');
 
var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});

module.exports = function(app) {

    app.post('/login', requireLogin, AuthenticationController.login);

    app.post('/register', AuthenticationController.register);

    app.get('/protected', requireAuth, AuthenticationController.protected);


    //STUDENT ROUTES

    app.get('/getUserInfos', requireAuth, UserController.getUserInfos);

    app.put('/modifyPassword', requireAuth, UserController.modifyPassword);

    app.put('/modifyProfileImage', requireAuth, UserController.modifyProfileImage);

    app.delete('/removeProfile', requireAuth, UserController.delete);


    //STUDY ROOM ROUTES FOR ADMIN

    app.get('/getStudyRooms', requireAuth, StudyRoomController.browseStudyRooms);

    app.get('/usersList', requireAuth, AuthenticationController.isAdmin, UserController.getUsersList);

    app.post('/addStudyRoom', requireAuth, AuthenticationController.isAdmin, StudyRoomController.addStudyRoom);

    app.put('/modifyStudyRoom', requireAuth, AuthenticationController.isAdmin, StudyRoomController.modifyStudyRoom);

    app.put('/getUserReservations', requireAuth, AuthenticationController.isAdmin, ReservationController.adminGetUserReservations);

    app.delete('/deleteStudyRoom/:name', requireAuth, AuthenticationController.isAdmin, StudyRoomController.deleteStudyRoom);

    app.delete('/deleteUser/:user_id', requireAuth, AuthenticationController.isAdmin, UserController.adminDelete);

    app.get('/getAdminReservations/:user_id', requireAuth, AuthenticationController.isAdmin, ReservationController.adminGetUserReservations);


    //STUDY ROOM ROUTES FOR STUDENTS

    app.get('/studyRooms', requireAuth, StudyRoomController.browseStudyRooms);

    app.get('/getTime', requireAuth, ReservationController.getTime);
    
    app.post('/bookStudyRoom', requireAuth, ReservationController.addReservation);

    app.get('/getReservations', requireAuth, ReservationController.getReservation);

    app.put('/modifyReservation/:reservationId', requireAuth, ReservationController.modifyReservation);


    //COMMON STUDY ROOM ROUTES

    app.delete('/deleteReservation/:reservationId', requireAuth, ReservationController.deleteReservation);

}