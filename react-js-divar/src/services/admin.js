import api from "configs/api";

const addCategory = (data) => api.post("category", data);

const getCategory = () => api.get("category");

// const deleteCategory = (id) => api.get("category", id);

export { addCategory, getCategory };
