(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(10),o=(n(0),n(206)),i={title:"State"},c={id:"state",title:"State",description:"So far we've been loosely inspired by React. If you're familiar with React, you'll know that React components have two elements:",source:"@site/docs/state.md",permalink:"/docs/state",sidebar:"docs",previous:{title:"Actions",permalink:"/docs/actions"},next:{title:"Scopes",permalink:"/docs/scopes"}},l=[],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"So far we've been loosely inspired by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://facebook.github.io/react/"}),"React"),". If you're familiar with React, you'll know that React components have two elements:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"props"),": passed from the parent. These roughly correspond to our parameters passed to the ",Object(o.b)("inlineCode",{parentName:"li"},"+new")," method."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"state"),': internal to the component, this holds implementation details that the parent should not have to know about. The canonical example is whether some text should be rendered fully, or truncated with a "Continue Reading\u2026" link. This is a detail the parent component should not have to manually manage.')),Object(o.b)("p",null,"Figuring out the difference between these two can be tricky at first. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://facebook.github.io/react/blog/2013/11/05/thinking-in-react.html"}),"Thinking in React")," is a really helpful blog post on this topic."),Object(o.b)("p",null,"Just like React, ",Object(o.b)("inlineCode",{parentName:"p"},"CKComponent")," has state."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec"}),"@interface CKComponent\n- (void)updateState:(id (^)(id))updateBlock mode:(CKUpdateMode)mode;\n@end\n")),Object(o.b)("p",null,'Let\'s make a simple example of using state for the "Continue Reading\u2026" link.'),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec"}),'#import "CKComponentSubclass.h" // import to expose updateState:\n@implementation MessageComponent\n\n+ (id)initialState\n{\n  return @NO;\n}\n\n+ (instancetype)newWithMessage:(NSAttributedString *)message\n{\n  CKComponentScope scope(self);\n  NSNumber *state = scope.state();\n  return [super newWithComponent:\n          [CKTextComponent\n           newWithAttributes:{\n             .attributedString = message,\n             .maximumNumberOfLines = [state boolValue] ? 0 : 5,\n           }\n           viewAttributes:{}\n           accessibilityContext:{}]];\n}\n\n- (void)didTapContinueReading\n{\n  [self updateState:^(id oldState){ return @YES; } mode:CKUpdateModeAsynchronous];\n}\n\n@end\n')),Object(o.b)("p",null,"That's all there is to it. Some nice attributes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Continue Reading state is completely hidden from parent components and controllers. They don't need to know about it or manage it."),Object(o.b)("li",{parentName:"ul"},"State changes can be coalesced or arbitrarily delayed for performance reasons. We can easily compute the updated component off the main thread when possible/desired.")))}s.isMDXComponent=!0},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,c({ref:t},p,{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);