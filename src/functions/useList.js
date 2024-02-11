import { useEffect, useState } from 'react';
import useId from './useId';
export default function useList(original, setter) {
    const issue = useId(original.length - 1);
    const [list, setList] = useState(() => original.map(withId));
    useEffect(() => {
        setter(list.map(withoutId));
    }, [list]);
    function withId(obj, id = issue()) {
        return { managed_list_id: id, ...obj };
    }
    function withoutId(obj) {
        const { managed_list_id, ...rest } = obj;
        return rest;
    }
    function add(initialValue) {
        const newItem = withId(initialValue);
        setList([...list, newItem]);
    }
    function remove(id) {
        setList(list => list.filter(item => item.managed_list_id !== id));
    }
    function update(id, key, value) {
        setList(list => list.map(item => item.managed_list_id === id ? { ...item, [key]: value } : item));
    }
    function clear() {
        setList([]);
    }
    function replace(newList) {
        setList(newList.map(withId));
    }
    return { list, add, remove, update, clear, replace };
}
