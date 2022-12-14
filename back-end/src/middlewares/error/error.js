const errorStatusService = 500;

const error = (err, _req, res, _next) => {
    if(err.isJoi) {
        return res.status(400).json({message: err.details[0].message});
    }
    const status = err.code || errorStatusService;
    
    res.status(status).json({message: err.message});
};

module.exports = error;
