import { useRef } from 'react';
export default function useId(initialId = 0) {
    const next = useRef(initialId);
    const issue = () => {
        return ++next.current;
    };
    return issue;
}
