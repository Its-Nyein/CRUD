import express from "express";
import { getUsers } from "../controller/UserController.js";

const router = express.Router();

router.get('/crud_users', getUsers);

export default getUsers;