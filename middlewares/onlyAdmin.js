const isAdmin = async (req, res, next) => {
  try {
    if(req.user?.role === 3){
      next()
    } else {
      res.status(403).json({
        success: false,
        message: "The user is authenticated but does not have permission"
      })
    }
  } catch (error) {
    next(error)
  }
}

export default isAdmin
