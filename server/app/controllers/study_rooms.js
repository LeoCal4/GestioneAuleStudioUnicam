const mongoose = require('mongoose');
//const StudyRoom = mongoose.model('Study Room');
const StudyRoom = require('../models/study_room');

exports.browseStudyRooms = (req, res) => {
    StudyRoom.find({}, (err, rooms) => {
        if (err) {
            return res.status(422).send({ message: err });
        }
        
        res.status(200).send( rooms );
    });
};

exports.addStudyRoom = (req, res, next) => {
    var name = req.body.name;
    var capacity = req.body.capacity;
    var days_open = req.body.days_open;
    var hours_open = req.body.hours_open;
    var address = req.body.address;
    if (!name) {
        res.status(422).send({ message: "Campo nome necessario" });
    }
    if (!capacity) {
        res.status(422).send({ message: "Campo capienza necessario" });
    }
    if (!days_open) {
        res.status(422).send({ message: "Inserisci giorni di apertura" });
    }
    if (!hours_open) {
        res.status(422).send({ message: "Inserisci orari di apertura" });
    }
    if (!address) {
        res.status(422).send({ message: "Inserisci l'indirizzo" });
    }
    var description = !req.body.description ? "" : req.body.description;
    var image = !req.body.image ? "" : req.body.image;

    StudyRoom.findOne({ name: name }, (err, existingStudyRoom) => {
        if (err) {
            return next(err);
        }
        if (existingStudyRoom) {
            return res.status(422).send({message: 'Un aula studio che utilizza il nome inserito è già esistente'});
        }

        var newStudyRoom = new StudyRoom({
            name: name,
            capacity: capacity,
            days_open: days_open,
            hours_open: hours_open,
            description: description,
            address: address,
            image: image
        });

        newStudyRoom.save((err, studyRoom) => {
            if (err) {
                return next(err);
            }
            res.status(201).json(studyRoom);
        });

    });
    
};

exports.deleteStudyRoom = (req, res) =>{
    let name = req.params.name
    StudyRoom.remove({
        name:name
    }, (err) => {
        if (err){
            console.log(err);
            return res.status(400).json("Errore");
        }else{
            return res.status(200).json("Eliminazione corretta")
        }
    });
};

exports.modifyStudyRoom = (req, res) =>{
    let name = req.body.name
    StudyRoom.findOne({ name: name }, (err, room) => {
        if (err) {
            return res.status(400).json({ message: err });
        }
        console.log(req.body);
        room.capacity = req.body.capacity;
        room.days_open = req.body.days_open;
        room.hours_open = req.body.hours_open;
        room.description = req.body.description;
        //aggiungere aggiornamento immagine
        room.save((err) => {
            if (err)
                return res.status(400).json({ message: err });
            return res.status(200).json({ message: 'Aula studio modificata correttamente'});
        });
    });
};

