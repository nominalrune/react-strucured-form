import { jsx as _jsx } from "react/jsx-runtime";
import Form from '@/Form';
import './app.css';
export default function App() {
	return (_jsx("div", {
		className: "dark",
		children: _jsx(
			Form,
			{
				properties: [{
					type: 'text',
					name: 'name',
					label: 'Name',
					required: true,
				}, {
					type: 'email',
					name: 'email',
					label: 'Email',
					required: true,
				}, {
					type: 'group',
					name: 'contacts',
					label: 'Contacts',
					direction: "horizontal",
					model: [{
						type: 'iterable-group',
						name: 'friends',
						label: 'Friends',
						model: [{
							type: "text",
							name: "name",
							label: "Name",
							required: true,
						}, {
							type: "email",
							name: "email",
							label: "Email",
							required: true,
						}, {
							type: 'radio',
							name: 'select',
							label: 'select',
							multiple: false,
							options: [['あいうえお', 'option 1'], ['Option 2', 'option 2'], ['option 3', 'option 3']],
						}, {
							type: 'radio',
							name: 'muliple_select',
							label: 'Multiple select',
							multiple: true,
							options: [['option 1', 'option 1'], ['option 2', 'option 2'], ['option 3', 'option 3']],
						}]
					}, {
						type: 'iterable-group',
						name: "workplace",
						label: "Workplace",
						model: [{
							type: "text",
							name: "name",
							label: "Name",
							required: true,
						}, {
							type: "email",
							name: "email",
							label: "Email",
							required: true,
						},],
					}, {
						type: 'iterable-group',
						name: "community",
						label: "Community",
						model: [{
							type: "text",
							name: "name",
							label: "Name",
							required: true,
						}, {
							type: "email",
							name: "email",
							label: "Email",
							required: true,
						},],
					}, {
						type: 'iterable-group',
						name: "family",
						label: "family",
						model: [{
							type: "text",
							name: "name",
							label: "Name",
							required: true,
						}, {
							type: "email",
							name: "email",
							label: "Email",
							required: true,
						},],
					}],
				}, {
					type: 'checkbox',
					name: 'terms',
					suffix: 'Accept terms and conditions',
					required: true,
				}],
				actions: [{ label: "submit", onClick: (data) => { alert(JSON.stringify(data)); } }]
			})
	}));
}