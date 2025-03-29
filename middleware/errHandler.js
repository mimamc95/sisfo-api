// custom middleware for error handler
function errHandler(err, req, res, next) {
    let errors = []
    let statusCode = 500

    console.log(err, '<<< Error on errHandler middleware')

    // read the error obtained from sequelize validation
    switch (err.name) {
        case 'SequelizeValidationError':
            err.errors.forEach(el => {
                errors.push(el.message)
            })
            statusCode = 400
            break
        default:
            errors.push(err.msg || 'Internal server error')
            statusCode = err.statusCode || 500
    }
    // return response to client
    res.status(statusCode).json({
        status: 'Failed',
        errors: errors
    })
}

// export file errHandler from other file
module.exports = errHandler