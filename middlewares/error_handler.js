const error_handler = (error, request, response, next) => {
    return response.status(500).json({
        status: 500,
        success: false,
        message: "Error",
        response: error
    })
}

export default error_handler;