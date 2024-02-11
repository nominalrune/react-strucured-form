import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Input from './Inputs/Input';
export default function StructuredInput({ properties, data, setData }) {
    return _jsx(_Fragment, { children: properties.map((prop) => (_jsx(Input, { prop: prop, value: data[prop.name], handleChange: setData }, 'input_' + prop.name))) });
}
