import Chapter from "../../models/Chapter.js";

let update = async (req, res, next) => {
  try {
    let { _id, title, cover_photo, pages, order } = req.body;

    if (!_id) {
      return res.status(400).json({ message: "Chapter ID is required" });
    }

    let chapterInfo = {};
    if (title) chapterInfo.title = title;
    if (cover_photo) chapterInfo.cover_photo = cover_photo;
    if (pages) chapterInfo.pages = pages;
    if (order) chapterInfo.order = order;

    let updateChapter = await Chapter.findByIdAndUpdate(
      _id,
      { $set: chapterInfo },
      { new: true }
    );

    if (!updateChapter) {
      return res.status(404).json({ message: "Chapter not found" });
    }

    return res.status(200).json({
      message: "Chapter updated successfully",
      chapter: updateChapter,
    });
  } catch (error) {
    next(error);
  }
};


export default update