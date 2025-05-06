const error_400 = (error, request, response, next) => {
    if(error.status === 400) {
        return response.status(400).json({
            success: false,
            message: error,
            response: "bad request"
        })
    }
    next(error)
}

export default error_400