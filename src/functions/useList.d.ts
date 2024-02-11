export type WithId<T> = T & {
    managed_list_id: number;
};
export default function useList<T>(original: T[], setter: (value: T[]) => any): {
    list: WithId<T>[];
    add: (initialValue: T) => void;
    remove: (id: number) => void;
    update: (id: number, key: string, value: any) => void;
    clear: () => void;
    replace: (newList: T[]) => void;
};
