import express from 'express';
import * as controllers from './controllers';
import * as middlewares from './middlewares/';
import path from 'path';

export const app = express();

// Request logger
app.use(middlewares.requestLogger)



app.set('view engine', 'pug'); // Set Pug as the view engine
app.set('views', path.join(__dirname, 'views')); // Set the views directory



app.get('/', controllers.homeController);
app.get('/api', controllers.apiController);
app.get('/menu', controllers.menuController);


// Default "404 Not Found" handler
app.use(controllers.handlerFor404);


