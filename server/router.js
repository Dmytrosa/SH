import Router from 'express'
import HeroController from "./HeroController.js";

const router = new Router()
router.post('/heroes', HeroController.create)
router.get('/heroes', HeroController.getAll)
router.get('/heroes/:id', HeroController.getOne)
router.get('/byPage', HeroController.getSome);
router.put('/heroes', HeroController.update)
router.delete('/heroes/:id', HeroController.delete)

export default router;