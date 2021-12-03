'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../../node_modules/classnames/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var navParentClasses = 'relative leading-none rounded-full hover:bg-accent-grey-1 w-full flex justify-start items-center text-lg lg:text-xl py-3 px-6 lg:px-8 trans tracking-wider outline-none focus:outline-none active:outline-none mb-3 font-bold ml-3 lg:ml-0 h-10';
var SideNavLink = function SideNavLink(props) {
  var Link = props.Link,
      useRouter = props.useRouter;
  var router = useRouter();
  var isCurrentPage = props.isCurrentPage ? true : props.match ? router.pathname.match(props.match) : false;
  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(Link, {
    href: props.href,
    as: props.as,
    shallow: true
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    className: index(navParentClasses, {
      'text-accent-4 hover:text-highlight-2': !isCurrentPage,
      'text-highlight-2 hover:text-highlight-2 bg-accent-grey-1': isCurrentPage
    })
  }, props.children, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "pl-3 capitalize"
  }, props.label))));
}; // Icons

var SideVoteIcon = function SideVoteIcon() {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex items-center justify-center w-5"
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    style: {
      left: 2,
      top: 1,
      transform: 'scale(1.1)'
    },
    className: "fill-current stroke-current mr-auto relative",
    width: "20",
    height: "25",
    viewBox: "0 0 20 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16.994 10.3965C16.9924 10.3869 16.9903 10.3776 16.988 10.3682C16.9854 10.3575 16.9847 10.3466 16.9811 10.3361L15.101 4.78371C15.0514 4.63717 14.9176 4.53904 14.7675 4.53904H11.3679L8.04561 1.1069C7.90755 0.964407 7.68401 0.964288 7.54595 1.10702L4.89902 3.84348C4.83275 3.91199 4.79547 4.00488 4.79547 4.10182C4.79547 4.19876 4.83275 4.29165 4.89902 4.36016L5.07221 4.53904H3.23034C3.08009 4.53904 2.94629 4.63729 2.8967 4.78394L1.01979 10.3363C1.01752 10.343 1.0173 10.3501 1.01543 10.3569C1.011 10.3727 1.00746 10.3887 1.00512 10.4054C1.00364 10.4161 1.00256 10.4267 1.002 10.4375C1.00163 10.4445 1 10.451 1 10.458V19.6346C1 19.8365 1.15819 20 1.35343 20H16.6466C16.8418 20 17 19.8365 17 19.6346V10.458C17 10.4539 16.999 10.4502 16.9988 10.4461C16.9984 10.4295 16.9967 10.4131 16.994 10.3965ZM7.79595 1.88191L11.4957 5.70383L9.93702 7.31523H8.76018L5.64879 4.10182L7.79595 1.88191ZM3.48126 5.26981H5.77914L7.75993 7.31523H6.71461C6.51937 7.31523 6.36118 7.47878 6.36118 7.68062C6.36118 7.88246 6.51937 8.04601 6.71461 8.04601H8.61395H10.0834H11.2864C11.4817 8.04601 11.6399 7.88246 11.6399 7.68062C11.6399 7.47878 11.4817 7.31523 11.2864 7.31523H10.9366L12.2454 5.96217C12.3834 5.81956 12.3834 5.58822 12.2454 5.44549L12.0756 5.26981H14.5168L16.1494 10.0914H1.85136L3.48126 5.26981ZM16.2931 19.2692H1.70686V10.8234H16.2931V19.2692V19.2692Z",
    strokeWidth: "0.5"
  })));
};
var SideAccountIcon = function SideAccountIcon() {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex items-center justify-center w-5"
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    style: {
      top: 1
    },
    className: "fill-current mr-auto relative",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M4 13.9844C5.46875 16.1406 7.46875 17.2188 10 17.2188C12.5312 17.2188 14.5312 16.1406 16 13.9844C15.9688 13.1094 15.2656 12.375 13.8906 11.7812C12.5156 11.1875 11.2188 10.8906 10 10.8906C8.78125 10.8906 7.48438 11.1875 6.10938 11.7812C4.73438 12.3438 4.03125 13.0781 4 13.9844ZM12.1094 3.90625C11.5156 3.3125 10.8125 3.01562 10 3.01562C9.1875 3.01562 8.48438 3.3125 7.89062 3.90625C7.29688 4.5 7 5.20312 7 6.01562C7 6.82812 7.29688 7.53125 7.89062 8.125C8.48438 8.71875 9.1875 9.01562 10 9.01562C10.8125 9.01562 11.5156 8.71875 12.1094 8.125C12.7031 7.53125 13 6.82812 13 6.01562C13 5.20312 12.7031 4.5 12.1094 3.90625ZM2.92188 2.96875C4.89062 1 7.25 0.015625 10 0.015625C12.75 0.015625 15.0938 1 17.0312 2.96875C19 4.90625 19.9844 7.25 19.9844 10C19.9844 12.75 19 15.1094 17.0312 17.0781C15.0938 19.0156 12.75 19.9844 10 19.9844C7.25 19.9844 4.89062 19.0156 2.92188 17.0781C0.984375 15.1094 0.015625 12.75 0.015625 10C0.015625 7.25 0.984375 4.90625 2.92188 2.96875Z"
  })));
};
var SideRewardsIcon = function SideRewardsIcon() {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex items-center justify-center w-5"
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    className: "stroke-current fill-current mr-auto relative",
    width: "22",
    height: "17",
    viewBox: "0 0 22 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11.2857 15.6798L21 4.44828L18.441 1.34483L18.4658 1.3202L18.3168 1.17241L18.1677 1H3.8323L1 4.44828L10.7143 15.6798L10.9876 16L11.2857 15.6798ZM7.75776 4.25123L11.0124 1.78818L14.2671 4.25123H7.75776ZM11.3354 1.44335H17.6957L14.913 4.17734L11.3354 1.44335ZM7.13665 4.15271L4.5528 1.44335H10.7143L7.13665 4.15271ZM6.59006 4.25123H1.77019L3.98137 1.54187L6.59006 4.25123ZM14.6149 4.69458L11.0124 15.0887L7.40994 4.69458H14.6149ZM15.087 4.69458H20.205L11.6832 14.5222L15.087 4.69458ZM20.2547 4.25123H15.4845L18.118 1.66502L20.2547 4.25123ZM1.81988 4.69458H6.93789L10.3416 14.5222L1.81988 4.69458Z",
    strokeWidth: "0.6"
  })));
};
var SidePodsIcon = function SidePodsIcon() {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex items-center justify-center w-5"
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    className: "stroke-current fill-current",
    width: "15",
    height: "21",
    viewBox: "0 0 15 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12.7381 3.8196H11.1519V3.18342H11.4692C11.6446 3.18342 11.7864 3.04123 11.7864 2.86532V0.956765C11.7864 0.78086 11.6446 0.638672 11.4692 0.638672H3.85522C3.67979 0.638672 3.53798 0.78086 3.53798 0.956765V2.86532C3.53798 3.04123 3.67979 3.18342 3.85522 3.18342H4.17247V3.8196H2.58624C1.71159 3.8196 1 4.53309 1 5.41007V18.77C1 19.647 1.71159 20.3605 2.58624 20.3605H12.7381C13.6128 20.3605 14.3244 19.647 14.3244 18.77V5.41007C14.3244 4.53309 13.6128 3.8196 12.7381 3.8196ZM4.17247 1.27486H11.1519V2.54723H4.17247V1.27486ZM4.80697 3.18342H10.5174V3.8196H4.80697V3.18342ZM2.58624 4.45579H12.7381C13.2629 4.45579 13.6899 4.88394 13.6899 5.41007V12.2618C13.3527 11.9583 12.9088 11.7719 12.4209 11.7719C11.7591 11.7719 11.176 12.1126 10.8347 12.6276C10.4933 12.1123 9.9102 11.7719 9.24843 11.7719C8.58665 11.7719 8.00355 12.1126 7.66219 12.6276C7.32083 12.1123 6.73773 11.7719 6.07596 11.7719C5.41418 11.7719 4.83108 12.1126 4.48972 12.6276C4.14836 12.1123 3.56526 11.7719 2.90348 11.7719C2.41556 11.7719 1.97173 11.9583 1.63449 12.2618V5.41007C1.63449 4.88394 2.06151 4.45579 2.58624 4.45579ZM13.6899 13.6805C13.6899 14.3822 13.1207 14.9529 12.4209 14.9529C11.7211 14.9529 11.1519 14.3822 11.1519 13.6805C11.1519 12.9788 11.7211 12.4081 12.4209 12.4081C13.1207 12.4081 13.6899 12.9788 13.6899 13.6805ZM10.5174 13.6805C10.5174 14.3822 9.94827 14.9529 9.24843 14.9529C8.54858 14.9529 7.97944 14.3822 7.97944 13.6805C7.97944 12.9788 8.54858 12.4081 9.24843 12.4081C9.94827 12.4081 10.5174 12.9788 10.5174 13.6805ZM7.34494 13.6805C7.34494 14.3822 6.7758 14.9529 6.07596 14.9529C5.37611 14.9529 4.80697 14.3822 4.80697 13.6805C4.80697 12.9788 5.37611 12.4081 6.07596 12.4081C6.7758 12.4081 7.34494 12.9788 7.34494 13.6805ZM4.17247 13.6805C4.17247 14.3822 3.60333 14.9529 2.90348 14.9529C2.20364 14.9529 1.63449 14.3822 1.63449 13.6805C1.63449 12.9788 2.20364 12.4081 2.90348 12.4081C3.60333 12.4081 4.17247 12.9788 4.17247 13.6805ZM12.7381 19.7243H2.58624C2.06151 19.7243 1.63449 19.2961 1.63449 18.77V15.0992C1.97173 15.4026 2.41556 15.5891 2.90348 15.5891C3.56526 15.5891 4.14836 15.2484 4.48972 14.7334C4.83108 15.2487 5.41418 15.5891 6.07596 15.5891C6.73773 15.5891 7.32083 15.2484 7.66219 14.7334C8.00355 15.2487 8.58665 15.5891 9.24843 15.5891C9.9102 15.5891 10.4933 15.2484 10.8347 14.7334C11.176 15.2487 11.7591 15.5891 12.4209 15.5891C12.9088 15.5891 13.3527 15.4026 13.6899 15.0992V18.77C13.6899 19.2961 13.2629 19.7243 12.7381 19.7243Z"
  })));
};
var SidePoolsIcon = function SidePoolsIcon() {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex items-center justify-center w-5"
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    style: {
      top: -2
    },
    className: "fill-current mr-auto relative",
    width: "19",
    height: "19",
    viewBox: "0 0 19 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2.59199 7C2.48021 7 2.36627 6.99068 2.25039 6.9719C1.82048 6.90055 1.50518 6.68775 1.22814 6.46833C0.968405 6.26262 0.923818 5.88431 1.1286 5.62337C1.33336 5.36244 1.70993 5.31765 1.96966 5.52338C2.14951 5.66579 2.29147 5.75913 2.44326 5.78434C2.70793 5.82724 2.91268 5.76202 3.10498 5.57271C3.25497 5.4257 3.40547 5.27006 3.55103 5.11955C3.63993 5.02759 3.7288 4.93569 3.81839 4.84472C4.33765 4.31681 5.0133 4.02359 5.72069 4.01935C6.42952 4.01478 7.10748 4.30032 7.63335 4.82243C7.75915 4.94697 7.8824 5.07464 8.0016 5.1981C8.11677 5.31737 8.22552 5.43003 8.33748 5.54131C8.66411 5.86632 9.10293 5.86623 9.4298 5.54134C9.55173 5.42005 9.6754 5.29217 9.79497 5.16847C9.9195 5.03965 10.0483 4.90645 10.1798 4.77571C11.2167 3.74527 12.8446 3.74217 13.8859 4.76861C14.0665 4.94589 14.2434 5.12945 14.4146 5.30697C14.476 5.37068 14.5375 5.43443 14.5992 5.49799C14.7818 5.68489 14.9858 5.78452 15.1879 5.78482C15.1882 5.78482 15.1885 5.78482 15.1887 5.78482C15.3928 5.78482 15.5998 5.68387 15.7876 5.49282C15.8886 5.38978 15.9891 5.28564 16.0895 5.18155C16.2152 5.05127 16.3451 4.91659 16.476 4.78444C17.5135 3.74214 19.1415 3.73823 20.1833 4.77451C20.3143 4.90474 20.4425 5.0374 20.5666 5.16573C20.6866 5.28988 20.8107 5.41827 20.9333 5.54019C21.2484 5.85413 21.6693 5.86481 22.0059 5.56784C22.2544 5.34854 22.6329 5.37321 22.8511 5.62289C23.0693 5.87257 23.0448 6.25273 22.7963 6.47197C21.9884 7.18468 20.8505 7.15225 20.0903 6.39495C19.9597 6.26509 19.8314 6.13237 19.7074 6.0041C19.5874 5.87992 19.4632 5.75152 19.3407 5.62963C18.7643 5.05632 17.8973 5.05828 17.3241 5.63423C17.1998 5.75971 17.0726 5.89156 16.9496 6.01902C16.8468 6.12554 16.744 6.23209 16.6403 6.33783C16.2281 6.75733 15.7128 6.98809 15.1887 6.98812C15.1879 6.98812 15.1871 6.98812 15.1863 6.98812C14.6636 6.9874 14.1511 6.75709 13.7431 6.33957C13.6791 6.27366 13.6166 6.20886 13.5542 6.14413C13.3811 5.96454 13.2175 5.79493 13.0479 5.62837C12.4686 5.05731 11.5981 5.05885 11.0222 5.6311C10.8992 5.75336 10.7746 5.88226 10.6542 6.00686C10.5306 6.13468 10.4028 6.26686 10.2724 6.39661C9.48011 7.18398 8.28616 7.18383 7.49495 6.39652C7.37446 6.27682 7.25621 6.15433 7.14186 6.03589C7.02199 5.91174 6.90877 5.79448 6.79202 5.67887C6.49528 5.38425 6.12077 5.22262 5.73614 5.22262C5.73339 5.22262 5.73066 5.22262 5.72791 5.22265C5.34047 5.22499 4.96482 5.39123 4.67021 5.69076C4.58295 5.77938 4.49662 5.86866 4.41023 5.95801C4.2592 6.11423 4.10298 6.27577 3.94239 6.43316C3.56232 6.80714 3.10037 6.99997 2.59199 7Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2.59199 11C2.48021 11 2.36627 10.9907 2.25039 10.9719C1.82048 10.9005 1.50518 10.6877 1.22814 10.4683C0.968405 10.2626 0.923818 9.88431 1.1286 9.62337C1.33336 9.36244 1.70993 9.31765 1.96966 9.52338C2.14951 9.66579 2.29147 9.75913 2.44326 9.78434C2.70793 9.82724 2.91268 9.76202 3.10498 9.57271C3.25497 9.4257 3.40547 9.27006 3.55103 9.11955C3.63993 9.02759 3.7288 8.93569 3.81839 8.84472C4.33765 8.31681 5.0133 8.02359 5.72069 8.01935C6.42952 8.01478 7.10748 8.30032 7.63335 8.82243C7.75915 8.94697 7.8824 9.07464 8.0016 9.1981C8.11677 9.31737 8.22552 9.43003 8.33748 9.54131C8.66411 9.86632 9.10293 9.86623 9.4298 9.54134C9.55173 9.42005 9.6754 9.29217 9.79497 9.16847C9.9195 9.03965 10.0483 8.90645 10.1798 8.77571C11.2167 7.74527 12.8446 7.74217 13.8859 8.76861C14.0665 8.94589 14.2434 9.12945 14.4146 9.30697C14.476 9.37068 14.5375 9.43443 14.5992 9.49799C14.7818 9.68489 14.9858 9.78452 15.1879 9.78482C15.1882 9.78482 15.1885 9.78482 15.1887 9.78482C15.3928 9.78482 15.5998 9.68387 15.7876 9.49282C15.8886 9.38978 15.9891 9.28564 16.0895 9.18155C16.2152 9.05127 16.3451 8.91659 16.476 8.78444C17.5135 7.74214 19.1415 7.73823 20.1833 8.77451C20.3143 8.90474 20.4425 9.0374 20.5666 9.16573C20.6866 9.28988 20.8107 9.41827 20.9333 9.54019C21.2484 9.85413 21.6693 9.86481 22.0059 9.56784C22.2544 9.34854 22.6329 9.37321 22.8511 9.62289C23.0693 9.87257 23.0448 10.2527 22.7963 10.472C21.9884 11.1847 20.8505 11.1522 20.0903 10.395C19.9597 10.2651 19.8314 10.1324 19.7074 10.0041C19.5874 9.87992 19.4632 9.75152 19.3407 9.62963C18.7643 9.05632 17.8973 9.05828 17.3241 9.63423C17.1998 9.75971 17.0726 9.89156 16.9496 10.019C16.8468 10.1255 16.744 10.2321 16.6403 10.3378C16.2281 10.7573 15.7128 10.9881 15.1887 10.9881C15.1879 10.9881 15.1871 10.9881 15.1863 10.9881C14.6636 10.9874 14.1511 10.7571 13.7431 10.3396C13.6791 10.2737 13.6166 10.2089 13.5542 10.1441C13.3811 9.96454 13.2175 9.79493 13.0479 9.62837C12.4686 9.05731 11.5981 9.05885 11.0222 9.6311C10.8992 9.75336 10.7746 9.88226 10.6542 10.0069C10.5306 10.1347 10.4028 10.2669 10.2724 10.3966C9.48011 11.184 8.28616 11.1838 7.49495 10.3965C7.37446 10.2768 7.25621 10.1543 7.14186 10.0359C7.02199 9.91174 6.90877 9.79448 6.79202 9.67887C6.49528 9.38425 6.12077 9.22262 5.73614 9.22262C5.73339 9.22262 5.73066 9.22262 5.72791 9.22265C5.34047 9.22499 4.96482 9.39123 4.67021 9.69076C4.58295 9.77938 4.49662 9.86866 4.41023 9.95801C4.2592 10.1142 4.10298 10.2758 3.94239 10.4332C3.56232 10.8071 3.10037 11 2.59199 11Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2.59199 15C2.48021 15 2.36627 14.9907 2.25039 14.9719C1.82048 14.9005 1.50518 14.6877 1.22814 14.4683C0.968405 14.2626 0.923818 13.8843 1.1286 13.6234C1.33336 13.3624 1.70993 13.3176 1.96966 13.5234C2.14951 13.6658 2.29147 13.7591 2.44326 13.7843C2.70793 13.8272 2.91268 13.762 3.10498 13.5727C3.25497 13.4257 3.40547 13.2701 3.55103 13.1196C3.63993 13.0276 3.7288 12.9357 3.81839 12.8447C4.33765 12.3168 5.0133 12.0236 5.72069 12.0194C6.42952 12.0148 7.10748 12.3003 7.63335 12.8224C7.75915 12.947 7.8824 13.0746 8.0016 13.1981C8.11677 13.3174 8.22552 13.43 8.33748 13.5413C8.66411 13.8663 9.10293 13.8662 9.4298 13.5413C9.55173 13.42 9.6754 13.2922 9.79497 13.1685C9.9195 13.0397 10.0483 12.9064 10.1798 12.7757C11.2167 11.7453 12.8446 11.7422 13.8859 12.7686C14.0665 12.9459 14.2434 13.1295 14.4146 13.307C14.476 13.3707 14.5375 13.4344 14.5992 13.498C14.7818 13.6849 14.9858 13.7845 15.1879 13.7848C15.1882 13.7848 15.1885 13.7848 15.1887 13.7848C15.3928 13.7848 15.5998 13.6839 15.7876 13.4928C15.8886 13.3898 15.9891 13.2856 16.0895 13.1816C16.2152 13.0513 16.3451 12.9166 16.476 12.7844C17.5135 11.7421 19.1415 11.7382 20.1833 12.7745C20.3143 12.9047 20.4425 13.0374 20.5666 13.1657C20.6866 13.2899 20.8107 13.4183 20.9333 13.5402C21.2484 13.8541 21.6693 13.8648 22.0059 13.5678C22.2544 13.3485 22.6329 13.3732 22.8511 13.6229C23.0693 13.8726 23.0448 14.2527 22.7963 14.472C21.9884 15.1847 20.8505 15.1522 20.0903 14.395C19.9597 14.2651 19.8314 14.1324 19.7074 14.0041C19.5874 13.8799 19.4632 13.7515 19.3407 13.6296C18.7643 13.0563 17.8973 13.0583 17.3241 13.6342C17.1998 13.7597 17.0726 13.8916 16.9496 14.019C16.8468 14.1255 16.744 14.2321 16.6403 14.3378C16.2281 14.7573 15.7128 14.9881 15.1887 14.9881C15.1879 14.9881 15.1871 14.9881 15.1863 14.9881C14.6636 14.9874 14.1511 14.7571 13.7431 14.3396C13.6791 14.2737 13.6166 14.2089 13.5542 14.1441C13.3811 13.9645 13.2175 13.7949 13.0479 13.6284C12.4686 13.0573 11.5981 13.0588 11.0222 13.6311C10.8992 13.7534 10.7746 13.8823 10.6542 14.0069C10.5306 14.1347 10.4028 14.2669 10.2724 14.3966C9.48011 15.184 8.28616 15.1838 7.49495 14.3965C7.37446 14.2768 7.25621 14.1543 7.14186 14.0359C7.02199 13.9117 6.90877 13.7945 6.79202 13.6789C6.49528 13.3842 6.12077 13.2226 5.73614 13.2226C5.73339 13.2226 5.73066 13.2226 5.72791 13.2226C5.34047 13.225 4.96482 13.3912 4.67021 13.6908C4.58295 13.7794 4.49662 13.8687 4.41023 13.958C4.2592 14.1142 4.10298 14.2758 3.94239 14.4332C3.56232 14.8071 3.10037 15 2.59199 15Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M2.59199 19C2.48021 19 2.36627 18.9907 2.25039 18.9719C1.82048 18.9005 1.50518 18.6877 1.22814 18.4683C0.968405 18.2626 0.923818 17.8843 1.1286 17.6234C1.33336 17.3624 1.70993 17.3176 1.96966 17.5234C2.14951 17.6658 2.29147 17.7591 2.44326 17.7843C2.70793 17.8272 2.91268 17.762 3.10498 17.5727C3.25497 17.4257 3.40547 17.2701 3.55103 17.1196C3.63993 17.0276 3.7288 16.9357 3.81839 16.8447C4.33765 16.3168 5.0133 16.0236 5.72069 16.0194C6.42952 16.0148 7.10748 16.3003 7.63335 16.8224C7.75915 16.947 7.8824 17.0746 8.0016 17.1981C8.11677 17.3174 8.22552 17.43 8.33748 17.5413C8.66411 17.8663 9.10293 17.8662 9.4298 17.5413C9.55173 17.42 9.6754 17.2922 9.79497 17.1685C9.9195 17.0397 10.0483 16.9064 10.1798 16.7757C11.2167 15.7453 12.8446 15.7422 13.8859 16.7686C14.0665 16.9459 14.2434 17.1295 14.4146 17.307C14.476 17.3707 14.5375 17.4344 14.5992 17.498C14.7818 17.6849 14.9858 17.7845 15.1879 17.7848C15.1882 17.7848 15.1885 17.7848 15.1887 17.7848C15.3928 17.7848 15.5998 17.6839 15.7876 17.4928C15.8886 17.3898 15.9891 17.2856 16.0895 17.1816C16.2152 17.0513 16.3451 16.9166 16.476 16.7844C17.5135 15.7421 19.1415 15.7382 20.1833 16.7745C20.3143 16.9047 20.4425 17.0374 20.5666 17.1657C20.6866 17.2899 20.8107 17.4183 20.9333 17.5402C21.2484 17.8541 21.6693 17.8648 22.0059 17.5678C22.2544 17.3485 22.6329 17.3732 22.8511 17.6229C23.0693 17.8726 23.0448 18.2527 22.7963 18.472C21.9884 19.1847 20.8505 19.1522 20.0903 18.395C19.9597 18.2651 19.8314 18.1324 19.7074 18.0041C19.5874 17.8799 19.4632 17.7515 19.3407 17.6296C18.7643 17.0563 17.8973 17.0583 17.3241 17.6342C17.1998 17.7597 17.0726 17.8916 16.9496 18.019C16.8468 18.1255 16.744 18.2321 16.6403 18.3378C16.2281 18.7573 15.7128 18.9881 15.1887 18.9881C15.1879 18.9881 15.1871 18.9881 15.1863 18.9881C14.6636 18.9874 14.1511 18.7571 13.7431 18.3396C13.6791 18.2737 13.6166 18.2089 13.5542 18.1441C13.3811 17.9645 13.2175 17.7949 13.0479 17.6284C12.4686 17.0573 11.5981 17.0588 11.0222 17.6311C10.8992 17.7534 10.7746 17.8823 10.6542 18.0069C10.5306 18.1347 10.4028 18.2669 10.2724 18.3966C9.48011 19.184 8.28616 19.1838 7.49495 18.3965C7.37446 18.2768 7.25621 18.1543 7.14186 18.0359C7.02199 17.9117 6.90877 17.7945 6.79202 17.6789C6.49528 17.3842 6.12077 17.2226 5.73614 17.2226C5.73339 17.2226 5.73066 17.2226 5.72791 17.2226C5.34047 17.225 4.96482 17.3912 4.67021 17.6908C4.58295 17.7794 4.49662 17.8687 4.41023 17.958C4.2592 18.1142 4.10298 18.2758 3.94239 18.4332C3.56232 18.8071 3.10037 19 2.59199 19Z"
  })));
};

exports.SideAccountIcon = SideAccountIcon;
exports.SideNavLink = SideNavLink;
exports.SidePodsIcon = SidePodsIcon;
exports.SidePoolsIcon = SidePoolsIcon;
exports.SideRewardsIcon = SideRewardsIcon;
exports.SideVoteIcon = SideVoteIcon;
//# sourceMappingURL=SideNavLink.js.map