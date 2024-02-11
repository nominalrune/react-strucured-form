import { ChangeEvent } from 'react';
import { RadioAttr } from '@/types/commonTypes';
export default function Radio({ label, options, multiple, name, value, onChange, type, ...prop }: RadioAttr<string> & {
    value: any;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}): import("react/jsx-dev-runtime").JSX.Element;
