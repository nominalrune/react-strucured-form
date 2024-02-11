import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import StructuredInput from './StructuredInput';
import useFormState from './functions/useFormState';
import Actions from './Actions';
export default function Form({ properties, actions: [primary, ...actions] }) {
    const [data, setData] = useFormState(properties);
    function handleSubmit(e) {
        e?.preventDefault();
        if ("reportValidity" in e.target && typeof e.target.reportValidity === 'function' && e.target.reportValidity()) { // フォーム内容がvalidなら
            return primary?.onClick(data);
        }
    }
    return (_jsxs("form", { onSubmit: primary ? handleSubmit : (e) => { e.preventDefault(); }, className: `flex flex-col`, children: [_jsx(StructuredInput, { properties: properties, data: data, setData: setData }), _jsx(Actions, { data: data, actions: [primary, ...actions] })] }));
}
