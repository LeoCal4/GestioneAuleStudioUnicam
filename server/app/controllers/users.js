const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const User = mongoose.model('User');

exports.getUserInfos = (req, res) => {
    var id= req.param("id");
    User.findById(req.params.id, function(err, user){
        if (err) {
            res.status(400).send({ error: err });
        }

        var userInfos = {
            name: user.name,
            surname: user.surname,
            email: user.email,
            profile_image: user.profile_image
        }
        
        res.status(200).json(userInfos);
    });
};

exports.delete = (req, res) => {
    var id= req.param("id");
    User.remove({
        _id:id
    }, function(err){
        if(err){
        console.log(err);
        res.status(400).send({ error: "Errore nell'eliminazione del profilo" });
    } else {
        return  res.send("Eliminazione confermata");
    }
    });
};

exports.modifyPassword = (req, res) => {
    var id = req.param("id");
    User.findById(req.params.id, function(err, user){
        if (err) {
            res.status(400).send({ error: err });
        }

        if(User.comparePasswords(req.body.confirmPassword, user.hashed_password, cb)){

        user.hashed_password = req.body.hashed_password;

        user.save(function(err){
            if (err){
                res.status(400).send({ error: err });
            }

            res.send({message: 'Password aggiornata'});
        });
    }else{
        res.status(200).json("Vecchia password errata");
    }
    });
};

exports.modifyProfileImage=(req, res) => {

};
