import express from "express";
import controller from '../controllers/tasks';

const router = express.Router()

router.get('/tasks', controller.getTasks)
router.get('/task/:id', controller.getTask);

export = router