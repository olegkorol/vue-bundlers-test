'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  name: 'app',
  data: function data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

var __vue_script__ = script;
            
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('img',{attrs:{"src":"./assets/logo.png"}}),_vm._v(" "),_c('h1',[_vm._v(_vm._s(_vm.msg))]),_vm._v(" "),_c('h2',[_vm._v("Essential Links")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h2',[_vm._v("Ecosystem")]),_vm._v(" "),_vm._m(1)])};
var __vue_staticRenderFns__ = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vuejs.org","target":"_blank"}},[_vm._v("Core Docs")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://forum.vuejs.org","target":"_blank"}},[_vm._v("Forum")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://chat.vuejs.org","target":"_blank"}},[_vm._v("Community Chat")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://twitter.com/vuejs","target":"_blank"}},[_vm._v("Twitter")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"http://router.vuejs.org/","target":"_blank"}},[_vm._v("vue-router")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuex.vuejs.org/","target":"_blank"}},[_vm._v("vuex")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vue-loader.vuejs.org/","target":"_blank"}},[_vm._v("vue-loader")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/awesome-vue","target":"_blank"}},[_vm._v("awesome-vue")])])])}];

var __vue_template__ = typeof __vue_render__ !== 'undefined'
  ? { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }
  : {};
/* style */
var __vue_inject_styles__ = function (inject) {
  if (!inject) { return }
  inject("data-v-03ee66c3_0", { source: "\n#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px\n}\nh1,h2{font-weight:400\n}\nul{list-style-type:none;padding:0\n}\nli{display:inline-block;margin:0 10px\n}\na{color:#42b983\n}", map: undefined, media: undefined });

};
/* scoped */
var __vue_scope_id__ = undefined;
/* module identifier */
var __vue_module_identifier__ = undefined;
/* functional template */
var __vue_is_functional_template__ = false;
/* component normalizer */
function __vue_normalize__(
  template, style, script$$1,
  scope, functional, moduleIdentifier,
  createInjector, createInjectorSSR
) {
  var component = script$$1 || {};

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) { component.functional = true; }
  }

  component._scopeId = scope;

  {
    var hook;
    if (style) {
      hook = function(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        var originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context)
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component
}
/* style inject */
function __vue_create_injector__() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = {};
  var isOldIE =
    typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;

      style.ids.push(id);

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
        // http://stackoverflow.com/a/26603875
        code +=
          '\n/*# sourceMappingURL=data:application/json;base64,' +
          btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
          ' */';
      }

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) { el.setAttribute('media', css.media); }
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts
          .filter(Boolean)
          .join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) { style.element.removeChild(nodes[index]); }
        if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
        else { style.element.appendChild(textNode); }
      }
    }
  }
}
/* style inject SSR */


var App = __vue_normalize__(
  __vue_template__,
  __vue_inject_styles__,
  typeof __vue_script__ === 'undefined' ? {} : __vue_script__,
  __vue_scope_id__,
  __vue_is_functional_template__,
  __vue_module_identifier__,
  typeof __vue_create_injector__ !== 'undefined' ? __vue_create_injector__ : function () {},
  typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {}
)

new Vue({
  el: '#app',
  render: function (h) { return h(App); }
});
