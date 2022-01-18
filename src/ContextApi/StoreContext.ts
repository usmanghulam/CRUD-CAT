import { createContext } from 'react';
import { Store } from '../Todos/interfaces'

export const Context = createContext<Store>({} as Store);