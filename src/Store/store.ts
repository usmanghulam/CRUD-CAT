
import { useLocalObservable } from 'mobx-react'
import { FormValues, Store } from '../Todos/interfaces';
import axios from 'axios';
export const useStore = () => {
	const store: Store =  useLocalObservable(() => ({
		cats: [] as FormValues[],
		cat: {} as FormValues,
		addCats: (cat: FormValues) => {
			axios.put('http://localhost:5000/cats/create', cat)
			.then((newCat: FormValues[] | any) => {
				store.cats.push(newCat.data);
			})
			.catch(err => console.log(err));
		},
		getAllCats: () => {
			axios.get('http://localhost:5000/cats').then((allCats: FormValues[] | any) => {
				store.cats.push(...allCats.data)
			}).catch(err => alert(err));
		},
		removeCat: (_id: string | number) => {
			axios.post(`http://localhost:5000/cats/delete`, {id: _id})
			.then(res => {
				if (res) {
					const filterd = store.cats.filter(cat => cat._id !== _id);
					store.cats = filterd;
				}
			})
			.catch(err => console.log(err));
		},
		getSingleCat: (_id: string) => {
			const filterd = store.cats.filter(cat => cat._id === _id)[0];
			store.cat = filterd;
		},
		clearSingleCat: () => {
			store.cat = {} as FormValues;
		},
		updateCat: (cat: FormValues) => {
			axios.post('http://localhost:5000/cats/update', cat)
			.then(res => {
				const filterd = store.cats.filter(oldcats => cat._id !== oldcats._id);
				filterd.push(res.data);
				store.cats = filterd;
			}).catch(err => console.log(err));
		},
	}));
	return store;
};