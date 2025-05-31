const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next(); // Proceed if validation passes
    } catch (err) {
        const status = 422;
        const message = "Fill the input properly";
        const extraDetails = err.errors ? err.errors[0].message : err.message;

        const error = {
            status, 
            message,
            extraDetails,
        };
        
        console.log(error);
        res.status(status).json(error); // Respond directly with 422 error
    }
};

module.exports = validate;
