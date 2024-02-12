import { useState } from "react";
import ContactList from "./ContactList";
import inputs from "../constants/inputs";

function Form() {

	const [contacts, setContacts] = useState([]);
	const [contact, setContact] = useState({
		name: "",
		lastName: "",
		email: "",
		phone: "",
	});
	const [alert, setAlert] = useState("");

	const changeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		setContact((contact) => ({ ...contact, [name]: value }));
	};

	const addHandler = () => {
		if (!contact.name || !contact.lastName || !contact.email || !contact.phone) {

			setAlert("Please inter valid data!");
			return;
		}

		setAlert("");
		setContacts((contacts) => ([...contacts, contact]));
		setContact({
			name: "",
			lastName: "",
			email: "",
			phone: "",
		});
	};

	return (
		<>
			<div className="bg-light p-4 rounded border border-gray mt-5 mb-3">
				<div className="row g-3">
					{inputs.map((input, index) => (
						<div className="col-lg-6" key={index}>
							<input
								type={input.type}
								name={input.name}
								className="form-control"
								placeholder={input.placeholder}
								value={contact[input.name]}
								onChange={changeHandler}
							/>
						</div>
					))}
					
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

			{alert && <div className="alert alert-danger">{alert}</div>}

			<ContactList contacts={contacts} />
		</>
	);
}

export default Form;
