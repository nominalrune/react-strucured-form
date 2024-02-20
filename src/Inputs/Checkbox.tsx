type Props = {
    name: string;
    value: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Checkbox({ name, value, onChange }: Props) {
    return (
        <input
            type="checkbox"
            name={name}
            checked={value}
            className="h-6 w-6 m-2 self-center rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
            onChange={onChange}
            autoFocus={false}
        />
    );
}