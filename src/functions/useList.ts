import { useState } from 'react';
import useId from './useId';
export type WithId<T> = T & {
	managed_list_id: number;
};
export default function useList<T>(initialValues: T[]) {
	const issue = useId(initialValues.length - 1);
	const [list, setList] = useState<WithId<T>[]>(() => initialValues.map(withId));
	function withId<T>(obj: T, id = issue()): WithId<T> {
		return { managed_list_id: id, ...obj };
	}
	function withoutId<T extends { managed_list_id: number; }>(obj: T): Omit<T, "managed_list_id"> {
		const { managed_list_id, ...rest } = obj;
		return rest;
	}
	function add(initialValue: T) {
		const newItem = withId(initialValue);
		setList([...list, newItem]);
	}
	function remove(id: number) {
		setList(list.filter(item => item.managed_list_id !== id));
	}
	function update(newValue: WithId<T>) {
		setList(list.map(item => item.managed_list_id === newValue.managed_list_id ? newValue : item));
	}
	function clear() {
		setList([]);
	}
	return { managedList: list, add, remove, update, clear, list: list.map(withoutId) };
}