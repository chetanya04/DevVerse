const Blog = require('../models/blog')


// Create new Blog
exports.createBlog = async (req, res) => {
    try {
        const {thumbnail, blog_url} = req.body
        const newBlog = new Blog({thumbnail, blog_url})
        await newBlog.save();
        res.status(201).json(newBlog)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


//Get all Blogs
exports.getBlog = async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).josn({error: error.message})
    }
}


//Get Blog by ID
exports.getBlogById = async (req,res)=>{
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).josn({message: 'Blog not found'});
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


//Update a Blog
exports.updateBlog = async (req, res) => {
    try {
        const {thumbnail,blog_url} = req.body;
        const updateBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            {thumbnail, blog_url},
            {new:true});

            if (!updateBlog) return res.status(404).json({message: 'Blog not found'})
            res.status(200).json(updateBlog);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


//Delete a Blog
exports.deleteBlog = async (req, res) => {
    try {
        const blog= await Blog.findByIdAndDelete(req.params.id);
        if (!blog) return res.status(404).json({message: 'Blog not found'})
            res.status(200).json({message: 'Blog deleted successfully'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
