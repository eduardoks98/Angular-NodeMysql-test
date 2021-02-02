import { Router } from 'express';
import clienteController from '../controllers/clienteController';

class ClienteRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', clienteController.list);
        this.router.get('/:id', clienteController.getId);
        this.router.get('/:teste/:data', clienteController.teste)
        this.router.post('/', clienteController.create);
        this.router.delete('/:id', clienteController.delete);
        this.router.put('/:id', clienteController.update);
    }
}

const gamesRoutes = new ClienteRoutes();
export default gamesRoutes.router;