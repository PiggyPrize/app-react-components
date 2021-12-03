'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../../node_modules/classnames/index.js');
var hooks = require('@pooltogether/hooks');
var utilities = require('@pooltogether/utilities');
require('../../Containers/Banner.js');
require('../../Containers/BasicTable.js');
require('../../Containers/Card.js');
require('feather-icons-react');
require('../../Containers/CountBadge.js');
require('../../Containers/Tabs.js');
require('../../Containers/TicketRow.js');
require('../../Containers/TipBanner.js');
var Tooltip = require('../../Containers/Tooltip.js');
require('../../../../node_modules/react-copy-to-clipboard/lib/index.js');
require('../../../services/poolToast.js');
require('../../Icons/TokenIcon.js');
require('../../../constants.js');
var NetworkIcon = require('../../Icons/NetworkIcon.js');
var Modal = require('../../Modal/Modal.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var NetworkModal = function NetworkModal(props) {
  var t = props.t,
      isOpen = props.isOpen,
      closeModal = props.closeModal,
      supportedNetworks = props.supportedNetworks;

  var _useOnboard = hooks.useOnboard(),
      chainId = _useOnboard.network;

  var isWalletMetamask = hooks.useIsWalletMetamask();
  var currentNetworkName = utilities.getNetworkNiceNameByChainId(chainId);
  var isWalletOnSupportedNetwork = hooks.useIsWalletOnSupportedNetwork(supportedNetworks);

  if (isWalletMetamask) {
    return /*#__PURE__*/React__default['default'].createElement(Modal.Modal, {
      isOpen: isOpen,
      closeModal: closeModal,
      label: "network modal"
    }, /*#__PURE__*/React__default['default'].createElement(Container, null, /*#__PURE__*/React__default['default'].createElement(Header, null, (t === null || t === void 0 ? void 0 : t('chooseANetwork')) || 'Choose a Network'), /*#__PURE__*/React__default['default'].createElement(Description, null, (t === null || t === void 0 ? void 0 : t('selectASupportedNetworkMetamask')) || 'Select a supported network to be prompted to switch in your MetaMask wallet.'), supportedNetworks.map(function (chainId) {
      return /*#__PURE__*/React__default['default'].createElement(NetworkButton, {
        t: t,
        key: chainId,
        chainId: chainId
      });
    }), /*#__PURE__*/React__default['default'].createElement(CurrentlyConnectedTo, {
      t: t,
      currentNetworkName: currentNetworkName,
      isWalletOnSupportedNetwork: isWalletOnSupportedNetwork
    })));
  }

  return /*#__PURE__*/React__default['default'].createElement(Modal.Modal, {
    isOpen: isOpen,
    closeModal: closeModal,
    label: "network modal"
  }, /*#__PURE__*/React__default['default'].createElement(Container, null, /*#__PURE__*/React__default['default'].createElement(Header, null, (t === null || t === void 0 ? void 0 : t('supportedNetworks')) || 'Suported Networks'), /*#__PURE__*/React__default['default'].createElement(Description, null, (t === null || t === void 0 ? void 0 : t('pleaseSwitchToASupportedNetwork')) || 'Please switch to a supported network in your wallet.'), supportedNetworks.map(function (chainId) {
    return /*#__PURE__*/React__default['default'].createElement(NetworkItem, {
      t: t,
      key: chainId,
      chainId: chainId
    });
  }), /*#__PURE__*/React__default['default'].createElement(CurrentlyConnectedTo, {
    t: t,
    currentNetworkName: currentNetworkName,
    isWalletOnSupportedNetwork: isWalletOnSupportedNetwork
  })));
};

var Container = function Container(props) {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex flex-col h-full p-4"
  }, props.children);
};

var Header = function Header(props) {
  return /*#__PURE__*/React__default['default'].createElement("h5", {
    className: "text-accent-1"
  }, props.children);
};

var Description = function Description(props) {
  return /*#__PURE__*/React__default['default'].createElement("p", {
    className: "mb-4 text-sm text-accent-1"
  }, props.children);
};

var CurrentlyConnectedTo = function CurrentlyConnectedTo(props) {
  var _props$t;

  return /*#__PURE__*/React__default['default'].createElement("p", {
    className: "text-xxxs mt-auto"
  }, ((_props$t = props.t) === null || _props$t === void 0 ? void 0 : _props$t.call(props, 'currentlyConnectedTo')) || 'Currently connected to:', /*#__PURE__*/React__default['default'].createElement("b", {
    className: index({
      'ml-1 text-red': !props.isWalletOnSupportedNetwork
    })
  }, props.currentNetworkName));
};

var NetworkItem = function NetworkItem(props) {
  var chainId = props.chainId;
  var isCurrentNetwork = hooks.useIsWalletOnNetwork(chainId);
  var networkName = utilities.getNetworkNiceNameByChainId(chainId);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: index('flex justify-center mb-4 last:mb-0 w-full text-center py-2 rounded', {
      'pool-gradient-1': isCurrentNetwork,
      'bg-body': !isCurrentNetwork
    })
  }, /*#__PURE__*/React__default['default'].createElement(NetworkIcon.NetworkIcon, {
    chainId: chainId,
    className: "my-auto mr-2"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "my-auto"
  }, networkName));
};

var NetworkButton = function NetworkButton(props) {
  var chainId = props.chainId,
      t = props.t;
  var isCurrentNetwork = hooks.useIsWalletOnNetwork(chainId);
  var networkName = utilities.getNetworkNiceNameByChainId(chainId);
  var addNetwork = hooks.useAddNetworkToMetamask(chainId);
  var disabled = utilities.ETHEREUM_NETWORKS.includes(chainId);
  var toolTip;

  if (disabled) {
    toolTip = (t === null || t === void 0 ? void 0 : t('manuallyChangeNetwork')) || 'You have to manually switch to this network with your wallet';
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex mb-4 last:mb-0"
  }, /*#__PURE__*/React__default['default'].createElement("button", {
    className: index('w-full flex justify-center py-2 rounded trans', {
      'pool-gradient-1 text-white hover:text-white': isCurrentNetwork,
      'bg-body border border-body hover:border-accent-3': !isCurrentNetwork && !disabled,
      'bg-body': !isCurrentNetwork && disabled,
      '': disabled
    }),
    type: "button",
    onClick: addNetwork,
    disabled: disabled
  }, /*#__PURE__*/React__default['default'].createElement(NetworkIcon.NetworkIcon, {
    chainId: chainId,
    className: "mr-2"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "my-auto"
  }, networkName), toolTip && /*#__PURE__*/React__default['default'].createElement(Tooltip.Tooltip, {
    tip: toolTip,
    id: "".concat(chainId, "-network-button"),
    className: "flex",
    iconClassName: "mx-2 my-auto"
  })));
};

exports.NetworkModal = NetworkModal;
//# sourceMappingURL=NetworkModal.js.map
