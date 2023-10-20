import multer, { diskStorage } from "multer";
import { join, dirname } from "path"
import { fileURLToPath } from "url";

const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
};

export default multer({
    storage: diskStorage({
        destination: (req, file, callback) => {
            const __dirname = dirname(fileURLToPath(import.meta.url)); //recuperer le chemain du dossier courant
            callback(null, join(__dirname, "../public/images")); //indiquer l emplacement de stokage
        },
        filename: (req, file, callback) => {
            const name = file.originalname.split(" ").join("_");
            const extension = MIME_TYPES[file.mimetype];
            callback(null, name + Date.now() + "." + extension);
        },
    }),
    //Taille max des images 10Mo
    limits: 10*1024*1024,
}).single("image"); //Le fichier est envoye dans le body avec nom/cle 'image'