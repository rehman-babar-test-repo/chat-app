import express from 'express';
import {protectRoute} from '../midelwere/protectRoutes.js'
import { getUserForSideBar } from '../controller/user.controller.js';
import { verifyUser } from '../midelwere/aouth.js';
const router = express.Router()

router.route("/").get(protectRoute, getUserForSideBar)

export default router