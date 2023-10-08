import { createServer } from "http";
// const http = require('http'); //charge le module http
        // OU BIEN

const hostname = '127.0.0.1'; // l'@ du serveur
const port = process.env.PORT || 9090; // Le port du serveur

/**
 * Créer un serveur HTTP
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 */

const server = createServer((req, res) => {
    res.statusCode = 200; // 200 est le code de statut HTTP
    res.setHeader('Content-Type', 'text/plain'); // Configurer l'entete de la requête
    res.end('Hello World ! '); // end signifie que l'on envoie la réponse au requérant
});




/**
 * Démarrer le serveur à l'écoute des connexions
 */

server.listen(port, hostname, () => {
    console.log(` Server running at http://${hostname}:${port}/`);
});



