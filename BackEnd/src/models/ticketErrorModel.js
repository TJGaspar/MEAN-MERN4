import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const TicketErrorSchema = new Schema({
	title: {
		type: String,
	},
	errorCode: {
		type: Number,
	},
	errorMessage: {
		type: String,
	},
});