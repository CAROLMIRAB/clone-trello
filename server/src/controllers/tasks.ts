import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import { JsonObjectExpression } from "typescript";
import taskRepo from '../database/repositories/taskRepo';
interface Task {
  id: Number,
  userid: Number,
  description: String,
  tag: Number,
  files: Object,
  members: Object,
  comments: Object
  boardid: Number
  tagid: Number
}

/* return all tasks */
const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  let results: [Task] = await taskRepo.getTasksQuery()
  return res.status(200).json(results);
}

/* return a task by id */
const getTask = async (req: Request, res: Response, next: NextFunction) => {
  let id: String = req.params.id;
  let results: [Task] = await taskRepo.getTaskQuery(id)
  return res.status(200).json(results);
}



export default { getTasks, getTask }





