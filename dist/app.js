webpackJsonp([1],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(7),i=r(o),a=n(29),s=r(a),u=n(108),c=r(u),l=n(112),f=r(l),p=n(109),d=r(p),h=n(110),m=r(h),v=n(106),g=r(v),y=i["default"].createElement(a.Route,{name:"app",path:"/",handler:g["default"]},i["default"].createElement(a.Route,{name:"about",handler:c["default"]}),i["default"].createElement(a.Route,{name:"work",handler:f["default"]}),i["default"].createElement(a.Route,{name:"contact",handler:d["default"]}),i["default"].createElement(a.Route,{name:"home",handler:m["default"]}),i["default"].createElement(a.DefaultRoute,{handler:m["default"]}));s["default"].run(y,function(e){i["default"].render(i["default"].createElement(e,null),document.getElementById("app"))})},27:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;s=c=u=void 0,r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=i,n=a,r=!0}},u=n(7),c=r(u),l=n(29),f=function(e){function t(){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"render",value:function(){return c["default"].createElement(l.Link,{onClick:this.props.onClick,to:this.props.to,className:"sl-button sl-button_my-story sl-button_centered"},this.props.buttonText)}}]),t}(c["default"].Component);t["default"]=f,e.exports=t["default"]},106:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;s=c=u=void 0,r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=i,n=a,r=!0}},u=n(7),c=r(u),l=n(113),f=r(l),p=n(111),d=r(p),h=n(107),m=r(h);n(220),n(70);var v=function(e){function t(e){var n=this;o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.updateSlideIndex=function(e){n.setState({activeSlideIndex:e})},this.state={activeSlideIndex:0}}return i(t,e),a(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"sl-portfolio-app"},c["default"].createElement("header",{className:"sl-portfolio-app--header"},c["default"].createElement(f["default"],{onNavChanged:this.updateSlideIndex.bind(this),activeNavIndex:this.state.activeSlideIndex})),c["default"].createElement(d["default"],null),c["default"].createElement(m["default"],null))}}]),t}(c["default"].Component);t["default"]=v,e.exports=t["default"]},107:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;s=c=u=void 0,r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=i,n=a,r=!0}},u=n(7),c=r(u),l=n(114),f=r(l),p=function(e){function t(){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"render",value:function(){return c["default"].createElement("footer",{className:"sl-footer"},c["default"].createElement(f["default"],null))}}]),t}(c["default"].Component);t["default"]=p,e.exports=t["default"]},108:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;s=c=u=void 0,r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=i,n=a,r=!0}},u=n(7),c=r(u),l=n(27),f=(r(l),function(e){function t(e){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this._navigateToMyStory=function(e){console.log("Goto my story")}}return i(t,e),a(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"sl-about-view"},c["default"].createElement("div",{className:"sl-about-view--dialogue"},c["default"].createElement("div",{className:"sl-about-view--dialogue_reverse-colors"},c["default"].createElement("h2",null,"ABOUT ME"),c["default"].createElement("p",null,"My name is Sean and I am Software Engineer and Web Developer. I am self-taught and proud of it. In fact, I started out as a Technical Support Representative at a local tech company. The everyday frustration with only being able to work around a persons issue, drove me to want to become a developer instead."),c["default"].createElement("p",null,"Now almost 4 years later, I have impacted customers in markets from large to small; Working on large-scale eCommerce websites, to small blogs, business to business applications and even Mac/iOS-Native Medical Management Software.")),c["default"].createElement("div",{className:"sl-about-view--dialogue_normal-colors"},c["default"].createElement("h2",null,"I BELIEVE IN..."),c["default"].createElement("h3",null,"READIBILITY"),c["default"].createElement("p",null,"The ability to read, understand, and maintain code is just as important as its execution. I write my code in the DAMP philosphy so that anyone, can look into any line, and see what is trying to be accomplished. When you write with readable code, you tell a story of what you are trying to achieve through each line. It not only makes you better at understanding the problems you need to accomplish, but makes it easier for others to support and maintain your code in the future."),c["default"].createElement("h3",null,"MENTORSHIP"),c["default"].createElement("p",null,"I would not be where I am today if it was not for fellow co-workers who sacrificed their own time to mentor me. I believe strongly in mentoring those around you, by offering what ever skills you can. A collaboarative learning environment not only fosters growth from within an organization, but also unifies it."),c["default"].createElement("p",null,"Regardless of what is going on, I will always try to give help to those who need it. Whether it be pointing them towards documentation, paired coding, code-shadowing, or simply talking out the issue at hand, the end-goal is to help others become better at what they do."),c["default"].createElement("h3",null,"RAW. HARD. WORK."),c["default"].createElement("p",null,"Since I was very young, my mom told me that anyone can do anything they want as long as they work hard, focus, and do their best to their abilities. I have lived and died by hard work. As a self-taught programmer, hard-work and quick learning has been a key role in my career success. Regardless of the task I am working on, I know that as long as I give 110%, that assuridly the outcome will be positive."),c["default"].createElement("h3",null,"THE END-USER"),c["default"].createElement("p",null,"One of the most satisfying parts of what I do is that I make a direct impact on the end-user. I take pride knowing that what I have done has made their experience more positive. Every line of code I write, every scrum task, every design I implement, and every redline I review, I constantly reminding myself:"),c["default"].createElement("b",null,'"What are we trying to accomplish, and is this the best expereience?"'),c["default"].createElement("p",null,"Although the road traveled for the end user is not always the easiest road, it is the road worth taken. Companies and their Employees who are customer-centric, succeed."))))}}]),t}(c["default"].Component));t["default"]=f,e.exports=t["default"]},109:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;s=c=u=void 0,r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=i,n=a,r=!0}},u=n(7),c=r(u),l=n(27),f=(r(l),function(e){function t(e){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this._navigateToMyStory=function(e){console.log("Goto my story")}}return i(t,e),a(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"sl-contact-view"},c["default"].createElement("h3",null,"CONTACT"))}}]),t}(c["default"].Component));t["default"]=f,e.exports=t["default"]},110:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;s=c=u=void 0,r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=i,n=a,r=!0}},u=n(7),c=r(u),l=n(27),f=r(l),p=function(e){function t(e){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this._navigateToMyStory=function(e){console.log("Goto my story")}}return i(t,e),a(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"sl-home-view"},c["default"].createElement("h1",{className:"sl-main-content--header"},c["default"].createElement("strong",null,"WEB DEVELOPER"),c["default"].createElement("span",{className:"sl-main-content--header_accent"},"&")," SOFTWARE ENGINEER"),c["default"].createElement(f["default"],{buttonText:"LEARN MY STORY",onClick:this._navigateToMyStory,to:"about"}))}}]),t}(c["default"].Component);t["default"]=p,e.exports=t["default"]},111:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;s=c=u=void 0,r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=i,n=a,r=!0}},u=n(7),c=r(u),l=n(29),f=n(27),p=(r(f),function(e){function t(e){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e)}return i(t,e),a(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"sl-main-content"},c["default"].createElement(l.RouteHandler,null))}}]),t}(c["default"].Component));t["default"]=p,e.exports=t["default"]},112:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;s=c=u=void 0,r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=i,n=a,r=!0}},u=n(7),c=r(u),l=n(27),f=(r(l),function(e){function t(e){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this._navigateToMyStory=function(e){console.log("Goto my story")}}return i(t,e),a(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"sl-work-view"},c["default"].createElement("h3",null,"WORK"),c["default"].createElement("div",{className:"sl-work-view--workgrid"}))}}]),t}(c["default"].Component));t["default"]=f,e.exports=t["default"]},113:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;s=c=u=void 0,r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=i,n=a,r=!0}},u=n(7),c=r(u),l=n(29),f=function(e){function t(e){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={activeNavIndex:this.props.activeNavIndex}}return i(t,e),a(t,[{key:"render",value:function(){var e=["home","about","work","contact"].map(function(e,t){return c["default"].createElement(l.Link,{to:e,key:t,className:"sl-navbar--item sl-button_nav-button "},e.toUpperCase())});return c["default"].createElement("nav",{className:"sl-navbar"},e)}}]),t}(c["default"].Component);t["default"]=f,e.exports=t["default"]},114:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,i=t,a=n;s=c=u=void 0,r=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=i,n=a,r=!0}},u=n(7),c=r(u),l=function(e){function t(){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"sl-social-links"},c["default"].createElement("a",{href:"http://careers.stackoverflow.com/seanlarkin",className:"fa icon-large fa-stack-overflow fa-2x"},c["default"].createElement("span",null,"Stack Overflow")),c["default"].createElement("a",{href:"https://twitter.com/TheLarkInn",className:"fa icon-large fa-twitter-square fa-2x"},c["default"].createElement("span",null,"Twitter")),c["default"].createElement("a",{href:"http://linkedin.com/in/seanthomaslarkin/",className:"fa icon-large fa-linkedin-square fa-2x"},c["default"].createElement("span",null,"LinkedIn")),c["default"].createElement("a",{href:"https://github.com/TheLarkInn",className:"fa icon-large fa-github-square fa-2x"},c["default"].createElement("span",null,"Github")),c["default"].createElement("a",{href:"https://medium.com/@TheLarkInn",className:"fa icon-large fa-medium fa-2x"},c["default"].createElement("span",null,"Medium")),c["default"].createElement("a",{href:"http://codepen.io/TheLarkInn/",className:"fa icon-large fa-codepen fa-2x"},c["default"].createElement("span",null,"Codepen")))}}]),t}(c["default"].Component);t["default"]=l,e.exports=t["default"]},115:function(e,t,n){t=e.exports=n(116)(),t.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Raleway:700,400,100);",""]),t.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Vollkorn:400);",""]),t.push([e.id,".padded-sides{margin:0 20px}.primaryFontFamily{font-family:Raleway,sans-serif}.secondaryFontFamily{font-family:Vollkorn,Arial,serif}h1,h2,h3,h4,h5,h6{font-family:Raleway,sans-serif;font-weight:100;color:#1f4788}h2{font-weight:100;font-size:2.4em;margin:0}strong{font-weight:700}b,div,p,span{color:#1f4788}footer,header,input,label,li,nav,ul{font-family:Raleway,sans-serif;color:#1f4788}.button-font{font-family:Raleway,sans-serif}.sl-navbar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:fixed;top:0;width:100%;background-color:#1f4788}@media (min-width:640px){.sl-navbar{display:block}}.sl-navbar a{padding:20px 5px;text-decoration:none}.sl-navbar--item{padding-top:5px;text-align:center;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.sl-navbar--item.active{border-bottom:5px solid #87d37c}@media (min-width:640px){.sl-navbar--item{display:inline-block}}.sl-footer{height:55px;padding-bottom:10px;width:100%;background-color:#1f4788;color:#fff;position:fixed;bottom:0}@media (min-width:640px){.sl-footer{position:relative}}.sl-footer--name-logo{font-family:Vollkorn,Arial,serif;font-size:.8em;font-weight:100}.sl-social-links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 auto;width:100%;padding-top:5px;text-align:center}@media (min-width:640px){.sl-social-links{display:block}}.sl-social-links a{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:5px;position:relative;text-decoration:none;color:#fff}.sl-social-links a:visited{color:#fff}@media (min-width:640px){.sl-social-links a:hover span{display:block}}.sl-social-links a span{font-family:Vollkorn,Arial,serif;font-size:.4em;position:absolute;display:none;top:40px;bottom:0;left:-25px;right:0;width:90px;margin:0 auto;text-align:center}.sl-main-content{min-height:25pc;margin:5pc 20px 70px;border:10px solid #1f4788}@media (min-width:640px){.sl-main-content{margin:5pc 20px 20px}}.sl-main-content--header{font-size:2.2em;margin-bottom:75pt;line-height:.83em}@media (min-width:375px){.sl-main-content--header{font-size:2.8em}}@media (min-width:640px){.sl-main-content--header{font-size:4.1em}}@media (min-width:1080px){.sl-main-content--header{font-size:5.6em}}.sl-main-content--header,.sl-main-content--subheader{text-align:center}.sl-main-content--header_accent{color:#87d37c}strong{margin-right:-5px}.sl-about-view b,.sl-about-view p{font-family:Vollkorn,Arial,serif}.sl-about-view b,.sl-about-view h3{font-weight:700}.sl-about-view--dialogue_normal-colors{padding:10px}.sl-about-view--dialogue_reverse-colors{background-color:#1f4788;padding:10px}.sl-about-view--dialogue_reverse-colors *{background-color:#1f4788;color:#fff}.sl-home-view{height:5in}.sl-button{font-family:Raleway,sans-serif;padding:10px 15px;border:1px solid #1f4788;border-radius:10px;cursor:pointer;color:#1f4788;text-decoration:none;-webkit-transition:background-color 60ms ease-in;transition:background-color 60ms ease-in}.sl-button:hover{border:1px solid #d33257;background-color:#fff;color:#d33257}.sl-button_centered{display:block;margin:0 auto}.sl-button_my-story{width:140px;text-align:center}.sl-button_nav-button{background-color:#1f4788;color:#fff;-webkit-transition:background-color 60ms ease-in;transition:background-color 60ms ease-in}.sl-button_nav-button:hover{background-color:#fff;color:#1f4788}body{background-color:#fff;margin:0}*{box-sizing:border-box}",""])},116:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},219:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=f[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(s(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(s(r.parts[i],t));f[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],u=o[3],c={css:a,media:s,sourceMap:u};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(){var e=document.createElement("style"),t=h();return e.type="text/css",t.appendChild(e),e}function a(){var e=document.createElement("link"),t=h();return e.rel="stylesheet",t.appendChild(e),e}function s(e,t){var n,r,o;if(t.singleton){var s=v++;n=m||(m=i()),r=u.bind(null,n,s,!1),o=u.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(),r=l.bind(null,n),o=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=i(),r=c.bind(null,n),o=function(){n.parentNode.removeChild(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function c(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function l(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var f={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},d=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=p(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=d());var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],u=f[s.id];u.refs--,i.push(u)}if(e){var c=o(e);r(c,t)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete f[u.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},220:function(e,t,n){var r=n(115);"string"==typeof r&&(r=[[e.id,r,""]]);n(219)(r,{});r.locals&&(e.exports=r.locals)}});