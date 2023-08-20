import { Request, Response } from 'express';
import path from 'path';
import pug from 'pug'; 

function generateHomePageData(): { message: string; currentDate: string; endpoints: any[] } {
  const endpointList = [
    { route: '/', controller: 'controllers.homeController' },
    { route: '/api', controller: 'controllers.apiController' },
    { route: '/menu', controller: 'controllers.menuController' },
   
  ];

  return {
    message: 'TS server + Console endpoint debugger',
    currentDate: new Date().toLocaleDateString(),
    endpoints: endpointList,
  };
}

export function homeController(req: Request, res: Response) {
  const data = generateHomePageData();
  const html = pug.renderFile(path.join(__dirname, '../views/home.pug'), data); // Render the Pug template
  res.send(html); // Send the rendered HTML to the client
}
