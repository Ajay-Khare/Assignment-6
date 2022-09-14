const router = require('express').Router();
const Blog = require('../models/Blog')


// Your routing code goes here

router.get('/blog', async (req, res) => {

    const page = req.body.page
    const data = await Blog.find().skip((Number(page) - 1) * 5).limit(5)
    res.status(200).send(JSON.stringify(data))
})

router.post("/blog", async (req, res) => {
    try {
        const data = await Blog.create(req.body)
        res.status(200).send("data saved successfully")
    } catch (error) {
        res.status(404).send(error)

    }
})

router.put("/blog/:id", async (req, res) => {
    try {
        const id = req.params.id
        const data = await Blog.updateOne({ _id: id }, req.body)
        res.status(200).send("Done")
    } catch (error) {
        console.log(error)
    }
})

router.delete("/blog/:id", async (req, res) => {
    try {
        const id = req.params.id
        const data = await Blog.deleteOne({ _id: id })
        res.status(200).send("Done")
    } catch (error) {
        console.log(error)
    }
})
module.exports = router;