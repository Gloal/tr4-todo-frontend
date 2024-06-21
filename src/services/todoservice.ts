import { Todo } from "../types/Todo";

const API_URL_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/v1';

//handle api errors
const handleApiErrors = async (response: Response) => {
    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Request failed with status ${response.status}. ErrorMessage: ${errorMessage}`);
    }
    return response.json();
}

//fetch from endpoints
export const getAllTodos = async (): Promise<Todo[]> => {
    try {
        const response = await fetch(`${API_URL_BASE}/todos`);
        return handleApiErrors(response);
    } catch (error) {
        console.error("Failed to get todo: ", error);
        throw error;
    }
}

export const getOneTodo = async (todoId: number): Promise<Todo> => {
    try {
        const response = await fetch(`${API_URL_BASE}/todo/${todoId}`);
        return handleApiErrors(response);
    } catch (error) {
        console.error("Failed to get todo: ", error);
        throw error;
    }
}

export const addTodo = async (todoData: Omit<Todo, 'todoId'>): Promise<Todo> => {
    try {
        const response = await fetch(`${API_URL_BASE}/todo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todoData),
        });
        return handleApiErrors(response);
    } catch (error) {
        console.error('Failed to add todo: ', error);
        throw error;
    }
};