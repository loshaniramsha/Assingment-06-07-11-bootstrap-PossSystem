export class OrderDetailsModel{
    constructor(orderId,customerId,itemId,date,total) {
        this._orderId = orderId;
        this._customerId = customerId;
        this._itemId = itemId;
        this._date = date;
        this._total = total;
    }

    get orderId() {
        return this._orderId;
    }
    get customerId() {
        return this._customerId;
    }
    get itemId() {
        return this._itemId;
    }
    get date() {
        return this._date;
    }
    get total() {
        return this._total;
    }

    set orderId(orderId) {
        this._orderId = orderId;
    }
    set customerId(customerId) {
        this._customerId = customerId;
    }
    set itemId(itemId) {
        this._itemId = itemId;
    }
    set date(date) {
        this._date = date;
    }
    set total(total) {
        this._total = total;
    }
}