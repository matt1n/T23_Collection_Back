import { Router } from "express";

const downloadRouter = Router()

downloadRouter
.get("/day1", (req, res) => {
    res.download("public/Protocolo1.pdf")
})
.get("/day2", (req, res) => {
    res.download("public/Protocolo2.pdf")
})
.get("/day3", (req, res) => {
    res.download("public/Protocolo3.pdf")
})
.get("/day4", (req, res) => {
    res.download("public/Protocolo4.pdf")
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
.get("/day8", (req, res) => {
    res.download("public/Protocolo8.pdf")
})
.get("/day9", (req, res) => {
    res.download("public/Protocolo9.pdf")
})
.get("/day10", (req, res) => {
    res.download("public/Protocolo10.pdf")
})


export {downloadRouter}