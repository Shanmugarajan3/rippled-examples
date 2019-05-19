'use strict';

//Use ripple-lib
//For installation, see github.com/ripple/ripple-lib
const RippleAPI = require('ripple-lib').RippleAPI;


//set variables
const myAddress = 'Enter wallet address as a string.';

//Uncomment the following line to allow self signed SSL/TLS certificates
//process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

//connect to the api
const api = new RippleAPI({server: 'wss://s1.ripple.com:443'});
api.connect().then(() => {
	
/* Uncomment one of the following lines*/
//  return api.getServerInfo()
//	return api.generateAddress();
//	return api.getAccountInfo(myAddress);
//  return api.getSettings(myAddress);
//  return api.getLedger();
//  return api.getFee();

}).then(info => {
	  console.log(info);

	  /* end custom code -------------------------------------- */
}).then(() => {
	  return api.disconnect();
}).then(() => {
	  console.log('All finished. We have successfully disconnected.');
}).catch(console.error);
