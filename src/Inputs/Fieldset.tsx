import { ReactNode } from 'react';

export default function Fieldset({ label, children }:{ label:ReactNode, children:ReactNode } ) {
    return <fieldset className='grid gap-1'>
        <legend>{label}</legend>
        <div className="box-border overflow-x-auto m-2 ml-4">{children}</div>
    </fieldset>;
}