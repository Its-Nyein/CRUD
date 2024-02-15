import express from "express";
import { 
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser 
} from "../controller/UserController.js";

const router = express.Router();

router.get('/crud_users', getUsers);
router.get('/crud_users/:id', getUserById);
router.post('/crud_users', createUser);
router.patch('/crud_users/:id', updateUser);
// router.delete('/crud_users/:id', deleteUser);

export default router;