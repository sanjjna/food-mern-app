/*import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', register);
router.post('/login', login);

export default router;*/
import express from 'express';
import { loginUser, registerUser, getProfile } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Common for both roles
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile);

export default router;
