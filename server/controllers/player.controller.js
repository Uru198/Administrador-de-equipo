const Player = require("../models/player.model");

module.exports.get_all = (req, res) => {
    Player.find()
        .then(player => res.json(player))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });
}

module.exports.create_player = (req, res) => {
    Player.create(req.body)
        .then(player => res.json(player))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}

module.exports.get_player = (req, res) => {
    Player.findOne({_id: req.params.id})
        .then(player => res.json(player))
        .catch(err => res.status(404).json(err));
}

module.exports.update_player = (req, res) => {
    //new:true nos regresa el documento ya modificado
    //runValidators: true nos revisa una vez más las validaciones del modelo
    Player.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err));
}

module.exports.delete_player = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
}
