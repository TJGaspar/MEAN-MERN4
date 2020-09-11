import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const TicketSchema = new Schema(
	{
		title: {
			type: String,
			required: "enter the ticket title",
		},
		priority: {
			type: String,
			default: "normal", 
			required: "enter the ticket priority",
			uppercase: true,
		},
		reason: {
			type: String,
			required: "enter the ticket reason",
		},
		description: {
			type: String,
			required: "enter the ticket description",
		},
		newMessage: {
			type: String,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);
