import { Router } from "express";

const downloadRouter = Router()

downloadRouter
.get("/day1", (req, res) => {
    res.download("public/dnd.pdf")
})
.get("/day3", (req, res) => {
    res.download("public/Protocolo3.pdf")
})
.get("/day5", (req, res) => {
    res.download("public/Protocolo5.pdf")
})
.get("/day6", (req, res) => {
    res.download("public/Protocolo6.pdf")
})
.get("/day7", (req, res) => {
    res.download("public/Protocolo7.pdf")
})


export {downloadRouter}