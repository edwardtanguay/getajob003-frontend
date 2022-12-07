import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { Job, Todo } from './types';

interface IAppContext {
	jobs: Job[],
	todos: Todo[]
}

interface IAppProvider {
	children: React.ReactNode;
}

const backendUrl = 'http://localhost:3011'; 

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [jobs, setJobs] = useState<Job[]>([]);
	const [todos, setTodos] = useState<Todo[]>([]);
	
	useEffect(() => {
		(async () => {
			setJobs((await axios.get(`${backendUrl}/jobs`)).data);
		})();
	}, []);
	
	useEffect(() => {
		(async () => {
			const _todos = (await axios.get(`${backendUrl}/todos`)).data;
			_todos.sort((a: Todo, b: Todo) => a.todoText > b.todoText);
			setTodos(_todos);
		})();
	}, []);
	return (
		<AppContext.Provider
			value={{
				jobs,
				todos
			}}
		>
			{children}
		</AppContext.Provider>
	);
}