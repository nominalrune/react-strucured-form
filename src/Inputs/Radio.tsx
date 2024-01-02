import { ChangeEvent, ComponentProps } from 'react';
import Input from './Input';
import CheckboxLabel from './CheckboxLabel';
import Fieldset from './Fieldset';
import { RadioAttr } from '@/types/commonTypes';

export default function Radio(
	prop: RadioAttr<string> & { value: any; onChange: (key: string, value: any) => void; },
) {
	return <Fieldset label={label}>
		{
			<CheckboxLabel {...prop}>
				<Input
					{...prop}
					onChange={(e) => handleChange(prop.name, e.target.value)} />
			</CheckboxLabel>
		}
	</Fieldset>;
}