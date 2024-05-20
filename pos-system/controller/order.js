// Auto-generate order ID
import {customer} from "../db/db.js";
import {items} from "../db/db.js";

function generateOrderId() {
    const orderIdInput = $('#order-id');
    const orderIdPrefix = "ORD-";
    const orderIdNumber = String(customer.length + 1).padStart(4, '0');
    orderIdInput.val(orderIdPrefix + orderIdNumber);
}

// Call generateOrderId when the page loads
$(document).ready(function () {
    generateOrderId();
});

// Load customer IDs into the combo box and set up event listeners
export function loadCombos(array, comboBoxId) {
    console.log("combo-box loaded", array, comboBoxId);
    var comboBox = $('#' + comboBoxId);

    // Clear existing options
    comboBox.empty();

    // Add a default option
    comboBox.append($('<option>', {
        value: '',
        text: 'Select Customer ID...'
    }));

    // Iterate through the array and add options
    array.forEach(function (customer) {
        comboBox.append($('<option>', {
            value: customer.id,
            text: customer.id
        }));
    });
}

$('#customer-id-order').on('change', () => {
    var selectedId = $('#customer-id-order').val();
    var selectedCustomer = customer.find(c => c.id == selectedId);

    if (selectedCustomer) {
        $('#customer-name-orderForm').val(selectedCustomer.name);
        $('#customer_address-orderForm').val(selectedCustomer.address);
        $('#customer-salary-orderForm').val(selectedCustomer.salary);
    } else {
        $('#customer-name-orderForm').val('');
        $('#customer_address-orderForm').val('');
        $('#customer-salary-orderForm').val('');
    }
});

// Call the loadComboBoxes function to populate the customer ID dropdown
loadCombos(customer, 'inputGroupSelect-customer');
loadCombos(customer, 'customer-id-order');






export function loadComboItem(array, comboBoxId) {
    console.log("combo-box loaded", array, comboBoxId);
    var comboBox = $('#' + comboBoxId);

    // Clear existing options
    comboBox.empty();

    // Add a default option
    comboBox.append($('<option>', {
        value: '',
        text: 'Select Item Code...'
    }));

    // Iterate through the array and add options
    array.forEach(function (item) {
        comboBox.append($('<option>', {
            value: item.itemCode,
            text: item.itemCode
        }));
    });
}

$('#inputState-item').on('change', () => {
    var selectedCode = $('#inputState-item').val();
    var selectedItem = items.find(i => i.itemCode == selectedCode);

    if (selectedItem) {
        $('#inputPassword4').val(selectedItem.itemCode);
        $('#item-name-orderForm').val(selectedItem.name);
        $('#item-price-orderForm').val(selectedItem.price);
        $('#qtyHand').val(selectedItem.qty);
    } else {
        $('#inputPassword4').val('');
        $('#item-name-orderForm').val('');
        $('#item-price-orderForm').val('');
        $('#qtyHand').val('');
    }
});

// Call the loadComboItem function to populate the item code dropdown
loadComboItem(items, 'inputState-item');