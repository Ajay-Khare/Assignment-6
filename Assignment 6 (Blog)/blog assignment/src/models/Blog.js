const mongooose = require('mongoose');
console.log(process.env.DATABASE_URL)
mongooose.connect("mongodb://localhost/blogs", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})
const blogSchema = new mongooose.Schema({
    // Your code goes here
    topic: { type: String, required: true },
    description: { type: String, required: true },
    posted_at: { type: Date, default: Date() },
    posted_by: { type: String, required: true }

})

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;