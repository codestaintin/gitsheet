import Category from '../models/category';

const categoryController = {
  create(req, res) {
    Category.findOne({
      name: req.body.name
    })
      .then(foundCategory => {
        if (foundCategory) {
          return res.status(400).json({
            message: 'That category already exists'
          });
        }
        const category = new Category({
          name: req.body.name
        });
        category.save()
          .then(savedCategory => {
            return res.status(201).json({
              message: 'Category successfully created',
              savedCategory
            });
          })
          .catch(error => res.status(500).json({ error }));
      });
  },
  retriveByCategory(req, res) {
    Category.find()
      .populate('gitCheats')
      .exec((err, categories) => {
        if (err) {
          return res.status(400).json({
            message: 'An error occured during this operation'
          });
        }
        return res.status(200).json({
          message: 'Success',
          categories
        });
      });
  }
};

export default categoryController;
