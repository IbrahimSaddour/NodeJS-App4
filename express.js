

/**
 * Demander l'adresse (URL) de base '/'
 * à l'aide de la méthode GET de HTTP
 */

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

/**
 * lorsqu'une demande arrive à '/game/n_importe_quoi'
 * à l'aide de la méthode GET de HTTP
 */


// app.get('/game/:name', (req, res) => {
//     res.end(`The name of the game is ${req.params.name}`);
// })

// JSON response
// app.get('/game/:name', (req, res)=> {
//     res.json({message: `The name of the game is ${req.params.name}`});
// })

//     // JSON + status
// app.get('/game/:name', (req, res)=> {
//     res.status(200).json({message: `The name of the game is ${req.params.name}`});
// })

//     //Game
// app.get('/entity', (req, res)=> {
//     const game = new Game("dms", 2019)
//     res.status(200).json(game);
// })

// /**
//  * lorsqu une demande arrive à '/secret' 
//  * à l'aide de la méthode GET de HTTP
//  */

// app.get('/secret', (req, res)=> {
//     res.status(401).json({message: `Unauthorized`});
// })


import express from "express"; 
import mongoose from "mongoose";

import gameRoutes from './routes/game.js';

const app = express();

const port = process.env.PORT || 9090;
// const hostname = '127.0.0.1';
const databaseName =  'wokshop4sim2023Nodejs'

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose
    .connect(`mongodb://127.0.0.1:27017/${databaseName}`)
    .then(() =>{
        console.log(`Connected  to ${databaseName}`);
    })
    .catch(err =>{
        console.log(err);
    })



app.use(express.json());
app.use('/game', gameRoutes);



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})
