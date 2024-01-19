const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../PROJECT'));
let activeAdmin;

const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '133817',
	database: 'mydb',
});

con.connect(err => {
	if (err) throw err;
	else console.log('Database Connected Successfully.');
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/Home.html');
});

app.get('/loginpage', (req, res) => {
	res.sendFile(__dirname + '/loginpage.html');
});

// : activeAdmin.split(' ')[0]
app.get('/activeAdmin', (req, res) => {
	res.json({ activeAdmin });
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/Home.html');
});

app.get('/getBookings', (req, res) => {
	con.query(
		`SELECT * FROM customer, booking 
	where customer.cust_id = booking.cust_id`,
		(err, results, _) => {
			if (err) throw err;
			else {
				res.json(results);
				// console.log(results);
			}
		}
	);
});

app.post('/loginpage', (req, res) => {
	const user = req.body.user.toLowerCase();
	const pass = req.body.pass;

	const query = `SELECT * FROM ADMIN`;

	con.query(query, (error, results, _) => {
		if (error) throw error;
		else {
			let status = false;
			results.forEach(result => {
				if (result.username === user && result.password === pass) {
					status = true;
					activeAdmin = result.name;
					con.query(
						`UPDATE ADMIN
            SET current = 0`,
						(err, res) => {
							if (err) throw err;
							else console.log('Admin Reset successfully.');
						}
					);

					con.query(
						`UPDATE ADMIN
              SET current = 1 
              WHERE username='${user}'`,
						(err, res) => {
							if (err) throw err;
							else console.log('Admin updated successfully.');
						}
					);
				}
			});
			if (status) res.sendFile(__dirname + '/Dashboard.html');
			else res.status(404).send('<h1>Invalid Credentials.</h1>');
		}
	});
});

// Reserving a Customer
app.post('/reserveCustomer', (req, res) => {
	const customer = {};
	customer.fname = req.body.fname;
	customer.lname = req.body.lname;
	customer.city = req.body.city;
	customer.phone = req.body.phone;
	customer.email = req.body.email;
	customer.gender = req.body.cars;
	customer.address = 'Lahore';
	customer.cnic = req.body.cnic;
	customer.arr_date = req.body.arr_date;
	customer.dep_date = req.body.dep_date;
	customer.persons = req.body.persons;
	customer.room_type = req.body.room_type;

	// console.log('Working');
	// console.log(customer);
	const q = `INSERT INTO CUSTOMER(cust_id,fname, lname, city, phone, email, gender, address, cnic) VALUES(10011,?, ?, ? ,? ,? , ?, ?, ?)`;
	con.query(
		q,
		[
			customer.fname,
			customer.lname,
			customer.city,
			customer.phone,
			customer.email,
			customer.gender,
			customer.address,
			customer.cnic,
		],
		(err, result) => {
			if (err) throw err;
			else console.log(result.affectedRows);
		}
	);
});
// let customerDetail;
app.post('/searchCustomer', (req, res) => {
	const nic = req.body.term;
	console.log(nic);

	// con.query(
	// 	`SELECT * FROM customer_detail
	// where cnic = '${nic}'`,
	// 	(err, results, _) => {
	// 		if (err) throw err;
	// 		else {
	// 			// console.log(results);
	// 			customerDetail = results;
	// 			res.json(results);
	// 		}
	// 	}
	// );
});

// app.get('/searchCustomer', (req, response) => {
// 	response.json(customerDetail);
// });

app.listen(process.env.PORT || 3000, () => {
	console.log('Server is running at port 3000.');
});

// con.end();
