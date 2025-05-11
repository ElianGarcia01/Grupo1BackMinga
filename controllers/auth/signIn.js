import User from '../../models/User.js'

export default async (req, res, next) => {
  try {
    await User.findOneAndUpdate(
      {email: req.user.email},
      {online: true}
    )
    return res.status(200).json({
      success: true,
      message: 'Signed in',
      token: req.token,
      user: {
        email: req.user.email,
        photo: req.user.photo,
        role: req.user.role
      }

    })
  } catch (error) {
    next(error)
  }
}
