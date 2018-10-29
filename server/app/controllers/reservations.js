const mongoose = require('mongoose');
const Reservation = require('../models/reservation');

exports.adminDeleteReservation = (req, res) => {
    let user_id = req.params("reservationId");
    deleteReservation(user_id);
};

exports.getTime = (req, res) => {
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let time = hours + ":" + minute;
    res.status(200).send({time: time});
};

//TODO: MODIFICA CON ID PRENOTAZIONE
exports.deleteReservation = (req, res) => {
    let user_id = req.user.user_id;
    deleteReservation(user_id);
};

exports.addReservation = (req, res) => {
    let user_id = req.user._id;
    let study_room_id = req.body.study_room_id;
    let day = req.body.day;
    let from_hour = req.body.from_hour;
    let to_hour = req.body.to_hour;
    if (!user_id) {
        res.status(422).json({ error: 'Id utente mancante' });
    }
    if (!study_room_id) {
        res.status(422).json({ error: 'Id aula studio mancante' });
    }
    if (!day) {
        res.status(422).json({ error: 'Giorno mancante' });
    }
    if (!from_hour) {
        res.status(422).json({ error: 'Ora inizio prenotazione mancante' });
    }
    if (!to_hour) {
        res.status(422).json({ error: 'Ora fine prenotazione mancante' });
    }
    Reservation.findOne({user_id: user_id}, (err, existingReservation) => {
        if (err) {
            return res.status(400).json({error: err});
        }
        if (existingReservation) {
            return res.status(400).json({error: "L'utente ha già una prenotazione"});
        }
        let newReservation = new Reservation({
            user_id: user_id,
            study_room_id: study_room_id,
            day: day,
            from_hour: from_hour,
            to_hour: to_hour
        });
        if (checkReservationValidity(newReservation)) {
            newReservation.save((err, reservation) => {
                if (err) {
                    return res.status(400).json({error: err});
                }
                return res.status(200).send(reservation);
            });
        }
    });
};

//TODO: modifica con id prenotazione
exports.modifyReservation = (req, res) => {
    let user_id = req.user._id;
    Reservation.findOne({user_id: user_id}, (err, reservation) => {
        if (err) {
            return res.status(400).json({error: err});
        }
        reservation.day = req.body.day;
        reservation.from_hour = req.body.from_hour;
        reservation.to_hour = req.body.to_hour;
        if (checkReservationValidity(reservation)) {
            reservation.save((err, reservation) => {
                if (err) {
                    return res.status(400).json({error: err});
                }
                return res.status(200).json({ message: 'Prenotazione modificata correttamente'});
            });
        }
    });
};

exports.getReservation = (req, res) => {
    let user_id = req.user._id;
    Reservation.find({user_id: user_id}, (err, reservations) => {
        if (err) {
            return res.status(400).json({error: err});
        }
        return res.status(200).json(reservations);
    });
};

function checkReservationValidity(newReservation) {
    //query con cui si ottengono solo le prenotazioni la cui ora di inizio e/o l'ora di fine sono comprese tra le ore di inizio e fine della nuova prenotazione
    Reservation.find({
        $and: [
            {day: newReservation.day},
            {study_room_id: newReservation.study_room_id},
            {$or:[{from_hour: {$gte: newReservation.from_hour, $lt: newReservation.to_hour}},
                  {to_hour: {$gt: newReservation.from_hour, $lte: newReservation.to_hour}}]}
            ]
    }, (err, reservations) => {
        if (err) {
            res.status(400).send({error: err});
            return false;
        }
        let from_hour = newReservation.from_hour;
        let to_hour = newReservation.to_hour;
        let total_hours = to_hour - from_hour;
        let reservations_in_hour = 0;
        StudyRoom.find({_id: study_room_id}, (err, room) => {
            if (err) {
                res.status(400).send({error: err});
                return false;
            }
            let capacity = room.capacity;
            //per ogni intervallo di ore presente, si controlla quante delle prenotazioni ottenute esistono in quell'intervallo 
            for (let i = 0; i < total_hours; i++){
                reservations.forEach(reservation => {
                    if (reservation.from_hour <= from_hour + i && reservation.to_hour >= from_hour + i + 1) {
                        reservations_in_hour += 1;
                    }
                });
                //si controlla se sono ancora presenti posti disponibili nell'intervallo di ore corrente
                if (capacity - reservations_in_hour <= 0) {
                    res.status(422).send({message: "L'aula selezionata non ha posti disponibili dalle ore " + from_hour + " alle ore " + (from_hour + 1)});
                    return false;
                }
            }
            return true;
        });
    }); 
}

function deleteReservation(user_id) {
    Reservation.deleteOne({ user_id: user_id }, (err) => {
        if (err) {
            return res.status(400).json({ error: err });
        }
        return res.status(200).json({ message: 'Prenotazione eliminata correttamente'});
    });
}