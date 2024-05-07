/*
var customer=[];
var recordIndex;

$('#save-customer').on('click',()=>{
    alert("save customer")
    var customerId= $('#customer_id').val();
    var customerName=  $('#customer_name').val();
    var customerAddress=  $('#customer_address').val();
    var customerSalary= $('#customer_salary').val()

    console.log(customerId,customerName,customerAddress,customerSalary);
})

function lordTable(){
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

$("#customer-tbl-body").on('click',`tr`,function ()  {
   let index=$(this).index();
   recordIndex=index;
   console.log("index:",index);

   let id=$(this).find("customer-id-value").text();
   let name=$(this).find("customer-name-value").text();
   let address=$(this).find("customer-address-value").text();
   let salary=$(this).find("customer-salary-value").text();

   $("#customer_id").val(id);
   $("#customer_name").val(name);
   $("#customer_address").val(address);
   $("#customer_salary").val(salary);

})*/
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
