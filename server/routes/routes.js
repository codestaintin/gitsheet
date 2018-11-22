const routes = (router) => {
  router.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to Git Sheet'
    });
  });
};

export default routes;
