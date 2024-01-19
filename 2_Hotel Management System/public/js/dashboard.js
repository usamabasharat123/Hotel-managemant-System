const { json } = require('body-parser');

let sidebar = document.querySelector('.sidebar');
let sidebarBtn = document.querySelector('.sidebarBtn');
const adminName = document.querySelector('.admin_name');
const navLinks = document.querySelector('.nav-links');
const boxDivs = document.querySelectorAll('.box');
const btn = document.querySelector('.button');
const tbody = document.querySelector('tbody');
const tb1 = document.querySelector('.tb1');
const btnSearch = document.querySelector('.searchButton');
const searchTerm = document.querySelector('.searchTerm');

// Toggling SideBar
sidebarBtn.onclick = function () {
	sidebar.classList.toggle('active');
	if (sidebar.classList.contains('active')) {
		sidebarBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
	} else sidebarBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
};

// Welcome Note
fetch('/activeAdmin')
	.then(result => result.json())
	.then(data => (adminName.textContent = 'Welcome back, ' + data.activeAdmin))
	.catch(err => console.log(err));

// Changing Modules on Admin Dashboard
navLinks.addEventListener('click', e => {
	e.preventDefault();
	if (e.target.classList.contains('link')) {
		boxDivs.forEach(div => {
			div.classList.add('hidden');
		});
		document
			.querySelector(`#${e.target.classList[0]}`)
			.classList.remove('hidden');
	} else return;
});

// Formatting Date Fetched From DB
const formatDate = function (str) {
	return str.slice(0, str.indexOf('T'));
};

// Booking Records
btn.addEventListener('click', e => {
	// e.preventDefault();
	fetch('/getBookings')
		.then(result => result.json())
		.then(data => {
			console.log(data);
			data.forEach((ele, i) => {
				tbody.innerHTML += `<tr>
					<td>${i + 1}</td>
					<td>${ele.fname + ' ' + ele.lname}</td>
					<td>${formatDate(ele.arr_date)}</td>
					<td>${formatDate(ele.dep_date)}</td>
					<td>Paid</td>
					<td>${'0' + ele.phone}</td>
					<td>Deluxe</td>
				</tr>`;
			});
		})
		.catch(err => console.log(new Error(err)));
});

btnSearch.addEventListener('click', e => {
	console.log('Working');
	// const obj = { term: searchTerm.value };
	// fetch('/searchCustomer', {
	// 	method: 'POST',
	// 	body: JSON.stringify(obj),
	// })
	// 	.then(result => result.json())
	// 	.then(data => {
	// 		// console.log(data);
	// 		data.forEach((ele, i) => {
	// 			tbody.innerHTML += `<tr>
	// 				<td>${i + 1}</td>
	// 				<td>${ele.fname + ' ' + ele.lname}</td>
	// 				<td>${formatDate(ele.arr_date)}</td>
	// 				<td>${formatDate(ele.dep_date)}</td>
	// 				<td>Paid</td>
	// 				<td>${'0' + ele.phone}</td>
	// 				<td>Deluxe</td>
	// 			</tr>`;
	// 		});
	// 	})
	// 	.catch(err => console.log(new Error(err)));
});

document.querySelector('.log-out').addEventListener('click', e => {
	location.replace('Home.html');
});

fetch('/searchCustomer')
	.then(result => result.json())
	.then(data => console.log(data))
	.catch(err => console.log(err));
