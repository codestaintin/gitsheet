import GitCheat from '../models/gitSheet';
import Category from '../models/category';
import validateGitCheat from '../../shared/utils/gitSheetValidator';

const gitController = {
  create(req, res) {
    const { errors, isValid } = validateGitCheat(req.body);
    if (!isValid) {
      return res.status(400).json({ errors });
    }

    GitCheat.findOne({
      command: req.body.command
    })
      .then(foundCommand => {
        if (foundCommand) {
          return res.status(400).json({
            message: 'That command already exists'
          });
        }

        const gitSheet = new GitCheat({
          category: req.body.category,
          description: req.body.description,
          command: req.body.command,
          keywords: req.body.keywords
        });
        gitSheet.save()
          .then(savedCheat => {
            Category.findById(req.body.category).then((category) => {
              category.gitCheats.push(savedCheat);
              category.save();
            });
            return res.status(201).json({
              message: 'Git Command successfully created',
              savedCheat
            });
          })
          .catch(error => res.status(500).json({ error }));
      });
  },
  retrieveAll(req, res) {
    GitCheat.find({})
      .populate('category')
      .then(gitCheats => {
        res.status(200).json(gitCheats);
      })
      .catch(err => res.status(500).json(err));
  }
};

export default gitController;