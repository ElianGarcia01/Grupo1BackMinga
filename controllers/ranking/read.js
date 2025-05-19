import mongoose from "mongoose";
import Reaction from "../../models/Reaction.js";
import Manga from "../../models/Manga.js";


const mangaRankings = async (req, res, next) => {
  try {
    const reactionScores = {
      like: 1,
      love: 1,
      surprised: 1,
      dislike: -1,
    };

    const rankings = await Reaction.aggregate([
      {
        $group: {
          _id: "$manga_id",
          score: {
            $sum: {
              $cond: [
                { $eq: ["$reaction", "dislike"] },
                -1,
                1,
              ],
            },
          },
        },
      },
      { $sort: { score: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: "mangas",
          localField: "_id",
          foreignField: "_id",
          as: "manga",
        },
      },
      { $unwind: "$manga" },
      {
    $lookup: {
      from: "chapters",
      localField: "_id",
      foreignField: "manga_id",
      as: "chapters"
    }
  },
  {
    $unwind: {
      path: "$chapters",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $lookup: {
      from: "comments",
      localField: "chapters._id",
      foreignField: "chapter_id",
      as: "comments"
    }
  },
  {
    $group: {
      _id: "$_id",
      score: { $first: "$score" },
      manga: { $first: "$manga" },
      comments: { $push: "$comments" }
    }
  },
  {
    $addFields: {
      comments: {
        $reduce: {
          input: "$comments",
          initialValue: [],
          in: { $concatArrays: ["$$value", "$$this"] }
        }
      }
    }
  }
    ]);

    res.status(200).json({ rankings });
  } catch (error) {
    next(error);
  }
};


const rankingByAuthor = async (req, res, next) => {
    console.log(" Entró a rankingByAuthor");
  try {
    const { id } = req.params;

    const rankings = await Reaction.aggregate([
      {
        $lookup: {
          from: "mangas",
          localField: "manga_id",
          foreignField: "_id",
          as: "manga",
        },
      },
      { $unwind: "$manga" },
      { $match: { "manga.author_id": new mongoose.Types.ObjectId(id) } },
      {
        $group: {
          _id: "$manga_id",
          score: {
            $sum: {
              $cond: [
                { $eq: ["$reaction", "dislike"] },
                -1,
                1
              ]
            }
          }
        }
      },
      { $sort: { score: -1 } },
      { $limit: 3 },
      {
        $lookup: {
          from: "mangas",
          localField: "_id",
          foreignField: "_id",
          as: "manga",
        },
      },
      { $unwind: "$manga" },
      {
    $lookup: {
      from: "chapters",
      localField: "_id",
      foreignField: "manga_id",
      as: "chapters"
    }
  },
  {
    $unwind: {
      path: "$chapters",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $lookup: {
      from: "comments",
      localField: "chapters._id",
      foreignField: "chapter_id",
      as: "comments"
    }
  },
  {
    $group: {
      _id: "$_id",
      score: { $first: "$score" },
      manga: { $first: "$manga" },
      comments: { $push: "$comments" }
    }
  },
  {
    $addFields: {
      comments: {
        $reduce: {
          input: "$comments",
          initialValue: [],
          in: { $concatArrays: ["$$value", "$$this"] }
        }
      }
    }
  }
    ]);

    res.status(200).json({ rankings });
  } catch (error) {
    next(error);
  }
};


const rankingByCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const rankings = await Reaction.aggregate([
      {
        $lookup: {
          from: "mangas",
          localField: "manga_id",
          foreignField: "_id",
          as: "manga",
        },
      },
      { $unwind: "$manga" },
      { $match: { "manga.category_id": new mongoose.Types.ObjectId(id) } },
      {
        $group: {
          _id: "$manga_id",
          score: {
            $sum: {
              $cond: [
                { $eq: ["$reaction", "dislike"] },
                -1,
                1
              ]
            }
          }
        }
      },
      { $sort: { score: -1 } },
      { $limit: 3 },
      {
        $lookup: {
          from: "mangas",
          localField: "_id",
          foreignField: "_id",
          as: "manga",
        },
      },
      { $unwind: "$manga" }
    ]);

    res.status(200).json({ rankings });
  } catch (error) {
    next(error);
  }
};

export {mangaRankings, rankingByAuthor, rankingByCategory}