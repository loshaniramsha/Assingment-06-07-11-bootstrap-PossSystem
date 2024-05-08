
var items = [];
var recordIndex;

$("#item-save").on('click', () => {
    alert("Save item");


    var itemCode = $("#itemCode").val();
    var itemName = $("#item_name").val();
    var itemPrice = $("#item_price").val();
    var itemQty = $("#item_qty").val();

    var newItem = {
        code: itemCode,
        name: itemName,
        price: itemPrice,
        qty: itemQty
    };


    items.push(newItem);


    console.log("Code:", itemCode);
    console.log("Name:", itemName);
    console.log("Price:", itemPrice);
    console.log("Qty:", itemQty);

    loadTable(items);
});

function loadTable(items) {
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
        loadTable(items);
    } else {
        alert("Delete canceled");
    }
});
