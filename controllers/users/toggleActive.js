import User from "../../models/User.js";

export default async function toggleActive(req, res) {
  const { id } = req.params;
  const { active } = req.body;

  if (typeof active !== 'boolean') {
    return res.status(400).json({ message: "'active' field must be a boolean." });
  }

  try {
    const user = await User.findByIdAndUpdate(id, { active }, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.json(user);
  } catch (error) {
    console.error("Error updating user active status:", error);
    res.status(500).json({ message: "Internal server error." });
  }
}
