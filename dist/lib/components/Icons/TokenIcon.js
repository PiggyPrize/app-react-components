'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var index = require('../../../node_modules/classnames/index.js');
var hooks = require('@pooltogether/hooks');
var utilities = require('@pooltogether/utilities');
var arto = require('../../assets/Tokens/arto.png.js');
var rai = require('../../assets/Tokens/rai.png.js');
var bnb = require('../../assets/Tokens/bnb.svg.js');
var cake = require('../../assets/Tokens/cake.png.js');
var dai = require('../../assets/Tokens/dai.png.js');
var gusd = require('../../assets/Tokens/gusd.svg.js');
var index$1 = require('../../assets/Tokens/index.png.js');
var dgt = require('../../assets/Tokens/dgt.png.js');
var pool = require('../../assets/Tokens/pool.svg.js');
var badger = require('../../assets/Tokens/badger.png.js');
var weth = require('../../assets/Tokens/weth.png.js');
var busd = require('../../assets/Tokens/busd.svg.js');
var susd = require('../../assets/Tokens/susd.png.js');
var usdc = require('../../assets/Tokens/usdc.png.js');
var uni = require('../../assets/Tokens/uni.png.js');
var dpi = require('../../assets/Tokens/dpi.png.js');
var usdt = require('../../assets/Tokens/usdt.png.js');
var sushi = require('../../assets/Tokens/sushi.png.js');
var comp = require('../../assets/Tokens/comp.svg.js');
var bond = require('../../assets/Tokens/bond.png.js');
var aave = require('../../assets/Tokens/aave.png.js');
var defisocks = require('../../assets/Tokens/defisocks.png.js');
var books = require('../../assets/Tokens/books.png.js');
var lotto = require('../../assets/Tokens/lotto.png.js');
var ppool = require('../../assets/Tokens/ppool.png.js');
var pcccomp = require('../../assets/Tokens/pcccomp.png.js');
var pcusdc = require('../../assets/Tokens/pcusdc.png.js');
var pcuni = require('../../assets/Tokens/pcuni.png.js');
var pcdai = require('../../assets/Tokens/pcdai.png.js');
var ptXsushi = require('../../assets/Tokens/pt-xsushi.png.js');
var ptBadger = require('../../assets/Tokens/pt-badger.png.js');
var ptDaiSponsorship = require('../../assets/Tokens/pt-dai-sponsorship.png.js');
var ptUsdcSponsorship = require('../../assets/Tokens/pt-usdc-sponsorship.png.js');
var uniV2LpPool = require('../../assets/Tokens/uni-v2-lp-pool.png.js');
var wmatic = require('../../assets/Tokens/wmatic.png.js');
var ptUsdt = require('../../assets/Tokens/pt-usdt.png.js');
var ptUsdtSponsorship = require('../../assets/Tokens/pt-usdt-sponsorship.png.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _Object$freeze;
var TokenIcon = function TokenIcon(props) {
  var _TOKEN_IMAGE_OVERRIDE;

  var sizeClassName = props.sizeClassName,
      className = props.className,
      chainId = props.chainId,
      address = props.address,
      onClick = props.onClick;

  var _useCoingeckoTokenIma = hooks.useCoingeckoTokenImage(chainId, address),
      tokenImage = _useCoingeckoTokenIma.data,
      isFetched = _useCoingeckoTokenIma.isFetched;

  var imageOverride = TOKEN_IMAGE_OVERRIDES === null || TOKEN_IMAGE_OVERRIDES === void 0 ? void 0 : (_TOKEN_IMAGE_OVERRIDE = TOKEN_IMAGE_OVERRIDES[chainId]) === null || _TOKEN_IMAGE_OVERRIDE === void 0 ? void 0 : _TOKEN_IMAGE_OVERRIDE[address.toLowerCase()];

  if (imageOverride || isFetched && tokenImage) {
    var src = imageOverride || tokenImage;
    return /*#__PURE__*/React__default['default'].createElement("img", {
      src: src,
      className: index('inline-block rounded-full', className, sizeClassName),
      onClick: onClick
    });
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: index('inline-block rounded-full bg-overlay-white', className, sizeClassName),
    onClick: onClick
  });
};
TokenIcon.defaultProps = {
  sizeClassName: 'w-5 h-5'
}; // TODO: Import all images from the builder
/**
 * Sometimes the CoinGecko images aren't the prettiest
 */

var TOKEN_IMAGE_OVERRIDES = Object.freeze((_Object$freeze = {}, _rollupPluginBabelHelpers.defineProperty(_Object$freeze, utilities.NETWORK.mainnet, {
  '0x57bc752ec42238bb60a6e65b0de82ef44013225d': arto,
  '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919': rai,
  '0x6b175474e89094c44da98b954eedeac495271d0f': dai,
  '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd': gusd,
  '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2': sushi,
  '0xc00e94cb662c3520282e6f5717214004a7f26888': comp,
  '0x0954906da0bf32d5479e25f46056d22f08464cab': index$1,
  '0x8b9c35c79af5319c70dd9a3e3850f368822ed64e': dgt,
  '0x0cec1a9154ff802e7934fc916ed7ca50bde6844e': pool,
  '0x0391d2021f89dc339f60fff84546ea23e337750f': bond,
  '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9': aave,
  '0x9d942bd31169ed25a1ca78c776dab92de104e50e': defisocks,
  '0x117c2aca45d87958ba054cb85af0fd57be00d624': books,
  '0xb0dfd28d3cf7a5897c694904ace292539242f858': lotto,
  '0x3472a5a71965499acd81997a54bba8d852c6e53d': badger,
  '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': weth,
  '0x4fabb145d64652a948d72533023f6e7a623c7c53': busd,
  '0x57ab1ec28d129707052df4df418d58a2d46d5f51': susd,
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': usdc,
  '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984': uni,
  '0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b': dpi,
  '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0': wmatic,
  '0xeb8928ee92efb06c44d072a24c2bcb993b61e543': uniV2LpPool,
  '0xdac17f958d2ee523a2206206994597c13d831ec7': usdt,
  '0x334cbb5858417aee161b53ee0d5349ccf54514cf': pcdai,
  '0xd81b1a8b1ad00baa2d6609e0bae28a38713872f7': pcusdc,
  '0x27d22a7648e955e510a40bdb058333e9190d12d4': ppool,
  '0x27b85f596feb14e4b5faa9671720a556a7608c69': pcccomp,
  '0xa92a861fc11b99b24296af880011b47f9cafb5ab': pcuni,
  '0xfa831a04cb52fc89dd519d08dc5e94ab2df52b7e': ptBadger,
  '0x0a2e7f69fe9588fa7fba5f5864236883cd4aac6d': ptDaiSponsorship,
  '0x391a437196c81eea7bbbbd5ed4df6b49de4f5c96': ptUsdcSponsorship,
  '0xfdc192c153044dedb67c5a17b8651951cf70ee4a': ptXsushi
}), _rollupPluginBabelHelpers.defineProperty(_Object$freeze, utilities.NETWORK.polygon, {
  '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270': wmatic,
  '0x85e16156eb86a134ac6db5754be6c5e1c7f1aa59': ptUsdtSponsorship,
  '0x9ecb26631098973834925eb453de1908ea4bdd4e': ptUsdt,
  '0xc2132d05d31c914a87c6611c10748aeb04b58e8f': usdt
}), _rollupPluginBabelHelpers.defineProperty(_Object$freeze, utilities.NETWORK.bsc, {
  '0xe9e7cea3dedca5984780bafc599bd69add087d56': busd,
  '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c': bnb,
  '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82': cake
}), _Object$freeze));

exports.TOKEN_IMAGE_OVERRIDES = TOKEN_IMAGE_OVERRIDES;
exports.TokenIcon = TokenIcon;
//# sourceMappingURL=TokenIcon.js.map
