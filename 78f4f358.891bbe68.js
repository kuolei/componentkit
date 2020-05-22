(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(10),a=(n(0),n(206)),i={title:"Avoid Overrides"},c={id:"avoid-overrides",title:"Avoid Overrides",description:"Method overrides make components more difficult to use.",source:"@site/docs/avoid-overrides.md",permalink:"/docs/avoid-overrides",sidebar:"docs",previous:{title:"Never Subclass Components",permalink:"/docs/never-subclass-components"},next:{title:"Indentation",permalink:"/docs/indentation"}},l=[],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Method overrides make components more difficult to use."),Object(a.b)("p",null,"Imagine you're adding an optional text color parameter to a component. You might be tempted to add an override:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec-redhighlight"}),"@interface ArticleTextComponent\n+ (instancetype)newWithText:(NSString *)text;\n+ (instancetype)newWithText:(NSString *)text textColor:(UIColor *)textColor;\n@end\n")),Object(a.b)("p",null,"But someone will later add another override:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec-redhighlight"}),"  @interface ArticleTextComponent\n  + (instancetype)newWithText:(NSString *)text;\n  + (instancetype)newWithText:(NSString *)text textColor:(UIColor *)textColor;\n  + (instancetype)newWithText:(NSString *)text backgroundColor:(UIColor *)textColor;\n  + (instancetype)newWithText:(NSString *)text\n                    textColor:(UIColor *)textColor\n              backgroundColor:(UIColor *)backgroundColor;\n@end\n")),Object(a.b)("p",null,"The component is splintering. It's not obvious which override to use and we need a lot of boilerplate behind the scenes to redirect to the designated initializer."),Object(a.b)("p",null,"Instead, always expose all parameters in a single designated initializer and document which are optional."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec"}),"@interface ArticleTextComponent\n/**\n @param text The text to render in the component.\n @param textColor Optional; pass nil for the default.\n @param backgroundColor Optional; pass nil for the default.\n */\n+ (instancetype)newWithText:(NSString *)text\n                  textColor:(UIColor *)textColor\n            backgroundColor:(UIColor *)backgroundColor;\n@end\n")),Object(a.b)("p",null,'If there are too many parameters, a useful pattern is a "style struct". For example, see ',Object(a.b)("inlineCode",{parentName:"p"},"CKTextComponent"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec"}),"struct CKTextKitAttributes {\n  NSAttributedString *attributedString;\n  NSAttributedString *truncationAttributedString;\n  NSCharacterSet *avoidTailTruncationSet;\n  NSLineBreakMode lineBreakMode;\n  NSUInteger maximumNumberOfLines;\n  CGSize shadowOffset;\n  UIColor *shadowColor;\n  CGFloat shadowOpacity;\n  CGFloat shadowRadius;\n};\n\n@interface CKTextComponent : CKComponent\n+ (instancetype)newWithTextAttributes:(const CKTextKitAttributes &)attributes\n                       viewAttributes:(const CKViewComponentAttributeValueMap &)viewAttributes\n                 accessibilityContext:(const CKTextComponentAccessibilityContext &)accessibilityContext;\n@end\n")),Object(a.b)("p",null,"Using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://en.cppreference.com/w/cpp/language/aggregate_initialization"}),"aggregate initialization"),", it's easy to initialize the style struct with only some parameters:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec"}),"{\n  .shadowColor = [UIColor blackColor],\n  .maximumNumberOfLines = 1,\n}\n")))}s.isMDXComponent=!0},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,c({ref:t},p,{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);