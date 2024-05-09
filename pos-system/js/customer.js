
var customer = [];
var recordIndex;

$('#save-customer').on('click', () => {

    alert("Saving customer...");


    var customerId = $('#customer_id').val();
    var customerName = $('#customer_name').val();
    var customerAddress = $('#customer_address').val();
    var customerSalary = $('#customer_salary').val();


    var newCustomer = {
        id: customerId,
        name: customerName,
        address: customerAddress,
        salary: customerSalary
    };


    customer.push(newCustomer);

    // Log the data to the console for verification
    console.log("Customer ID:", customerId);
    console.log("Customer Name:", customerName);
    console.log("Customer Address:", customerAddress);
    console.log("Customer Salary:", customerSalary);


    loadTable();
});

function loadTable() {
    $('#customer-tbl-body').empty();
    customer.map((item, index) => {
        let record = `<tr>
                        <td class="customer-id-value">${item.id}</td>
                        <td class="customer-name-value">${item.name}</td>
                        <td class="customer-address-value">${item.address}</td>
                        <td class="customer-salary-value">${item.salary}</td>
                    </tr>`;
        $('#customer-tbl-body').append(record);
    });
}

$("#customer-tbl-body").on('click', 'tr', function () {
    let index = $(this).index();
    recordIndex = index;
    console.log("index:", index);

    let id = $(this).find(".customer-id-value").text();
    let name = $(this).find(".customer-name-value").text();
    let address = $(this).find(".customer-address-value").text();
    let salary = $(this).find(".customer-salary-value").text();

    $("#customer_id").val(id);
    $("#customer_name").val(name);
    $("#customer_address").val(address);
    $("#customer_salary").val(salary);
});


$("#delete-customer").on('click', () => {
    const confirmation = confirm("Are you sure you want to delete this customer?");
    if (confirmation) {

        customer.splice(recordIndex, 1);
        alert("Customer deleted successfully.");
        loadTable();
    } else {

        alert("Deletion canceled.");
    }
});
$("#close-customer")
/*$('#update-customer').on('click', () => {
    // Get the updated values from the input fields
    var updatedId = $('#customer_id').val();
    var updatedName = $('#customer_name').val();
    var updatedAddress = $('#customer_address').val();
    var updatedSalary = $('#customer_salary').val();

    // Update the corresponding customer object in the customer array
    customer[recordIndex].id = updatedId;
    customer[recordIndex].name = updatedName;
    customer[recordIndex].address = updatedAddress;
    customer[recordIndex].salary = updatedSalary;

    // Log the updated values for verification
    console.log("Updated Customer ID:", updatedId);
    console.log("Updated Customer Name:", updatedName);
    console.log("Updated Customer Address:", updatedAddress);
    console.log("Updated Customer Salary:", updatedSalary);

    // Reload the table to reflect the changes
    loadTable();
});*/


