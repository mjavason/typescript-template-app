import { Router } from 'express';
import publicRoute from './public';
import protectedRoute from './protected';
import adminRoute from './admin';

const router = Router();
router.get('/', (req, res) => {
  res.send('welcome to v1');
  console.log('welcome to version 1');
});

router.use('/', publicRoute);
router.use('/', protectedRoute);
router.use('/', adminRoute);

export default router;
