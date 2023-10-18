const { Router } = require("express");
const router = Router();

const routes = require("./play-list");
const { BaseUrl } = require("../api/const/index");

////// Default Path start_poinnt //////
router.get("/", (req, res) => {
  res.send(`
    <h2>Welcome</h2> 
    <b> We are here to welcome you to our Express, Sequelize Application.
    We are building a product to act like a boilerplate.</b>
    <p>You are now at our root route "/".</p>
 `);
});
////// Default Path end_point ///////

const useCombineRoutes = (app) => {
  app.use(BaseUrl, routes);
  app.use(router);
};

module.exports = useCombineRoutes;
