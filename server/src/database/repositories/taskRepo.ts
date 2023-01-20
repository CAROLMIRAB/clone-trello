import { Request, Response, NextFunction } from "express";
const db = require("../config")

const getTasksQuery = async () => {
  let results = await db.query(`SELECT * FROM tasks`);
  return results.rows;
}

const getTaskQuery = async (id: String) => {
  let results = await db.query(`SELECT * FROM tasks where id=$1`, [id]);
  return results.rows;
}

export default {
  getTasksQuery,
  getTaskQuery
}