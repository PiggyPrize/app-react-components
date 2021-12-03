'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var jotai = require('jotai');
var hooks = require('@pooltogether/hooks');

var debug = require('debug')('pool-app:TxRefetchListener');

function TxRefetchListener(props) {
  var _useAtom = jotai.useAtom(hooks.transactionsAtom),
      _useAtom2 = _rollupPluginBabelHelpers.slicedToArray(_useAtom, 1),
      transactions = _useAtom2[0];

  var _useState = React.useState([]),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      storedPendingTransactions = _useState2[0],
      setStoredPendingTransactions = _useState2[1];

  var pendingTransactions = transactions.filter(function (t) {
    return !t.completed && !t.cancelled;
  });
  React.useEffect(function () {
    if (pendingTransactions.length !== storedPendingTransactions.length) {
      setStoredPendingTransactions(pendingTransactions);
    }

    checkStoredPending(transactions, storedPendingTransactions);
  }, [pendingTransactions]);
  return null;
}

var runRefetch = function runRefetch(tx) {
  // we don't know when the Graph will have processed the new block data or when it has
  // so simply query a few times for the updated data
  if (tx !== null && tx !== void 0 && tx.refetch) {
    tx.refetch();
    setTimeout(function () {
      tx.refetch();
      debug('refetch!');
    }, 2000);
    setTimeout(function () {
      tx.refetch();
      debug('refetch!');
    }, 8000);
  }
};

var checkStoredPending = function checkStoredPending(transactions, storedPendingTransactions) {
  storedPendingTransactions.forEach(function (tx) {
    var storedTxId = tx.id;
    var currentTxState = transactions.find(function (_tx) {
      return _tx.id === storedTxId;
    });
    var completed = currentTxState === null || currentTxState === void 0 ? void 0 : currentTxState.completed;
    var sent = currentTxState === null || currentTxState === void 0 ? void 0 : currentTxState.sent;
    var error = currentTxState.error;
    var cancelled = currentTxState.cancelled;

    if (!cancelled && !completed && sent) {
      var _tx$onSent;

      tx === null || tx === void 0 ? void 0 : (_tx$onSent = tx.onSent) === null || _tx$onSent === void 0 ? void 0 : _tx$onSent.call(tx);
    } else if (completed && !error && !cancelled) {
      var _tx$onSuccess;

      tx === null || tx === void 0 ? void 0 : (_tx$onSuccess = tx.onSuccess) === null || _tx$onSuccess === void 0 ? void 0 : _tx$onSuccess.call(tx);
      runRefetch(tx);
    } else if (currentTxState && completed && error && !cancelled) {
      var _tx$onError;

      tx === null || tx === void 0 ? void 0 : (_tx$onError = tx.onError) === null || _tx$onError === void 0 ? void 0 : _tx$onError.call(tx);
    } else if (currentTxState !== null && currentTxState !== void 0 && currentTxState.cancelled) {
      var _tx$onCancelled;

      tx === null || tx === void 0 ? void 0 : (_tx$onCancelled = tx.onCancelled) === null || _tx$onCancelled === void 0 ? void 0 : _tx$onCancelled.call(tx);
    }
  });
};

exports.TxRefetchListener = TxRefetchListener;
//# sourceMappingURL=TxRefetchListener.js.map
