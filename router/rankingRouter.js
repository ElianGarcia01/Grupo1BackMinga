import { Router } from "express";
import { mangaRankings, rankingByAuthor, rankingByCategory } from "../controllers/ranking/read.js";

const rankingRouter = Router()

rankingRouter.get('/topMangas', mangaRankings)
rankingRouter.get('/topMangasByAuthor/:id', rankingByAuthor)
rankingRouter.get('/topMangasByCategory/:id', rankingByCategory)

export default rankingRouter