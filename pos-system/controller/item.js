
import ItemModel from "../model/ItemModel.js"; // Import the ItemModel class
import {customer, items} from "../db/db.js"; // Import the items array

let recordIndex;

$("#itemCode").val(nextId());

function nextId() {
    if (items.length > 0) {
        const lastCode = items[items.length - 1].itemCode;
        const lastNumber = parseInt(lastCode.split('-')[1], 10);
        return `Item-${lastNumber + 1}`;
    } else {
        return 'Item-1';
    }
}

$("#item-save").on('click', () => {
    alert("Save item");

    const itemCode = $("#itemCode").val();
    const itemName = $("#item_name").val();
    const itemPrice = $("#item_price").val();
    const itemQty = $("#item_qty").val();

    $('#close-item-model').click();

    const newItem = new ItemModel(itemCode, itemName, itemPrice, itemQty);
    items.push(newItem);

    console.log("Code:", itemCode);
    console.log("Name:", itemName);
    console.log("Price:", itemPrice);
    console.log("Qty:", itemQty);

    loadItemTable(items);
    loadComboBox(items, 'inputGroupSelect-item');
    $("#itemCode").val(nextId());
});

var selectedItem = $('#inputGroupSelect-item').val();

$('#inputGroupSelect-item').on('input', () => {
    if ($('#inputGroupSelect-item').val() !== 'select the item'){
        $('#item-tbl-body').empty();

        customer.map((item, index) => {
            if(item.id == $('#inputGroupSelect-item').val()){
                const record = `<tr>
            <td class="item-code-value">${item.itemCode}</td>
            <td class="item-name-value">${item.name}</td>
            <td class="item-price-value">${item.price}</td>
            <td class="item-qty-value">${item.qty}</td>
        </tr>`;
                $("#item-tbl-body").append(record);
            }
        });
    }else{
        loadItemTable()
    }
});

function loadItemTable(items) {
    $("#item-tbl-body").empty();

   /* items.forEach((item, index) => {*/
    items.map((item, index) => {
        const record = `<tr>
            <td class="item-code-value">${item.itemCode}</td>
            <td class="item-name-value">${item.name}</td>
            <td class="item-price-value">${item.price}</td>
            <td class="item-qty-value">${item.qty}</td>
        </tr>`;
        $("#item-tbl-body").append(record);
    });
}

$("#item-tbl-body").on('click', 'tr', function () {
    recordIndex = $(this).index();
    console.log("index:", recordIndex);

    const code = $(this).find(".item-code-value").text();
    const name = $(this).find(".item-name-value").text();
    const price = $(this).find(".item-price-value").text();
    const qty = $(this).find(".item-qty-value").text();

    $("#itemCode").val(code);
    $("#item_name").val(name);
    $("#item_price").val(price);
    $("#item_qty").val(qty);
});

$("#item-delete").on('click', () => {
    const confirmation = confirm("Are you sure you want to delete this item?");
    if (confirmation) {
        items.splice(recordIndex, 1);
        alert("Item deleted successfully");
        loadItemTable(items);
    } else {
        alert("Delete canceled");
    }
});

$('#close-item-model').on('click', () => {
    $('#itemCode').val('');
    $('#item_name').val('');
    $('#item_price').val('');
    $('#item_qty').val('');
});

$('#exite-item-model').on('click', () => {
    $('#staticBackdrop-item').modal('hide');
});

$('#revew-item').on('click', () => {
    const itemCode = $('#itemCode').val();
    const itemIndex = items.findIndex(i => i.itemCode === itemCode);

    if (itemIndex !== -1) {
        const selectedItem = items[itemIndex];
        $("#item_name").val(selectedItem.name);
        $("#item_price").val(selectedItem.price);
        $("#item_qty").val(selectedItem.qty);

        console.log("Item details filled successfully.");
    } else {
        alert("Item with the entered code does not exist.");
    }
});

$('#update-item').on('click', () => {
    const code = $("#itemCode").val();
    const name = $("#item_name").val();
    const price = $("#item_price").val();
    const qty = $("#item_qty").val();

    if (code) {
        $("#staticBackdrop-item").modal("show");
        $("#itemCode").val(code);
        $("#item_name").val(name);
        $("#item_price").val(price);
        $("#item_qty").val(qty);
    } else {
        alert("Please select an item from the table.");
    }
});

$("#update-item-model").on("click", () => {
    const updatedCode = $("#itemCode").val();
    const updatedName = $("#item_name").val();
    const updatedPrice = $("#item_price").val();
    const updatedQty = $("#item_qty").val();

    const itemIndex = items.findIndex(i => i.itemCode === updatedCode);

    if (itemIndex !== -1) {
        items[itemIndex].name = updatedName;
        items[itemIndex].price = updatedPrice;
        items[itemIndex].qty = updatedQty;

        console.log("Updated Item Code:", updatedCode);
        console.log("Updated Item Name:", updatedName);
        console.log("Updated Item Price:", updatedPrice);
        console.log("Updated Item Quantity:", updatedQty);

        loadItemTable(items);
        $("#staticBackdrop-item").modal("hide");
    } else {
        alert("Item with the entered code does not exist.");
    }
});

function loadComboBox(array, comboId) {
    console.log("combo-box loaded", array, comboId);
    const comboBox = $('#' + comboId);
    comboBox.empty();

    array.forEach(item => {
        comboBox.append($('<option>', {
            value: item.itemCode,
            text: item.itemCode
        }));
    });
}

loadComboBox(items, 'inputGroupSelect-item');


$('#all-item').on('click', () => {
    $('#item-tbl-body').empty();
    customer.map((item, index) => {
        let record = `<tr>
            <td class="item-code-value">${item.itemCode}</td>
            <td class="item-name-value">${item.name}</td>
            <td class="item-price-value">${item.price}</td>
            <td class="item-qty-value">${item.qty}</td>
        </tr>`;
        $("#item-tbl-body").append(record);
    });
   loadItemTable();
});















/*

/!*var items = [];*!/
import ItemModel from "../model/ItemModel.js"; // Import the ItemModel class from the ItemModel.js file
import {items} from "../db/db.js";
var recordIndex;


$("#itemCode").val(nextId());

function nextId() {
    if (items.length > 0) {
        return parseInt(items[items.length - 1].code) + 1;
    } else {
        return 1;
    }
}
/!*function nextId() {
    if (items.length > 0) {
        // Extract the numeric part of the last item's code, increment it, and format it as "Item-<number>"
        var lastCode = items[items.length - 1].code;
        var lastNumber = parseInt(lastCode.split('-')[1], 10);
        return 'Item-' + (lastNumber + 1);
    } else {
        return 'Item-1';
    }
}*!/
$("#item-save").on('click', () => {
    alert("Save item");


    var itemCode = $("#itemCode").val();
    var itemName = $("#item_name").val();
    var itemPrice = $("#item_price").val();
    var itemQty = $("#item_qty").val();

    $('#close-item-model').click();

    var newItem=new ItemModel(itemCode,itemName,itemPrice,itemQty);

  /!*  var newItem = {
        code: itemCode,
        name: itemName,
        price: itemPrice,
        qty: itemQty
    };*!/


    items.push(newItem);


    console.log("Code:", itemCode);
    console.log("Name:", itemName);
    console.log("Price:", itemPrice);
    console.log("Qty:", itemQty);

    loadItemTable(items)
    loadComboBox(items,'inputGroupSelect-item');
    $("#itemCode").val(nextId());

});

function loadItemTable(items) {
    $("#item-tbl-body").empty();

    items.forEach((item, index) => {
        let record = `<tr>
             <td class="item-code-value">${item.code}</td>
            <td class="item-name-value">${item.name}</td>
            <td class="item-price-value">${item.price}</td>
            <td class="item-qty-value">${item.qty}</td>
        </tr>`;
        $("#item-tbl-body").append(record);
    });
}

$("#item-tbl-body").on('click', 'tr', function () {
    recordIndex = $(this).index();
    console.log("index:", recordIndex);

    let code = $(this).find(".item-code-value").text();
    let name = $(this).find(".item-name-value").text();
    let price = $(this).find(".item-price-value").text();
    let qty = $(this).find(".item-qty-value").text();

    $("#itemCode").val(code);
    $("#item_name").val(name);
    $("#item_price").val(price);
    $("#item_qty").val(qty);
});


$("#item-delete").on('click', () => {
    const confirmation = confirm("Are you sure you want to delete this item?");
    if (confirmation) {
        items.splice(recordIndex, 1);
        alert("Item deleted successfully");
        loadItemTable(items);
    } else {
        alert("Delete canceled");
    }
});



$('#close-item-model').on('click', () => {
    // Clear the input fields
    $('#itemCode').val('');
    $('#item_name').val('');
    $('#item_price').val('');
    $('#item_qty').val('');
});

$('#exite-item-model').on('click', () => {
    $('#staticBackdrop-item').modal('hide');
});

$('#revew-item').on('click', () => {
    // Get the entered item code
    var itemCode = $('#itemCode').val();

    // Find the index of the item in the array based on the entered code
    var itemIndex = items.findIndex(i => i.code === itemCode);

    // Check if the item with the entered code exists
    if (itemIndex !== -1) {
        // Retrieve the item details from the array
        var selectedItem = items[itemIndex];

        // Fill the input fields with the retrieved item details
        $("#item_name").val(selectedItem.name);
        $("#item_price").val(selectedItem.price);
        $("#item_qty").val(selectedItem.qty);

        console.log("Item details filled successfully.");
    } else {
        alert("Item with the entered code does not exist.");
    }
});

$('#update-item').on('click', () => {
    // Get the selected item's data
    let code = $("#itemCode").val();
    let name = $("#item_name").val();
    let price = $("#item_price").val();
    let qty = $("#item_qty").val();

    // Check if an item is selected
    if (code) {
        // Fill the modal input fields with the selected item's data
        $("#staticBackdrop-item").modal("show");
        $("#itemCode").val(code);
        $("#item_name").val(name);
        $("#item_price").val(price);
        $("#item_qty").val(qty);
    } else {
        alert("Please select an item from the table.");
    }
});

// Function to update the item's data when the "Update" button inside the modal is clicked
$("#update-item-model").on("click", () => {
    // Get the updated values from the modal input fields
    var updatedCode = $("#itemCode").val();
    var updatedName = $("#item_name").val();
    var updatedPrice = $("#item_price").val();
    var updatedQty = $("#item_qty").val();

    // Find the index of the item in the array based on the item code
    var itemIndex = items.findIndex(i => i.code === updatedCode);

    // Check if the item with the entered code exists
    if (itemIndex !== -1) {
        // Update the corresponding item object in the items array
        items[itemIndex].name = updatedName;
        items[itemIndex].price = updatedPrice;
        items[itemIndex].qty = updatedQty;

        // Log the updated values for verification
        console.log("Updated Item Code:", updatedCode);
        console.log("Updated Item Name:", updatedName);
        console.log("Updated Item Price:", updatedPrice);
        console.log("Updated Item Quantity:", updatedQty);

        // Reload the table to reflect the changes
        loadItemTable(items);

        // Close the modal
        $("#staticBackdrop-item").modal("hide");
    } else {
        alert("Item with the entered code does not exist.");
    }
});

function loadComboBox(arrai,comboId) {
    console.log("combo-box loaded", arrai, comboId);
    var comboBox = $('#' + comboId); // Get the combo box by ID
    // Clear existing options
    comboBox.empty();
    // Iterate through the array and add options
    arrai.forEach(function(item) {
        comboBox.append($('<option>', {
            value: item.code,
            text: item.code
        }));
    });

}
loadComboBox(items,'inputGroupSelect-item');
*/