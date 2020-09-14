import mongoose from "mongoose";
import { TicketSchema } from "../models/ticketModel";
import {TicketErrorSchema } from "../models/ticketErrorModel";

const Ticket = mongoose.model("Ticket", TicketSchema);
const Errors = mongoose.model("Error", TicketErrorSchema);


//Adds a new ticket
export const addNewTicket = (req, res) => {
	// let newTicket = new Ticket(req.body);
	// newTicket.save((err, ticket) => {

	Ticket.create(req.body,(err, ticket) => {
		if (err) {
			console.log(err)
			let CreateNewError = CreateErrors(err, req.body.title);
			res.send(CreateNewError);
		} else
			res.json({
				ticket,
				message: `${req.body.title} was successfuly created`,
			});
			res.status(200).send();
	});
};


//Gets tickets from the DB
export const getTickets = (req, res) => {
	Ticket.find({}, (err, ticket) => {
		if (err) {
			console.log(err);
			let CreateNewError = CreateErrors(err, undefined);
			res.send(CreateNewError);
		}
		res.json(ticket);
	}).sort({ createdAt: -1 });
};


//Gets a specific ticket from the DB
export const getTicketWithID = (req, res) => {
	Ticket.findById(req.params.ticketID, (err, ticket) => {
		if (err) {
			console.log(err);
			let CreateNewError = CreateErrors(err, undefined);
			res.send(CreateNewError);
		}
		res.json(ticket);
	});
};



//change a Ticket
export const updateTicket = (req, res) => {
	Ticket.findOneAndUpdate({_id: req.params.ticketID}, req.body, {new: true, useFindAndModify: false}, (err, ticket) => {
		if (err) {
			console.log(err);
			let CreateNewError = CreateErrors(err, undefined);
			res.send(CreateNewError);
		}
		res.json(ticket);
	});
};


//Deletes a Ticket
export const deleteTicket = (req, res) => {
	Ticket.remove({_id: req.params.ticketID}, (err) => {
		if (err) {
			console.log(err);
			let CreateNewError = CreateErrors(err, undefined);
			res.send(CreateNewError);
		}
		res.json({message: 'Delete request successful'});
	});
};


//Create Errors
function CreateErrors(err, name) {
	var NewError = new Errors(err, name);
	NewError.title = name;
	NewError.errorCode = 400;
	NewError.errorMessage = "BAD REQUEST";
	console.log(`An Error occured : ${NewError}`);
	return NewError;
}