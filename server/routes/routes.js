import userController from '../controllers/userController';

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
};

export default routes;
