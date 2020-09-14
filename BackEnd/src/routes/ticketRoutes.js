import {
	addNewTicket,
	getTickets,
	updateTicket,
	getTicketWithID,
	deleteTicket,
} from "../controllers/ticketController";

const routes = (app) => {
	app
		.route("/ticket")
		.get((req, res, next) => {
			console.log(`Request from: ${req.originalUrl}`);
			console.log(`Request type: ${req.method}`);
			next();
		}, getTickets)
		.put(addNewTicket);

	app
		.route("/ticket/:ticketID")
		.patch(updateTicket)
		.get(getTicketWithID)
		.delete(deleteTicket);
};

export default routes;
