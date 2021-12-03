'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var index = require('../../../node_modules/classnames/index.js');
var FeatherIcon = require('feather-icons-react');
var Accordion = require('../Accordion.js');
var knowledgeBase = require('../../assets/Socials/knowledge-base.svg.js');
var docs = require('../../assets/Socials/docs.svg.js');
var govForum = require('../../assets/Socials/gov-forum.svg.js');
var treasury = require('../../assets/Socials/treasury.svg.js');
var mediumLogo = require('../../assets/Socials/medium-logo.svg.js');
var discordLogo = require('../../assets/Socials/discord-logo.svg.js');
var twitterLogo = require('../../assets/Socials/twitter-logo.svg.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var FeatherIcon__default = /*#__PURE__*/_interopDefaultLegacy(FeatherIcon);

var sharedClasses = 'relative leading-none w-full flex justify-start items-center text-accent-4 hover:text-highlight-2 py-2 px-6 trans outline-none focus:outline-none active:outline-none mb-1 ml-3 lg:ml-0 h-10';
var headerClasses = 'text-lg font-bold';
var childClasses = 'text-xs';
var socialsLinkData = [{
  headerLabel: 'ecosystem',
  childLinks: [{
    href: 'https://www.notion.so/PoolTogether-Knowledge-Base-fa721ccefa3242eaabd125a8415acd27',
    label: 'Knowledge Base',
    icon: /*#__PURE__*/React__default['default'].createElement("img", {
      src: knowledgeBase,
      className: "w-4 opacity-50 mx-auto"
    })
  }, {
    href: 'https://docs.pooltogether.com/',
    label: 'Documentation',
    icon: /*#__PURE__*/React__default['default'].createElement("img", {
      src: docs,
      className: "w-3 opacity-50 mx-auto"
    })
  }, {
    href: 'https://gov.pooltogether.com/',
    label: 'Governance forum',
    icon: /*#__PURE__*/React__default['default'].createElement("img", {
      src: govForum,
      className: "w-4 opacity-50 mx-auto"
    })
  }, {
    href: 'https://info.pooltogether.com/',
    label: 'Treasury',
    icon: /*#__PURE__*/React__default['default'].createElement("img", {
      src: treasury,
      className: "w-4 opacity-50 mx-auto"
    })
  }]
}, {
  headerLabel: 'socials',
  childLinks: [{
    href: 'https://twitter.com/PoolTogether_',
    label: 'Twitter',
    icon: /*#__PURE__*/React__default['default'].createElement("img", {
      src: twitterLogo,
      className: "w-4 opacity-50 mx-auto"
    })
  }, {
    href: 'https://discord.gg/hxPhPDW',
    label: 'Discord',
    icon: /*#__PURE__*/React__default['default'].createElement("img", {
      src: discordLogo,
      className: "w-4 opacity-50 mx-auto hover:opacity-100 trans"
    })
  }, {
    href: 'https://medium.com/pooltogether',
    label: 'Medium',
    icon: /*#__PURE__*/React__default['default'].createElement("img", {
      src: mediumLogo,
      className: "w-4 opacity-50 mx-auto hover:opacity-100 trans"
    })
  }]
}];
var SocialLinks = function SocialLinks(props) {
  var _useState = React.useState(),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, socialsLinkData.map(function (linkData, index) {
    return /*#__PURE__*/React__default['default'].createElement(SocialLinkSet, {
      key: "social-link-set-".concat(index),
      index: index,
      linkData: linkData,
      expanded: expanded,
      setExpanded: setExpanded
    });
  }));
};

var SocialLinkSet = function SocialLinkSet(props) {
  var linkData = props.linkData;
  var content = linkData.childLinks.map(function (childLink, index) {
    return /*#__PURE__*/React__default['default'].createElement(SocialLinkChild, {
      key: "social-link-child-".concat(index),
      href: childLink.href,
      label: childLink.label,
      icon: childLink.icon
    });
  });
  return /*#__PURE__*/React__default['default'].createElement(SocialLinkHeader, props, content);
};

var SocialLinkHeader = function SocialLinkHeader(props) {
  return /*#__PURE__*/React__default['default'].createElement(Accordion.Accordion, {
    openUpwards: true,
    key: "social-link-".concat(props.index),
    i: props.index,
    expanded: props.expanded,
    setExpanded: props.setExpanded,
    content: props.children,
    header: /*#__PURE__*/React__default['default'].createElement("a", {
      className: index(sharedClasses, headerClasses)
    }, /*#__PURE__*/React__default['default'].createElement(FeatherIcon__default['default'], {
      icon: "chevron-up",
      strokeWidth: "0.25rem",
      className: index('w-4 h-4 stroke-current trans', {
        'rotate-180': props.expanded === props.index
      })
    }), /*#__PURE__*/React__default['default'].createElement("span", {
      className: "pl-3 capitalize"
    }, props.linkData.headerLabel))
  });
};

var SocialLinkChild = function SocialLinkChild(props) {
  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("a", {
    href: props.href,
    target: props.target,
    className: index(sharedClasses, childClasses)
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "w-4"
  }, props.icon), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "pl-3 capitalize"
  }, props.label)));
};

SocialLinkChild.defaultProps = {
  target: '_blank'
};

exports.SocialLinks = SocialLinks;
//# sourceMappingURL=SocialLinks.js.map
