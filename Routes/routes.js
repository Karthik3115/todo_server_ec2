import { addTask, getTask, deleteTask, updateTask } from "../Controller/controller.js";
import express from "express";

const route = express.Router()

route.post("/addtask", addTask);
route.get("/gettask", getTask);
route.delete("/deletetask/:id", deleteTask);
route.put("/updatetask/:id", updateTask);

export default route