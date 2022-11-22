import express from 'express';
import HomeController from "../controllers/HomeController"





const router = express.Router();
const initWebRoutes = (app) => { 
    router.post('/api/login', HomeController.handleLogin);
 

    

   

    return app.use("/", router);
}
export default initWebRoutes;