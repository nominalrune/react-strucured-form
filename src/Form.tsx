import {
    type InputAttribute,
    DataModel
} from './types/commonTypes';
import StructuredInput from './StructuredInput';
import useFormState from './functions/useFormState';
import Actions from './Actions';
export type OnClick<T extends { name: string, type: any; }[]> = (data: DataModel<T>) => void | Promise<any>;

type Property<T extends readonly InputAttribute[]> = {
    properties: T;
    actions: { label: string, onClick: OnClick<T[number][]>; }[];
};
export default function Form<T extends readonly InputAttribute<string>[]>({ properties, actions:[primary, ...actions] }: Property<T>) {
    const [data, setData] = useFormState(properties);
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e?.preventDefault();
        if ("reportValidity" in e.target && typeof e.target.reportValidity === 'function' && e.target.reportValidity()) { // フォーム内容がvalidなら
            return primary?.onClick(data);
        }
    }

    return (
        <form onSubmit={primary ? handleSubmit : (e) => { e.preventDefault(); }} className={`flex flex-col`}>
            {/**@ts-expect-error*/}
            <StructuredInput properties={properties} data={data} setData={setData} />
            {/**@ts-expect-error*/}
            <Actions data={data} actions={[primary, ...actions]} />
        </form>
    );
}
