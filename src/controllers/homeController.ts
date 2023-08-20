import { Request, Response } from 'express';
import path from 'path';
import pug from 'pug'; 

function generateHomePageData(): { message: string; currentDate: string; endpoints: any[] } {
  const endpointList = [
    { route: '/', controller: 'controllers.homeController' },
    { route: '/api', controller: 'controllers.apiController' },
    { route: '/menu', controller: 'controllers.menuController' },
<<<<<<< HEAD
    ];
=======
   
  ];
>>>>>>> abaac835978a95bdf1eb858397453f2d1d286889

  return {
    message: 'TS server + Console endpoint debugger',
    currentDate: new Date().toLocaleDateString(),
    endpoints: endpointList,
  };
}

export function homeController(req: Request, res: Response) {
  const data = generateHomePageData();
  const html = pug.renderFile(path.join(__dirname, '../views/home.pug'), data); 
  res.send(html); 
}
