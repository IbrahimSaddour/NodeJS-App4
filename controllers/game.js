import { validationResult } from 'express-validator';
import Game from '../models/games.js'


// const games = [new Game("dmc5", 2019), new Game("re8", 2021), new Game("nfs", 2019)];


// export function getAll(req, res) {
//     res.status(200).json(games);
// }

// export function addOnce(req, res) {
//     const game = new Game(req.body.name, req.body.year);
//     games.push(game);
//     res.status(201).json({ message: "Created !", entity: game });
// }

// export function getOnce(req, res) {
//     res.status(200).json(games.find(val => val.name === req.params.name));
// }

// export function putOnce(req, res) {
//     res.status(200).json({ message: "Updated !", name: req.params.name });
// }

// export function patchOnce(req, res) {
//     res.status(200).json({ message: "Updated !", name: req.params.name });
// }

// export function deleteOnce(req, res) {
//     res.status(200).json({ message: "Deleted !", name: req.params.name });
// }


// Create

//avec la methode create
// export function addOnce(req, res) {
//     if (!validationResult(req).isEmpty()) {
//         res.status(400).json({errors: validationResult(req).array()});
//     }
//     else{
//         Game
//             .create(req.body)
//             .then(newGame => {
//                 res.status(200).json(newGame);
//             })
//             .catch(err => {
//                 res.status(500).json({ error: err })
//             })
//     }
// }

export function addOnce(req, res) {
    if (!validationResult(req).isEmpty()) {
        res.status(400).json({errors: validationResult(req).array()});
    }
    else{
        Game
            .create({
                name: req.body.name,
                year: req.body.year,
                onSale: req.body.onSale,
                image: `${req.protocol}://${req.get('host')}/img/${req.file.filename}`
            })
            .then(newGame => {
                res.status(200).json(newGame);
            })
            .catch(err => {
                res.status(500).json({ error: err })
            })
    }
}



// Read
//plusieurs doc

export function getAll(req, res) {
    Game
        .find({})
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({ error: err })
        });
}

//recherche parametree App4 Partie2 - page 6


// 1 seul doc
export function getOnce(req, res) {
    Game
        .findOne({ "name": req.params.name })
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({ error: err })
        });
}

// par id
export function getOnceById(req, res) {
    Game
        .findById(req.params.id)
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({ error: err })
        });
}


// Update

// plusieurs docs

export function putAll(req, res) {
    Game
        .updateMany({}, { "onSale": true })
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

// 1 seul doc

export function patchOnce(req, res) {
    Game
        .findOneAndUpdate({ "name": req.params.name }, { "onSale": false })           //findByIdAndUpdate si avec id
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}


// Delete
// plusieurs docs

export function deleteAll(req, res) {
    Game
        .remove({ "onSale": false })
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

//1 seul doc

export function deleteOnce(req, res) {
    Game
        .findOneAndRemove({ "name": req.params.name })
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}


