function insert_Row() {
    //Write your code here
	let table = document.getElementById('sampleTable')
	let newRow = table.insertRow(0)
	let newcel1 = newRow.insertCell(0)
	let newcel2 = newRow.insertCell(1)

	newcel1.innerHTML = 'New Cell1'
	newcel2.innerHTML = 'New Cell2'
  
}
