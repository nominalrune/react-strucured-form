import { InputAttribute } from '@/types/commonTypes';
interface InputProp {
    prop: InputAttribute;
    handleChange: (key: string, value: any) => void;
    value: any;
}
export default function Input({ prop, handleChange, value }: InputProp): import("react/jsx-dev-runtime").JSX.Element;
export {};
