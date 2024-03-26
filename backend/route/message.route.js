import express from 'express';
import { sendMessage, getMessage } from '../controller/message.controller.js';
import { protectRoute } from '../midelwere/protectRoutes.js';

const router = express.Router();

router.route("/send/:id").post(protectRoute ,sendMessage);
router.route("/:id").get(protectRoute ,getMessage);

export default router;