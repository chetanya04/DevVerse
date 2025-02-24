const Category = require('../models/categoryModel');


exports.createCategory = async (req, res) => {
  const { name, description, imageURL } = req.body; 
  try {
    const newCategory = new Category({ name, description, imageURL });
    await newCategory.save();
    res.json(newCategory);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.updateCategory = async (req, res) => {
  const { name, description, imageURL } = req.body; 
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { name, description, imageURL },
      { new: true }
    );
    res.json(updatedCategory);
  } catch (err) {
    res.status(500).send('Server error');
  }
};


// READ all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).send('Server error');
  }
};


//Read Categories by ID
exports.getCategoriesbyID = async (req,res)=>{
  try {
      const categoriesId = await Category.findById(req.params.id);
      if (!categoriesId) return res.status(404).josn({message: 'Category not found'});
      res.status(200).json(categoriesId)
  } catch (error) {
      res.status(500).json({error: error.message})
  }
}

// DELETE a category
exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Category removed' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};
