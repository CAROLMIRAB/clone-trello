import { Request, Response, NextFunction } from "express";
import { Task } from "../models/model";
const db = require("../config")

const getTasksQuery = async () => {
  let results = await db.query(`SELECT * FROM tasks`);
  return results.rows;
}

const getTaskQuery = async (id: String) => {
  let results = await db.query(`SELECT * FROM tasks where id=$1`, [id]);
  return results.rows;
}

const getTasksByUserQuery = async (user: String) => {
  let results = await db.query(`SELECT * FROM tasks where userid=$1`, [user]);
  return results.rows;
}

const getTasksByTagQuery = async (tag: String) => {
  let results = await db.query(`SELECT * FROM tasks where userid=$1`, [tag]);
  return results.rows;
}

const createQuery = async (task: Task) => {
  let results = await db.query(`INSERT INTO tasks (id,userid,description,tag,files,members,comments,boardid,tagid) 
  VALUES (${task.id}, ${task.userid},${task.description},${task.tag}, ${task.files},${task.members},${task.comments},${task.boardid},${task.tagid})`);
  return results.rows;
}


export default {
  createQuery,
  getTasksQuery,
  getTaskQuery,
  getTasksByUserQuery,
  getTasksByTagQuery,
}