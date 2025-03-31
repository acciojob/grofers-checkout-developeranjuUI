const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let prices = document.querySelectorAll('.price');
	let total = 0;
	prices.forEach(price => {
		total += parseFloat(price.textContent);
	});
	let totalRow = document.getElementById('total-row');
	if(totalRow){
		totalRow.remove();
	}

	let newRow = document.createElement('tr');
	newRow.id = 'total-row';
	let newCell = document.createElement('td');
	// newCell.colspan = 2;
	newCell.style.fontWeight = "bold";
	newCell.textContent = `Total Price:`;

	let newPriceCell = document.createElement('td');
	newPriceCell.style.fontWeight = "bold";
	newPriceCell.textContent = ` Rs. ${total}`;
	newRow.appendChild(newCell);
	newRow.appendChild(newPriceCell);
	let table = document.querySelector("table");
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

