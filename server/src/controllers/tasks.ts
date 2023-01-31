import { Request, Response, NextFunction } from "express";
import { JsonObjectExpression } from "typescript";
import taskRepo from '../database/repositories/taskRepo';
import { APIResponse, Task } from "../database/models/model";

/* return all tasks */
const getTasks = async (req: Request, res: Response, next: NextFunction) => {

  try {
    let results: Task = await taskRepo.getTasksQuery()
    let response: APIResponse<Task> = { data: results, message: "Todas las tareas" }
    return res.status(200).json(response);
  } catch (err) {
    let response: APIResponse<Task> = { message: "Ha ocurrido un error" }
    console.error('getTasks', err);
    return res.status(500).json(response);
  }
}

/* return a task by id */
const getTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let id: String = req.params.id;
    let results: Task = await taskRepo.getTaskQuery(id)
    let response: APIResponse<Task> = { data: results, message: "Tarea solicitada" }
    return res.status(200).json(response);
  } catch (err) {
    let response: APIResponse<Task> = { message: "Ha ocurrido un error" }
    console.error('getTask', err);
    return res.status(500).json(response);
  }
}

/* return a task by user*/
const getTasksByUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let user: String = req.params.user;
    let results: Task = await taskRepo.getTasksByUserQuery(user)
    let response: APIResponse<Task> = { data: results, message: "Todas las tareas" }
    return res.status(200).json(response);
  } catch (err) {
    let response: APIResponse<Task> = { message: "Ha ocurrido un error" }
    console.error('getTasksByUser', err);
    return res.status(500).json(response);
  }
}

/* return a task by tag*/
const getTasksByTag = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let tag: String = req.params.tag;
    let results: Task = await taskRepo.getTasksByTagQuery(tag)
    let response: APIResponse<Task> = { data: results, message: "Todas las tareas" }
    return res.status(200).json(response);
  } catch (err) {
    let response: APIResponse<Task> = { message: "Ha ocurrido un error" }
    console.error('getTasksByTag', err);
    return res.status(500).json(response);
  }
}

/* create a task*/
const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let data: Task = req.body;
    let result = await taskRepo.createQuery(data)
    let response: APIResponse<Task> = { data: data, message: "Se ha creado de forma correcta" }
    return res.status(200).json(response);
  } catch (err) {
    let response: APIResponse<Task> = { message: "Ha ocurrido un error" }
    console.error('createTask', err);
    return res.status(500).json(response);
  }
}


/* update a task*/
const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let data: Task = req.body;
    let result = await taskRepo.createQuery(data)
    let response: APIResponse<Task> = { data: data, message: "Se ha creado de forma correcta" }
    return res.status(200).json(response);
  } catch (err) {
    let response: APIResponse<Task> = { message: "Ha ocurrido un error" }
    console.error('createTask', err);
    return res.status(500).json(response);
  }
}


export default { getTasks, getTask, getTasksByUser, getTasksByTag, createTask, updateTask }





