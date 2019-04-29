/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var generate = require('../generate');
var api = require('../api');

/**
 * PayPal Sync allows a user to pinpoint transactions
 * @return {Object} PayPal Sync functions
 */
function paypalSync() {
    var baseURL = '/v1/reporting/transactions';
    var operations = ['get'];

    var ret = {
        baseURL: baseURL,
        /**
         * Search for transactions
         * @param  {Object}   params     The URL parameters for the request, as seen at https://developer.paypal.com/docs/api/sync/v1/
         * @param  {String}   transaction_id     Identifier of the transaction in question
         * @param  {String}   transaction_status     Filters the transactions in the response by a PayPal transaction status code
         * @param  {String}   transaction_amount     Filters the transactions in the response by a gross transaction amount range
         * @param  {String}   transaction_currency     Filters the transactions in the response by a three-character ISO-4217 currency code for the PayPal transaction currency.
         * @param  {String}   start_date YYYY-MM-DDTHH:MM:SSZ start date of range of transactions to list
         * @param  {String}   end_date   YYYY-MM-DDTHH:MM:SSZ end date of range of transactions to list
         * @param  {String}   payment_instrument_type   Filters the transactions in the response by a payment instrument type (CREDITCARD | DEBITCARD)
         * @param  {String}   store_id   Filters the transactions in the response by a store ID
         * @param  {String}   terminal_id   Filters the transactions in the response by a terminal ID
         * @param  {String}   fields   Indicates which fields appear in the response. Value is a single field or a comma-separated list of fields. 
         * @param  {String}   balance_affecting_transactions_only   Indicates whether the response includes only balance-impacting transactions or all transactions. Value is either Y or N. Default Y
         * @param  {Integer}  page_size     The number of items to return in the response
         * @param  {Integer}  page     The zero-relative start index of the entire list of items that are returned in the response.
         * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
         * @param  {Function} cb         
         * @return {Object}              transaction(s) that have the transaction ID that was sent
         */
        search: function search(params, config, cb) {
            api.executeHttp('GET', this.baseURL, params, config, cb);
        }
    };
    ret = generate.mixin(ret, operations);
    return ret;
}
module.exports = paypalSync;
