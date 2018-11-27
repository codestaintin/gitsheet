import userController from '../controllers/userController';
import gitController from '../controllers/gitController';
import authMiddleware from '../middleware/authorisation';

const routes = (router) => {
  router.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to Git Sheet'
    });
  });
  router.route('/users/signup')
  /** POST api/v1/users/signup - Create a new user */
    .post(userController.create);
  router.route('/users/signin')
  /** POST api/v1/users/signin - Log inuser */
    .post(userController.login);
  router.route('/add')
  /** POST api/v1/users/add- Add git command */
    .post(authMiddleware.verifyToken,
      authMiddleware.verifyAdmin,
      gitController.create);
  router.route('/allSheets')
  /** GET api/v1/users/allSheets- Get all git sheets */
    .get(authMiddleware.verifyToken, gitController.retrieveAll);
};

export default routes;
