(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('recharts'), require('gestalt')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'recharts', 'gestalt'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["gestalt-charts"] = {}, global.React, global.Recharts, global.gestalt));
})(this, (function (exports, require$$0, recharts, gestalt) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	var reactJsxRuntime_development = createCommonjsModule(function (module, exports) {

	{
	  (function () {

	    var React = require$$0__default["default"];

	    var enableScopeAPI = false;
	    var enableCacheElement = false;
	    var enableTransitionTracing = false;
	    var enableLegacyHidden = false;
	    var enableDebugTracing = false;
	    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	    var REACT_MEMO_TYPE = Symbol.for('react.memo');
	    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	    var FAUX_ITERATOR_SYMBOL = '@@iterator';

	    function getIteratorFn(maybeIterable) {
	      if (maybeIterable === null || typeof maybeIterable !== 'object') {
	        return null;
	      }

	      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	      if (typeof maybeIterator === 'function') {
	        return maybeIterator;
	      }

	      return null;
	    }

	    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	    function error(format) {
	      {
	        {
	          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	            args[_key2 - 1] = arguments[_key2];
	          }

	          printWarning('error', format, args);
	        }
	      }
	    }

	    function printWarning(level, format, args) {
	      {
	        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	        var stack = ReactDebugCurrentFrame.getStackAddendum();

	        if (stack !== '') {
	          format += '%s';
	          args = args.concat([stack]);
	        }

	        var argsWithFormat = args.map(function (item) {
	          return String(item);
	        });
	        argsWithFormat.unshift('Warning: ' + format);
	        Function.prototype.apply.call(console[level], console, argsWithFormat);
	      }
	    }

	    var REACT_MODULE_REFERENCE;
	    {
	      REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	    }

	    function isValidElementType(type) {
	      if (typeof type === 'string' || typeof type === 'function') {
	        return true;
	      }

	      if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
	        return true;
	      }

	      if (typeof type === 'object' && type !== null) {
	        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	          return true;
	        }
	      }

	      return false;
	    }

	    function getWrappedName(outerType, innerType, wrapperName) {
	      var displayName = outerType.displayName;

	      if (displayName) {
	        return displayName;
	      }

	      var functionName = innerType.displayName || innerType.name || '';
	      return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	    }

	    function getContextName(type) {
	      return type.displayName || 'Context';
	    }

	    function getComponentNameFromType(type) {
	      if (type == null) {
	        return null;
	      }

	      {
	        if (typeof type.tag === 'number') {
	          error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	        }
	      }

	      if (typeof type === 'function') {
	        return type.displayName || type.name || null;
	      }

	      if (typeof type === 'string') {
	        return type;
	      }

	      switch (type) {
	        case REACT_FRAGMENT_TYPE:
	          return 'Fragment';

	        case REACT_PORTAL_TYPE:
	          return 'Portal';

	        case REACT_PROFILER_TYPE:
	          return 'Profiler';

	        case REACT_STRICT_MODE_TYPE:
	          return 'StrictMode';

	        case REACT_SUSPENSE_TYPE:
	          return 'Suspense';

	        case REACT_SUSPENSE_LIST_TYPE:
	          return 'SuspenseList';
	      }

	      if (typeof type === 'object') {
	        switch (type.$$typeof) {
	          case REACT_CONTEXT_TYPE:
	            var context = type;
	            return getContextName(context) + '.Consumer';

	          case REACT_PROVIDER_TYPE:
	            var provider = type;
	            return getContextName(provider._context) + '.Provider';

	          case REACT_FORWARD_REF_TYPE:
	            return getWrappedName(type, type.render, 'ForwardRef');

	          case REACT_MEMO_TYPE:
	            var outerName = type.displayName || null;

	            if (outerName !== null) {
	              return outerName;
	            }

	            return getComponentNameFromType(type.type) || 'Memo';

	          case REACT_LAZY_TYPE:
	            {
	              var lazyComponent = type;
	              var payload = lazyComponent._payload;
	              var init = lazyComponent._init;

	              try {
	                return getComponentNameFromType(init(payload));
	              } catch (x) {
	                return null;
	              }
	            }
	        }
	      }

	      return null;
	    }

	    var assign = Object.assign;
	    var disabledDepth = 0;
	    var prevLog;
	    var prevInfo;
	    var prevWarn;
	    var prevError;
	    var prevGroup;
	    var prevGroupCollapsed;
	    var prevGroupEnd;

	    function disabledLog() {}

	    disabledLog.__reactDisabledLog = true;

	    function disableLogs() {
	      {
	        if (disabledDepth === 0) {
	          prevLog = console.log;
	          prevInfo = console.info;
	          prevWarn = console.warn;
	          prevError = console.error;
	          prevGroup = console.group;
	          prevGroupCollapsed = console.groupCollapsed;
	          prevGroupEnd = console.groupEnd;
	          var props = {
	            configurable: true,
	            enumerable: true,
	            value: disabledLog,
	            writable: true
	          };
	          Object.defineProperties(console, {
	            info: props,
	            log: props,
	            warn: props,
	            error: props,
	            group: props,
	            groupCollapsed: props,
	            groupEnd: props
	          });
	        }

	        disabledDepth++;
	      }
	    }

	    function reenableLogs() {
	      {
	        disabledDepth--;

	        if (disabledDepth === 0) {
	          var props = {
	            configurable: true,
	            enumerable: true,
	            writable: true
	          };
	          Object.defineProperties(console, {
	            log: assign({}, props, {
	              value: prevLog
	            }),
	            info: assign({}, props, {
	              value: prevInfo
	            }),
	            warn: assign({}, props, {
	              value: prevWarn
	            }),
	            error: assign({}, props, {
	              value: prevError
	            }),
	            group: assign({}, props, {
	              value: prevGroup
	            }),
	            groupCollapsed: assign({}, props, {
	              value: prevGroupCollapsed
	            }),
	            groupEnd: assign({}, props, {
	              value: prevGroupEnd
	            })
	          });
	        }

	        if (disabledDepth < 0) {
	          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	        }
	      }
	    }

	    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	    var prefix;

	    function describeBuiltInComponentFrame(name, source, ownerFn) {
	      {
	        if (prefix === undefined) {
	          try {
	            throw Error();
	          } catch (x) {
	            var match = x.stack.trim().match(/\n( *(at )?)/);
	            prefix = match && match[1] || '';
	          }
	        }

	        return '\n' + prefix + name;
	      }
	    }

	    var reentry = false;
	    var componentFrameCache;
	    {
	      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	      componentFrameCache = new PossiblyWeakMap();
	    }

	    function describeNativeComponentFrame(fn, construct) {
	      if (!fn || reentry) {
	        return '';
	      }

	      {
	        var frame = componentFrameCache.get(fn);

	        if (frame !== undefined) {
	          return frame;
	        }
	      }
	      var control;
	      reentry = true;
	      var previousPrepareStackTrace = Error.prepareStackTrace;
	      Error.prepareStackTrace = undefined;
	      var previousDispatcher;
	      {
	        previousDispatcher = ReactCurrentDispatcher.current;
	        ReactCurrentDispatcher.current = null;
	        disableLogs();
	      }

	      try {
	        if (construct) {
	          var Fake = function () {
	            throw Error();
	          };

	          Object.defineProperty(Fake.prototype, 'props', {
	            set: function () {
	              throw Error();
	            }
	          });

	          if (typeof Reflect === 'object' && Reflect.construct) {
	            try {
	              Reflect.construct(Fake, []);
	            } catch (x) {
	              control = x;
	            }

	            Reflect.construct(fn, [], Fake);
	          } else {
	            try {
	              Fake.call();
	            } catch (x) {
	              control = x;
	            }

	            fn.call(Fake.prototype);
	          }
	        } else {
	          try {
	            throw Error();
	          } catch (x) {
	            control = x;
	          }

	          fn();
	        }
	      } catch (sample) {
	        if (sample && control && typeof sample.stack === 'string') {
	          var sampleLines = sample.stack.split('\n');
	          var controlLines = control.stack.split('\n');
	          var s = sampleLines.length - 1;
	          var c = controlLines.length - 1;

	          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	            c--;
	          }

	          for (; s >= 1 && c >= 0; s--, c--) {
	            if (sampleLines[s] !== controlLines[c]) {
	              if (s !== 1 || c !== 1) {
	                do {
	                  s--;
	                  c--;

	                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

	                    if (fn.displayName && _frame.includes('<anonymous>')) {
	                      _frame = _frame.replace('<anonymous>', fn.displayName);
	                    }

	                    {
	                      if (typeof fn === 'function') {
	                        componentFrameCache.set(fn, _frame);
	                      }
	                    }
	                    return _frame;
	                  }
	                } while (s >= 1 && c >= 0);
	              }

	              break;
	            }
	          }
	        }
	      } finally {
	        reentry = false;
	        {
	          ReactCurrentDispatcher.current = previousDispatcher;
	          reenableLogs();
	        }
	        Error.prepareStackTrace = previousPrepareStackTrace;
	      }

	      var name = fn ? fn.displayName || fn.name : '';
	      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
	      {
	        if (typeof fn === 'function') {
	          componentFrameCache.set(fn, syntheticFrame);
	        }
	      }
	      return syntheticFrame;
	    }

	    function describeFunctionComponentFrame(fn, source, ownerFn) {
	      {
	        return describeNativeComponentFrame(fn, false);
	      }
	    }

	    function shouldConstruct(Component) {
	      var prototype = Component.prototype;
	      return !!(prototype && prototype.isReactComponent);
	    }

	    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
	      if (type == null) {
	        return '';
	      }

	      if (typeof type === 'function') {
	        {
	          return describeNativeComponentFrame(type, shouldConstruct(type));
	        }
	      }

	      if (typeof type === 'string') {
	        return describeBuiltInComponentFrame(type);
	      }

	      switch (type) {
	        case REACT_SUSPENSE_TYPE:
	          return describeBuiltInComponentFrame('Suspense');

	        case REACT_SUSPENSE_LIST_TYPE:
	          return describeBuiltInComponentFrame('SuspenseList');
	      }

	      if (typeof type === 'object') {
	        switch (type.$$typeof) {
	          case REACT_FORWARD_REF_TYPE:
	            return describeFunctionComponentFrame(type.render);

	          case REACT_MEMO_TYPE:
	            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	          case REACT_LAZY_TYPE:
	            {
	              var lazyComponent = type;
	              var payload = lazyComponent._payload;
	              var init = lazyComponent._init;

	              try {
	                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	              } catch (x) {}
	            }
	        }
	      }

	      return '';
	    }

	    var hasOwnProperty = Object.prototype.hasOwnProperty;
	    var loggedTypeFailures = {};
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	    function setCurrentlyValidatingElement(element) {
	      {
	        if (element) {
	          var owner = element._owner;
	          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	          ReactDebugCurrentFrame.setExtraStackFrame(stack);
	        } else {
	          ReactDebugCurrentFrame.setExtraStackFrame(null);
	        }
	      }
	    }

	    function checkPropTypes(typeSpecs, values, location, componentName, element) {
	      {
	        var has = Function.call.bind(hasOwnProperty);

	        for (var typeSpecName in typeSpecs) {
	          if (has(typeSpecs, typeSpecName)) {
	            var error$1 = void 0;

	            try {
	              if (typeof typeSpecs[typeSpecName] !== 'function') {
	                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	                err.name = 'Invariant Violation';
	                throw err;
	              }

	              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	            } catch (ex) {
	              error$1 = ex;
	            }

	            if (error$1 && !(error$1 instanceof Error)) {
	              setCurrentlyValidatingElement(element);
	              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
	              setCurrentlyValidatingElement(null);
	            }

	            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	              loggedTypeFailures[error$1.message] = true;
	              setCurrentlyValidatingElement(element);
	              error('Failed %s type: %s', location, error$1.message);
	              setCurrentlyValidatingElement(null);
	            }
	          }
	        }
	      }
	    }

	    var isArrayImpl = Array.isArray;

	    function isArray(a) {
	      return isArrayImpl(a);
	    }

	    function typeName(value) {
	      {
	        var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	        return type;
	      }
	    }

	    function willCoercionThrow(value) {
	      {
	        try {
	          testStringCoercion(value);
	          return false;
	        } catch (e) {
	          return true;
	        }
	      }
	    }

	    function testStringCoercion(value) {
	      return '' + value;
	    }

	    function checkKeyStringCoercion(value) {
	      {
	        if (willCoercionThrow(value)) {
	          error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
	          return testStringCoercion(value);
	        }
	      }
	    }

	    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	    var RESERVED_PROPS = {
	      key: true,
	      ref: true,
	      __self: true,
	      __source: true
	    };
	    var specialPropKeyWarningShown;
	    var specialPropRefWarningShown;
	    var didWarnAboutStringRefs;
	    {
	      didWarnAboutStringRefs = {};
	    }

	    function hasValidRef(config) {
	      {
	        if (hasOwnProperty.call(config, 'ref')) {
	          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	          if (getter && getter.isReactWarning) {
	            return false;
	          }
	        }
	      }
	      return config.ref !== undefined;
	    }

	    function hasValidKey(config) {
	      {
	        if (hasOwnProperty.call(config, 'key')) {
	          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	          if (getter && getter.isReactWarning) {
	            return false;
	          }
	        }
	      }
	      return config.key !== undefined;
	    }

	    function warnIfStringRefCannotBeAutoConverted(config, self) {
	      {
	        if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
	          var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	          if (!didWarnAboutStringRefs[componentName]) {
	            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
	            didWarnAboutStringRefs[componentName] = true;
	          }
	        }
	      }
	    }

	    function defineKeyPropWarningGetter(props, displayName) {
	      {
	        var warnAboutAccessingKey = function () {
	          if (!specialPropKeyWarningShown) {
	            specialPropKeyWarningShown = true;
	            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	          }
	        };

	        warnAboutAccessingKey.isReactWarning = true;
	        Object.defineProperty(props, 'key', {
	          get: warnAboutAccessingKey,
	          configurable: true
	        });
	      }
	    }

	    function defineRefPropWarningGetter(props, displayName) {
	      {
	        var warnAboutAccessingRef = function () {
	          if (!specialPropRefWarningShown) {
	            specialPropRefWarningShown = true;
	            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	          }
	        };

	        warnAboutAccessingRef.isReactWarning = true;
	        Object.defineProperty(props, 'ref', {
	          get: warnAboutAccessingRef,
	          configurable: true
	        });
	      }
	    }

	    var ReactElement = function (type, key, ref, self, source, owner, props) {
	      var element = {
	        $$typeof: REACT_ELEMENT_TYPE,
	        type: type,
	        key: key,
	        ref: ref,
	        props: props,
	        _owner: owner
	      };
	      {
	        element._store = {};
	        Object.defineProperty(element._store, 'validated', {
	          configurable: false,
	          enumerable: false,
	          writable: true,
	          value: false
	        });
	        Object.defineProperty(element, '_self', {
	          configurable: false,
	          enumerable: false,
	          writable: false,
	          value: self
	        });
	        Object.defineProperty(element, '_source', {
	          configurable: false,
	          enumerable: false,
	          writable: false,
	          value: source
	        });

	        if (Object.freeze) {
	          Object.freeze(element.props);
	          Object.freeze(element);
	        }
	      }
	      return element;
	    };

	    function jsxDEV(type, config, maybeKey, source, self) {
	      {
	        var propName;
	        var props = {};
	        var key = null;
	        var ref = null;

	        if (maybeKey !== undefined) {
	          {
	            checkKeyStringCoercion(maybeKey);
	          }
	          key = '' + maybeKey;
	        }

	        if (hasValidKey(config)) {
	          {
	            checkKeyStringCoercion(config.key);
	          }
	          key = '' + config.key;
	        }

	        if (hasValidRef(config)) {
	          ref = config.ref;
	          warnIfStringRefCannotBeAutoConverted(config, self);
	        }

	        for (propName in config) {
	          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	            props[propName] = config[propName];
	          }
	        }

	        if (type && type.defaultProps) {
	          var defaultProps = type.defaultProps;

	          for (propName in defaultProps) {
	            if (props[propName] === undefined) {
	              props[propName] = defaultProps[propName];
	            }
	          }
	        }

	        if (key || ref) {
	          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	          if (key) {
	            defineKeyPropWarningGetter(props, displayName);
	          }

	          if (ref) {
	            defineRefPropWarningGetter(props, displayName);
	          }
	        }

	        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	      }
	    }

	    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	    function setCurrentlyValidatingElement$1(element) {
	      {
	        if (element) {
	          var owner = element._owner;
	          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	        } else {
	          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	        }
	      }
	    }

	    var propTypesMisspellWarningShown;
	    {
	      propTypesMisspellWarningShown = false;
	    }

	    function isValidElement(object) {
	      {
	        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	      }
	    }

	    function getDeclarationErrorAddendum() {
	      {
	        if (ReactCurrentOwner$1.current) {
	          var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	          if (name) {
	            return '\n\nCheck the render method of `' + name + '`.';
	          }
	        }

	        return '';
	      }
	    }

	    function getSourceInfoErrorAddendum(source) {
	      {
	        if (source !== undefined) {
	          var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	          var lineNumber = source.lineNumber;
	          return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	        }

	        return '';
	      }
	    }

	    var ownerHasKeyUseWarning = {};

	    function getCurrentComponentErrorInfo(parentType) {
	      {
	        var info = getDeclarationErrorAddendum();

	        if (!info) {
	          var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	          if (parentName) {
	            info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	          }
	        }

	        return info;
	      }
	    }

	    function validateExplicitKey(element, parentType) {
	      {
	        if (!element._store || element._store.validated || element.key != null) {
	          return;
	        }

	        element._store.validated = true;
	        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	          return;
	        }

	        ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
	        var childOwner = '';

	        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	          childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	        }

	        setCurrentlyValidatingElement$1(element);
	        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
	        setCurrentlyValidatingElement$1(null);
	      }
	    }

	    function validateChildKeys(node, parentType) {
	      {
	        if (typeof node !== 'object') {
	          return;
	        }

	        if (isArray(node)) {
	          for (var i = 0; i < node.length; i++) {
	            var child = node[i];

	            if (isValidElement(child)) {
	              validateExplicitKey(child, parentType);
	            }
	          }
	        } else if (isValidElement(node)) {
	          if (node._store) {
	            node._store.validated = true;
	          }
	        } else if (node) {
	          var iteratorFn = getIteratorFn(node);

	          if (typeof iteratorFn === 'function') {
	            if (iteratorFn !== node.entries) {
	              var iterator = iteratorFn.call(node);
	              var step;

	              while (!(step = iterator.next()).done) {
	                if (isValidElement(step.value)) {
	                  validateExplicitKey(step.value, parentType);
	                }
	              }
	            }
	          }
	        }
	      }
	    }

	    function validatePropTypes(element) {
	      {
	        var type = element.type;

	        if (type === null || type === undefined || typeof type === 'string') {
	          return;
	        }

	        var propTypes;

	        if (typeof type === 'function') {
	          propTypes = type.propTypes;
	        } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
	          propTypes = type.propTypes;
	        } else {
	          return;
	        }

	        if (propTypes) {
	          var name = getComponentNameFromType(type);
	          checkPropTypes(propTypes, element.props, 'prop', name, element);
	        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	          propTypesMisspellWarningShown = true;

	          var _name = getComponentNameFromType(type);

	          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	        }

	        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	        }
	      }
	    }

	    function validateFragmentProps(fragment) {
	      {
	        var keys = Object.keys(fragment.props);

	        for (var i = 0; i < keys.length; i++) {
	          var key = keys[i];

	          if (key !== 'children' && key !== 'key') {
	            setCurrentlyValidatingElement$1(fragment);
	            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
	            setCurrentlyValidatingElement$1(null);
	            break;
	          }
	        }

	        if (fragment.ref !== null) {
	          setCurrentlyValidatingElement$1(fragment);
	          error('Invalid attribute `ref` supplied to `React.Fragment`.');
	          setCurrentlyValidatingElement$1(null);
	        }
	      }
	    }

	    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	      {
	        var validType = isValidElementType(type);

	        if (!validType) {
	          var info = '';

	          if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	          }

	          var sourceInfo = getSourceInfoErrorAddendum(source);

	          if (sourceInfo) {
	            info += sourceInfo;
	          } else {
	            info += getDeclarationErrorAddendum();
	          }

	          var typeString;

	          if (type === null) {
	            typeString = 'null';
	          } else if (isArray(type)) {
	            typeString = 'array';
	          } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	            typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	            info = ' Did you accidentally export a JSX literal instead of a component?';
	          } else {
	            typeString = typeof type;
	          }

	          error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	        }

	        var element = jsxDEV(type, props, key, source, self);

	        if (element == null) {
	          return element;
	        }

	        if (validType) {
	          var children = props.children;

	          if (children !== undefined) {
	            if (isStaticChildren) {
	              if (isArray(children)) {
	                for (var i = 0; i < children.length; i++) {
	                  validateChildKeys(children[i], type);
	                }

	                if (Object.freeze) {
	                  Object.freeze(children);
	                }
	              } else {
	                error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	              }
	            } else {
	              validateChildKeys(children, type);
	            }
	          }
	        }

	        if (type === REACT_FRAGMENT_TYPE) {
	          validateFragmentProps(element);
	        } else {
	          validatePropTypes(element);
	        }

	        return element;
	      }
	    }

	    function jsxWithValidationStatic(type, props, key) {
	      {
	        return jsxWithValidation(type, props, key, true);
	      }
	    }

	    function jsxWithValidationDynamic(type, props, key) {
	      {
	        return jsxWithValidation(type, props, key, false);
	      }
	    }

	    var jsx = jsxWithValidationDynamic;
	    var jsxs = jsxWithValidationStatic;
	    exports.Fragment = REACT_FRAGMENT_TYPE;
	    exports.jsx = jsx;
	    exports.jsxs = jsxs;
	  })();
	}
	});

	var jsxRuntime = createCommonjsModule(function (module) {

	{
	  module.exports = reactJsxRuntime_development;
	}
	});

	const TOKEN_COLOR_WHITE_MOCHIMALIST_0 = 'var(--color-white-mochimalist-0)';
	const TOKEN_COLOR_TEXT_SUBTLE = 'var(--color-text-subtle)';
	const TOKEN_COLOR_BORDER_CONTAINER = 'var(--color-border-container)';
	const TOKEN_FONT_SIZE_100 = 'var(--font-size-100)';
	const TOKEN_FONT_WEIGHT_NORMAL = 'var(--font-weight-normal)';
	const TOKEN_FONT_FAMILY_DEFAULT_LATIN = 'var(--font-family-default-latin)';
	const TOKEN_OPACITY_100 = 'var(--opacity-100)';

	const TableContext = require$$0.createContext({
	    decal: 'default',
	});
	const { Provider } = TableContext;
	function ChartProvider({ children, decal }) {
	    return jsxRuntime.jsx(Provider, { value: { decal }, children: children });
	}
	function useChartContext() {
	    const { decal } = require$$0.useContext(TableContext);
	    return { decal };
	}

	function EmptyBox() {
	    return jsxRuntime.jsx(gestalt.Box, {});
	}

	function Header({ title, readyToRender, description, onVisualPatternChange, helpButton, titleDisplay, toggleTabularDataModal, showTabularData, }) {
	    const { accessibleViewText, defaultViewText, tabularData } = gestalt.useDefaultLabel('ChartGraph');
	    const { decal: showVisualPattern } = useChartContext();
	    return (jsxRuntime.jsx(gestalt.Box, { marginBottom: 5, width: "100%", children: jsxRuntime.jsxs(gestalt.Flex, { width: "100%", children: [jsxRuntime.jsx(gestalt.Flex.Item, { flex: "grow", children: titleDisplay === 'hidden' ? null : (jsxRuntime.jsxs(gestalt.Flex, { direction: "column", children: [jsxRuntime.jsxs(gestalt.Flex, { alignItems: "center", gap: 2, children: [jsxRuntime.jsx(gestalt.Heading, { color: readyToRender ? 'default' : 'inverse', size: "300", children: title }), helpButton || null] }), jsxRuntime.jsx(gestalt.Text, { color: readyToRender ? 'subtle' : 'inverse', size: "100", children: description })] })) }), jsxRuntime.jsx(gestalt.IconButton, { accessibilityLabel: "", bgColor: readyToRender ? undefined : 'transparent', icon: "table", iconColor: readyToRender ? 'darkGray' : 'white', name: "table", onClick: toggleTabularDataModal, selected: showTabularData, size: "xs", tooltip: { text: tabularData } }), showVisualPattern === 'disabled' ? null : (jsxRuntime.jsx(gestalt.IconButton, { accessibilityLabel: "", bgColor: readyToRender ? undefined : 'transparent', icon: "accessibility", 
	                    // We need this hack to tick the eye while chart is not rendered and title/description is repositioning. This prevents from seeing title/description flick.
	                    iconColor: readyToRender ? 'darkGray' : 'white', name: "accessibility", onClick: onVisualPatternChange, selected: showVisualPattern === 'visualPattern', size: "xs", tooltip: {
	                        text: showVisualPattern === 'visualPattern' ? defaultViewText : accessibleViewText,
	                    } }))] }) }));
	}

	var darkColorDesignTokens = {
		"color-red-pushpin-0": "#fff7f7",
		"color-red-pushpin-50": "#ffebeb",
		"color-red-pushpin-100": "#ffe0e0",
		"color-red-pushpin-200": "#fcbbbb",
		"color-red-pushpin-300": "#f47171",
		"color-red-pushpin-400": "#eb4242",
		"color-red-pushpin-450": "#e60023",
		"color-red-pushpin-500": "#cc0000",
		"color-red-pushpin-600": "#b60000",
		"color-red-pushpin-700": "#9b0000",
		"color-red-pushpin-800": "#800000",
		"color-red-pushpin-900": "#660000",
		"color-pink-flaminglow-0": "#fff8fa",
		"color-pink-flaminglow-50": "#ffebf1",
		"color-pink-flaminglow-100": "#ffdfe9",
		"color-pink-flaminglow-200": "#ffbed2",
		"color-pink-flaminglow-300": "#fe8eb1",
		"color-pink-flaminglow-400": "#f76593",
		"color-pink-flaminglow-450": "#ee376a",
		"color-pink-flaminglow-500": "#de2c62",
		"color-pink-flaminglow-600": "#c31952",
		"color-pink-flaminglow-700": "#a30c4a",
		"color-pink-flaminglow-800": "#82053e",
		"color-pink-flaminglow-900": "#630233",
		"color-blue-skycicle-0": "#f7fbff",
		"color-blue-skycicle-50": "#e6f4ff",
		"color-blue-skycicle-100": "#d7edff",
		"color-blue-skycicle-200": "#abdbff",
		"color-blue-skycicle-300": "#75bfff",
		"color-blue-skycicle-400": "#45a3fe",
		"color-blue-skycicle-450": "#007cff",
		"color-blue-skycicle-500": "#0074e8",
		"color-blue-skycicle-600": "#005fcb",
		"color-blue-skycicle-700": "#004ba9",
		"color-blue-skycicle-800": "#003c96",
		"color-blue-skycicle-900": "#002966",
		"color-teal-spabattical-0": "#f7fdfc",
		"color-teal-spabattical-50": "#e6faf5",
		"color-teal-spabattical-100": "#ccf6ee",
		"color-teal-spabattical-200": "#75e4d5",
		"color-teal-spabattical-300": "#48d5c6",
		"color-teal-spabattical-400": "#26c0b4",
		"color-teal-spabattical-450": "#009990",
		"color-teal-spabattical-500": "#00857c",
		"color-teal-spabattical-600": "#006b6c",
		"color-teal-spabattical-700": "#005c62",
		"color-teal-spabattical-800": "#005062",
		"color-teal-spabattical-900": "#003440",
		"color-green-matchacado-0": "#f6fdf5",
		"color-green-matchacado-50": "#e3fae1",
		"color-green-matchacado-100": "#c3f9c2",
		"color-green-matchacado-200": "#a4f9ac",
		"color-green-matchacado-300": "#6bec8c",
		"color-green-matchacado-400": "#39d377",
		"color-green-matchacado-450": "#1dad65",
		"color-green-matchacado-500": "#008753",
		"color-green-matchacado-600": "#005f3e",
		"color-green-matchacado-700": "#00422c",
		"color-green-matchacado-800": "#003020",
		"color-green-matchacado-900": "#00261a",
		"color-purple-mysticool-0": "#f8f7ff",
		"color-purple-mysticool-50": "#f0edff",
		"color-purple-mysticool-100": "#e9e4ff",
		"color-purple-mysticool-200": "#d5c7ff",
		"color-purple-mysticool-300": "#b190ff",
		"color-purple-mysticool-400": "#9e68ff",
		"color-purple-mysticool-450": "#8a39fa",
		"color-purple-mysticool-500": "#812ae7",
		"color-purple-mysticool-600": "#6b16ca",
		"color-purple-mysticool-700": "#550aa9",
		"color-purple-mysticool-800": "#400387",
		"color-purple-mysticool-900": "#2c0066",
		"color-orange-firetini-0": "#fff6eb",
		"color-orange-firetini-50": "#fff0db",
		"color-orange-firetini-100": "#ffe4c1",
		"color-orange-firetini-200": "#ffc58f",
		"color-orange-firetini-300": "#fda161",
		"color-orange-firetini-400": "#f77a38",
		"color-orange-firetini-450": "#ff5b45",
		"color-orange-firetini-500": "#de3700",
		"color-orange-firetini-600": "#c32f00",
		"color-orange-firetini-700": "#a42700",
		"color-orange-firetini-800": "#842000",
		"color-orange-firetini-900": "#660e00",
		"color-yellow-caramellow-0": "#fffedb",
		"color-yellow-caramellow-50": "#fffebb",
		"color-yellow-caramellow-100": "#fffd92",
		"color-yellow-caramellow-200": "#fae600",
		"color-yellow-caramellow-300": "#fdc900",
		"color-yellow-caramellow-400": "#e18d00",
		"color-yellow-caramellow-450": "#d86800",
		"color-yellow-caramellow-500": "#bd5b00",
		"color-yellow-caramellow-600": "#aa4900",
		"color-yellow-caramellow-700": "#943a00",
		"color-yellow-caramellow-800": "#7c2d00",
		"color-yellow-caramellow-900": "#662400",
		"color-white-mochimalist-0": "#ffffff",
		"color-gray-roboflow-50": "#f9f9f9",
		"color-gray-roboflow-100": "#f1f1f1",
		"color-gray-roboflow-200": "#e9e9e9",
		"color-gray-roboflow-300": "#cdcdcd",
		"color-gray-roboflow-400": "#a5a5a5",
		"color-gray-roboflow-500": "#767676",
		"color-gray-roboflow-550": "#5f5f5f",
		"color-gray-roboflow-600": "#4a4a4a",
		"color-gray-roboflow-700": "#2b2b2b",
		"color-gray-roboflow-800": "#191919",
		"color-black-cosmicore-900": "#111111",
		"color-transparent": "rgba(0, 0, 0, 0)",
		"color-text-default": "#ffffff",
		"color-text-subtle": "#a5a5a5",
		"color-text-success": "#39d377",
		"color-text-disabled": "#4a4a4a",
		"color-text-error": "#f47171",
		"color-text-warning": "#e18d00",
		"color-text-inverse": "#111111",
		"color-text-dark": "#111111",
		"color-text-light": "#ffffff",
		"color-text-shopping": "#75bfff",
		"color-text-link": "#45a3fe",
		"color-text-formfield-default": "#efefef",
		"color-text-formfield-disabled": "#ababab",
		"color-text-formfield-placeholder": "#ababab",
		"color-icon-default": "#ffffff",
		"color-icon-subtle": "#a5a5a5",
		"color-icon-subtle-accent": "#cdcdcd",
		"color-icon-success": "#39d377",
		"color-icon-disabled": "#4a4a4a",
		"color-icon-error": "#f47171",
		"color-icon-warning": "#e18d00",
		"color-icon-info": "#75bfff",
		"color-icon-recommendation": "#b190ff",
		"color-icon-inverse": "#111111",
		"color-icon-shopping": "#75bfff",
		"color-icon-brand-primary": "#e60023",
		"color-icon-light": "#ffffff",
		"color-icon-dark": "#111111",
		"color-icon-avatar-default": "#efefef",
		"color-background-default": "#111111",
		"color-background-info-base": "#75bfff",
		"color-background-info-weak": "#003c96",
		"color-background-info-strong": "#abdbff",
		"color-background-error-base": "#f47171",
		"color-background-error-weak": "#660000",
		"color-background-warning-base": "#fdc900",
		"color-background-warning-weak": "#7c2d00",
		"color-background-success-base": "#6bec8c",
		"color-background-success-weak": "#00422c",
		"color-background-recommendation-base": "#b190ff",
		"color-background-recommendation-weak": "#550aa9",
		"color-background-neutral": "#cdcdcd",
		"color-background-shopping": "#75bfff",
		"color-background-primary-base": "#e60023",
		"color-background-primary-strong": "#b60000",
		"color-background-primary-weak": "#f47171",
		"color-background-secondary-base": "#767676",
		"color-background-secondary-strong": "#a5a5a5",
		"color-background-secondary-weak": "#cdcdcd",
		"color-background-tertiary-base": "#cdcdcd",
		"color-background-tertiary-strong": "#2b2b2b",
		"color-background-tertiary-weak": "#cdcdcd",
		"color-background-selected-base": "#e9e9e9",
		"color-background-selected-strong": "#2b2b2b",
		"color-background-selected-weak": "#a5a5a5",
		"color-background-inverse-base": "#f9f9f9",
		"color-background-inverse-strong": "#e9e9e9",
		"color-background-brand": "#e60023",
		"color-background-education": "#75bfff",
		"color-background-wash-dark": "rgba(0, 0, 0, 0.8)",
		"color-background-wash-light": "rgba(255, 255, 255, 0.9)",
		"color-background-dark": "#111111",
		"color-background-light": "#ffffff",
		"color-background-elevation-accent": "#191919",
		"color-background-elevation-floating": "#2b2b2b",
		"color-background-elevation-raised": "#4a4a4a",
		"color-background-avatar-placeholder": "#404040",
		"color-background-avatar-wash": "rgba(250, 250, 250, 0.5)",
		"color-background-badge-neutral-default": "#cdcdcd",
		"color-background-badge-neutral-hover": "#cdcdcd",
		"color-background-badge-info-default": "#75bfff",
		"color-background-badge-info-hover": "#abdbff",
		"color-background-badge-error-default": "#f47171",
		"color-background-badge-error-hover": "#f47171",
		"color-background-badge-warning-default": "#fdc900",
		"color-background-badge-warning-hover": "#fdc900",
		"color-background-badge-success-default": "#6bec8c",
		"color-background-badge-success-hover": "#6bec8c",
		"color-background-badge-recommendation-default": "#b190ff",
		"color-background-badge-recommendation-hover": "#b190ff",
		"color-background-badge-lightwash-default": "rgba(255, 255, 255, 0.9)",
		"color-background-badge-lightwash-hover": "rgba(255, 255, 255, 0.9)",
		"color-background-badge-darkwash-default": "rgba(0, 0, 0, 0.8)",
		"color-background-badge-darkwash-hover": "rgba(0, 0, 0, 0.8)",
		"color-background-box-default": "#111111",
		"color-background-box-info-base": "#75bfff",
		"color-background-box-info-weak": "#003c96",
		"color-background-box-error-base": "#f47171",
		"color-background-box-error-weak": "#660000",
		"color-background-box-warning-base": "#fdc900",
		"color-background-box-warning-weak": "#7c2d00",
		"color-background-box-success-base": "#6bec8c",
		"color-background-box-success-weak": "#00422c",
		"color-background-box-recommendation-base": "#b190ff",
		"color-background-box-recommendation-weak": "#550aa9",
		"color-background-box-shopping": "#75bfff",
		"color-background-box-primary": "#e60023",
		"color-background-box-secondary": "#767676",
		"color-background-box-tertiary": "#cdcdcd",
		"color-background-box-selected": "#e9e9e9",
		"color-background-box-inverse": "#f9f9f9",
		"color-background-box-brand": "#e60023",
		"color-background-box-education": "#75bfff",
		"color-background-box-elevation-accent": "#191919",
		"color-background-box-elevation-floating": "#2b2b2b",
		"color-background-box-elevation-raised": "#4a4a4a",
		"color-background-box-lightwash": "#535353",
		"color-background-box-darkwash": "#666666",
		"color-background-box-transparentdarkgray": "rgba(255, 255, 255, 0.8)",
		"color-background-box-dark": "#111111",
		"color-background-box-light": "#ffffff",
		"color-background-box-transparent": "rgba(0, 0, 0, 0)",
		"color-background-button-primary-default": "#e60023",
		"color-background-button-primary-hover": "#b60000",
		"color-background-button-primary-active": "#b8001b",
		"color-background-button-secondary-default": "#4a4a4a",
		"color-background-button-secondary-hover": "#535353",
		"color-background-button-secondary-active": "#666666",
		"color-background-button-tertiary-default": "rgba(0, 0, 0, 0)",
		"color-background-button-tertiary-hover": "rgba(250, 250, 250, 0.5)",
		"color-background-button-tertiary-active": "rgba(250, 250, 250, 0.6)",
		"color-background-button-shopping-default": "#75bfff",
		"color-background-button-shopping-hover": "#4a8ad4",
		"color-background-button-shopping-active": "#4a85c9",
		"color-background-button-white-default": "#030303",
		"color-background-button-white-hover": "#121212",
		"color-background-button-white-active": "#1f1f1f",
		"color-background-button-gray-default": "#cdcdcd",
		"color-background-button-gray-hover": "#919191",
		"color-background-button-gray-active": "#9b9b9b",
		"color-background-button-semitransparentdefault-default": "rgba(51, 51, 51, 0.8)",
		"color-background-button-semitransparentdefault-hover": "#121212",
		"color-background-button-semitransparentdefault-active": "#1f1f1f",
		"color-background-button-semitransparentwhite-default": "rgba(51, 51, 51, 0.8)",
		"color-background-button-semitransparentwhite-hover": "#121212",
		"color-background-button-semitransparentwhite-active": "#1f1f1f",
		"color-background-button-semitransparentdark-default": "rgba(255, 255, 255, 0.8)",
		"color-background-button-semitransparentdark-hover": "#f0f0f0",
		"color-background-button-semitransparentdark-active": "#e0e0e0",
		"color-background-button-transparentdarkbackground-default": "rgba(0, 0, 0, 0)",
		"color-background-button-transparentdarkbackground-hover": "rgba(250, 250, 250, 0.5)",
		"color-background-button-transparentdarkbackground-active": "rgba(250, 250, 250, 0.6)",
		"color-background-button-disabled-default": "#2b2b2b",
		"color-background-button-selected-default": "#e9e9e9",
		"color-background-combobox-item-default": "rgba(0, 0, 0, 0)",
		"color-background-combobox-item-hover": "#404040",
		"color-background-datepicker-container": "#212121",
		"color-background-datepicker-range-default": "rgba(250, 250, 250, 0.5)",
		"color-background-datepicker-range-hover": "rgba(250, 250, 250, 0.5)",
		"color-background-datepicker-range-active": "rgba(250, 250, 250, 0.5)",
		"color-background-datepicker-button-unselected-default": "#212121",
		"color-background-datepicker-button-unselected-hover": "rgba(250, 250, 250, 0.5)",
		"color-background-datepicker-button-unselected-active": "rgba(250, 250, 250, 0.5)",
		"color-background-datepicker-button-selected-default": "#efefef",
		"color-background-datepicker-button-selected-hover": "#efefef",
		"color-background-datepicker-button-selected-active": "#efefef",
		"color-background-formfield-primary": "#030303",
		"color-background-formfield-disabled": "#404040",
		"color-background-formfield-selected": "#efefef",
		"color-background-iconbutton-semitransparentdark-default": "rgba(255, 255, 255, 0.8)",
		"color-background-iconbutton-semitransparentdark-hover": "#f0f0f0",
		"color-background-iconbutton-semitransparentdark-active": "#e0e0e0",
		"color-background-mask-wash": "rgba(0, 0, 0, 0.04)",
		"color-background-overlay": "#2b2b2b",
		"color-background-popover-primary": "#2b2b2b",
		"color-background-popover-secondary": "#efefef",
		"color-background-popover-education": "#75bfff",
		"color-background-tabs-default-base": "#111111",
		"color-background-tabs-default-hover": "#767676",
		"color-background-tabs-default-active": "#535353",
		"color-background-tabs-transparent-base": "rgba(0, 0, 0, 0)",
		"color-background-tabs-transparent-hover": "rgba(0, 0, 0, 0.06)",
		"color-background-tabs-transparent-active": "rgba(0, 0, 0, 0.1)",
		"color-background-tag-primary-default": "#767676",
		"color-background-tag-primary-hover": "#535353",
		"color-background-tag-primary-active": "#666666",
		"color-background-tag-error-default": "#f47171",
		"color-background-tag-error-hover": "#cf001f",
		"color-background-tag-error-active": "#b8001b",
		"color-background-tag-warning-default": "#fdc900",
		"color-background-tag-warning-hover": "#e18d00",
		"color-background-tag-warning-active": "#d86800",
		"color-background-searchguide-default-10": "#e9e4ff",
		"color-background-searchguide-default-11": "#767676",
		"color-background-searchguide-default-01": "#abdbff",
		"color-background-searchguide-default-02": "#a4f9ac",
		"color-background-searchguide-default-03": "#ffc58f",
		"color-background-searchguide-default-04": "#fcbbbb",
		"color-background-searchguide-default-05": "#d5c7ff",
		"color-background-searchguide-default-06": "#d7edff",
		"color-background-searchguide-default-07": "#c3f9c2",
		"color-background-searchguide-default-08": "#ffe4c1",
		"color-background-searchguide-default-09": "#fcbbbb",
		"color-background-searchguide-hover-10": "#e9e4ff",
		"color-background-searchguide-hover-11": "#767676",
		"color-background-searchguide-hover-01": "#abdbff",
		"color-background-searchguide-hover-02": "#a4f9ac",
		"color-background-searchguide-hover-03": "#ffc58f",
		"color-background-searchguide-hover-04": "#fcbbbb",
		"color-background-searchguide-hover-05": "#d5c7ff",
		"color-background-searchguide-hover-06": "#d7edff",
		"color-background-searchguide-hover-07": "#c3f9c2",
		"color-background-searchguide-hover-08": "#ffe4c1",
		"color-background-searchguide-hover-09": "#fcbbbb",
		"color-background-searchguide-active-10": "#e9e4ff",
		"color-background-searchguide-active-11": "#767676",
		"color-background-searchguide-active-01": "#abdbff",
		"color-background-searchguide-active-02": "#a4f9ac",
		"color-background-searchguide-active-03": "#ffc58f",
		"color-background-searchguide-active-04": "#fcbbbb",
		"color-background-searchguide-active-05": "#d5c7ff",
		"color-background-searchguide-active-06": "#d7edff",
		"color-background-searchguide-active-07": "#c3f9c2",
		"color-background-searchguide-active-08": "#ffe4c1",
		"color-background-searchguide-active-09": "#fcbbbb",
		"color-background-segmentedcontrol-container": "#404040",
		"color-background-segmentedcontrol-tab-selected": "#030303",
		"color-background-switch-default-selected": "#efefef",
		"color-background-switch-default-unselected": "#030303",
		"color-background-switch-disabled-selected": "#ababab",
		"color-background-switch-disabled-unselected": "#404040",
		"color-background-switch-hover-selected": "#efefef",
		"color-background-switch-hover-unselected": "#030303",
		"color-background-switch-pressed-selected": "#efefef",
		"color-background-switch-pressed-unselected": "#030303",
		"color-background-table-footer": "#030303",
		"color-background-table-row-hover": "#404040",
		"color-background-table-row-selected": "#404040",
		"color-background-tagdata-primary": "#767676",
		"color-background-tagdata-secondary": "#111111",
		"color-background-tagdata-disabled": "#404040",
		"color-background-tableofcontents-item-default": "rgba(0, 0, 0, 0)",
		"color-background-tableofcontents-item-hover": "#767676",
		"color-background-tiledata-10": "#007a721A",
		"color-background-tiledata-11": "#f765931A",
		"color-background-tiledata-12": "#ffc58f1A",
		"color-background-tiledata-01": "#005fcb1A",
		"color-background-tiledata-02": "#75e4d51A",
		"color-background-tiledata-03": "#b190ff1A",
		"color-background-tiledata-04": "#fda6001A",
		"color-background-tiledata-05": "#75bfff1A",
		"color-background-tiledata-06": "#de2c621A",
		"color-background-tiledata-07": "#a4f9ac1A",
		"color-background-tiledata-08": "#812ae71A",
		"color-background-tiledata-09": "#ff5b451A",
		"color-background-tiledata-hover": "#767676",
		"color-background-tiledata-disabled": "#404040",
		"color-background-video-container-primary": "#f9f9f9",
		"color-background-video-container-secondary": "rgba(0, 0, 0, 0)",
		"color-border-container": "#767676",
		"color-border-default": "#cdcdcd",
		"color-border-error": "#f47171",
		"color-border-focus": "rgba(0, 132, 255, 0.5)",
		"color-border-avatar": "#030303",
		"color-border-badge-default": "#111111",
		"color-border-badge-light": "#ffffff",
		"color-border-badge-dark": "#111111",
		"color-border-formfield-error-default": "#f47171",
		"color-border-formfield-error-hover": "#cf001f",
		"color-border-formfield-disabled": "#404040",
		"color-border-popover-primary": "#212121",
		"color-border-popover-secondary": "#efefef",
		"color-border-popover-education": "#75bfff",
		"color-border-pulsar-default": "#0074e8",
		"color-border-pulsar-hover": "#dce9fa",
		"color-border-switch-focus-inner": "#cdcdcd",
		"color-border-switch-disabled-selected": "#111111",
		"color-border-switch-disabled-unselected": "#767676",
		"color-border-table-row-selected": "#ffffff",
		"color-border-tag-disabled": "#ababab",
		"color-data-visualization-10": "#007a72",
		"color-data-visualization-11": "#f76593",
		"color-data-visualization-12": "#ffc58f",
		"color-data-visualization-01": "#005fcb",
		"color-data-visualization-02": "#75e4d5",
		"color-data-visualization-03": "#b190ff",
		"color-data-visualization-04": "#fda600",
		"color-data-visualization-05": "#75bfff",
		"color-data-visualization-06": "#de2c62",
		"color-data-visualization-07": "#a4f9ac",
		"color-data-visualization-08": "#812ae7",
		"color-data-visualization-09": "#ff5b45",
		"color-data-visualization-primary": "#75bfff",
		"color-data-visualization-success-graph": "#6bec8c",
		"color-data-visualization-success-text": "#39d377",
		"color-data-visualization-error-graph": "#f47171",
		"color-data-visualization-error-text": "#eb4242",
		"font-size-100": "12px",
		"font-size-200": "14px",
		"font-size-300": "16px",
		"font-size-400": "20px",
		"font-size-500": "28px",
		"font-size-600": "36px",
		"font-size-datepicker-date": "16px",
		"font-size-datepicker-heading": "20px",
		"font-weight-normal": "400",
		"font-weight-semibold": "600",
		"font-weight-bold": "700",
		"font-weight-datepicker-date": "400",
		"font-weight-datepicker-heading": "700",
		"font-family-default-latin": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, 'ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', Arial, sans-serif",
		"font-family-default-japanese": "'SF Pro JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', Arial, sans-serif",
		"font-family-code": "SFMono-Medium, 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace",
		"font-family-datepicker-date": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, 'ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', Arial, sans-serif",
		"font-family-datepicker-heading": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, 'ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', Arial, sans-serif",
		"font-letterspacing-datepicker-date": "normal",
		"font-letterspacing-datepicker-heading": "normal",
		"font-lineheight-datepicker-date": "22px",
		"font-lineheight-datepicker-heading": "normal",
		"font-textdecoration-datepicker-date": "none",
		"font-textdecoration-datepicker-heading": "none",
		"opacity-0": "0",
		"opacity-100": "0.04",
		"opacity-200": "0.2",
		"opacity-300": "0.4",
		"opacity-400": "0.8",
		"opacity-500": "0.9",
		"rounding-0": "0px",
		"rounding-100": "4px",
		"rounding-200": "8px",
		"rounding-300": "12px",
		"rounding-400": "16px",
		"rounding-500": "20px",
		"rounding-600": "24px",
		"rounding-700": "28px",
		"rounding-800": "32px",
		"rounding-pill": "999px",
		"rounding-circle": "50%",
		"rounding-datepicker-container": "16px",
		"rounding-datepicker-days": "50%",
		"rounding-datepicker-navigation": "50%",
		"rounding-datepicker-range-start": "50% 0px 0px 50%",
		"rounding-datepicker-range-middle": "0px",
		"rounding-datepicker-range-end": "0px 50% 50% 0px",
		"space-0": "0px",
		"space-100": "4px",
		"space-200": "8px",
		"space-300": "12px",
		"space-400": "16px",
		"space-500": "20px",
		"space-600": "24px",
		"space-700": "28px",
		"space-800": "32px",
		"space-900": "36px",
		"space-1000": "40px",
		"space-1100": "44px",
		"space-1200": "48px",
		"space-1300": "52px",
		"space-1400": "56px",
		"space-1500": "60px",
		"space-1600": "64px",
		"space-negative-100": "-4px",
		"space-negative-200": "-8px",
		"space-negative-300": "-12px",
		"space-negative-400": "-16px",
		"space-negative-500": "-20px",
		"space-negative-600": "-24px",
		"space-negative-700": "-28px",
		"space-negative-800": "-32px",
		"space-negative-900": "-36px",
		"space-negative-1000": "-40px",
		"space-negative-1100": "-44px",
		"space-negative-1200": "-48px",
		"space-negative-1300": "-52px",
		"space-negative-1400": "-56px",
		"space-negative-1500": "-60px",
		"space-negative-1600": "-64px",
		"elevation-floating": "none",
		"elevation-raised-top": "0px 0.5px 0px 0px rgba(249, 249, 249, 0)",
		"elevation-raised-bottom": "0px -0.5px 0px 0px rgba(249, 249, 249, 0)",
		"elevation-datepicker": "0px 0px 8px 0px rgba(250, 250, 250, 0.06)"
	};

	var lightColorDesignTokens = {
		"color-red-pushpin-0": "#fff7f7",
		"color-red-pushpin-50": "#ffebeb",
		"color-red-pushpin-100": "#ffe0e0",
		"color-red-pushpin-200": "#fcbbbb",
		"color-red-pushpin-300": "#f47171",
		"color-red-pushpin-400": "#eb4242",
		"color-red-pushpin-450": "#e60023",
		"color-red-pushpin-500": "#cc0000",
		"color-red-pushpin-600": "#b60000",
		"color-red-pushpin-700": "#9b0000",
		"color-red-pushpin-800": "#800000",
		"color-red-pushpin-900": "#660000",
		"color-pink-flaminglow-0": "#fff8fa",
		"color-pink-flaminglow-50": "#ffebf1",
		"color-pink-flaminglow-100": "#ffdfe9",
		"color-pink-flaminglow-200": "#ffbed2",
		"color-pink-flaminglow-300": "#fe8eb1",
		"color-pink-flaminglow-400": "#f76593",
		"color-pink-flaminglow-450": "#ee376a",
		"color-pink-flaminglow-500": "#de2c62",
		"color-pink-flaminglow-600": "#c31952",
		"color-pink-flaminglow-700": "#a30c4a",
		"color-pink-flaminglow-800": "#82053e",
		"color-pink-flaminglow-900": "#630233",
		"color-blue-skycicle-0": "#f7fbff",
		"color-blue-skycicle-50": "#e6f4ff",
		"color-blue-skycicle-100": "#d7edff",
		"color-blue-skycicle-200": "#abdbff",
		"color-blue-skycicle-300": "#75bfff",
		"color-blue-skycicle-400": "#45a3fe",
		"color-blue-skycicle-450": "#007cff",
		"color-blue-skycicle-500": "#0074e8",
		"color-blue-skycicle-600": "#005fcb",
		"color-blue-skycicle-700": "#004ba9",
		"color-blue-skycicle-800": "#003c96",
		"color-blue-skycicle-900": "#002966",
		"color-teal-spabattical-0": "#f7fdfc",
		"color-teal-spabattical-50": "#e6faf5",
		"color-teal-spabattical-100": "#ccf6ee",
		"color-teal-spabattical-200": "#75e4d5",
		"color-teal-spabattical-300": "#48d5c6",
		"color-teal-spabattical-400": "#26c0b4",
		"color-teal-spabattical-450": "#009990",
		"color-teal-spabattical-500": "#00857c",
		"color-teal-spabattical-600": "#006b6c",
		"color-teal-spabattical-700": "#005c62",
		"color-teal-spabattical-800": "#005062",
		"color-teal-spabattical-900": "#003440",
		"color-green-matchacado-0": "#f6fdf5",
		"color-green-matchacado-50": "#e3fae1",
		"color-green-matchacado-100": "#c3f9c2",
		"color-green-matchacado-200": "#a4f9ac",
		"color-green-matchacado-300": "#6bec8c",
		"color-green-matchacado-400": "#39d377",
		"color-green-matchacado-450": "#1dad65",
		"color-green-matchacado-500": "#008753",
		"color-green-matchacado-600": "#005f3e",
		"color-green-matchacado-700": "#00422c",
		"color-green-matchacado-800": "#003020",
		"color-green-matchacado-900": "#00261a",
		"color-purple-mysticool-0": "#f8f7ff",
		"color-purple-mysticool-50": "#f0edff",
		"color-purple-mysticool-100": "#e9e4ff",
		"color-purple-mysticool-200": "#d5c7ff",
		"color-purple-mysticool-300": "#b190ff",
		"color-purple-mysticool-400": "#9e68ff",
		"color-purple-mysticool-450": "#8a39fa",
		"color-purple-mysticool-500": "#812ae7",
		"color-purple-mysticool-600": "#6b16ca",
		"color-purple-mysticool-700": "#550aa9",
		"color-purple-mysticool-800": "#400387",
		"color-purple-mysticool-900": "#2c0066",
		"color-orange-firetini-0": "#fff6eb",
		"color-orange-firetini-50": "#fff0db",
		"color-orange-firetini-100": "#ffe4c1",
		"color-orange-firetini-200": "#ffc58f",
		"color-orange-firetini-300": "#fda161",
		"color-orange-firetini-400": "#f77a38",
		"color-orange-firetini-450": "#ff5b45",
		"color-orange-firetini-500": "#de3700",
		"color-orange-firetini-600": "#c32f00",
		"color-orange-firetini-700": "#a42700",
		"color-orange-firetini-800": "#842000",
		"color-orange-firetini-900": "#660e00",
		"color-yellow-caramellow-0": "#fffedb",
		"color-yellow-caramellow-50": "#fffebb",
		"color-yellow-caramellow-100": "#fffd92",
		"color-yellow-caramellow-200": "#fae600",
		"color-yellow-caramellow-300": "#fdc900",
		"color-yellow-caramellow-400": "#e18d00",
		"color-yellow-caramellow-450": "#d86800",
		"color-yellow-caramellow-500": "#bd5b00",
		"color-yellow-caramellow-600": "#aa4900",
		"color-yellow-caramellow-700": "#943a00",
		"color-yellow-caramellow-800": "#7c2d00",
		"color-yellow-caramellow-900": "#662400",
		"color-white-mochimalist-0": "#ffffff",
		"color-gray-roboflow-50": "#f9f9f9",
		"color-gray-roboflow-100": "#f1f1f1",
		"color-gray-roboflow-200": "#e9e9e9",
		"color-gray-roboflow-300": "#cdcdcd",
		"color-gray-roboflow-400": "#a5a5a5",
		"color-gray-roboflow-500": "#767676",
		"color-gray-roboflow-550": "#5f5f5f",
		"color-gray-roboflow-600": "#4a4a4a",
		"color-gray-roboflow-700": "#2b2b2b",
		"color-gray-roboflow-800": "#191919",
		"color-black-cosmicore-900": "#111111",
		"color-transparent": "rgba(0, 0, 0, 0)",
		"color-text-default": "#111111",
		"color-text-subtle": "#767676",
		"color-text-success": "#005f3e",
		"color-text-disabled": "#a5a5a5",
		"color-text-error": "#cc0000",
		"color-text-warning": "#bd5b00",
		"color-text-inverse": "#ffffff",
		"color-text-dark": "#111111",
		"color-text-light": "#ffffff",
		"color-text-shopping": "#0074e8",
		"color-text-link": "#004ba9",
		"color-text-formfield-default": "#111111",
		"color-text-formfield-disabled": "#767676",
		"color-text-formfield-placeholder": "#767676",
		"color-icon-default": "#111111",
		"color-icon-subtle": "#767676",
		"color-icon-subtle-accent": "#5f5f5f",
		"color-icon-success": "#005f3e",
		"color-icon-disabled": "#a5a5a5",
		"color-icon-error": "#cc0000",
		"color-icon-warning": "#bd5b00",
		"color-icon-info": "#0074e8",
		"color-icon-recommendation": "#812ae7",
		"color-icon-inverse": "#ffffff",
		"color-icon-shopping": "#0074e8",
		"color-icon-brand-primary": "#e60023",
		"color-icon-light": "#ffffff",
		"color-icon-dark": "#111111",
		"color-icon-avatar-default": "#111111",
		"color-background-default": "#ffffff",
		"color-background-info-base": "#0074e8",
		"color-background-info-weak": "#d7edff",
		"color-background-info-strong": "#005fcb",
		"color-background-error-base": "#cc0000",
		"color-background-error-weak": "#ffe0e0",
		"color-background-warning-base": "#bd5b00",
		"color-background-warning-weak": "#ffe4c1",
		"color-background-success-base": "#008753",
		"color-background-success-weak": "#c3f9c2",
		"color-background-recommendation-base": "#812ae7",
		"color-background-recommendation-weak": "#e9e4ff",
		"color-background-neutral": "#767676",
		"color-background-shopping": "#0074e8",
		"color-background-primary-base": "#e60023",
		"color-background-primary-strong": "#b60000",
		"color-background-primary-weak": "#f47171",
		"color-background-secondary-base": "#e9e9e9",
		"color-background-secondary-strong": "#a5a5a5",
		"color-background-secondary-weak": "#cdcdcd",
		"color-background-tertiary-base": "#767676",
		"color-background-tertiary-strong": "#2b2b2b",
		"color-background-tertiary-weak": "#cdcdcd",
		"color-background-selected-base": "#111111",
		"color-background-selected-strong": "#2b2b2b",
		"color-background-selected-weak": "#a5a5a5",
		"color-background-inverse-base": "#111111",
		"color-background-inverse-strong": "#e9e9e9",
		"color-background-brand": "#e60023",
		"color-background-education": "#0074e8",
		"color-background-wash-dark": "rgba(0, 0, 0, 0.8)",
		"color-background-wash-light": "rgba(255, 255, 255, 0.9)",
		"color-background-dark": "#111111",
		"color-background-light": "#ffffff",
		"color-background-elevation-accent": "#f1f1f1",
		"color-background-elevation-floating": "rgba(0, 0, 0, 0)",
		"color-background-elevation-raised": "rgba(0, 0, 0, 0)",
		"color-background-avatar-placeholder": "#efefef",
		"color-background-avatar-wash": "rgba(0, 0, 0, 0.06)",
		"color-background-badge-neutral-default": "#767676",
		"color-background-badge-neutral-hover": "#767676",
		"color-background-badge-info-default": "#0074e8",
		"color-background-badge-info-hover": "#005fcb",
		"color-background-badge-error-default": "#cc0000",
		"color-background-badge-error-hover": "#cc0000",
		"color-background-badge-warning-default": "#bd5b00",
		"color-background-badge-warning-hover": "#bd5b00",
		"color-background-badge-success-default": "#008753",
		"color-background-badge-success-hover": "#008753",
		"color-background-badge-recommendation-default": "#812ae7",
		"color-background-badge-recommendation-hover": "#812ae7",
		"color-background-badge-lightwash-default": "rgba(255, 255, 255, 0.9)",
		"color-background-badge-lightwash-hover": "rgba(255, 255, 255, 0.9)",
		"color-background-badge-darkwash-default": "rgba(0, 0, 0, 0.8)",
		"color-background-badge-darkwash-hover": "rgba(0, 0, 0, 0.8)",
		"color-background-box-default": "#ffffff",
		"color-background-box-info-base": "#0074e8",
		"color-background-box-info-weak": "#d7edff",
		"color-background-box-error-base": "#cc0000",
		"color-background-box-error-weak": "#ffe0e0",
		"color-background-box-warning-base": "#bd5b00",
		"color-background-box-warning-weak": "#ffe4c1",
		"color-background-box-success-base": "#008753",
		"color-background-box-success-weak": "#c3f9c2",
		"color-background-box-recommendation-base": "#812ae7",
		"color-background-box-recommendation-weak": "#e9e4ff",
		"color-background-box-shopping": "#0074e8",
		"color-background-box-primary": "#e60023",
		"color-background-box-secondary": "#e9e9e9",
		"color-background-box-tertiary": "#767676",
		"color-background-box-selected": "#111111",
		"color-background-box-inverse": "#111111",
		"color-background-box-brand": "#e60023",
		"color-background-box-education": "#0074e8",
		"color-background-box-elevation-accent": "#f1f1f1",
		"color-background-box-elevation-floating": "rgba(0, 0, 0, 0)",
		"color-background-box-elevation-raised": "rgba(0, 0, 0, 0)",
		"color-background-box-lightwash": "#e2e2e2",
		"color-background-box-darkwash": "#dadada",
		"color-background-box-transparentdarkgray": "rgba(51, 51, 51, 0.8)",
		"color-background-box-dark": "#111111",
		"color-background-box-light": "#ffffff",
		"color-background-box-transparent": "rgba(0, 0, 0, 0)",
		"color-background-button-primary-default": "#e60023",
		"color-background-button-primary-hover": "#b60000",
		"color-background-button-primary-active": "#a3081a",
		"color-background-button-primary-disabled": "#e9e9e9",
		"color-background-button-secondary-default": "#e9e9e9",
		"color-background-button-secondary-hover": "#e2e2e2",
		"color-background-button-secondary-active": "#dadada",
		"color-background-button-secondary-disabled": "#e9e9e9",
		"color-background-button-tertiary-default": "rgba(0, 0, 0, 0)",
		"color-background-button-tertiary-hover": "rgba(0, 0, 0, 0.06)",
		"color-background-button-tertiary-active": "rgba(0, 0, 0, 0.1)",
		"color-background-button-tertiary-disabled": "#e9e9e9",
		"color-background-button-shopping-default": "#0074e8",
		"color-background-button-shopping-hover": "#4a8ad4",
		"color-background-button-shopping-active": "#4a85c9",
		"color-background-button-white-default": "#ffffff",
		"color-background-button-white-hover": "#f0f0f0",
		"color-background-button-white-active": "#e0e0e0",
		"color-background-button-white-disabled": "#e9e9e9",
		"color-background-button-gray-default": "#767676",
		"color-background-button-gray-hover": "#878787",
		"color-background-button-gray-active": "#828282",
		"color-background-button-gray-disabled": "#e9e9e9",
		"color-background-button-semitransparentdefault-default": "rgba(255, 255, 255, 0.8)",
		"color-background-button-semitransparentdefault-hover": "#f0f0f0",
		"color-background-button-semitransparentdefault-active": "#e0e0e0",
		"color-background-button-semitransparentwhite-default": "rgba(255, 255, 255, 0.8)",
		"color-background-button-semitransparentwhite-hover": "#f0f0f0",
		"color-background-button-semitransparentwhite-active": "rgba(255, 255, 255, 0.8)",
		"color-background-button-semitransparentwhite-disabled": "#e9e9e9",
		"color-background-button-semitransparentdark-default": "rgba(51, 51, 51, 0.8)",
		"color-background-button-semitransparentdark-hover": "#121212",
		"color-background-button-semitransparentdark-active": "#1f1f1f",
		"color-background-button-semitransparentdark-disabled": "#e9e9e9",
		"color-background-button-transparentdarkbackground-default": "rgba(0, 0, 0, 0)",
		"color-background-button-transparentdarkbackground-hover": "rgba(0, 0, 0, 0.06)",
		"color-background-button-transparentdarkbackground-active": "rgba(0, 0, 0, 0.1)",
		"color-background-button-transparentdarkbackground-disabled": "#e9e9e9",
		"color-background-button-disabled-default": "#e9e9e9",
		"color-background-button-selected-default": "#111111",
		"color-background-button-selected-disabled": "#111111",
		"color-background-combobox-item-default": "rgba(0, 0, 0, 0)",
		"color-background-combobox-item-hover": "#efefef",
		"color-background-checkbox-disabled": "#efefef",
		"color-background-checkbox-checked-default": "#111111",
		"color-background-checkbox-checked-error": "#111111",
		"color-background-checkbox-unchecked-default": "#ffffff",
		"color-background-checkbox-unchecked-error": "#ffffff",
		"color-background-datepicker-container": "#ffffff",
		"color-background-datepicker-range-default": "rgba(0, 0, 0, 0.06)",
		"color-background-datepicker-range-hover": "rgba(0, 0, 0, 0.06)",
		"color-background-datepicker-range-active": "rgba(0, 0, 0, 0.06)",
		"color-background-datepicker-button-unselected-default": "#ffffff",
		"color-background-datepicker-button-unselected-hover": "rgba(0, 0, 0, 0.06)",
		"color-background-datepicker-button-unselected-active": "rgba(0, 0, 0, 0.06)",
		"color-background-datepicker-button-selected-default": "#111111",
		"color-background-datepicker-button-selected-hover": "#111111",
		"color-background-datepicker-button-selected-active": "#111111",
		"color-background-formfield-primary": "#ffffff",
		"color-background-formfield-disabled": "#efefef",
		"color-background-formfield-selected": "#111111",
		"color-background-iconbutton-semitransparentdark-default": "rgba(51, 51, 51, 0.8)",
		"color-background-iconbutton-semitransparentdark-hover": "#121212",
		"color-background-iconbutton-semitransparentdark-active": "#1f1f1f",
		"color-background-iconbutton-semitransparentdark-disabled": "#e9e9e9",
		"color-background-mask-wash": "rgba(0, 0, 0, 0.04)",
		"color-background-overlay": "#ffffff",
		"color-background-popover-primary": "#ffffff",
		"color-background-popover-secondary": "#111111",
		"color-background-popover-education": "#0074e8",
		"color-background-tabs-default-base": "#ffffff",
		"color-background-tabs-default-hover": "#e9e9e9",
		"color-background-tabs-default-active": "#e2e2e2",
		"color-background-tabs-transparent-base": "rgba(0, 0, 0, 0)",
		"color-background-tabs-transparent-hover": "rgba(0, 0, 0, 0.06)",
		"color-background-tabs-transparent-active": "rgba(0, 0, 0, 0.1)",
		"color-background-tag-primary-default": "#e9e9e9",
		"color-background-tag-primary-hover": "#e2e2e2",
		"color-background-tag-primary-active": "#dadada",
		"color-background-tag-error-default": "#cc0000",
		"color-background-tag-error-hover": "#ad081b",
		"color-background-tag-error-active": "#a3081a",
		"color-background-tag-warning-default": "#bd5b00",
		"color-background-tag-warning-hover": "#aa4900",
		"color-background-tag-warning-active": "#943a00",
		"color-background-searchguide-default-10": "#e9e4ff",
		"color-background-searchguide-default-11": "#e9e9e9",
		"color-background-searchguide-default-01": "#abdbff",
		"color-background-searchguide-default-02": "#a4f9ac",
		"color-background-searchguide-default-03": "#ffc58f",
		"color-background-searchguide-default-04": "#fcbbbb",
		"color-background-searchguide-default-05": "#d5c7ff",
		"color-background-searchguide-default-06": "#d7edff",
		"color-background-searchguide-default-07": "#c3f9c2",
		"color-background-searchguide-default-08": "#ffe4c1",
		"color-background-searchguide-default-09": "#fcbbbb",
		"color-background-searchguide-hover-10": "#e9e4ff",
		"color-background-searchguide-hover-11": "#e9e9e9",
		"color-background-searchguide-hover-01": "#abdbff",
		"color-background-searchguide-hover-02": "#a4f9ac",
		"color-background-searchguide-hover-03": "#ffc58f",
		"color-background-searchguide-hover-04": "#fcbbbb",
		"color-background-searchguide-hover-05": "#d5c7ff",
		"color-background-searchguide-hover-06": "#d7edff",
		"color-background-searchguide-hover-07": "#c3f9c2",
		"color-background-searchguide-hover-08": "#ffe4c1",
		"color-background-searchguide-hover-09": "#fcbbbb",
		"color-background-searchguide-active-10": "#e9e4ff",
		"color-background-searchguide-active-11": "#e9e9e9",
		"color-background-searchguide-active-01": "#abdbff",
		"color-background-searchguide-active-02": "#a4f9ac",
		"color-background-searchguide-active-03": "#ffc58f",
		"color-background-searchguide-active-04": "#fcbbbb",
		"color-background-searchguide-active-05": "#d5c7ff",
		"color-background-searchguide-active-06": "#d7edff",
		"color-background-searchguide-active-07": "#c3f9c2",
		"color-background-searchguide-active-08": "#ffe4c1",
		"color-background-searchguide-active-09": "#fcbbbb",
		"color-background-segmentedcontrol-container": "#efefef",
		"color-background-segmentedcontrol-tab-selected": "#ffffff",
		"color-background-switch-default-selected": "#111111",
		"color-background-switch-default-unselected": "#ffffff",
		"color-background-switch-disabled-selected": "#767676",
		"color-background-switch-disabled-unselected": "#efefef",
		"color-background-switch-hover-selected": "#111111",
		"color-background-switch-hover-unselected": "#ffffff",
		"color-background-switch-pressed-selected": "#111111",
		"color-background-switch-pressed-unselected": "#ffffff",
		"color-background-table-footer": "#ffffff",
		"color-background-table-row-hover": "#efefef",
		"color-background-table-row-selected": "#efefef",
		"color-background-tagdata-primary": "#e9e9e9",
		"color-background-tagdata-secondary": "#ffffff",
		"color-background-tagdata-disabled": "#efefef",
		"color-background-tableofcontents-item-default": "rgba(0, 0, 0, 0)",
		"color-background-tableofcontents-item-hover": "#e9e9e9",
		"color-background-tiledata-10": "#0050621A",
		"color-background-tiledata-11": "#de2c621A",
		"color-background-tiledata-12": "#660e001A",
		"color-background-tiledata-01": "#003c961A",
		"color-background-tiledata-02": "#11a69c1A",
		"color-background-tiledata-03": "#924af71A",
		"color-background-tiledata-04": "#d177111A",
		"color-background-tiledata-05": "#0081fe1A",
		"color-background-tiledata-06": "#ff53831A",
		"color-background-tiledata-07": "#00ab551A",
		"color-background-tiledata-08": "#4003871A",
		"color-background-tiledata-09": "#f2681f1A",
		"color-background-tiledata-hover": "#e9e9e9",
		"color-background-tiledata-disabled": "#efefef",
		"color-background-video-container-primary": "#111111",
		"color-background-video-container-secondary": "rgba(0, 0, 0, 0)",
		"color-border-container": "#cdcdcd",
		"color-border-default": "#767676",
		"color-border-error": "#cc0000",
		"color-border-focus": "rgba(0, 132, 255, 0.5)",
		"color-border-avatar": "#ffffff",
		"color-border-badge-default": "#ffffff",
		"color-border-badge-light": "#ffffff",
		"color-border-badge-dark": "#111111",
		"color-border-button-hover": "#cdcdcd",
		"color-border-button-pressed": "#cdcdcd",
		"color-border-checkbox-checked-default": "#111111",
		"color-border-checkbox-checked-error": "#cc0000",
		"color-border-checkbox-disabled": "#efefef",
		"color-border-checkbox-unchecked-default": "#767676",
		"color-border-checkbox-unchecked-error": "#cc0000",
		"color-border-checkbox-unchecked-hover": "#a5a5a5",
		"color-border-checkbox-unchecked-pressed": "#a5a5a5",
		"color-border-formfield-error-default": "#cc0000",
		"color-border-formfield-error-hover": "#ad081b",
		"color-border-formfield-disabled": "#efefef",
		"color-border-popover-primary": "#ffffff",
		"color-border-popover-secondary": "#111111",
		"color-border-popover-education": "#0074e8",
		"color-border-pulsar-default": "#0074e8",
		"color-border-pulsar-hover": "#dce9fa",
		"color-border-switch-default-selected": "#111111",
		"color-border-switch-default-unselected": "#767676",
		"color-border-switch-disabled-selected": "#ffffff",
		"color-border-switch-disabled-unselected": "#cdcdcd",
		"color-border-switch-focus-inner": "#767676",
		"color-border-switch-focus-outer": "#767676",
		"color-border-switch-hover-unselected": "#767676",
		"color-border-switch-pressed-unselected": "#767676",
		"color-border-table-row-selected": "#111111",
		"color-border-tag-disabled": "#767676",
		"color-data-visualization-10": "#005062",
		"color-data-visualization-11": "#de2c62",
		"color-data-visualization-12": "#660e00",
		"color-data-visualization-01": "#003c96",
		"color-data-visualization-02": "#11a69c",
		"color-data-visualization-03": "#924af7",
		"color-data-visualization-04": "#d17711",
		"color-data-visualization-05": "#0081fe",
		"color-data-visualization-06": "#ff5383",
		"color-data-visualization-07": "#00ab55",
		"color-data-visualization-08": "#400387",
		"color-data-visualization-09": "#f2681f",
		"color-data-visualization-primary": "#0081fe",
		"color-data-visualization-success-graph": "#008753",
		"color-data-visualization-success-text": "#005f3e",
		"color-data-visualization-error-graph": "#ed0000",
		"color-data-visualization-error-text": "#cc0000",
		"font-size-100": "12px",
		"font-size-200": "14px",
		"font-size-300": "16px",
		"font-size-400": "20px",
		"font-size-500": "28px",
		"font-size-600": "36px",
		"font-size-datepicker-date": "16px",
		"font-size-datepicker-heading": "20px",
		"font-weight-normal": "400",
		"font-weight-semibold": "600",
		"font-weight-bold": "700",
		"font-weight-datepicker-date": "400",
		"font-weight-datepicker-heading": "700",
		"font-family-default-latin": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, 'ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', Arial, sans-serif",
		"font-family-default-japanese": "'SF Pro JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', Arial, sans-serif",
		"font-family-code": "SFMono-Medium, 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace",
		"font-family-datepicker-date": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, 'ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', Arial, sans-serif",
		"font-family-datepicker-heading": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, 'ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', Arial, sans-serif",
		"font-letterspacing-datepicker-date": "normal",
		"font-letterspacing-datepicker-heading": "normal",
		"font-lineheight-datepicker-date": "22px",
		"font-lineheight-datepicker-heading": "normal",
		"font-textdecoration-datepicker-date": "none",
		"font-textdecoration-datepicker-heading": "none",
		"opacity-0": "0",
		"opacity-100": "0.04",
		"opacity-200": "0.2",
		"opacity-300": "0.4",
		"opacity-400": "0.8",
		"opacity-500": "0.9",
		"rounding-0": "0px",
		"rounding-100": "4px",
		"rounding-200": "8px",
		"rounding-300": "12px",
		"rounding-400": "16px",
		"rounding-500": "20px",
		"rounding-600": "24px",
		"rounding-700": "28px",
		"rounding-800": "32px",
		"rounding-pill": "999px",
		"rounding-circle": "50%",
		"rounding-datepicker-container": "16px",
		"rounding-datepicker-days": "50%",
		"rounding-datepicker-navigation": "50%",
		"rounding-datepicker-range-start": "50% 0px 0px 50%",
		"rounding-datepicker-range-middle": "0px",
		"rounding-datepicker-range-end": "0px 50% 50% 0px",
		"space-0": "0px",
		"space-100": "4px",
		"space-200": "8px",
		"space-300": "12px",
		"space-400": "16px",
		"space-500": "20px",
		"space-600": "24px",
		"space-700": "28px",
		"space-800": "32px",
		"space-900": "36px",
		"space-1000": "40px",
		"space-1100": "44px",
		"space-1200": "48px",
		"space-1300": "52px",
		"space-1400": "56px",
		"space-1500": "60px",
		"space-1600": "64px",
		"space-negative-100": "-4px",
		"space-negative-200": "-8px",
		"space-negative-300": "-12px",
		"space-negative-400": "-16px",
		"space-negative-500": "-20px",
		"space-negative-600": "-24px",
		"space-negative-700": "-28px",
		"space-negative-800": "-32px",
		"space-negative-900": "-36px",
		"space-negative-1000": "-40px",
		"space-negative-1100": "-44px",
		"space-negative-1200": "-48px",
		"space-negative-1300": "-52px",
		"space-negative-1400": "-56px",
		"space-negative-1500": "-60px",
		"space-negative-1600": "-64px",
		"elevation-floating": "0px 0px 8px 0px rgba(0, 0, 0, 0.1)",
		"elevation-raised-top": "0px 2px 8px 0px rgba(0, 0, 0, 0.12)",
		"elevation-raised-bottom": "0px -2px 8px 0px rgba(0, 0, 0, 0.12)",
		"elevation-datepicker": "0px 0px 8px 0px rgba(0, 0, 0, 0.1)"
	};

	const useHexColor = () => {
	    const { colorSchemeName } = gestalt.useColorScheme();
	    return (vizColor) => colorSchemeName === 'lightMode'
	        ? lightColorDesignTokens[`color-data-visualization-${vizColor}`]
	        : darkColorDesignTokens[`color-data-visualization-${vizColor}`];
	};
	function usePatterns() {
	    const hexColor = useHexColor();
	    return (jsxRuntime.jsxs("defs", { children: [jsxRuntime.jsx("g", { id: "points-01", children: jsxRuntime.jsx("rect", { height: "8", width: "8" }) }), jsxRuntime.jsx("g", { id: "points-02", children: jsxRuntime.jsx("path", { d: "M0,0l4,8h-8z" }) }), jsxRuntime.jsx("g", { id: "points-03", children: jsxRuntime.jsx("path", { d: "M0,0h8l-4,8z" }) }), jsxRuntime.jsx("g", { id: "points-04", children: jsxRuntime.jsx("path", { d: "M36.6629 4.5L44.4605 28.1564L24 42.81L3.53951 28.1564L11.3371 4.5H36.6629Z", transform: "scale(0.22)" }) }), jsxRuntime.jsx("g", { id: "points-05", children: jsxRuntime.jsx("rect", { height: "6", transform: "rotate(45)", width: "6" }) }), jsxRuntime.jsx("g", { id: "points-06", children: jsxRuntime.jsx("rect", { height: "8", width: "8" }) }), jsxRuntime.jsx("g", { id: "points-07", children: jsxRuntime.jsx("path", { d: "M0,0l4,8h-8z" }) }), jsxRuntime.jsx("g", { id: "points-08", children: jsxRuntime.jsx("path", { d: "M24 3.45525L42 13.741V34.259L24 44.5447L6 34.259V13.741L24 3.45525Z", transform: "scale(0.22)" }) }), jsxRuntime.jsx("g", { id: "points-09", children: jsxRuntime.jsx("path", { d: "M24 1.5L48 18.6885L38.8328 46.5H9.16718L0 18.6885L24 1.5Z", transform: "scale(0.22)" }) }), jsxRuntime.jsx("g", { id: "points-10", children: jsxRuntime.jsx("rect", { height: "6", transform: "rotate(45)", width: "6" }) }), jsxRuntime.jsx("g", { id: "points-11", children: jsxRuntime.jsx("path", { d: "M24 3.45525L42 13.741V34.259L24 44.5447L6 34.259V13.741L24 3.45525Z", transform: "scale(0.22)" }) }), jsxRuntime.jsx("g", { id: "points-12", children: jsxRuntime.jsx("path", { d: "M0,0h8l-4,8z" }) }), jsxRuntime.jsx("pattern", { height: "4", id: "pattern-01", patternUnits: "userSpaceOnUse", width: "4", children: jsxRuntime.jsx("rect", { fill: hexColor('01'), height: "4", width: "4" }) }), jsxRuntime.jsxs("pattern", { height: "5", id: "pattern-02", patternUnits: "userSpaceOnUse", width: "5", children: [jsxRuntime.jsx("rect", { fill: TOKEN_COLOR_WHITE_MOCHIMALIST_0, height: "5", width: "5" }), jsxRuntime.jsx("circle", { cx: "2", cy: "2", fill: hexColor('02'), r: "2" })] }), jsxRuntime.jsxs("pattern", { height: "3", id: "pattern-03", patternUnits: "userSpaceOnUse", width: "3", children: [jsxRuntime.jsx("rect", { fill: TOKEN_COLOR_WHITE_MOCHIMALIST_0, height: "3", width: "3" }), jsxRuntime.jsx("rect", { fill: hexColor('03'), height: "2", width: "2" })] }), jsxRuntime.jsxs("pattern", { height: "7", id: "pattern-04", patternUnits: "userSpaceOnUse", width: "7", children: [jsxRuntime.jsx("rect", { fill: TOKEN_COLOR_WHITE_MOCHIMALIST_0, height: "7", width: "7" }), jsxRuntime.jsx("circle", { cx: "3", cy: "3", fill: TOKEN_COLOR_WHITE_MOCHIMALIST_0, r: "2.5", stroke: hexColor('04'), strokeWidth: "1px" })] }), jsxRuntime.jsxs("pattern", { height: "8", id: "pattern-05", patternUnits: "userSpaceOnUse", width: "8", children: [jsxRuntime.jsx("rect", { fill: hexColor('05'), height: "8", width: "8", x: "0", y: "0" }), jsxRuntime.jsx("path", { d: "M 0 0 L 4 8 L 8 0", fill: "none", stroke: TOKEN_COLOR_WHITE_MOCHIMALIST_0, strokeWidth: "1" })] }), jsxRuntime.jsx("pattern", { height: "4", id: "pattern-06", patternUnits: "userSpaceOnUse", width: "4", children: jsxRuntime.jsx("rect", { fill: TOKEN_COLOR_WHITE_MOCHIMALIST_0, height: "4", stroke: hexColor('06'), strokeWidth: "1px", width: "4" }) }), jsxRuntime.jsxs("pattern", { height: "8", id: "pattern-07", patternTransform: "rotate(90)", patternUnits: "userSpaceOnUse", width: "8", children: [jsxRuntime.jsx("rect", { fill: TOKEN_COLOR_WHITE_MOCHIMALIST_0, height: "8", width: "8" }), jsxRuntime.jsx("path", { d: "M 0 0 L 4 8 L 8 0", fill: "none", stroke: hexColor('07'), strokeWidth: "1" })] }), jsxRuntime.jsxs("pattern", { height: "8", id: "pattern-08", patternUnits: "userSpaceOnUse", width: "8", x: "0", y: "0", children: [jsxRuntime.jsx("rect", { fill: TOKEN_COLOR_WHITE_MOCHIMALIST_0, height: "8", width: "8" }), jsxRuntime.jsx("rect", { fill: hexColor('08'), height: "4", width: "4", x: "0", y: "0" }), jsxRuntime.jsx("rect", { fill: hexColor('08'), height: "4", width: "4", x: "4", y: "4" })] }), jsxRuntime.jsxs("pattern", { height: "4", id: "pattern-09", patternTransform: "rotate(90)", patternUnits: "userSpaceOnUse", width: "4", children: [jsxRuntime.jsx("rect", { fill: TOKEN_COLOR_WHITE_MOCHIMALIST_0, height: "4", width: "4" }), jsxRuntime.jsx("rect", { fill: hexColor('09'), height: "4", width: "2" })] }), jsxRuntime.jsxs("pattern", { height: "8", id: "pattern-10", patternTransform: "rotate(45)", patternUnits: "userSpaceOnUse", width: "8", x: "0", y: "0", children: [jsxRuntime.jsx("rect", { fill: TOKEN_COLOR_WHITE_MOCHIMALIST_0, height: "8", width: "8" }), jsxRuntime.jsx("rect", { fill: hexColor('10'), height: "5", width: "5", x: "0", y: "0" })] }), jsxRuntime.jsxs("pattern", { height: "4", id: "pattern-11", patternTransform: "rotate(180)", patternUnits: "userSpaceOnUse", width: "4", children: [jsxRuntime.jsx("rect", { fill: TOKEN_COLOR_WHITE_MOCHIMALIST_0, height: "4", width: "4" }), jsxRuntime.jsx("rect", { fill: hexColor('11'), height: "4", width: "2" })] }), jsxRuntime.jsxs("pattern", { height: "8", id: "pattern-12", patternTransform: "rotate(45)", patternUnits: "userSpaceOnUse", width: "8", x: "0", y: "0", children: [jsxRuntime.jsx("rect", { fill: hexColor('12'), height: "8", width: "8", x: "0", y: "0" }), jsxRuntime.jsx("rect", { fill: TOKEN_COLOR_WHITE_MOCHIMALIST_0, height: "4", width: "4", x: "0", y: "0" })] }), jsxRuntime.jsx("pattern", { height: "4", id: "pattern-referencearea-01", patternTransform: "rotate(45)", patternUnits: "userSpaceOnUse", width: "4", children: jsxRuntime.jsx("rect", { fill: TOKEN_COLOR_BORDER_CONTAINER, height: "4", width: "2" }) })] }));
	}

	function GraphPoint({ color, cx, cy, noReposition = false }) {
	    const hexColor = useHexColor();
	    const decalDotCoordCorrection = {
	        '01': { coordinate: [4, 4] },
	        '02': { coordinate: [0, 4], fill: 'empty' },
	        '03': { coordinate: [4, 4] },
	        '04': { coordinate: [5.5, 5.5], fill: 'empty', stroke: 'bold' },
	        '05': { coordinate: [0, 4.5] },
	        '06': { coordinate: [4, 4], fill: 'empty' },
	        '07': { coordinate: [0, 4] },
	        '08': { coordinate: [5.5, 5.5], fill: 'empty', stroke: 'bold' },
	        '09': { coordinate: [5.5, 5.5] },
	        '10': { coordinate: [0, 4.5], fill: 'empty' },
	        '11': { coordinate: [5.5, 5.5] },
	        '12': { coordinate: [4, 4], fill: 'empty' },
	    };
	    const cxCorrection = noReposition ? 0 : decalDotCoordCorrection[color].coordinate[0];
	    const cyCorrection = noReposition ? 0 : decalDotCoordCorrection[color].coordinate[1];
	    return cy === null ? null : (jsxRuntime.jsx("use", { fill: 
	        // @ts-expect-error - TS2339 - Property 'fill' does not exist on type '{ readonly coordinate: readonly [4, 4]; } | { readonly coordinate: readonly [0, 4]; readonly fill: "empty"; } | { readonly coordinate: readonly [4, 4]; } | { readonly coordinate: readonly [5.5, 5.5]; readonly fill: "empty"; readonly stroke: "bold"; } | ... 7 more ... | { ...; }'.
	        decalDotCoordCorrection[color].fill === 'empty'
	            ? TOKEN_COLOR_WHITE_MOCHIMALIST_0
	            : hexColor(color), href: `#points-${color}`, stroke: hexColor(color), 
	        // @ts-expect-error - TS2339 - Property 'stroke' does not exist on type '{ readonly coordinate: readonly [4, 4]; } | { readonly coordinate: readonly [0, 4]; readonly fill: "empty"; } | { readonly coordinate: readonly [4, 4]; } | { readonly coordinate: readonly [5.5, 5.5]; readonly fill: "empty"; readonly stroke: "bold"; } | ... 7 more ... | { ...; }'.
	        strokeWidth: decalDotCoordCorrection[color].stroke === 'bold' ? '6' : '1.5', x: cx - cxCorrection, y: cy - cyCorrection }));
	}
	const renderGraphPoint = (options) => {
	    function RenderPoint({ cx, cy }) {
	        return jsxRuntime.jsx(GraphPoint, { color: options.color, cx: cx, cy: cy }, options.color + cy + cx);
	    }
	    return RenderPoint;
	};

	/**
	 * [LegendIcon](https://gestalt.pinterest.systems/web/chartgraph) should only be used within custom tooltips. See the [custom tooltip variant](https://gestalt.pinterest.systems/web/chartgraph#Tooltip) for implementation guidance.
	 */
	function LegendIcon({ payloadData }) {
	    const { decal: showVisualPattern } = useChartContext();
	    const isAccessible = showVisualPattern === 'visualPattern';
	    const { colorSchemeName } = gestalt.useColorScheme();
	    // @ts-expect-error - TS2339 - Property 'referenceArea' does not exist on type '{ dataKey: string; name: string; stroke: string | null | undefined; value: number; strokeDasharray: string | number | null | undefined; strokeWidth?: number | undefined; color: string | null | undefined; fill: string | ... 1 more ... | undefined; legendType?: "line" | ... 1 more ... | undefined; isLegend?: boolean |...'.
	    if (payloadData.referenceArea === 'default') {
	        const dimension = 16;
	        return (jsxRuntime.jsx("svg", { "aria-hidden": true, height: dimension, width: dimension, children: jsxRuntime.jsx("rect", { height: dimension, rx: 2, style: { fill: 'url(#pattern-referencearea-01)', strokeOpacity: 0.3 }, width: dimension }) }));
	    }
	    const source = colorSchemeName === 'lightMode' ? lightColorDesignTokens : darkColorDesignTokens;
	    const colorMap = Object.entries({
	        '01': source['color-data-visualization-01'],
	        '02': source['color-data-visualization-02'],
	        '03': source['color-data-visualization-03'],
	        '04': source['color-data-visualization-04'],
	        '05': source['color-data-visualization-05'],
	        '06': source['color-data-visualization-06'],
	        '07': source['color-data-visualization-07'],
	        '08': source['color-data-visualization-08'],
	        '09': source['color-data-visualization-09'],
	        '10': source['color-data-visualization-10'],
	        '11': source['color-data-visualization-11'],
	        '12': source['color-data-visualization-12'],
	    });
	    // @ts-expect-error - TS2339 - Property 'legendType' does not exist on type '{ dataKey: string; name: string; stroke: string | null | undefined; value: number; strokeDasharray: string | number | null | undefined; strokeWidth?: number | undefined; color: string | null | undefined; fill: string | ... 1 more ... | undefined; legendType?: "line" | ... 1 more ... | undefined; isLegend?: boolean |...'. | TS2339 - Property 'strokeWidth' does not exist on type '{ dataKey: string; name: string; stroke: string | null | undefined; value: number; strokeDasharray: string | number | null | undefined; strokeWidth?: number | undefined; color: string | null | undefined; fill: string | ... 1 more ... | undefined; legendType?: "line" | ... 1 more ... | undefined; isLegend?: boolean |...'.
	    const isLine = payloadData.legendType === 'line' || !!payloadData.strokeWidth;
	    // @ts-expect-error - TS2339 - Property 'legendType' does not exist on type '{ dataKey: string; name: string; stroke: string | null | undefined; value: number; strokeDasharray: string | number | null | undefined; strokeWidth?: number | undefined; color: string | null | undefined; fill: string | ... 1 more ... | undefined; legendType?: "line" | ... 1 more ... | undefined; isLegend?: boolean |...'. | TS2339 - Property 'strokeWidth' does not exist on type '{ dataKey: string; name: string; stroke: string | null | undefined; value: number; strokeDasharray: string | number | null | undefined; strokeWidth?: number | undefined; color: string | null | undefined; fill: string | ... 1 more ... | undefined; legendType?: "line" | ... 1 more ... | undefined; isLegend?: boolean |...'.
	    const isBar = payloadData.legendType === 'rect' || !payloadData.strokeWidth;
	    if (isBar) {
	        const dimension = payloadData.isLegend || isAccessible ? 16 : 8;
	        return (jsxRuntime.jsx("svg", { "aria-hidden": true, height: dimension, width: dimension, children: jsxRuntime.jsx("rect", { height: dimension, rx: 2, 
	                // @ts-expect-error - TS2339 - Property 'color' does not exist on type '{ dataKey: string; name: string; stroke: string | null | undefined; value: number; strokeDasharray: string | number | null | undefined; strokeWidth?: number | undefined; color: string | null | undefined; fill: string | ... 1 more ... | undefined; legendType?: "line" | ... 1 more ... | undefined; isLegend?: boolean |...'. | TS2339 - Property 'fill' does not exist on type '{ dataKey: string; name: string; stroke: string | null | undefined; value: number; strokeDasharray: string | number | null | undefined; strokeWidth?: number | undefined; color: string | null | undefined; fill: string | ... 1 more ... | undefined; legendType?: "line" | ... 1 more ... | undefined; isLegend?: boolean |...'.
	                style: { fill: payloadData.color || payloadData.fill }, width: dimension }) }));
	    }
	    // @ts-expect-error - TS2339 - Property 'strokeDasharray' does not exist on type '{ dataKey: string; name: string; stroke: string | null | undefined; value: number; strokeDasharray: string | number | null | undefined; strokeWidth?: number | undefined; color: string | null | undefined; fill: string | ... 1 more ... | undefined; legendType?: "line" | ... 1 more ... | undefined; isLegend?: boolean |...'.
	    const isEstimate = payloadData.strokeDasharray === '8 8';
	    if (isLine && isAccessible) {
	        const colorId = colorMap
	            .map(([colorNumber, color]) => {
	            // @ts-expect-error - TS2339 - Property 'stroke' does not exist on type '{ dataKey: string; name: string; stroke: string | null | undefined; value: number; strokeDasharray: string | number | null | undefined; strokeWidth?: number | undefined; color: string | null | undefined; fill: string | ... 1 more ... | undefined; legendType?: "line" | ... 1 more ... | undefined; isLegend?: boolean |...'.
	            if (color === payloadData.stroke)
	                return colorNumber;
	            return undefined;
	        })
	            .filter(Boolean);
	        const colorPoint = colorId[0];
	        return (jsxRuntime.jsxs("svg", { height: "14", viewBox: "0 0 12 12", width: "14", children: [jsxRuntime.jsx("rect", { height: 3, style: { fill: 'transparent' }, width: 1, x: 4, y: 8 }), jsxRuntime.jsx(GraphPoint, { color: colorPoint, cx: 7, cy: 7 }), jsxRuntime.jsx("rect", { height: 3, style: { fill: 'transparent' }, width: 1, x: 4, y: 8 })] }));
	    }
	    if (isLine && !isEstimate) {
	        const dimension = payloadData.isLegend ? 24 : 12;
	        return (jsxRuntime.jsx("svg", { height: 16, width: dimension, children: jsxRuntime.jsx("rect", { height: 3, rx: 2, style: { fill: payloadData.stroke }, width: dimension, y: 8 }) }));
	    }
	    if (isLine && isEstimate) {
	        const dimension = payloadData.isLegend ? 24 : 12;
	        return (jsxRuntime.jsxs("svg", { height: 16, width: dimension, children: [jsxRuntime.jsx("rect", { fill: payloadData.stroke, height: 3, rx: 1, width: 3, x: 0, y: 8 }), jsxRuntime.jsx("rect", { fill: "transparent", height: 3, width: 2, x: 3, y: 8 }), jsxRuntime.jsx("rect", { fill: payloadData.stroke, height: 3, rx: 1, width: 3, x: 5, y: 8 }), jsxRuntime.jsx("rect", { fill: "transparent", height: 3, width: 2, x: 8, y: 8 }), jsxRuntime.jsx("rect", { fill: payloadData.stroke, height: 3, rx: 1, width: 3, x: 10, y: 8 })] }));
	    }
	}

	function renderAxis({ isHorizontalLayout, isHorizontalBiaxialLayout, isVerticalLayout, isTimeSeries, isVerticalBiaxialLayout, isBar, isCombo, range, tickFormatter, labelMap, tickCount, }) {
	    const FONT_STYLE_CATEGORIES = {
	        fontSize: TOKEN_FONT_SIZE_100,
	        fontFamily: TOKEN_FONT_FAMILY_DEFAULT_LATIN,
	        fontWeight: TOKEN_FONT_WEIGHT_NORMAL,
	    };
	    const FONT_STYLE_VALUES = {
	        color: TOKEN_COLOR_TEXT_SUBTLE,
	        fontSize: TOKEN_FONT_SIZE_100,
	        fontFamily: TOKEN_FONT_FAMILY_DEFAULT_LATIN,
	        fontWeight: TOKEN_FONT_WEIGHT_NORMAL,
	    };
	    const isRtl = (document === null || document === void 0 ? void 0 : document.dir) === 'rtl';
	    return (jsxRuntime.jsxs(require$$0.Fragment, { children: [isHorizontalLayout && (jsxRuntime.jsxs(require$$0.Fragment, { children: [jsxRuntime.jsx(recharts.XAxis, { axisLine: false, dataKey: "name", 
	                        // @ts-expect-error - TS2322 - Type 'false | [number | "auto" | "dataMin" | "dataMax" | ((arg1: number) => number), number | "auto" | "dataMin" | "dataMax" | ((arg1: number) => number)] | undefined' is not assignable to type 'AxisDomain | undefined'.
	                        domain: isTimeSeries ? !Array.isArray(range) && (range === null || range === void 0 ? void 0 : range.xAxisBottom) : undefined, orientation: "bottom", padding: isTimeSeries && (isBar || isCombo) ? { left: 100, right: 100 } : undefined, reversed: isRtl, scale: isTimeSeries ? 'time' : undefined, 
	                        // @ts-expect-error - TS2322 - Type '{ readonly fontSize: "var(--font-size-100)"; readonly fontFamily: "var(--font-family-default-latin)"; readonly fontWeight: "var(--font-weight-normal)"; }' is not assignable to type 'Properties<string | number, string & {}>'.
	                        style: FONT_STYLE_CATEGORIES, 
	                        // @ts-expect-error - TS2322 - Type '((arg1: number, arg2: number) => string | number) | ((value: string) => string) | undefined' is not assignable to type '((value: any, index: number) => string) | undefined'.
	                        tickFormatter: isTimeSeries
	                            ? (tickFormatter === null || tickFormatter === void 0 ? void 0 : tickFormatter.xAxisBottom) || (tickFormatter === null || tickFormatter === void 0 ? void 0 : tickFormatter.timeseries)
	                            : (value) => (labelMap === null || labelMap === void 0 ? void 0 : labelMap[value]) || value, tickLine: false, type: isTimeSeries ? 'number' : 'category' }), jsxRuntime.jsx(recharts.YAxis, { axisLine: false, domain: Array.isArray(range) ? range : range === null || range === void 0 ? void 0 : range.yAxisLeft, orientation: isRtl ? 'right' : 'left', 
	                        // @ts-expect-error - TS2322 - Type '{ readonly color: "var(--color-text-subtle)"; readonly fontSize: "var(--font-size-100)"; readonly fontFamily: "var(--font-family-default-latin)"; readonly fontWeight: "var(--font-weight-normal)"; }' is not assignable to type 'Properties<string | number, string & {}>'.
	                        style: FONT_STYLE_VALUES, tickCount: tickCount, 
	                        // @ts-expect-error - TS2322 - Type '((arg1: number, arg2: number) => string | number) | undefined' is not assignable to type '((value: any, index: number) => string) | undefined'.
	                        tickFormatter: tickFormatter === null || tickFormatter === void 0 ? void 0 : tickFormatter.yAxisLeft, tickLine: false, yAxisId: "left" })] })), isHorizontalBiaxialLayout && (jsxRuntime.jsx(recharts.YAxis, { axisLine: false, domain: Array.isArray(range) ? range : range === null || range === void 0 ? void 0 : range.yAxisLeft, orientation: isRtl ? 'left' : 'right', 
	                // @ts-expect-error - TS2322 - Type '{ readonly color: "var(--color-text-subtle)"; readonly fontSize: "var(--font-size-100)"; readonly fontFamily: "var(--font-family-default-latin)"; readonly fontWeight: "var(--font-weight-normal)"; }' is not assignable to type 'Properties<string | number, string & {}>'.
	                style: FONT_STYLE_VALUES, tickCount: tickCount, 
	                // @ts-expect-error - TS2322 - Type '((arg1: number, arg2: number) => string | number) | undefined' is not assignable to type '((value: any, index: number) => string) | undefined'.
	                tickFormatter: tickFormatter === null || tickFormatter === void 0 ? void 0 : tickFormatter.yAxisRight, tickLine: false, yAxisId: "right" })), isVerticalLayout && (jsxRuntime.jsxs(require$$0.Fragment, { children: [jsxRuntime.jsx(recharts.XAxis, { axisLine: false, 
	                        // @ts-expect-error - TS2322 - Type '[number | "auto" | "dataMin" | "dataMax" | ((arg1: number) => number), number | "auto" | "dataMin" | "dataMax" | ((arg1: number) => number)] | { xAxisBottom?: [number | "auto" | "dataMin" | "dataMax" | ((arg1: number) => number), number | ... 3 more ... | ((arg1: number) => number)] | undefined; xAxisTop?: [...] | u...' is not assignable to type 'AxisDomain | undefined'.
	                        domain: range, orientation: "bottom", reversed: isRtl, 
	                        // @ts-expect-error - TS2322 - Type '{ readonly color: "var(--color-text-subtle)"; readonly fontSize: "var(--font-size-100)"; readonly fontFamily: "var(--font-family-default-latin)"; readonly fontWeight: "var(--font-weight-normal)"; }' is not assignable to type 'Properties<string | number, string & {}>'.
	                        style: FONT_STYLE_VALUES, tickCount: tickCount, 
	                        // @ts-expect-error - TS2322 - Type '((arg1: number, arg2: number) => string | number) | undefined' is not assignable to type '((value: any, index: number) => string) | undefined'.
	                        tickFormatter: tickFormatter === null || tickFormatter === void 0 ? void 0 : tickFormatter.xAxisBottom, tickLine: false, type: "number", xAxisId: "bottom" }), jsxRuntime.jsx(recharts.YAxis, { axisLine: false, dataKey: "name", orientation: isRtl ? 'right' : 'left', 
	                        // @ts-expect-error - TS2322 - Type '{ readonly fontSize: "var(--font-size-100)"; readonly fontFamily: "var(--font-family-default-latin)"; readonly fontWeight: "var(--font-weight-normal)"; }' is not assignable to type 'Properties<string | number, string & {}>'.
	                        style: FONT_STYLE_CATEGORIES, tickFormatter: (value) => (labelMap === null || labelMap === void 0 ? void 0 : labelMap[value]) || value, tickLine: false, type: "category" })] })), isVerticalBiaxialLayout && (jsxRuntime.jsx(recharts.XAxis, { axisLine: false, 
	                // @ts-expect-error - TS2322 - Type '[number | "auto" | "dataMin" | "dataMax" | ((arg1: number) => number), number | "auto" | "dataMin" | "dataMax" | ((arg1: number) => number)] | { xAxisBottom?: [number | "auto" | "dataMin" | "dataMax" | ((arg1: number) => number), number | ... 3 more ... | ((arg1: number) => number)] | undefined; xAxisTop?: [...] | u...' is not assignable to type 'AxisDomain | undefined'.
	                domain: range, orientation: "top", reversed: isRtl, 
	                // @ts-expect-error - TS2322 - Type '{ readonly color: "var(--color-text-subtle)"; readonly fontSize: "var(--font-size-100)"; readonly fontFamily: "var(--font-family-default-latin)"; readonly fontWeight: "var(--font-weight-normal)"; }' is not assignable to type 'Properties<string | number, string & {}>'.
	                style: FONT_STYLE_VALUES, tickCount: tickCount, 
	                // @ts-expect-error - TS2322 - Type '((arg1: number, arg2: number) => string | number) | undefined' is not assignable to type '((value: any, index: number) => string) | undefined'.
	                tickFormatter: tickFormatter === null || tickFormatter === void 0 ? void 0 : tickFormatter.xAxisTop, tickLine: false, type: "number", xAxisId: "top" }))] }));
	}

	function __rest(s, e) {
	  var t = {};

	  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

	  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	  }
	  return t;
	}

	const colorMap = {
	    '0': '01',
	    '1': '02',
	    '2': '03',
	    '3': '04',
	    '4': '05',
	    '5': '06',
	    '6': '07',
	    '7': '08',
	    '8': '09',
	    '9': '10',
	    '10': '11',
	    '11': '12',
	};
	function renderElements({ elements = [], layout, stacked, hexColor, visualPatternSelected, isHorizontalLayout, isBarRounded, }) {
	    const { length } = elements;
	    const lastElementPos = length > 1 ? length - 1 : 1;
	    const squaredRadius = [0, 0, 0, 0];
	    const roundedRadius = ['vertical', 'verticalBiaxial'].includes(layout)
	        ? [0, 4, 4, 0]
	        : [4, 4, 0, 0];
	    return elements.map((values, index) => {
	        // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'number' can't be used to index type '{ readonly '0': "01"; readonly '1': "02"; readonly '2': "03"; readonly '3': "04"; readonly '4': "05"; readonly '5': "06"; readonly '6': "07"; readonly '7': "08"; readonly '8': "09"; readonly '9': "10"; readonly '10': "11"; readonly '11': "12"; }'.
	        const defaultColor = colorMap[index];
	        const isBarElement = values.type === 'bar';
	        const isLineElement = values.type === 'line';
	        // Recharts doesn't recognize wrappers on their components, therefore, needs to be build within ChartGraph
	        if (isBarElement) {
	            return (jsxRuntime.jsx(recharts.Bar, Object.assign({ 
	                // @ts-expect-error - TS2769 - No overload matches this call.
	                barSize: "50%", dataKey: values.id, fill: visualPatternSelected === 'visualPattern'
	                    ? `url(#pattern-${values.color || defaultColor})`
	                    : hexColor(values.color || defaultColor), isAnimationActive: false, 
	                // eslint-disable-next-line react/no-unstable-nested-components
	                shape: (_a) => {
	                    var { height } = _a, props = __rest(_a, ["height"]);
	                    return (jsxRuntime.jsx(recharts.Rectangle, Object.assign({}, props, { height: stacked && index !== 0 && height > 0 ? height - 2 : height, radius: (lastElementPos !== index && stacked) || !isBarRounded
	                            ? squaredRadius
	                            : roundedRadius })));
	                }, stackId: stacked ? 'stacked' : undefined }, (isHorizontalLayout
	                ? { yAxisId: values.axis || 'left' }
	                : { xAxisId: values.axis || 'bottom' }), { stroke: hexColor(values.color || defaultColor) }), values.id));
	        }
	        // Recharts doesn't recognize wrappers on their components, therefore, needs to be build within ChartGraph
	        if (isLineElement) {
	            let strokeDasharray;
	            if (visualPatternSelected === 'visualPattern' && values.precision !== 'estimate') {
	                strokeDasharray = 0; // '0' is necessary to communicate in the payload
	            }
	            if (values.precision === 'estimate') {
	                strokeDasharray = '8 8';
	            }
	            const graphPoint = renderGraphPoint({
	                color: values.color || defaultColor,
	                active: false,
	            });
	            return (jsxRuntime.jsx(recharts.Line, Object.assign({ activeDot: false, dataKey: values.id, 
	                // @ts-expect-error - TS2769 - No overload matches this call.
	                dot: visualPatternSelected === 'visualPattern' ? graphPoint : false, isAnimationActive: false, legendType: "line", stroke: hexColor(values.color || defaultColor), 
	                // @ts-expect-error - TS2454 - Variable 'strokeDasharray' is used before being assigned.
	                strokeDasharray: strokeDasharray, strokeWidth: values.precision === 'estimate' ? 2 : 3, type: values.precision === 'estimate' ? 'monotone' : undefined }, (isHorizontalLayout
	                ? { yAxisId: values.axis || 'left' }
	                : { xAxisId: values.axis || 'bottom' })), values.id));
	        }
	        return null;
	    });
	}

	function renderReferenceAreas({ referenceAreas, }) {
	    return referenceAreas.map((values) => (
	    // Recharts doesn't recognize wrappers on their components, therefore, needs to be build within ChartGraph
	    jsxRuntime.jsx(recharts.ReferenceArea, { isFront: true, shape: (props) => jsxRuntime.jsx(recharts.Rectangle, Object.assign({}, props, { fill: "url(#pattern-referencearea-01)" })), strokeOpacity: 0.3, x1: values.x1, x2: values.x2, y1: values.y1, y2: values.y2, yAxisId: values.yAxisId }, values.id)));
	}

	const useBuildCsvData = ({ transformedTabularData, isHorizontalLayout, }) => {
	    const { tableSeriesText, tableXAxisText, tableYAxisText } = gestalt.useDefaultLabel('ChartGraph');
	    const csvObj = require$$0.useMemo(() => `${tableSeriesText},${isHorizontalLayout ? tableXAxisText : tableYAxisText},${isHorizontalLayout ? tableYAxisText : tableXAxisText}\n${transformedTabularData
        .map((x) => Object.values(x))
        .map((e) => e.join(','))
        .join('\n')}`, [tableSeriesText, tableXAxisText, tableYAxisText, transformedTabularData, isHorizontalLayout]);
	    return csvObj;
	};
	const getCompareFn = ({ filterId, filterOrder, }) => function compareXDesc(a, b) {
	    let aValue = a.xAxis;
	    let bValue = b.xAxis;
	    if (filterId === 'y') {
	        aValue = a.yAxis;
	        bValue = b.yAxis;
	    }
	    if (filterId === 'series') {
	        aValue = a.series;
	        bValue = b.series;
	    }
	    if (filterOrder === 'desc' ? aValue < bValue : aValue > bValue) {
	        return -1;
	    }
	    if (filterOrder === 'desc' ? aValue > bValue : aValue < bValue) {
	        return 1;
	    }
	    // a must be equal to b
	    return 0;
	};
	const useTabularData = ({ data, filterId, filterOrder, labelMap, tickFormatter, isHorizontalLayout, }) => {
	    const transformedTabularData = require$$0.useMemo(() => data
	        .reduce((accumulator, currentValue) => {
	        const { name } = currentValue;
	        const newValues = Object.entries(currentValue)
	            .map((x) => {
	            if (x[0] === 'name') {
	                return {};
	            }
	            return {
	                series: labelMap ? labelMap[x[0]] : x[0],
	                xAxis: labelMap && typeof name === 'string' ? labelMap[name] : name,
	                yAxis: x[1],
	            };
	        })
	            .filter((x) => !!x.series);
	        return [...accumulator, newValues];
	    }, [])
	        .flat(), [data, labelMap]);
	    const sortedData = require$$0.useMemo(() => transformedTabularData.sort(getCompareFn({ filterId, filterOrder })), [filterId, filterOrder, transformedTabularData]);
	    const localizedData = require$$0.useMemo(() => sortedData.map((item) => {
	        const newObj = Object.assign({}, item);
	        if ((tickFormatter === null || tickFormatter === void 0 ? void 0 : tickFormatter.timeseries) && isHorizontalLayout) {
	            newObj.xAxis = tickFormatter.timeseries(item.xAxis);
	        }
	        if ((tickFormatter === null || tickFormatter === void 0 ? void 0 : tickFormatter.timeseries) && !isHorizontalLayout) {
	            newObj.yAxis = tickFormatter.timeseries(item.yAxis);
	        }
	        return newObj;
	    }), [isHorizontalLayout, sortedData, tickFormatter]);
	    return localizedData;
	};

	function TabularDataModalFooter({ title, toggleTabularDataModal, isHorizontalLayout, transformedTabularData, }) {
	    const { downloadCsvButtonText, cancelButtonText } = gestalt.useDefaultLabel('ChartGraph');
	    const csvData = useBuildCsvData({
	        transformedTabularData,
	        isHorizontalLayout,
	    });
	    const encodedData = encodeURI(`data:text/csv;charset=utf-8,${csvData}`);
	    return (jsxRuntime.jsx(gestalt.Flex, { justifyContent: "end", children: jsxRuntime.jsxs(gestalt.ButtonGroup, { children: [jsxRuntime.jsx(gestalt.Button, { color: "gray", onClick: toggleTabularDataModal, text: cancelButtonText }), jsxRuntime.jsx("a", { download: `${title.toLowerCase().replace(' ', '_')}.csv`, href: encodedData, children: jsxRuntime.jsx(gestalt.Button, { color: "red", iconEnd: "download", text: downloadCsvButtonText }) })] }) }));
	}

	function TabularDataModalHeading({ title, toggleTabularDataModal }) {
	    const { accessibilityLabelDismissModal, tabularData } = gestalt.useDefaultLabel('ChartGraph');
	    const deviceType = gestalt.useDeviceType();
	    return (jsxRuntime.jsxs(gestalt.Flex, { direction: "column", children: [jsxRuntime.jsxs(gestalt.Flex, { justifyContent: "between", children: [jsxRuntime.jsx(gestalt.Heading, { accessibilityLevel: 1, size: "500", children: title }), deviceType !== 'mobile' ? (jsxRuntime.jsx(gestalt.IconButton, { accessibilityLabel: accessibilityLabelDismissModal, bgColor: "white", icon: "cancel", iconColor: "darkGray", onClick: toggleTabularDataModal, size: "sm" })) : null] }), jsxRuntime.jsx(gestalt.Text, { color: "subtle", size: "200", children: tabularData })] }));
	}

	function TabularDataModal$1({ title, isHorizontalLayout, transformedTabularData, onSortChange, sortOrder, sortCol, }) {
	    const { tableSeriesText, tableXAxisText, tableYAxisText } = gestalt.useDefaultLabel('ChartGraph');
	    return (jsxRuntime.jsxs(gestalt.Table, { accessibilityLabel: title, children: [jsxRuntime.jsx(gestalt.Table.Header, { children: jsxRuntime.jsxs(gestalt.Table.Row, { children: [jsxRuntime.jsx(gestalt.Table.SortableHeaderCell, { onSortChange: () => onSortChange('series'), sortOrder: sortOrder, status: sortCol === 'series' ? 'active' : 'inactive', children: jsxRuntime.jsx(gestalt.Text, { size: "200", weight: "bold", children: tableSeriesText }) }), jsxRuntime.jsx(gestalt.Table.SortableHeaderCell, { onSortChange: () => onSortChange('x'), sortOrder: sortOrder, status: sortCol === 'x' ? 'active' : 'inactive', children: jsxRuntime.jsx(gestalt.Text, { size: "200", weight: "bold", children: isHorizontalLayout ? tableXAxisText : tableYAxisText }) }), jsxRuntime.jsx(gestalt.Table.SortableHeaderCell, { onSortChange: () => onSortChange('y'), sortOrder: sortOrder, status: sortCol === 'y' ? 'active' : 'inactive', children: jsxRuntime.jsx(gestalt.Text, { size: "200", weight: "bold", children: isHorizontalLayout ? tableYAxisText : tableXAxisText }) })] }) }), jsxRuntime.jsx(gestalt.Table.Body, { children: transformedTabularData.map(({ series, xAxis, yAxis }) => (jsxRuntime.jsxs(gestalt.Table.Row, { children: [jsxRuntime.jsx(gestalt.Table.Cell, { children: jsxRuntime.jsx(gestalt.Text, { children: series }) }), jsxRuntime.jsx(gestalt.Table.Cell, { children: jsxRuntime.jsx(gestalt.Text, { size: "200", children: xAxis }) }), jsxRuntime.jsx(gestalt.Table.Cell, { children: jsxRuntime.jsx(gestalt.Text, { size: "200", children: yAxis }) })] }, `id-${series}-${xAxis}-${yAxis}`))) })] }));
	}

	function TabularDataModal({ title, toggleTabularDataModal, data, tickFormatter, labelMap, modalZIndex, isHorizontalLayout, }) {
	    const { tabularData } = gestalt.useDefaultLabel('ChartGraph');
	    const [sortOrder, setSortOrder] = require$$0.useState('desc');
	    const [sortCol, setSortCol] = require$$0.useState(null);
	    const transformedTabularData = useTabularData({
	        data,
	        filterId: sortCol,
	        filterOrder: sortOrder,
	        tickFormatter,
	        labelMap,
	        isHorizontalLayout,
	    });
	    const onSortChange = require$$0.useCallback((value) => {
	        if (sortCol !== value) {
	            setSortCol(value);
	            setSortOrder('desc');
	        }
	        else {
	            setSortOrder((sortValue) => (sortValue === 'asc' ? 'desc' : 'asc'));
	        }
	    }, [sortCol]);
	    return (jsxRuntime.jsx(gestalt.Layer, { zIndex: modalZIndex, children: jsxRuntime.jsx(gestalt.Modal, { accessibilityModalLabel: tabularData, align: "start", footer: jsxRuntime.jsx(TabularDataModalFooter, { isHorizontalLayout: isHorizontalLayout, title: title, toggleTabularDataModal: toggleTabularDataModal, transformedTabularData: transformedTabularData }), heading: jsxRuntime.jsx(TabularDataModalHeading, { title: title, toggleTabularDataModal: toggleTabularDataModal }), onDismiss: toggleTabularDataModal, size: "sm", children: jsxRuntime.jsx(TabularDataModal$1, { isHorizontalLayout: isHorizontalLayout, onSortChange: onSortChange, sortCol: sortCol, sortOrder: sortOrder, title: title, transformedTabularData: transformedTabularData }) }) }));
	}

	function useCustomTooltip({ isDarkMode, renderTooltip, }) {
	    return require$$0.useCallback(({ active, payload, label, }) => (jsxRuntime.jsx(gestalt.Box, { borderStyle: isDarkMode ? undefined : 'shadow', color: isDarkMode ? 'elevationFloating' : 'default', maxWidth: 300, padding: 4, rounding: 4, children: renderTooltip !== 'none' &&
	            renderTooltip !== 'auto' &&
	            (renderTooltip === null || renderTooltip === void 0 ? void 0 : renderTooltip({ active, payload, label })) })), [isDarkMode, renderTooltip]);
	}

	function useDefaultLegend({ isHorizontalBiaxialLayout, isVerticalBiaxialLayout, isRtl, height, labelMap, setLegendHeight, referenceAreaSummary, }) {
	    return require$$0.useCallback(({ payload }) => {
	        const series = payload.map(({ payload: payloadData, }) => (jsxRuntime.jsxs(gestalt.Flex, { gap: { row: 2, column: 0 }, children: [jsxRuntime.jsx(LegendIcon, { payloadData: Object.assign(Object.assign({}, payloadData), { isLegend: true }) }), jsxRuntime.jsx(gestalt.Text, { size: "200", children: (labelMap === null || labelMap === void 0 ? void 0 : labelMap[payloadData.dataKey]) || payloadData.dataKey })] }, payloadData.dataKey)));
	        const referenceAreas = (referenceAreaSummary === null || referenceAreaSummary === void 0 ? void 0 : referenceAreaSummary.map(({ label }) => (jsxRuntime.jsxs(gestalt.Flex, { gap: { row: 2, column: 0 }, children: [jsxRuntime.jsx(LegendIcon, { payloadData: { referenceArea: 'default', isLegend: true } }), jsxRuntime.jsx(gestalt.Text, { size: "200", children: label })] }, label)))) || [];
	        const legendItemsArray = [...series, ...referenceAreas];
	        if (isHorizontalBiaxialLayout) {
	            return (jsxRuntime.jsx("div", { style: { direction: isRtl ? 'rtl' : 'ltr' }, children: jsxRuntime.jsx(gestalt.Box, { color: "transparent", marginBottom: 6, width: "100%", children: jsxRuntime.jsx(gestalt.Flex, { justifyContent: "between", children: legendItemsArray.slice(0, 2) }) }) }));
	        }
	        if (isVerticalBiaxialLayout) {
	            return (jsxRuntime.jsx("div", { style: { direction: isRtl ? 'rtl' : 'ltr' }, children: jsxRuntime.jsx(gestalt.Box, { alignContent: "end", color: "transparent", dangerouslySetInlineStyle: { __style: { top: '-15px' } }, display: "flex", height: height, position: "absolute", children: jsxRuntime.jsx(gestalt.Flex, { direction: "column", justifyContent: "between", children: legendItemsArray.slice(0, 2) }) }) }));
	        }
	        return (jsxRuntime.jsx("div", { style: { direction: isRtl ? 'rtl' : 'ltr' }, children: jsxRuntime.jsx(gestalt.Box, { ref: (ref) => {
	                    if (ref)
	                        setLegendHeight(ref.getBoundingClientRect().height);
	                }, color: "transparent", width: "100%", children: jsxRuntime.jsx(gestalt.Flex, { gap: { row: 4, column: 0 }, wrap: true, children: legendItemsArray }) }) }));
	    }, [
	        isHorizontalBiaxialLayout,
	        isVerticalBiaxialLayout,
	        isRtl,
	        height,
	        labelMap,
	        setLegendHeight,
	        referenceAreaSummary,
	    ]);
	}

	function useDefaultTooltip({ isDarkMode, labelMap, isTimeSeries, isRtl, tickFormatter, }) {
	    return require$$0.useCallback(({ active, payload, label }) => (jsxRuntime.jsx("div", { style: { direction: isRtl ? 'rtl' : 'ltr' }, children: jsxRuntime.jsx(gestalt.Box, { borderStyle: isDarkMode ? undefined : 'shadow', color: isDarkMode ? 'elevationFloating' : 'default', maxWidth: 300, padding: 2, rounding: 4, children: active && Array.isArray(payload) ? (jsxRuntime.jsxs(gestalt.Flex, { direction: "column", gap: 2, children: [jsxRuntime.jsx(gestalt.Flex.Item, { children: payload.map((payloadData) => (jsxRuntime.jsxs(gestalt.Flex, { alignItems: "center", gap: 2, children: [jsxRuntime.jsx(LegendIcon, { payloadData: payloadData }), jsxRuntime.jsx(gestalt.Flex.Item, { flex: "grow", children: jsxRuntime.jsx(gestalt.Text, { size: "100", children: (labelMap === null || labelMap === void 0 ? void 0 : labelMap[payloadData.dataKey]) || payloadData.name }) }), jsxRuntime.jsx(gestalt.Text, { size: "200", weight: "bold", children: payloadData.value })] }, payloadData.name))) }), jsxRuntime.jsxs(gestalt.Text, { color: "subtle", size: "100", children: [isTimeSeries && typeof label === 'number' && (tickFormatter === null || tickFormatter === void 0 ? void 0 : tickFormatter.timeseries)
	                                ? tickFormatter.timeseries(label)
	                                : null, !isTimeSeries ? (typeof label === 'string' && (labelMap === null || labelMap === void 0 ? void 0 : labelMap[label])) || label : null] })] })) : null }) })), [isDarkMode, labelMap, isTimeSeries, tickFormatter, isRtl]);
	}

	/**
	 * [ChartGraph](https://gestalt.pinterest.systems/web/chartgraph) is used for displaying various types of graphs plotted on an x and y axis. It makes it easier to identify and understand patterns over time across different categories, enabling people to make informed decisions quickly.
	 * ![ChartGraph light mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/ChartGraph.spec.ts-snapshots/ChartGraph-chromium-darwin.png)
	 * ![ChartGraph dark mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/ChartGraph-dark.spec.ts-snapshots/ChartGraph-dark-chromium-darwin.png)
	 */
	function ChartGraph({ accessibilityLabel, visualPatternSelected, data, description, initialTicks = 'auto', range = [0, 'auto'], helpButton, elements, layout: externalLayout = 'vertical', labelMap, legend = 'auto', modalZIndex, onVisualPatternChange, stacked, tickFormatter, children, titleDisplay = 'visible', title, type = 'bar', referenceAreas = [], renderTooltip = 'auto', }) {
	    // CONSTANTS
	    const SMALL_BREAKPOINT = 576;
	    const TICK_SPACE = 48;
	    const LAYOUT_MAP = {
	        horizontal: 'vertical',
	        vertical: 'horizontal',
	        horizontalBiaxial: 'verticalBiaxial',
	        verticalBiaxial: 'horizontalBiaxial',
	    };
	    // STATE
	    const [chartHeight, setChartHeight] = require$$0.useState(0);
	    const [chartWidth, setChartWidth] = require$$0.useState(0);
	    const [showTabularDataModal, setShowTabularDataModal] = require$$0.useState(false);
	    // We need to know the legend height, because the ResponsiveContainer includes the legend within the provided height
	    const [legendHeight, setLegendHeight] = require$$0.useState(legend === 'none' ? 0 : 20);
	    const [internalHeight, setInternalHeight] = require$$0.useState(0);
	    // HOOKS
	    const hexColor = useHexColor();
	    const patterns = usePatterns();
	    const { colorSchemeName } = gestalt.useColorScheme();
	    const { accessibilityLabelPrefixText } = gestalt.useDefaultLabel('ChartGraph');
	    // ASSERTIONS
	    const isDarkMode = colorSchemeName === 'darkMode';
	    // This is needed to keep the layout in sync with Recharts where vertical/horizontal is inversed to our ChartGraph API.
	    // Internally we match Recharts for easier development and comoprehension of Recharts docs
	    const layout = LAYOUT_MAP[externalLayout];
	    const isRtl = (document === null || document === void 0 ? void 0 : document.dir) === 'rtl';
	    const isVerticalLayout = ['vertical', 'verticalBiaxial'].includes(layout);
	    const isHorizontalLayout = ['horizontal', 'horizontalBiaxial'].includes(layout);
	    const isVerticalBiaxialLayout = layout === 'verticalBiaxial';
	    const isHorizontalBiaxialLayout = layout === 'horizontalBiaxial';
	    const isBar = type === 'bar';
	    const isLine = type === 'line';
	    const isCombo = type === 'combo';
	    const isTimeSeries = (tickFormatter === null || tickFormatter === void 0 ? void 0 : tickFormatter.timeseries) !== undefined;
	    const threeTicksDimension = 3 * TICK_SPACE;
	    const fiveTicksDimension = 5 * TICK_SPACE;
	    // We need a "true" to initialize with 5 ticks except when initialTicks === 3, then we need 3 ticks.
	    const initializer = initialTicks === 'auto';
	    // If chartWidth ===  0, we want to use the initial values to prevent chart fickering when width is calculated
	    const isAboveBreakpoint = chartWidth ? chartWidth >= SMALL_BREAKPOINT : initializer;
	    const fixChartDimension = isAboveBreakpoint ? fiveTicksDimension : threeTicksDimension;
	    const tickCount = isAboveBreakpoint ? 5 : 3;
	    const horizontalMargin = isHorizontalBiaxialLayout ? 20 : 10;
	    const verticalMargin = 5;
	    // This is a rough estimate of when bars get to thin to be rounded. It's impossible to calculate from the bar component itself as we cannot  access the ref or use wrappers on Recharts component.
	    const individualBarWidthEstimate = (isHorizontalLayout ? chartWidth : chartHeight - legendHeight) /
	        (2 * data.length) /
	        elements.length -
	        (isHorizontalLayout ? horizontalMargin : verticalMargin);
	    require$$0.useEffect(() => {
	        const responsiveHeight = isHorizontalLayout
	            ? fixChartDimension + legendHeight
	            : fiveTicksDimension;
	        setInternalHeight(responsiveHeight);
	    }, [fixChartDimension, legendHeight, fiveTicksDimension, isHorizontalLayout]);
	    // HELPERS
	    const toggleTabularDataModal = require$$0.useCallback(() => setShowTabularDataModal((value) => !value), []);
	    // CONDITIONAL VARIABLES
	    let legendVerticalAlign = 'bottom';
	    let legendAlign = 'left';
	    if (isVerticalBiaxialLayout) {
	        legendVerticalAlign = 'top';
	        legendAlign = 'right';
	    }
	    let ChartType = recharts.ComposedChart;
	    if (isBar) {
	        ChartType = recharts.BarChart;
	    }
	    if (isLine) {
	        ChartType = recharts.LineChart;
	    }
	    // SUBCOMPONENTS
	    const chartElements = require$$0.useMemo(() => renderElements({
	        elements,
	        stacked,
	        hexColor,
	        layout,
	        visualPatternSelected,
	        isHorizontalLayout,
	        // Interim true, until we have number
	        isBarRounded: Math.sign(individualBarWidthEstimate) === -1 ? true : individualBarWidthEstimate > 10,
	    }), [
	        elements,
	        hexColor,
	        stacked,
	        layout,
	        visualPatternSelected,
	        isHorizontalLayout,
	        individualBarWidthEstimate,
	    ]);
	    const referenceAreasElements = require$$0.useMemo(() => renderReferenceAreas({ referenceAreas }), [referenceAreas]);
	    const axisElements = require$$0.useMemo(() => renderAxis({
	        isHorizontalLayout,
	        isHorizontalBiaxialLayout,
	        isVerticalLayout,
	        isTimeSeries,
	        isVerticalBiaxialLayout,
	        isBar,
	        isCombo,
	        range,
	        tickFormatter,
	        labelMap,
	        tickCount,
	    }), [
	        isHorizontalLayout,
	        isHorizontalBiaxialLayout,
	        isVerticalLayout,
	        isTimeSeries,
	        isVerticalBiaxialLayout,
	        isBar,
	        isCombo,
	        range,
	        tickFormatter,
	        labelMap,
	        tickCount,
	    ]);
	    const referenceAreaSummary = require$$0.useMemo(() => referenceAreas
	        ? referenceAreas.map(({ label, style }) => ({
	            label,
	            style,
	        }))
	        : null, [referenceAreas]);
	    const customTooltip = useCustomTooltip({
	        isDarkMode,
	        renderTooltip,
	    });
	    const defaultTooltip = useDefaultTooltip({
	        isDarkMode,
	        isRtl,
	        labelMap,
	        tickFormatter,
	        isTimeSeries,
	    });
	    const defaultLegend = useDefaultLegend({
	        isHorizontalBiaxialLayout,
	        isVerticalBiaxialLayout,
	        isRtl,
	        height: chartHeight,
	        labelMap,
	        setLegendHeight,
	        referenceAreaSummary,
	    });
	    return (jsxRuntime.jsxs(ChartProvider, { decal: visualPatternSelected, children: [jsxRuntime.jsxs(gestalt.Box, { color: "default", direction: "column", display: "flex", padding: 4, width: isHorizontalLayout ? '100%' : undefined, children: [jsxRuntime.jsx(Header, { description: description, helpButton: helpButton, onVisualPatternChange: onVisualPatternChange, readyToRender: chartWidth > 0, showTabularData: showTabularDataModal, title: title, titleDisplay: titleDisplay, toggleTabularDataModal: toggleTabularDataModal }), children ? (jsxRuntime.jsx(gestalt.Box, { marginBottom: 4, children: jsxRuntime.jsx(gestalt.Flex, { gap: 2, children: children }) })) : null, jsxRuntime.jsx("div", { style: { direction: 'ltr' }, children: jsxRuntime.jsx(gestalt.Box, { height: "100%", maxWidth: 960, width: "100%", children: jsxRuntime.jsx(recharts.ResponsiveContainer, { debounce: 150, height: internalHeight, minHeight: internalHeight, minWidth: "100%", onResize: (width, height) => {
	                                    setChartHeight(height);
	                                    setChartWidth(width);
	                                }, width: "100%", children: jsxRuntime.jsxs(ChartType, Object.assign({ title: `${accessibilityLabelPrefixText}. ${accessibilityLabel}` }, (isBar || isCombo ? { barCategoryGap: '25%' } : {}), { 
	                                    // @ts-expect-error - TS4104 - The type 'readonly { [key: string]: number; name: string | number; }[]' is 'readonly' and cannot be assigned to the mutable type 'any[]'.
	                                    data: data, layout: isVerticalLayout ? 'vertical' : 'horizontal', margin: {
	                                        top: 10,
	                                        right: 5,
	                                        bottom: isVerticalBiaxialLayout ? 20 : 10,
	                                        left: 5,
	                                    }, children: [patterns, jsxRuntime.jsx(recharts.CartesianGrid, { horizontal: isVerticalLayout ? false : undefined, stroke: TOKEN_COLOR_BORDER_CONTAINER, vertical: isVerticalLayout ? undefined : false }), axisElements, renderTooltip === 'none' ? (jsxRuntime.jsx(recharts.Tooltip, { content: jsxRuntime.jsx(EmptyBox, {}), isAnimationActive: false })) : (jsxRuntime.jsx(recharts.Tooltip
	                                        // @ts-expect-error - TS2769 - No overload matches this call.
	                                        , { 
	                                            // @ts-expect-error - TS2769 - No overload matches this call.
	                                            content: renderTooltip === 'auto' ? defaultTooltip : customTooltip, cursor: { fill: `rgb(0 0 0 / ${TOKEN_OPACITY_100}` }, isAnimationActive: false })), jsxRuntime.jsx(recharts.Legend, { align: legendAlign, content: legend === 'auto' || isVerticalBiaxialLayout || isHorizontalBiaxialLayout ? (defaultLegend) : (jsxRuntime.jsx(EmptyBox, {})), iconSize: 16, iconType: "square", verticalAlign: legendVerticalAlign }), referenceAreas && referenceAreasElements, chartElements] })) }) }) })] }), showTabularDataModal ? (jsxRuntime.jsx(TabularDataModal, { data: data, isHorizontalLayout: isHorizontalLayout, labelMap: labelMap, modalZIndex: modalZIndex, tickFormatter: tickFormatter, title: title, toggleTabularDataModal: toggleTabularDataModal })) : null] }));
	}
	ChartGraph.LegendIcon = LegendIcon;
	ChartGraph.displayName = 'ChartGraph';

	exports.ChartGraph = ChartGraph;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=gestalt-charts.js.map
