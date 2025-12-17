import Task from "../Model/model.js";

export const addTask = async (req, res) => {
    try {
        const data = new Task(req.body);
        await data.save();
        res.status(201).json({ mess: "data has been stored" });
    } catch (err) {
        res.status(500).json({ mess: err.message });
    }
}



export const getTask = async (req, res) => {
    try {
        const data = await Task.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}