import GitSheet from '../models/gitSheet';
import validateGitSheet from '../utils/gitSheetValidator';

const gitController = {
  create(req, res) {
    const { errors, isValid } = validateGitSheet(req.body);
    if (!isValid) {
      return res.status(400).json({ errors });
    }
    GitSheet.findOne({
      command: req.body.command
    })
      .then(foundCommand => {
        if (foundCommand) {
          return res.status(400).json({
            message: 'That command already exists'
          });
        }
        const gitSheet = new GitSheet({
          category: req.body.category,
          description: req.body.description,
          command: req.body.command,
          keywords: req.body.keywords
        });
        gitSheet.save()
          .then(savedSheet => {
            res.status(201).json({
              message: 'Git Command successfully created',
              savedSheet
            });
          })
          .catch(error => res.status(500).json({ error }));
      });
  },
  retrieveAll(req, res) {
    GitSheet.find({})
      .then(gitSheets => {
        res.status(200).json(gitSheets);
      })
      .catch(err => res.status(500).json(err));
  }
};

export default gitController;