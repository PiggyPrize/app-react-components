'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var jotai = require('jotai');
var hooks = require('@pooltogether/hooks');

function TransactionStatusChecker(props) {
  var transactionsKey = props.transactionsKey;

  var _useAtom = jotai.useAtom(hooks.transactionsAtom),
      _useAtom2 = _rollupPluginBabelHelpers.slicedToArray(_useAtom, 2),
      transactions = _useAtom2[0],
      setTransactions = _useAtom2[1];

  var _useOnboard = hooks.useOnboard(),
      chainId = _useOnboard.network,
      usersAddress = _useOnboard.address,
      provider = _useOnboard.provider;

  React.useEffect(function () {
    if (chainId && usersAddress && provider) {
      hooks.readTransactions(transactions, setTransactions, chainId, usersAddress, provider, transactionsKey);
    }
  }, [chainId, usersAddress, provider]);
  return null;
}

exports.TransactionStatusChecker = TransactionStatusChecker;
//# sourceMappingURL=index.js.map
