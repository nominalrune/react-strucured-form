import Form from '@/Form';
import './app.css';
export default function App() {
	return (
		<Form
			properties={[{
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
				type: 'password',
				name: 'password',
				label: 'Password',
				required: true,
			}, {
				type: 'password',
				name: 'confirmPassword',
				label: 'Confirm Password',
				required: true,
			}, {
				type: 'group',
				name: 'contacts',
				label: 'Contacts',
				model: [{
					type: "email",
					name: "email",
					label: "Email",
					required: true,
				},{
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
					},]
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
				}],
			}, {
				type: 'checkbox',
				name: 'terms',
				suffix: 'Accept terms and conditions',
				required: true,
			}] as const}
			primary={{ label: "submit", onClick: (data) => { alert(JSON.stringify(data)); } }}
		/>
	);
}