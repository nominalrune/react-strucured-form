import { useState } from 'react';
import initialize from './initialize';
export default function useFormState(properties) {
    const [data, _setData] = useState(initialize(properties));
    function setData(key, value) {
        _setData(data => ({ ...data, [key]: value }));
    }
    return [data, setData];
}
