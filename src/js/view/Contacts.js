import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal.js";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});

	const { store } = useContext(Context);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contactos.map((item, index) => (
							<div key={index}>
								<ContactCard item={item} onDelete={() => setState({ showModal: false })} />
								<Modal
									show={state.showModal}
									onClose={() => setState({ showModal: true })}
									item={item}
								/>
							</div>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};