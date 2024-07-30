document.getElementById('addTransactionBtn').addEventListener('click', function() {
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    if (type && name && amount) {
        const table = document.getElementById('transactionTable');
        const row = table.insertRow();

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.textContent = type;
        cell2.textContent = name;
        cell3.textContent = `$${amount}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            table.deleteRow(row.rowIndex - 1);
        });
        cell4.appendChild(deleteBtn);

        document.getElementById('type').value = '';
        document.getElementById('name').value = '';
        document.getElementById('amount').value = '';
    }
});
