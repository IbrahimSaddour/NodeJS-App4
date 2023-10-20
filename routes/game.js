
// router.get('/game', (req, res) => {
//     res.status(200).json(games);
// })


// router.get('/game/:name', (req, res) => {
//     res.status(200).json(games.find(val => val.name === req.params.name));
// })

// router.post('/game', (req, res) => {
//     const game = new Game(req.body.name, req.body.year);
//     games.push(game);
//     res.status(201).json({message: "Created !" , entity: game});
// })

// router.put('/game/:name', (req, res) => {
//     res.status(200).json({message: "Updated !" , name: req.params.name});
// })

// router.patch('/game/:name', (req,res) => {
//     res.status(200).json({message: "Updated !" , name: req.params.name});
// })

// router.delete('/game/:name', (req, res) => {
//     res.status(200).json({message: "Deleted !" , name: req.params.name});
// })





// router
//     .route('/')
//     .get((req,res) =>{
//         res.status(200).json(games);
//     })
//     .post((req,res) => {
//         const game = new Game(req.body.name, req.body.year);
//         games.push(game);
//         res.status(201).json({message: "Created !", entity: game});
//     });

// router
//     .route('/:name')
//     .get((req, res) => {
//         res.status(200).json(games.find(val => val.name === req.params.name))
//     })
//     .put((req, res) => {
//         res.status(200).json({message: "Updated !", name : req.params.name})
//     })
//     .patch((req, res) => {
//         res.status(200).json({message: "Updated !", name: req.params.name})
//     })
//     .delete((req, res) =>{
//         res.status(200).json({nessage: "Deleted !", name: req.params.name})
//     })


import express from "express"
import { addOnce, deleteAll, deleteOnce, getAll, getOnce, getOnceById, patchOnce, putAll } from "../controllers/game.js";
import { body } from "express-validator";
import multer from '../middlewares/multer-config.js';

const router = express.Router();


router
    .route('/')
    .get(getAll)
    .post(
        multer,
        body('name').isLength({min : 5}),
        body('year').isNumeric(),
        addOnce);
//.delete(deleteAll)

router
    .route('/:name')
    .get(getOnce)
    .patch(putAll)
    .patch(patchOnce)
    .delete(deleteOnce)

//router
//  .route('/:id')
// .get(getOnceById)

export default router;