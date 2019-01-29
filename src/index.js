const AuthClient = require("./AuthClient");
const GraphServer = require("./GraphServer");

function getTokenFromHeaders(headers) {
	if (!headers.authorization) {
		return;
	}
	
	return headers.authorization.replace(/^Bearer /, "");
}

module.exports = {
	AuthClient,
	getTokenFromHeaders,
	GraphServer
}