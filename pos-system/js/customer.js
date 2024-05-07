var customer=[];


$('#save-customer').on('click',()=>{
    alert("save customer")
    var customerId= $('#customer_id').val();
    var customerName=  $('#customer_name').val();
    var customerAddress=  $('#customer_address').val();
    var customerSalary= $('#customer_salary').val()

    console.log(customerId,customerName,customerAddress,customerSalary);
})

/*$('#save-customer').on('click', () => {
    // Alert to indicate that the save operation is being performed
    alert("Saving customer...");

    // Retrieve values from input fields
    var customerId = $('#customer_id').val();
    var customerName = $('#customer_name').val();
    var customerAddress = $('#customer_address').val();
    var customerSalary = $('#customer_salary').val();

    // Create a new row for the table
    var newRow = `<tr>
                    <td>${customerId}</td>
                    <td>${customerName}</td>
                    <td>${customerAddress}</td>
                    <td>${customerSalary}</td>
                  </tr>`;

    // Append the new row to the table body
    $('#customer-table tbody').append(newRow);

    // Log the data to the console
    console.log("Customer ID:", customerId);
    console.log("Customer Name:", customerName);
    console.log("Customer Address:", customerAddress);
    console.log("Customer Salary:", customerSalary);
});*/
