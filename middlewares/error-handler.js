//recupere le 404 et le transmet au gestionnaire d erreurs via next()
export function notFoundError(req,res,next) {
    const err = new Error("Not Found");
    err.status = 404;
    next(err)
};

/**
 * gestionnaire d erreurs avec quatre params
 * le premier parm est suppose etre une erruer transmise par
 * le "next" d un autre middleware
 */

export function errorHandler(err, req, res, next) {
    res.status(err.status || 500).json({
        message: err.message,
    });
}