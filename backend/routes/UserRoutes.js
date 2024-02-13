import express from "express";
import { getUsers } from "../controller/UserController";

const router = express.getUsers();

router.get('/crud_users', getUsers);

export default getUsers;