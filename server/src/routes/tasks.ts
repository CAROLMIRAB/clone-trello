import express from "express";
import controller from '../controllers/tasks';

const router = express.Router()

router.get('tasks/all-tasks', controller.getTasks)
router.get('tasks/task/:id', controller.getTask);
router.get('tasks/tasks-user/:user', controller.getTasksByUser);
router.get('tasks/tasks-tag/:tag', controller.getTasksByTag);
router.post('tasks/create-task', controller.createTask);
router.put('tasks/update-task/:id', controller.updateTask)

export = router