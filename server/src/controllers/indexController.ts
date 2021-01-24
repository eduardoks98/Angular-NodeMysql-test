import { Request, Response } from 'express';

class IndexController {
    
    public index(req: Request, res: Response) {
       // res.send('Hello teste');
        res.json({text: 'api'})
    }
}

export const indexController = new IndexController();