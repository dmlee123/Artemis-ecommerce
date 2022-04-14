// require is old way for "import"
// config will essentially attach all the secret variables in the .env file onto our process environment

require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// old way of "export" 
exports.handler = async (event) => {
	try {
		const { amount } = JSON.parse(event.body);

		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency: 'usd',
			payment_method_types: ['card'],
		});
		return {
			statusCode: 200,
			body: JSON.stringify({ paymentIntent }),
		};
        
	} catch (error) {
		console.log({ error });

		return {
			statusCode: 400,
			body: JSON.stringify({ error }),
		};
	}
};