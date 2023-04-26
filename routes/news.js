const { Router } = require("express")
const router = Router()
const Post = require("../models/post")

router.get("/", (req, res) => {
    res.status(200).send({ route: "/news" })
})

router.post("/", async(req, res) => {
    console.log(req.body)
    await Post.create({
            title: req.body.title,
            description: req.body.description,
            text: req.body.text,
            imgUrl: req.body.img
        }).then(() => {
            res.status(200).send({ message: "Malumotlar bazasiga joylandi" })
        })
        .catch((err) => {
            res.status(500).send({ message: `${err}` })
        })
        // .finally(() => {
        //     res.status(200).send("Ish yakunlandi")
        // })


})


module.exports = router