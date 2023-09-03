import { Router } from "express";

const downloadRouter = Router()

downloadRouter
.get("/day1", (req, res) => {
    res.download("public/dnd.pdf")
})
.get("/day5", (req, res) => {
    res.download("public/Isaac Ripley.pdf")
})

export {downloadRouter}