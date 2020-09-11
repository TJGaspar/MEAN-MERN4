import {
	addNewTicket,
	getTickets,
	updateTicket,
	getTicketWithID,
	deleteTicket
} from "../controllers/stockController";

const routes = (app) => {
	app
		.route("/ticket")
		.get((req, res, next) => {
			//middleware
			console.log(`Request from: ${req.originalUrl}`);
			console.log(`Request type: ${req.method}`);
			next();
		}, getTickets)
		.post(addNewTicket);

	app
		.route("/ticket/:ticketID")
		.patch(updateTicket)
		.get(getTicketWithID)
		.delete(deleteTicket);
};

export default routes;
