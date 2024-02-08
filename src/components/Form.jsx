import { useState } from "react";

function Form() {

	const [contacts, setContacts] = useState([]);

	const [contact, setContact] = useState({
		name: "",
		lastName: "",
		email: "",
		phone: "",
	});

	const changeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		setContact((contact) => ({ ...contact, [name]: value }));
	};

	const addHandler = () => {
		setContacts((contacts) => ([...contacts, contact]));
		setContact({
			name: "",
			lastName: "",
			email: "",
			phone: "",
		});
	};

	return (
		<div className="bg-light p-4 rounded border border-gray my-5">
			<div className="row g-3">
				<div className="col-lg-6">
					<input
						type="text"
						name="name"
						className="form-control"
						placeholder="Name"
						value={contact.name}
						onChange={changeHandler}
					/>
				</div>
				<div className="col-lg-6">
					<input
						type="text"
						name="lastName"
						className="form-control"
						placeholder="Last Name"
						value={contact.lastName}
						onChange={changeHandler}
					/>
				</div>
				<div className="col-lg-6">
					<input
						type="email"
						name="email"
						className="form-control"
						placeholder="Email"
						value={contact.email}
						onChange={changeHandler}
					/>
				</div>
				<div className="col-lg-6">
					<input
						type="number"
						name="phone"
						className="form-control"
						placeholder="Phone"
						value={contact.phone}
						onChange={changeHandler}
					/>
				</div>
				<div className="col-12">
					<button
						className="btn btn-primary w-100"
						onClick={addHandler}
					>
						Add contact
					</button>
				</div>
			</div>
		</div>
	);
}

export default Form;
