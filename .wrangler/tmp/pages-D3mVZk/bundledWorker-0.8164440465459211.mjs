var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError, "createNotImplementedError");
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
__name(notImplemented, "notImplemented");
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
__name(notImplementedClass, "notImplementedClass");

// ../node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
var _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
var nodeTiming = {
  name: "node",
  entryType: "node",
  startTime: 0,
  duration: 0,
  nodeStart: 0,
  v8Start: 0,
  bootstrapComplete: 0,
  environment: 0,
  loopStart: 0,
  loopExit: 0,
  idleTime: 0,
  uvMetricsInfo: {
    loopCount: 0,
    events: 0,
    eventsWaiting: 0
  },
  detail: void 0,
  toJSON() {
    return this;
  }
};
var PerformanceEntry = class {
  static {
    __name(this, "PerformanceEntry");
  }
  __unenv__ = true;
  detail;
  entryType = "event";
  name;
  startTime;
  constructor(name, options) {
    this.name = name;
    this.startTime = options?.startTime || _performanceNow();
    this.detail = options?.detail;
  }
  get duration() {
    return _performanceNow() - this.startTime;
  }
  toJSON() {
    return {
      name: this.name,
      entryType: this.entryType,
      startTime: this.startTime,
      duration: this.duration,
      detail: this.detail
    };
  }
};
var PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
  static {
    __name(this, "PerformanceMark");
  }
  entryType = "mark";
  constructor() {
    super(...arguments);
  }
  get duration() {
    return 0;
  }
};
var PerformanceMeasure = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceMeasure");
  }
  entryType = "measure";
};
var PerformanceResourceTiming = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceResourceTiming");
  }
  entryType = "resource";
  serverTiming = [];
  connectEnd = 0;
  connectStart = 0;
  decodedBodySize = 0;
  domainLookupEnd = 0;
  domainLookupStart = 0;
  encodedBodySize = 0;
  fetchStart = 0;
  initiatorType = "";
  name = "";
  nextHopProtocol = "";
  redirectEnd = 0;
  redirectStart = 0;
  requestStart = 0;
  responseEnd = 0;
  responseStart = 0;
  secureConnectionStart = 0;
  startTime = 0;
  transferSize = 0;
  workerStart = 0;
  responseStatus = 0;
};
var PerformanceObserverEntryList = class {
  static {
    __name(this, "PerformanceObserverEntryList");
  }
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
var Performance = class {
  static {
    __name(this, "Performance");
  }
  __unenv__ = true;
  timeOrigin = _timeOrigin;
  eventCounts = /* @__PURE__ */ new Map();
  _entries = [];
  _resourceTimingBufferSize = 0;
  navigation = void 0;
  timing = void 0;
  timerify(_fn, _options) {
    throw createNotImplementedError("Performance.timerify");
  }
  get nodeTiming() {
    return nodeTiming;
  }
  eventLoopUtilization() {
    return {};
  }
  markResourceTiming() {
    return new PerformanceResourceTiming("");
  }
  onresourcetimingbufferfull = null;
  now() {
    if (this.timeOrigin === _timeOrigin) {
      return _performanceNow();
    }
    return Date.now() - this.timeOrigin;
  }
  clearMarks(markName) {
    this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
  }
  clearMeasures(measureName) {
    this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
  }
  clearResourceTimings() {
    this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
  }
  getEntries() {
    return this._entries;
  }
  getEntriesByName(name, type) {
    return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
  }
  getEntriesByType(type) {
    return this._entries.filter((e) => e.entryType === type);
  }
  mark(name, options) {
    const entry = new PerformanceMark(name, options);
    this._entries.push(entry);
    return entry;
  }
  measure(measureName, startOrMeasureOptions, endMark) {
    let start;
    let end;
    if (typeof startOrMeasureOptions === "string") {
      start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
      end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
    } else {
      start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
      end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
    }
    const entry = new PerformanceMeasure(measureName, {
      startTime: start,
      detail: {
        start,
        end
      }
    });
    this._entries.push(entry);
    return entry;
  }
  setResourceTimingBufferSize(maxSize) {
    this._resourceTimingBufferSize = maxSize;
  }
  addEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.addEventListener");
  }
  removeEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw createNotImplementedError("Performance.dispatchEvent");
  }
  toJSON() {
    return this;
  }
};
var PerformanceObserver = class {
  static {
    __name(this, "PerformanceObserver");
  }
  __unenv__ = true;
  static supportedEntryTypes = [];
  _callback = null;
  constructor(callback) {
    this._callback = callback;
  }
  takeRecords() {
    return [];
  }
  disconnect() {
    throw createNotImplementedError("PerformanceObserver.disconnect");
  }
  observe(options) {
    throw createNotImplementedError("PerformanceObserver.observe");
  }
  bind(fn) {
    return fn;
  }
  runInAsyncScope(fn, thisArg, ...args) {
    return fn.call(thisArg, ...args);
  }
  asyncId() {
    return 0;
  }
  triggerAsyncId() {
    return 0;
  }
  emitDestroy() {
    return this;
  }
};
var performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();

// ../node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
globalThis.performance = performance;
globalThis.Performance = Performance;
globalThis.PerformanceEntry = PerformanceEntry;
globalThis.PerformanceMark = PerformanceMark;
globalThis.PerformanceMeasure = PerformanceMeasure;
globalThis.PerformanceObserver = PerformanceObserver;
globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
globalThis.PerformanceResourceTiming = PerformanceResourceTiming;

// ../node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";

// ../node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default = Object.assign(() => {
}, { __unenv__: true });

// ../node_modules/unenv/dist/runtime/node/console.mjs
var _console = globalThis.console;
var _ignoreErrors = true;
var _stderr = new Writable();
var _stdout = new Writable();
var log = _console?.log ?? noop_default;
var info = _console?.info ?? log;
var trace = _console?.trace ?? info;
var debug = _console?.debug ?? log;
var table = _console?.table ?? log;
var error = _console?.error ?? log;
var warn = _console?.warn ?? error;
var createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
var clear = _console?.clear ?? noop_default;
var count = _console?.count ?? noop_default;
var countReset = _console?.countReset ?? noop_default;
var dir = _console?.dir ?? noop_default;
var dirxml = _console?.dirxml ?? noop_default;
var group = _console?.group ?? noop_default;
var groupEnd = _console?.groupEnd ?? noop_default;
var groupCollapsed = _console?.groupCollapsed ?? noop_default;
var profile = _console?.profile ?? noop_default;
var profileEnd = _console?.profileEnd ?? noop_default;
var time = _console?.time ?? noop_default;
var timeEnd = _console?.timeEnd ?? noop_default;
var timeLog = _console?.timeLog ?? noop_default;
var timeStamp = _console?.timeStamp ?? noop_default;
var Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
var _times = /* @__PURE__ */ new Map();
var _stdoutErrorHandler = noop_default;
var _stderrErrorHandler = noop_default;

// ../node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole = globalThis["console"];
var {
  assert,
  clear: clear2,
  // @ts-expect-error undocumented public API
  context,
  count: count2,
  countReset: countReset2,
  // @ts-expect-error undocumented public API
  createTask: createTask2,
  debug: debug2,
  dir: dir2,
  dirxml: dirxml2,
  error: error2,
  group: group2,
  groupCollapsed: groupCollapsed2,
  groupEnd: groupEnd2,
  info: info2,
  log: log2,
  profile: profile2,
  profileEnd: profileEnd2,
  table: table2,
  time: time2,
  timeEnd: timeEnd2,
  timeLog: timeLog2,
  timeStamp: timeStamp2,
  trace: trace2,
  warn: warn2
} = workerdConsole;
Object.assign(workerdConsole, {
  Console,
  _ignoreErrors,
  _stderr,
  _stderrErrorHandler,
  _stdout,
  _stdoutErrorHandler,
  _times
});
var console_default = workerdConsole;

// ../node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
globalThis.console = console_default;

// ../node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
  const now = Date.now();
  const seconds = Math.trunc(now / 1e3);
  const nanos = now % 1e3 * 1e6;
  if (startTime) {
    let diffSeconds = seconds - startTime[0];
    let diffNanos = nanos - startTime[0];
    if (diffNanos < 0) {
      diffSeconds = diffSeconds - 1;
      diffNanos = 1e9 + diffNanos;
    }
    return [diffSeconds, diffNanos];
  }
  return [seconds, nanos];
}, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
  return BigInt(Date.now() * 1e6);
}, "bigint") });

// ../node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";

// ../node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream = class {
  static {
    __name(this, "ReadStream");
  }
  fd;
  isRaw = false;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  setRawMode(mode) {
    this.isRaw = mode;
    return this;
  }
};

// ../node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream = class {
  static {
    __name(this, "WriteStream");
  }
  fd;
  columns = 80;
  rows = 24;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  clearLine(dir3, callback) {
    callback && callback();
    return false;
  }
  clearScreenDown(callback) {
    callback && callback();
    return false;
  }
  cursorTo(x, y, callback) {
    callback && typeof callback === "function" && callback();
    return false;
  }
  moveCursor(dx, dy, callback) {
    callback && callback();
    return false;
  }
  getColorDepth(env2) {
    return 1;
  }
  hasColors(count3, env2) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
  write(str, encoding, cb) {
    if (str instanceof Uint8Array) {
      str = new TextDecoder().decode(str);
    }
    try {
      console.log(str);
    } catch {
    }
    cb && typeof cb === "function" && cb();
    return false;
  }
};

// ../node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION = "22.14.0";

// ../node_modules/unenv/dist/runtime/node/internal/process/process.mjs
var Process = class _Process extends EventEmitter {
  static {
    __name(this, "Process");
  }
  env;
  hrtime;
  nextTick;
  constructor(impl) {
    super();
    this.env = impl.env;
    this.hrtime = impl.hrtime;
    this.nextTick = impl.nextTick;
    for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
      const value = this[prop];
      if (typeof value === "function") {
        this[prop] = value.bind(this);
      }
    }
  }
  // --- event emitter ---
  emitWarning(warning, type, code) {
    console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
  }
  emit(...args) {
    return super.emit(...args);
  }
  listeners(eventName) {
    return super.listeners(eventName);
  }
  // --- stdio (lazy initializers) ---
  #stdin;
  #stdout;
  #stderr;
  get stdin() {
    return this.#stdin ??= new ReadStream(0);
  }
  get stdout() {
    return this.#stdout ??= new WriteStream(1);
  }
  get stderr() {
    return this.#stderr ??= new WriteStream(2);
  }
  // --- cwd ---
  #cwd = "/";
  chdir(cwd2) {
    this.#cwd = cwd2;
  }
  cwd() {
    return this.#cwd;
  }
  // --- dummy props and getters ---
  arch = "";
  platform = "";
  argv = [];
  argv0 = "";
  execArgv = [];
  execPath = "";
  title = "";
  pid = 200;
  ppid = 100;
  get version() {
    return `v${NODE_VERSION}`;
  }
  get versions() {
    return { node: NODE_VERSION };
  }
  get allowedNodeEnvironmentFlags() {
    return /* @__PURE__ */ new Set();
  }
  get sourceMapsEnabled() {
    return false;
  }
  get debugPort() {
    return 0;
  }
  get throwDeprecation() {
    return false;
  }
  get traceDeprecation() {
    return false;
  }
  get features() {
    return {};
  }
  get release() {
    return {};
  }
  get connected() {
    return false;
  }
  get config() {
    return {};
  }
  get moduleLoadList() {
    return [];
  }
  constrainedMemory() {
    return 0;
  }
  availableMemory() {
    return 0;
  }
  uptime() {
    return 0;
  }
  resourceUsage() {
    return {};
  }
  // --- noop methods ---
  ref() {
  }
  unref() {
  }
  // --- unimplemented methods ---
  umask() {
    throw createNotImplementedError("process.umask");
  }
  getBuiltinModule() {
    return void 0;
  }
  getActiveResourcesInfo() {
    throw createNotImplementedError("process.getActiveResourcesInfo");
  }
  exit() {
    throw createNotImplementedError("process.exit");
  }
  reallyExit() {
    throw createNotImplementedError("process.reallyExit");
  }
  kill() {
    throw createNotImplementedError("process.kill");
  }
  abort() {
    throw createNotImplementedError("process.abort");
  }
  dlopen() {
    throw createNotImplementedError("process.dlopen");
  }
  setSourceMapsEnabled() {
    throw createNotImplementedError("process.setSourceMapsEnabled");
  }
  loadEnvFile() {
    throw createNotImplementedError("process.loadEnvFile");
  }
  disconnect() {
    throw createNotImplementedError("process.disconnect");
  }
  cpuUsage() {
    throw createNotImplementedError("process.cpuUsage");
  }
  setUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
  }
  hasUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
  }
  initgroups() {
    throw createNotImplementedError("process.initgroups");
  }
  openStdin() {
    throw createNotImplementedError("process.openStdin");
  }
  assert() {
    throw createNotImplementedError("process.assert");
  }
  binding() {
    throw createNotImplementedError("process.binding");
  }
  // --- attached interfaces ---
  permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
  report = {
    directory: "",
    filename: "",
    signal: "SIGUSR2",
    compact: false,
    reportOnFatalError: false,
    reportOnSignal: false,
    reportOnUncaughtException: false,
    getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
    writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
  };
  finalization = {
    register: /* @__PURE__ */ notImplemented("process.finalization.register"),
    unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
    registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
  };
  memoryUsage = Object.assign(() => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0
  }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
  // --- undefined props ---
  mainModule = void 0;
  domain = void 0;
  // optional
  send = void 0;
  exitCode = void 0;
  channel = void 0;
  getegid = void 0;
  geteuid = void 0;
  getgid = void 0;
  getgroups = void 0;
  getuid = void 0;
  setegid = void 0;
  seteuid = void 0;
  setgid = void 0;
  setgroups = void 0;
  setuid = void 0;
  // internals
  _events = void 0;
  _eventsCount = void 0;
  _exiting = void 0;
  _maxListeners = void 0;
  _debugEnd = void 0;
  _debugProcess = void 0;
  _fatalException = void 0;
  _getActiveHandles = void 0;
  _getActiveRequests = void 0;
  _kill = void 0;
  _preload_modules = void 0;
  _rawDebug = void 0;
  _startProfilerIdleNotifier = void 0;
  _stopProfilerIdleNotifier = void 0;
  _tickCallback = void 0;
  _disconnect = void 0;
  _handleQueue = void 0;
  _pendingMessage = void 0;
  _channel = void 0;
  _send = void 0;
  _linkedBinding = void 0;
};

// ../node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess = globalThis["process"];
var getBuiltinModule = globalProcess.getBuiltinModule;
var workerdProcess = getBuiltinModule("node:process");
var isWorkerdProcessV2 = globalThis.Cloudflare.compatibilityFlags.enable_nodejs_process_v2;
var unenvProcess = new Process({
  env: globalProcess.env,
  // `hrtime` is only available from workerd process v2
  hrtime: isWorkerdProcessV2 ? workerdProcess.hrtime : hrtime,
  // `nextTick` is available from workerd process v1
  nextTick: workerdProcess.nextTick
});
var { exit, features, platform } = workerdProcess;
var {
  // Always implemented by workerd
  env,
  // Only implemented in workerd v2
  hrtime: hrtime3,
  // Always implemented by workerd
  nextTick
} = unenvProcess;
var {
  _channel,
  _disconnect,
  _events,
  _eventsCount,
  _handleQueue,
  _maxListeners,
  _pendingMessage,
  _send,
  assert: assert2,
  disconnect,
  mainModule
} = unenvProcess;
var {
  // @ts-expect-error `_debugEnd` is missing typings
  _debugEnd,
  // @ts-expect-error `_debugProcess` is missing typings
  _debugProcess,
  // @ts-expect-error `_exiting` is missing typings
  _exiting,
  // @ts-expect-error `_fatalException` is missing typings
  _fatalException,
  // @ts-expect-error `_getActiveHandles` is missing typings
  _getActiveHandles,
  // @ts-expect-error `_getActiveRequests` is missing typings
  _getActiveRequests,
  // @ts-expect-error `_kill` is missing typings
  _kill,
  // @ts-expect-error `_linkedBinding` is missing typings
  _linkedBinding,
  // @ts-expect-error `_preload_modules` is missing typings
  _preload_modules,
  // @ts-expect-error `_rawDebug` is missing typings
  _rawDebug,
  // @ts-expect-error `_startProfilerIdleNotifier` is missing typings
  _startProfilerIdleNotifier,
  // @ts-expect-error `_stopProfilerIdleNotifier` is missing typings
  _stopProfilerIdleNotifier,
  // @ts-expect-error `_tickCallback` is missing typings
  _tickCallback,
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  arch,
  argv,
  argv0,
  availableMemory,
  // @ts-expect-error `binding` is missing typings
  binding,
  channel,
  chdir,
  config,
  connected,
  constrainedMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  // @ts-expect-error `domain` is missing typings
  domain,
  emit,
  emitWarning,
  eventNames,
  execArgv,
  execPath,
  exitCode,
  finalization,
  getActiveResourcesInfo,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getMaxListeners,
  getuid,
  hasUncaughtExceptionCaptureCallback,
  // @ts-expect-error `initgroups` is missing typings
  initgroups,
  kill,
  listenerCount,
  listeners,
  loadEnvFile,
  memoryUsage,
  // @ts-expect-error `moduleLoadList` is missing typings
  moduleLoadList,
  off,
  on,
  once,
  // @ts-expect-error `openStdin` is missing typings
  openStdin,
  permission,
  pid,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  // @ts-expect-error `reallyExit` is missing typings
  reallyExit,
  ref,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  send,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setMaxListeners,
  setSourceMapsEnabled,
  setuid,
  setUncaughtExceptionCaptureCallback,
  sourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  throwDeprecation,
  title,
  traceDeprecation,
  umask,
  unref,
  uptime,
  version,
  versions
} = isWorkerdProcessV2 ? workerdProcess : unenvProcess;
var _process = {
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  hasUncaughtExceptionCaptureCallback,
  setUncaughtExceptionCaptureCallback,
  loadEnvFile,
  sourceMapsEnabled,
  arch,
  argv,
  argv0,
  chdir,
  config,
  connected,
  constrainedMemory,
  availableMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  disconnect,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exit,
  finalization,
  features,
  getBuiltinModule,
  getActiveResourcesInfo,
  getMaxListeners,
  hrtime: hrtime3,
  kill,
  listeners,
  listenerCount,
  memoryUsage,
  nextTick,
  on,
  off,
  once,
  pid,
  platform,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setMaxListeners,
  setSourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  throwDeprecation,
  traceDeprecation,
  umask,
  uptime,
  version,
  versions,
  // @ts-expect-error old API
  domain,
  initgroups,
  moduleLoadList,
  reallyExit,
  openStdin,
  assert: assert2,
  binding,
  send,
  exitCode,
  channel,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  permission,
  mainModule,
  _events,
  _eventsCount,
  _exiting,
  _maxListeners,
  _debugEnd,
  _debugProcess,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  _disconnect,
  _handleQueue,
  _pendingMessage,
  _channel,
  _send,
  _linkedBinding
};
var process_default = _process;

// ../node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
globalThis.process = process_default;

// _worker.js/index.js
import { r as renderers } from "./chunks/_@astro-renderers_CIWobTvY.mjs";
import { c as createExports, s as serverEntrypointModule } from "./chunks/_@astrojs-ssr-adapter_BVWPg4nO.mjs";
import { manifest } from "./manifest_BRcDp1bu.mjs";
globalThis.process ??= {};
globalThis.process.env ??= {};
var serverIslandMap = /* @__PURE__ */ new Map();
var _page0 = /* @__PURE__ */ __name(() => import("./pages/_image.astro.mjs"), "_page0");
var _page1 = /* @__PURE__ */ __name(() => import("./pages/404.astro.mjs"), "_page1");
var _page2 = /* @__PURE__ */ __name(() => import("./pages/agent.astro.mjs"), "_page2");
var _page3 = /* @__PURE__ */ __name(() => import("./pages/api/contact.astro.mjs"), "_page3");
var _page4 = /* @__PURE__ */ __name(() => import("./pages/backlinks.astro.mjs"), "_page4");
var _page5 = /* @__PURE__ */ __name(() => import("./pages/blog/1-what-is-the-purpose-of-the-role-attribute-in-html.astro.mjs"), "_page5");
var _page6 = /* @__PURE__ */ __name(() => import("./pages/blog/10-h1-tag-class-alternate.astro.mjs"), "_page6");
var _page7 = /* @__PURE__ */ __name(() => import("./pages/blog/100-apostrophes-in-the-url-good-idea-or-bad-idea-and-w.astro.mjs"), "_page7");
var _page8 = /* @__PURE__ */ __name(() => import("./pages/blog/101-how-to-lazy-load-an-image-in-css.astro.mjs"), "_page8");
var _page9 = /* @__PURE__ */ __name(() => import("./pages/blog/102-is-there-a-way-to-make-search-bots-ignore-certain-.astro.mjs"), "_page9");
var _page10 = /* @__PURE__ */ __name(() => import("./pages/blog/103-google-not-showing-react-helmet-title-and-descript.astro.mjs"), "_page10");
var _page11 = /* @__PURE__ */ __name(() => import("./pages/blog/104-multiple-domains-for-one-site-alias-or-redirect.astro.mjs"), "_page11");
var _page12 = /* @__PURE__ */ __name(() => import("./pages/blog/105-redirect-status-code-in-nextresponseredirect-is-no.astro.mjs"), "_page12");
var _page13 = /* @__PURE__ */ __name(() => import("./pages/blog/106-next-js-app-with-ssr-is-not-pre-rendering-html-so-.astro.mjs"), "_page13");
var _page14 = /* @__PURE__ */ __name(() => import("./pages/blog/107-creating-seo-friendly-urls-using-htaccess.astro.mjs"), "_page14");
var _page15 = /* @__PURE__ */ __name(() => import("./pages/blog/108-header-tag-html5-inside-div.astro.mjs"), "_page15");
var _page16 = /* @__PURE__ */ __name(() => import("./pages/blog/109-dynamic-sitemap-for-nextjs-13.astro.mjs"), "_page16");
var _page17 = /* @__PURE__ */ __name(() => import("./pages/blog/11-urls-dash-vs-underscore.astro.mjs"), "_page17");
var _page18 = /* @__PURE__ */ __name(() => import("./pages/blog/110-if-a-url-contains-a-quote-how-do-you-specify-the-r.astro.mjs"), "_page18");
var _page19 = /* @__PURE__ */ __name(() => import("./pages/blog/111-preventing-google-from-indexing-the-contents-of-a-.astro.mjs"), "_page19");
var _page20 = /* @__PURE__ */ __name(() => import("./pages/blog/112-how-to-make-canonicals-with-php.astro.mjs"), "_page20");
var _page21 = /* @__PURE__ */ __name(() => import("./pages/blog/114-noscript-tag-javascript-disabled-warning-and-googl.astro.mjs"), "_page21");
var _page22 = /* @__PURE__ */ __name(() => import("./pages/blog/115-is-there-a-standardized-meta-tag-for-the-date-of-a.astro.mjs"), "_page22");
var _page23 = /* @__PURE__ */ __name(() => import("./pages/blog/116-can-i-add-rel-nofollow-to-iframe-tag.astro.mjs"), "_page23");
var _page24 = /* @__PURE__ */ __name(() => import("./pages/blog/117-open-graph-description-meta-tag-is-not-working-in-.astro.mjs"), "_page24");
var _page25 = /* @__PURE__ */ __name(() => import("./pages/blog/118-how-to-add-canonical-tag-to-single-page-applicatio.astro.mjs"), "_page25");
var _page26 = /* @__PURE__ */ __name(() => import("./pages/blog/119-nextjs-empty-alt-tag-when-using-image-component.astro.mjs"), "_page26");
var _page27 = /* @__PURE__ */ __name(() => import("./pages/blog/12-how-to-get-post-title-in-wordpress.astro.mjs"), "_page27");
var _page28 = /* @__PURE__ */ __name(() => import("./pages/blog/120-rails-301-redirection.astro.mjs"), "_page28");
var _page29 = /* @__PURE__ */ __name(() => import("./pages/blog/121-update-meta-tags-in-angular-universal-with-externa.astro.mjs"), "_page29");
var _page30 = /* @__PURE__ */ __name(() => import("./pages/blog/122-can-we-detect-if-a-site-is-on-cdn.astro.mjs"), "_page30");
var _page31 = /* @__PURE__ */ __name(() => import("./pages/blog/123-remove-indexphproute-from-opencart.astro.mjs"), "_page31");
var _page32 = /* @__PURE__ */ __name(() => import("./pages/blog/124-next-image-relative-paths-work-but-point-to-404-pa.astro.mjs"), "_page32");
var _page33 = /* @__PURE__ */ __name(() => import("./pages/blog/125-meta-tag-vs-robotstxt.astro.mjs"), "_page33");
var _page34 = /* @__PURE__ */ __name(() => import("./pages/blog/126-pushstate-and-seo.astro.mjs"), "_page34");
var _page35 = /* @__PURE__ */ __name(() => import("./pages/blog/127-does-google-index-pages-with-hidden-divs.astro.mjs"), "_page35");
var _page36 = /* @__PURE__ */ __name(() => import("./pages/blog/128-robotstxt-for-multiple-domains.astro.mjs"), "_page36");
var _page37 = /* @__PURE__ */ __name(() => import("./pages/blog/129-google-indexing-of-my-angularjs-application.astro.mjs"), "_page37");
var _page38 = /* @__PURE__ */ __name(() => import("./pages/blog/13-htaccess-301-redirect-of-single-page.astro.mjs"), "_page38");
var _page39 = /* @__PURE__ */ __name(() => import("./pages/blog/130-json-ld-schemaorg-multiple-videoimage-page.astro.mjs"), "_page39");
var _page40 = /* @__PURE__ */ __name(() => import("./pages/blog/131-react-sitemapxml.astro.mjs"), "_page40");
var _page41 = /* @__PURE__ */ __name(() => import("./pages/blog/132-what-microdata-should-i-use-for-a-blog.astro.mjs"), "_page41");
var _page42 = /* @__PURE__ */ __name(() => import("./pages/blog/133-htaccess-301-redirect-from-old-domain-to-new-domai.astro.mjs"), "_page42");
var _page43 = /* @__PURE__ */ __name(() => import("./pages/blog/134-correct-microdata-markup-for-breadcrumbs.astro.mjs"), "_page43");
var _page44 = /* @__PURE__ */ __name(() => import("./pages/blog/135-generating-xml-sitemap-for-dynamic-routes-in-nuxt-.astro.mjs"), "_page44");
var _page45 = /* @__PURE__ */ __name(() => import("./pages/blog/136-should-i-use-meta-nameauthor-contentyour-name-or-l.astro.mjs"), "_page45");
var _page46 = /* @__PURE__ */ __name(() => import("./pages/blog/137-is-including-meta-namefragment-content-harmful-for.astro.mjs"), "_page46");
var _page47 = /* @__PURE__ */ __name(() => import("./pages/blog/138-how-to-prevent-search-engines-from-indexing-a-sing.astro.mjs"), "_page47");
var _page48 = /* @__PURE__ */ __name(() => import("./pages/blog/139-where-to-put-your-google-analytics-code.astro.mjs"), "_page48");
var _page49 = /* @__PURE__ */ __name(() => import("./pages/blog/14-redirecting-404-error-with-htaccess-via-301-for-se.astro.mjs"), "_page49");
var _page50 = /* @__PURE__ */ __name(() => import("./pages/blog/140-implement-canonical-tag-in-an-angular-application.astro.mjs"), "_page50");
var _page51 = /* @__PURE__ */ __name(() => import("./pages/blog/141-can-i-remove-the-json-ld-schema-that-yoast-adds-to.astro.mjs"), "_page51");
var _page52 = /* @__PURE__ */ __name(() => import("./pages/blog/142-map-route-aspnet-mvc.astro.mjs"), "_page52");
var _page53 = /* @__PURE__ */ __name(() => import("./pages/blog/143-how-send-to-google-ping-after-add-new-post.astro.mjs"), "_page53");
var _page54 = /* @__PURE__ */ __name(() => import("./pages/blog/144-how-to-handle-_escaped_fragment_-for-ajax-crawlers.astro.mjs"), "_page54");
var _page55 = /* @__PURE__ */ __name(() => import("./pages/blog/145-nextjs-16-beta-metadata-tags-showing-up-in-body-in.astro.mjs"), "_page55");
var _page56 = /* @__PURE__ */ __name(() => import("./pages/blog/146-how-can-i-add-sitemapxml-to-angularjs-site.astro.mjs"), "_page56");
var _page57 = /* @__PURE__ */ __name(() => import("./pages/blog/147-sitemapxml-in-angular-spa.astro.mjs"), "_page57");
var _page58 = /* @__PURE__ */ __name(() => import("./pages/blog/148-how-do-i-allow-google-to-index-login-required-part.astro.mjs"), "_page58");
var _page59 = /* @__PURE__ */ __name(() => import("./pages/blog/149-what-makes-a-friendly-url.astro.mjs"), "_page59");
var _page60 = /* @__PURE__ */ __name(() => import("./pages/blog/150-can-angular-minify-compress-and-remove-unused-js-a.astro.mjs"), "_page60");
var _page61 = /* @__PURE__ */ __name(() => import("./pages/blog/151-pagespeed-insights-not-seeing-the-gzip-compression.astro.mjs"), "_page61");
var _page62 = /* @__PURE__ */ __name(() => import("./pages/blog/152-trailing-slash-on-void-elements-has-no-effect-and-.astro.mjs"), "_page62");
var _page63 = /* @__PURE__ */ __name(() => import("./pages/blog/153-google-disable-certain-querystring-in-robotstxt.astro.mjs"), "_page63");
var _page64 = /* @__PURE__ */ __name(() => import("./pages/blog/154-nginx-rewriting-rule-for-getting-clean-url.astro.mjs"), "_page64");
var _page65 = /* @__PURE__ */ __name(() => import("./pages/blog/155-can-an-seo-friendly-url-contain-a-unique-id.astro.mjs"), "_page65");
var _page66 = /* @__PURE__ */ __name(() => import("./pages/blog/156-seo-and-div-displaynone.astro.mjs"), "_page66");
var _page67 = /* @__PURE__ */ __name(() => import("./pages/blog/157-nextjs-struggling-to-improve-lcp-for-text.astro.mjs"), "_page67");
var _page68 = /* @__PURE__ */ __name(() => import("./pages/blog/158-do-spaces-in-your-url-20-have-a-negative-impact-on.astro.mjs"), "_page68");
var _page69 = /* @__PURE__ */ __name(() => import("./pages/blog/159-h2-comes-before-h1-in-source-is-it-ok.astro.mjs"), "_page69");
var _page70 = /* @__PURE__ */ __name(() => import("./pages/blog/16-ignore-urls-in-robottxt-with-specific-parameters.astro.mjs"), "_page70");
var _page71 = /* @__PURE__ */ __name(() => import("./pages/blog/160-robotstxt-file-in-mvcnet-4.astro.mjs"), "_page71");
var _page72 = /* @__PURE__ */ __name(() => import("./pages/blog/161-visually-remove-h1-element-whilst-preserving-scree.astro.mjs"), "_page72");
var _page73 = /* @__PURE__ */ __name(() => import("./pages/blog/162-does-inline-css-and-javascript-really-affect-site-.astro.mjs"), "_page73");
var _page74 = /* @__PURE__ */ __name(() => import("./pages/blog/163-htaccess-errordocument-vs-rewriterule.astro.mjs"), "_page74");
var _page75 = /* @__PURE__ */ __name(() => import("./pages/blog/164-google-bot-crawling-on-angularjs-site-with-html5-m.astro.mjs"), "_page75");
var _page76 = /* @__PURE__ */ __name(() => import("./pages/blog/165-adding-meta-tags-on-google-sites.astro.mjs"), "_page76");
var _page77 = /* @__PURE__ */ __name(() => import("./pages/blog/166-where-to-put-robotstxt-file.astro.mjs"), "_page77");
var _page78 = /* @__PURE__ */ __name(() => import("./pages/blog/167-how-to-set-up-meta-tags-in-react.astro.mjs"), "_page78");
var _page79 = /* @__PURE__ */ __name(() => import("./pages/blog/168-how-to-correctly-implement-json-ld-localbusiness-s.astro.mjs"), "_page79");
var _page80 = /* @__PURE__ */ __name(() => import("./pages/blog/169-what-is-a-more-effective-title-seperator-for-seo-p.astro.mjs"), "_page80");
var _page81 = /* @__PURE__ */ __name(() => import("./pages/blog/17-domain-ip-address-for-www-and-non-www-for-canonica.astro.mjs"), "_page81");
var _page82 = /* @__PURE__ */ __name(() => import("./pages/blog/170-404-header-redirect-query.astro.mjs"), "_page82");
var _page83 = /* @__PURE__ */ __name(() => import("./pages/blog/171-is-it-necessary-to-use-cdata-in-rss-feed-format.astro.mjs"), "_page83");
var _page84 = /* @__PURE__ */ __name(() => import("./pages/blog/172-why-meta-description-tag-is-not-showing-on-google.astro.mjs"), "_page84");
var _page85 = /* @__PURE__ */ __name(() => import("./pages/blog/173-does-google-crawl-ajax-content.astro.mjs"), "_page85");
var _page86 = /* @__PURE__ */ __name(() => import("./pages/blog/174-difference-between-404-and-410-error-code.astro.mjs"), "_page86");
var _page87 = /* @__PURE__ */ __name(() => import("./pages/blog/175-remove-indexphp-from-url-only-on-root-with-nginx-r.astro.mjs"), "_page87");
var _page88 = /* @__PURE__ */ __name(() => import("./pages/blog/176-meta-tags-for-google-vs-meta-tags-open-graph-for-f.astro.mjs"), "_page88");
var _page89 = /* @__PURE__ */ __name(() => import("./pages/blog/177-magento-redirects-to-base-url-using-302-how-do-i-g.astro.mjs"), "_page89");
var _page90 = /* @__PURE__ */ __name(() => import("./pages/blog/178-using-commas-in-urls-can-break-the-url-sometimes.astro.mjs"), "_page90");
var _page91 = /* @__PURE__ */ __name(() => import("./pages/blog/179-nextjs-getinitialprops-blocked-the-page-rendering-.astro.mjs"), "_page91");
var _page92 = /* @__PURE__ */ __name(() => import("./pages/blog/18-what-happens-if-the-meta-tags-are-present-in-the-d.astro.mjs"), "_page92");
var _page93 = /* @__PURE__ */ __name(() => import("./pages/blog/180-xpath-in-importxml-for-extracting-meta-description.astro.mjs"), "_page93");
var _page94 = /* @__PURE__ */ __name(() => import("./pages/blog/181-can-i-use-the-host-directive-in-robotstxt.astro.mjs"), "_page94");
var _page95 = /* @__PURE__ */ __name(() => import("./pages/blog/182-woocommerce-custom-product-slug.astro.mjs"), "_page95");
var _page96 = /* @__PURE__ */ __name(() => import("./pages/blog/183-expo-react-native-ssr.astro.mjs"), "_page96");
var _page97 = /* @__PURE__ */ __name(() => import("./pages/blog/184-does-a-meta-tag-for-ogtitle-make-redundant-a-meta-.astro.mjs"), "_page97");
var _page98 = /* @__PURE__ */ __name(() => import("./pages/blog/185-how-can-i-make-an-iframe-seo-friendly.astro.mjs"), "_page98");
var _page99 = /* @__PURE__ */ __name(() => import("./pages/blog/186-how-can-i-get-yoast-meta-from-post-instead-of-word.astro.mjs"), "_page99");
var _page100 = /* @__PURE__ */ __name(() => import("./pages/blog/187-razor-engine-seo-meta-tags.astro.mjs"), "_page100");
var _page101 = /* @__PURE__ */ __name(() => import("./pages/blog/188-http-status-code-for-overloaded-server.astro.mjs"), "_page101");
var _page102 = /* @__PURE__ */ __name(() => import("./pages/blog/189-need-to-block-subdomain-using-robotstxt-which-is-o.astro.mjs"), "_page102");
var _page103 = /* @__PURE__ */ __name(() => import("./pages/blog/19-block-all-botscrawlersspiders-for-a-special-direct.astro.mjs"), "_page103");
var _page104 = /* @__PURE__ */ __name(() => import("./pages/blog/190-how-to-run-phantomjs-as-a-server-and-call-it-remot.astro.mjs"), "_page104");
var _page105 = /* @__PURE__ */ __name(() => import("./pages/blog/191-sitemapxml-for-multi-language-pages.astro.mjs"), "_page105");
var _page106 = /* @__PURE__ */ __name(() => import("./pages/blog/192-how-to-make-a-webpage-unsearchable.astro.mjs"), "_page106");
var _page107 = /* @__PURE__ */ __name(() => import("./pages/blog/193-wordpress-change-x-robots-tag.astro.mjs"), "_page107");
var _page108 = /* @__PURE__ */ __name(() => import("./pages/blog/194-get-current-page-and-url-in-prestashop.astro.mjs"), "_page108");
var _page109 = /* @__PURE__ */ __name(() => import("./pages/blog/195-facebook-and-crawl-delay-in-robotstxt.astro.mjs"), "_page109");
var _page110 = /* @__PURE__ */ __name(() => import("./pages/blog/196-htaccess-301-redirect-wildcard-for-new-base-domain.astro.mjs"), "_page110");
var _page111 = /* @__PURE__ */ __name(() => import("./pages/blog/197-how-does-cufon-affect-seo-and-search-bots.astro.mjs"), "_page111");
var _page112 = /* @__PURE__ */ __name(() => import("./pages/blog/198-how-do-i-fix-a-parser-mismatched-metadata-error-fr.astro.mjs"), "_page112");
var _page113 = /* @__PURE__ */ __name(() => import("./pages/blog/199-is-text-indent-9999px-a-bad-technique-for-replacin.astro.mjs"), "_page113");
var _page114 = /* @__PURE__ */ __name(() => import("./pages/blog/2-how-to-request-google-to-re-crawl-my-website.astro.mjs"), "_page114");
var _page115 = /* @__PURE__ */ __name(() => import("./pages/blog/20-whats-the-correct-way-to-hide-the-h1-tag-and-not-b.astro.mjs"), "_page115");
var _page116 = /* @__PURE__ */ __name(() => import("./pages/blog/200-disallow-in-robotstxt-explanation-needed.astro.mjs"), "_page116");
var _page117 = /* @__PURE__ */ __name(() => import("./pages/blog/201-do-i-need-to-submit-separate-mobile-sitemap-for-am.astro.mjs"), "_page117");
var _page118 = /* @__PURE__ */ __name(() => import("./pages/blog/202-seo-button-vs-a-html-tags.astro.mjs"), "_page118");
var _page119 = /* @__PURE__ */ __name(() => import("./pages/blog/203-mvc-how-to-route-sitemapxml-to-an-actionresult.astro.mjs"), "_page119");
var _page120 = /* @__PURE__ */ __name(() => import("./pages/blog/204-better-seo-to-remove-stop-words-from-an-articles-u.astro.mjs"), "_page120");
var _page121 = /* @__PURE__ */ __name(() => import("./pages/blog/205-how-do-i-set-meta-tags-in-nuxt-ssr.astro.mjs"), "_page121");
var _page122 = /* @__PURE__ */ __name(() => import("./pages/blog/206-open-graph-meta-tags-and-seo-in-a-react-spa.astro.mjs"), "_page122");
var _page123 = /* @__PURE__ */ __name(() => import("./pages/blog/207-aspnet-mvc-support-for-urls-with-hyphens.astro.mjs"), "_page123");
var _page124 = /* @__PURE__ */ __name(() => import("./pages/blog/208-core-web-vitals-flagged-image-elements-do-not-have.astro.mjs"), "_page124");
var _page125 = /* @__PURE__ */ __name(() => import("./pages/blog/209-do-i-need-to-use-http-redirect-code-302-or-307.astro.mjs"), "_page125");
var _page126 = /* @__PURE__ */ __name(() => import("./pages/blog/21-remove-indexphproutecommonhome-from-opencart.astro.mjs"), "_page126");
var _page127 = /* @__PURE__ */ __name(() => import("./pages/blog/210-google-says-text-too-small-to-read-but-no-info-abo.astro.mjs"), "_page127");
var _page128 = /* @__PURE__ */ __name(() => import("./pages/blog/211-robotstxt-in-subdirectory.astro.mjs"), "_page128");
var _page129 = /* @__PURE__ */ __name(() => import("./pages/blog/212-facebook-debugger-does-not-pick-up-nextjs-next-seo.astro.mjs"), "_page129");
var _page130 = /* @__PURE__ */ __name(() => import("./pages/blog/213-wordpress-pages-have-low-text-html-ratio.astro.mjs"), "_page130");
var _page131 = /* @__PURE__ */ __name(() => import("./pages/blog/214-mod-rewrite-forwarding-without-changing-url.astro.mjs"), "_page131");
var _page132 = /* @__PURE__ */ __name(() => import("./pages/blog/22-angular-8-sitemap-and-robotstxt.astro.mjs"), "_page132");
var _page133 = /* @__PURE__ */ __name(() => import("./pages/blog/23-relnofollow-noopener-possible-to-have-both-at-the-.astro.mjs"), "_page133");
var _page134 = /* @__PURE__ */ __name(() => import("./pages/blog/24-what-is-the-etymology-of-slug-in-a-url.astro.mjs"), "_page134");
var _page135 = /* @__PURE__ */ __name(() => import("./pages/blog/25-is-there-a-way-to-show-alttext-as-a-mouseover-tool.astro.mjs"), "_page135");
var _page136 = /* @__PURE__ */ __name(() => import("./pages/blog/26-image-thumbnail-not-showing-while-sharing-link-on-.astro.mjs"), "_page136");
var _page137 = /* @__PURE__ */ __name(() => import("./pages/blog/27-google-search-console-fails-to-fetch-sitemaps-site.astro.mjs"), "_page137");
var _page138 = /* @__PURE__ */ __name(() => import("./pages/blog/28-h1-h2-h3-tags-inline-within-paragraphs-p.astro.mjs"), "_page138");
var _page139 = /* @__PURE__ */ __name(() => import("./pages/blog/29-how-can-i-reduce-javascript-execution-time-of-exte.astro.mjs"), "_page139");
var _page140 = /* @__PURE__ */ __name(() => import("./pages/blog/3-replacing-h1-text-with-a-logo-image-best-method-fo.astro.mjs"), "_page140");
var _page141 = /* @__PURE__ */ __name(() => import("./pages/blog/30-external-links-when-use-relexternal-or-relnofollow.astro.mjs"), "_page141");
var _page142 = /* @__PURE__ */ __name(() => import("./pages/blog/31-next-js-build-in-vercel-fails-when-with-meta-data-.astro.mjs"), "_page142");
var _page143 = /* @__PURE__ */ __name(() => import("./pages/blog/32-should-i-have-aside-element-outside-or-inside-of-m.astro.mjs"), "_page143");
var _page144 = /* @__PURE__ */ __name(() => import("./pages/blog/33-nuxt-404-error-page-should-redirect-to-homepage.astro.mjs"), "_page144");
var _page145 = /* @__PURE__ */ __name(() => import("./pages/blog/34-how-can-i-create-custom-seo-friendly-urls-in-openc.astro.mjs"), "_page145");
var _page146 = /* @__PURE__ */ __name(() => import("./pages/blog/36-generate-seo-friendly-urls-slugs.astro.mjs"), "_page146");
var _page147 = /* @__PURE__ */ __name(() => import("./pages/blog/37-what-is-the-correct-use-of-schemaorg-sitenavigatio.astro.mjs"), "_page147");
var _page148 = /* @__PURE__ */ __name(() => import("./pages/blog/38-how-many-keywords-are-ideal-for-the-meta-keywords-.astro.mjs"), "_page148");
var _page149 = /* @__PURE__ */ __name(() => import("./pages/blog/39-php-vs-javascript-for-dynamic-html-pages.astro.mjs"), "_page149");
var _page150 = /* @__PURE__ */ __name(() => import("./pages/blog/4-when-should-i-use-a-trailing-slash-in-my-url.astro.mjs"), "_page150");
var _page151 = /* @__PURE__ */ __name(() => import("./pages/blog/40-what-is-the-difference-between-index-follow-or-fol.astro.mjs"), "_page151");
var _page152 = /* @__PURE__ */ __name(() => import("./pages/blog/41-read-more-links-do-not-have-descriptive-text.astro.mjs"), "_page152");
var _page153 = /* @__PURE__ */ __name(() => import("./pages/blog/42-are-301-redirects-possible-using-javascript-or-jqu.astro.mjs"), "_page153");
var _page154 = /* @__PURE__ */ __name(() => import("./pages/blog/43-how-can-i-add-the-logo-in-search-engines-results.astro.mjs"), "_page154");
var _page155 = /* @__PURE__ */ __name(() => import("./pages/blog/44-how-to-create-sitemap-dynamically-in-angular-12.astro.mjs"), "_page155");
var _page156 = /* @__PURE__ */ __name(() => import("./pages/blog/45-how-to-force-google-to-re-index-a-page.astro.mjs"), "_page156");
var _page157 = /* @__PURE__ */ __name(() => import("./pages/blog/46-use-301-or-303-to-redirect-http-to-https.astro.mjs"), "_page157");
var _page158 = /* @__PURE__ */ __name(() => import("./pages/blog/47-next-js-dynamic-metadata.astro.mjs"), "_page158");
var _page159 = /* @__PURE__ */ __name(() => import("./pages/blog/48-wordpress-remove-robots-meta-tag-noindex.astro.mjs"), "_page159");
var _page160 = /* @__PURE__ */ __name(() => import("./pages/blog/49-seo-title-vs-alt-vs-text.astro.mjs"), "_page160");
var _page161 = /* @__PURE__ */ __name(() => import("./pages/blog/5-how-do-search-engines-deal-with-angularjs-applicat.astro.mjs"), "_page161");
var _page162 = /* @__PURE__ */ __name(() => import("./pages/blog/50-how-add-meta-propertyoglocale-content.astro.mjs"), "_page162");
var _page163 = /* @__PURE__ */ __name(() => import("./pages/blog/51-changing-the-svg-color-in-css.astro.mjs"), "_page163");
var _page164 = /* @__PURE__ */ __name(() => import("./pages/blog/52-vue-click-doesnt-work-on-an-anchor-tag-with-href-p.astro.mjs"), "_page164");
var _page165 = /* @__PURE__ */ __name(() => import("./pages/blog/53-refresh-google-search-results-for-my-site.astro.mjs"), "_page165");
var _page166 = /* @__PURE__ */ __name(() => import("./pages/blog/54-how-to-specify-a-vary-accept-encoding-header.astro.mjs"), "_page166");
var _page167 = /* @__PURE__ */ __name(() => import("./pages/blog/55-is-the-google-site-verification-meta-tag-required-.astro.mjs"), "_page167");
var _page168 = /* @__PURE__ */ __name(() => import("./pages/blog/56-microdata-or-json-ld-im-confused.astro.mjs"), "_page168");
var _page169 = /* @__PURE__ */ __name(() => import("./pages/blog/57-nextjs-how-to-redirect-to-a-new-url-with-301-statu.astro.mjs"), "_page169");
var _page170 = /* @__PURE__ */ __name(() => import("./pages/blog/58-how-do-you-use-reactjs-for-seo.astro.mjs"), "_page170");
var _page171 = /* @__PURE__ */ __name(() => import("./pages/blog/59-how-to-fix-noindex-detected-in-x-robots-tag-http-h.astro.mjs"), "_page171");
var _page172 = /* @__PURE__ */ __name(() => import("./pages/blog/60-how-to-show-my-website-favicon-in-bings-search-eng.astro.mjs"), "_page172");
var _page173 = /* @__PURE__ */ __name(() => import("./pages/blog/61-how-to-make-a-spa-seo-crawlable.astro.mjs"), "_page173");
var _page174 = /* @__PURE__ */ __name(() => import("./pages/blog/62-301-redirect-from-one-website-to-another-using-asp.astro.mjs"), "_page174");
var _page175 = /* @__PURE__ */ __name(() => import("./pages/blog/63-validation-error-the-itemprop-attribute-was-specif.astro.mjs"), "_page175");
var _page176 = /* @__PURE__ */ __name(() => import("./pages/blog/64-is-h1-tag-thats-hidden-using-displaynone-given-pro.astro.mjs"), "_page176");
var _page177 = /* @__PURE__ */ __name(() => import("./pages/blog/65-how-to-properly-use-h1-in-html5.astro.mjs"), "_page177");
var _page178 = /* @__PURE__ */ __name(() => import("./pages/blog/66-doing-links-like-twitter-hash-bang-urls.astro.mjs"), "_page178");
var _page179 = /* @__PURE__ */ __name(() => import("./pages/blog/67-keepmounted-property-on-material-ui-select-compone.astro.mjs"), "_page179");
var _page180 = /* @__PURE__ */ __name(() => import("./pages/blog/69-how-does-stack-overflow-generate-its-seo-friendly-.astro.mjs"), "_page180");
var _page181 = /* @__PURE__ */ __name(() => import("./pages/blog/7-how-to-force-telegram-to-update-the-link-preview.astro.mjs"), "_page181");
var _page182 = /* @__PURE__ */ __name(() => import("./pages/blog/70-what-are-the-important-meta-tags-i-must-put-in-my-.astro.mjs"), "_page182");
var _page183 = /* @__PURE__ */ __name(() => import("./pages/blog/71-how-to-handle-seo-for-client-components-in-nextjs-.astro.mjs"), "_page183");
var _page184 = /* @__PURE__ */ __name(() => import("./pages/blog/72-why-do-some-websites-add-slugs-to-the-end-of-urls.astro.mjs"), "_page184");
var _page185 = /* @__PURE__ */ __name(() => import("./pages/blog/73-what-is-meant-by-the-relbookmark-link-attribute.astro.mjs"), "_page185");
var _page186 = /* @__PURE__ */ __name(() => import("./pages/blog/74-how-does-search-engine-indexing-work-for-javascrip.astro.mjs"), "_page186");
var _page187 = /* @__PURE__ */ __name(() => import("./pages/blog/75-seo-for-multilingual-sites-language-specific-resul.astro.mjs"), "_page187");
var _page188 = /* @__PURE__ */ __name(() => import("./pages/blog/76-best-practice-for-serving-shared-html-headerfooter.astro.mjs"), "_page188");
var _page189 = /* @__PURE__ */ __name(() => import("./pages/blog/77-seo-meta-tags-in-nextjs-app-not-showing-in-page-so.astro.mjs"), "_page189");
var _page190 = /* @__PURE__ */ __name(() => import("./pages/blog/78-seo-meta-tag-ogdescription-vs-description.astro.mjs"), "_page190");
var _page191 = /* @__PURE__ */ __name(() => import("./pages/blog/79-angular2-seo-how-to-make-an-angular-2-app-crawlabl.astro.mjs"), "_page191");
var _page192 = /* @__PURE__ */ __name(() => import("./pages/blog/8-can-a-relative-sitemap-url-be-used-in-a-robotstxt.astro.mjs"), "_page192");
var _page193 = /* @__PURE__ */ __name(() => import("./pages/blog/80-how-to-do-url-re-writing-in-php.astro.mjs"), "_page193");
var _page194 = /* @__PURE__ */ __name(() => import("./pages/blog/81-is-a-text-inside-div-tags-semantically-correct.astro.mjs"), "_page194");
var _page195 = /* @__PURE__ */ __name(() => import("./pages/blog/82-single-page-js-websites-and-seo.astro.mjs"), "_page195");
var _page196 = /* @__PURE__ */ __name(() => import("./pages/blog/83-custom-metadata-depending-on-the-language-in-nextj.astro.mjs"), "_page196");
var _page197 = /* @__PURE__ */ __name(() => import("./pages/blog/84-angular2-seo-how-to-manipulate-the-meta-descriptio.astro.mjs"), "_page197");
var _page198 = /* @__PURE__ */ __name(() => import("./pages/blog/85-what-is-the-difference-between-s-and-del-in-html-a.astro.mjs"), "_page198");
var _page199 = /* @__PURE__ */ __name(() => import("./pages/blog/86-how-we-can-convert-client-side-rendering-react-js-.astro.mjs"), "_page199");
var _page200 = /* @__PURE__ */ __name(() => import("./pages/blog/87-redirect-to-404-page-or-display-404-message.astro.mjs"), "_page200");
var _page201 = /* @__PURE__ */ __name(() => import("./pages/blog/88-anchors-inside-headers-or-vice-versa-is-there-a-di.astro.mjs"), "_page201");
var _page202 = /* @__PURE__ */ __name(() => import("./pages/blog/89-background-image-with-webp-fallback-and-data-src.astro.mjs"), "_page202");
var _page203 = /* @__PURE__ */ __name(() => import("./pages/blog/90-how-to-add-twitter-metatags-dynamically-in-nextjs-.astro.mjs"), "_page203");
var _page204 = /* @__PURE__ */ __name(() => import("./pages/blog/91-multiple-hash-signs-in-url.astro.mjs"), "_page204");
var _page205 = /* @__PURE__ */ __name(() => import("./pages/blog/92-java-codelibrary-for-generating-slugs-for-use-in-p.astro.mjs"), "_page205");
var _page206 = /* @__PURE__ */ __name(() => import("./pages/blog/93-avoid-crawling-part-of-a-page-with-googleoff-and-g.astro.mjs"), "_page206");
var _page207 = /* @__PURE__ */ __name(() => import("./pages/blog/94-noindex-tag-for-google.astro.mjs"), "_page207");
var _page208 = /* @__PURE__ */ __name(() => import("./pages/blog/95-seo-friendly-url-using-php.astro.mjs"), "_page208");
var _page209 = /* @__PURE__ */ __name(() => import("./pages/blog/96-do-canonical-links-require-a-full-domain.astro.mjs"), "_page209");
var _page210 = /* @__PURE__ */ __name(() => import("./pages/blog/97-how-to-fill-the-yoast-seo-meta-data-when-creating-.astro.mjs"), "_page210");
var _page211 = /* @__PURE__ */ __name(() => import("./pages/blog/99-angular-uirouter-update-url-without-view-refresh.astro.mjs"), "_page211");
var _page212 = /* @__PURE__ */ __name(() => import("./pages/blog/ai-powered-seo-tools-future.astro.mjs"), "_page212");
var _page213 = /* @__PURE__ */ __name(() => import("./pages/blog/domain-authority-stuck-backlinks-not-updating.astro.mjs"), "_page213");
var _page214 = /* @__PURE__ */ __name(() => import("./pages/blog/fix-socialite-google-access-blocked-in-app-browser.astro.mjs"), "_page214");
var _page215 = /* @__PURE__ */ __name(() => import("./pages/blog/free-seo-tools-laravel-developers.astro.mjs"), "_page215");
var _page216 = /* @__PURE__ */ __name(() => import("./pages/blog/google-business-profile-optimization.astro.mjs"), "_page216");
var _page217 = /* @__PURE__ */ __name(() => import("./pages/blog/laravel-meta-tags-guide.astro.mjs"), "_page217");
var _page218 = /* @__PURE__ */ __name(() => import("./pages/blog/laravel-precog-always-returns-success.astro.mjs"), "_page218");
var _page219 = /* @__PURE__ */ __name(() => import("./pages/blog/laravel-sanctum-fortify-spa-authentication.astro.mjs"), "_page219");
var _page220 = /* @__PURE__ */ __name(() => import("./pages/blog/laravel-seo-best-practices.astro.mjs"), "_page220");
var _page221 = /* @__PURE__ */ __name(() => import("./pages/blog/laravel-seo-packages-guide.astro.mjs"), "_page221");
var _page222 = /* @__PURE__ */ __name(() => import("./pages/blog/link-building-benefits-overview.astro.mjs"), "_page222");
var _page223 = /* @__PURE__ */ __name(() => import("./pages/blog/link-building-domain-authority-rankings.astro.mjs"), "_page223");
var _page224 = /* @__PURE__ */ __name(() => import("./pages/blog/link-building-roi-business-growth.astro.mjs"), "_page224");
var _page225 = /* @__PURE__ */ __name(() => import("./pages/blog/link-building-strategy-laravel.astro.mjs"), "_page225");
var _page226 = /* @__PURE__ */ __name(() => import("./pages/blog/local-citations-small-business-seo.astro.mjs"), "_page226");
var _page227 = /* @__PURE__ */ __name(() => import("./pages/blog/local-seo-checklist-dominate-local-search.astro.mjs"), "_page227");
var _page228 = /* @__PURE__ */ __name(() => import("./pages/blog/local-seo-small-business-guide.astro.mjs"), "_page228");
var _page229 = /* @__PURE__ */ __name(() => import("./pages/blog/local-seo-vs-traditional-seo.astro.mjs"), "_page229");
var _page230 = /* @__PURE__ */ __name(() => import("./pages/blog/moz-link-explorer-no-data-found.astro.mjs"), "_page230");
var _page231 = /* @__PURE__ */ __name(() => import("./pages/blog/on-page-seo-for-service-websites.astro.mjs"), "_page231");
var _page232 = /* @__PURE__ */ __name(() => import("./pages/blog/optimize-laravel-app-google.astro.mjs"), "_page232");
var _page233 = /* @__PURE__ */ __name(() => import("./pages/blog/reduce-spam-score-white-hat-seo.astro.mjs"), "_page233");
var _page234 = /* @__PURE__ */ __name(() => import("./pages/blog/review-ai-generated-code-laravel.astro.mjs"), "_page234");
var _page235 = /* @__PURE__ */ __name(() => import("./pages/blog/secure-video-embed-links-laravel-api.astro.mjs"), "_page235");
var _page236 = /* @__PURE__ */ __name(() => import("./pages/blog/structured-data-laravel-jsonld.astro.mjs"), "_page236");
var _page237 = /* @__PURE__ */ __name(() => import("./pages/blog/top-seo-tools-developers-2026.astro.mjs"), "_page237");
var _page238 = /* @__PURE__ */ __name(() => import("./pages/blog/website-seo-audit-in-10-minutes.astro.mjs"), "_page238");
var _page239 = /* @__PURE__ */ __name(() => import("./pages/blog/why-use-seo-tools-laravel.astro.mjs"), "_page239");
var _page240 = /* @__PURE__ */ __name(() => import("./pages/blog.astro.mjs"), "_page240");
var _page241 = /* @__PURE__ */ __name(() => import("./pages/capabilities.astro.mjs"), "_page241");
var _page242 = /* @__PURE__ */ __name(() => import("./pages/contact.astro.mjs"), "_page242");
var _page243 = /* @__PURE__ */ __name(() => import("./pages/facilities.astro.mjs"), "_page243");
var _page244 = /* @__PURE__ */ __name(() => import("./pages/locations/_city_.astro.mjs"), "_page244");
var _page245 = /* @__PURE__ */ __name(() => import("./pages/locations.astro.mjs"), "_page245");
var _page246 = /* @__PURE__ */ __name(() => import("./pages/posts/_id_.astro.mjs"), "_page246");
var _page247 = /* @__PURE__ */ __name(() => import("./pages/posts.astro.mjs"), "_page247");
var _page248 = /* @__PURE__ */ __name(() => import("./pages/privacy.astro.mjs"), "_page248");
var _page249 = /* @__PURE__ */ __name(() => import("./pages/software/laravel-gpt.astro.mjs"), "_page249");
var _page250 = /* @__PURE__ */ __name(() => import("./pages/software/laravel-mail.astro.mjs"), "_page250");
var _page251 = /* @__PURE__ */ __name(() => import("./pages/software/laravel-seo.astro.mjs"), "_page251");
var _page252 = /* @__PURE__ */ __name(() => import("./pages/software/laravel-ui.astro.mjs"), "_page252");
var _page253 = /* @__PURE__ */ __name(() => import("./pages/terms.astro.mjs"), "_page253");
var _page254 = /* @__PURE__ */ __name(() => import("./pages/use-cases.astro.mjs"), "_page254");
var _page255 = /* @__PURE__ */ __name(() => import("./pages/index.astro.mjs"), "_page255");
var pageMap = /* @__PURE__ */ new Map([
  ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
  ["src/pages/404.astro", _page1],
  ["src/pages/agent.astro", _page2],
  ["src/pages/api/contact.ts", _page3],
  ["src/pages/backlinks.astro", _page4],
  ["src/pages/blog/1-what-is-the-purpose-of-the-role-attribute-in-html.astro", _page5],
  ["src/pages/blog/10-h1-tag-class-alternate.astro", _page6],
  ["src/pages/blog/100-apostrophes-in-the-url-good-idea-or-bad-idea-and-w.astro", _page7],
  ["src/pages/blog/101-how-to-lazy-load-an-image-in-css.astro", _page8],
  ["src/pages/blog/102-is-there-a-way-to-make-search-bots-ignore-certain-.astro", _page9],
  ["src/pages/blog/103-google-not-showing-react-helmet-title-and-descript.astro", _page10],
  ["src/pages/blog/104-multiple-domains-for-one-site-alias-or-redirect.astro", _page11],
  ["src/pages/blog/105-redirect-status-code-in-nextresponseredirect-is-no.astro", _page12],
  ["src/pages/blog/106-next-js-app-with-ssr-is-not-pre-rendering-html-so-.astro", _page13],
  ["src/pages/blog/107-creating-seo-friendly-urls-using-htaccess.astro", _page14],
  ["src/pages/blog/108-header-tag-html5-inside-div.astro", _page15],
  ["src/pages/blog/109-dynamic-sitemap-for-nextjs-13.astro", _page16],
  ["src/pages/blog/11-urls-dash-vs-underscore.astro", _page17],
  ["src/pages/blog/110-if-a-url-contains-a-quote-how-do-you-specify-the-r.astro", _page18],
  ["src/pages/blog/111-preventing-google-from-indexing-the-contents-of-a-.astro", _page19],
  ["src/pages/blog/112-how-to-make-canonicals-with-php.astro", _page20],
  ["src/pages/blog/114-noscript-tag-javascript-disabled-warning-and-googl.astro", _page21],
  ["src/pages/blog/115-is-there-a-standardized-meta-tag-for-the-date-of-a.astro", _page22],
  ["src/pages/blog/116-can-i-add-rel-nofollow-to-iframe-tag.astro", _page23],
  ["src/pages/blog/117-open-graph-description-meta-tag-is-not-working-in-.astro", _page24],
  ["src/pages/blog/118-how-to-add-canonical-tag-to-single-page-applicatio.astro", _page25],
  ["src/pages/blog/119-nextjs-empty-alt-tag-when-using-image-component.astro", _page26],
  ["src/pages/blog/12-how-to-get-post-title-in-wordpress.astro", _page27],
  ["src/pages/blog/120-rails-301-redirection.astro", _page28],
  ["src/pages/blog/121-update-meta-tags-in-angular-universal-with-externa.astro", _page29],
  ["src/pages/blog/122-can-we-detect-if-a-site-is-on-cdn.astro", _page30],
  ["src/pages/blog/123-remove-indexphproute-from-opencart.astro", _page31],
  ["src/pages/blog/124-next-image-relative-paths-work-but-point-to-404-pa.astro", _page32],
  ["src/pages/blog/125-meta-tag-vs-robotstxt.astro", _page33],
  ["src/pages/blog/126-pushstate-and-seo.astro", _page34],
  ["src/pages/blog/127-does-google-index-pages-with-hidden-divs.astro", _page35],
  ["src/pages/blog/128-robotstxt-for-multiple-domains.astro", _page36],
  ["src/pages/blog/129-google-indexing-of-my-angularjs-application.astro", _page37],
  ["src/pages/blog/13-htaccess-301-redirect-of-single-page.astro", _page38],
  ["src/pages/blog/130-json-ld-schemaorg-multiple-videoimage-page.astro", _page39],
  ["src/pages/blog/131-react-sitemapxml.astro", _page40],
  ["src/pages/blog/132-what-microdata-should-i-use-for-a-blog.astro", _page41],
  ["src/pages/blog/133-htaccess-301-redirect-from-old-domain-to-new-domai.astro", _page42],
  ["src/pages/blog/134-correct-microdata-markup-for-breadcrumbs.astro", _page43],
  ["src/pages/blog/135-generating-xml-sitemap-for-dynamic-routes-in-nuxt-.astro", _page44],
  ["src/pages/blog/136-should-i-use-meta-nameauthor-contentyour-name-or-l.astro", _page45],
  ["src/pages/blog/137-is-including-meta-namefragment-content-harmful-for.astro", _page46],
  ["src/pages/blog/138-how-to-prevent-search-engines-from-indexing-a-sing.astro", _page47],
  ["src/pages/blog/139-where-to-put-your-google-analytics-code.astro", _page48],
  ["src/pages/blog/14-redirecting-404-error-with-htaccess-via-301-for-se.astro", _page49],
  ["src/pages/blog/140-implement-canonical-tag-in-an-angular-application.astro", _page50],
  ["src/pages/blog/141-can-i-remove-the-json-ld-schema-that-yoast-adds-to.astro", _page51],
  ["src/pages/blog/142-map-route-aspnet-mvc.astro", _page52],
  ["src/pages/blog/143-how-send-to-google-ping-after-add-new-post.astro", _page53],
  ["src/pages/blog/144-how-to-handle-_escaped_fragment_-for-ajax-crawlers.astro", _page54],
  ["src/pages/blog/145-nextjs-16-beta-metadata-tags-showing-up-in-body-in.astro", _page55],
  ["src/pages/blog/146-how-can-i-add-sitemapxml-to-angularjs-site.astro", _page56],
  ["src/pages/blog/147-sitemapxml-in-angular-spa.astro", _page57],
  ["src/pages/blog/148-how-do-i-allow-google-to-index-login-required-part.astro", _page58],
  ["src/pages/blog/149-what-makes-a-friendly-url.astro", _page59],
  ["src/pages/blog/150-can-angular-minify-compress-and-remove-unused-js-a.astro", _page60],
  ["src/pages/blog/151-pagespeed-insights-not-seeing-the-gzip-compression.astro", _page61],
  ["src/pages/blog/152-trailing-slash-on-void-elements-has-no-effect-and-.astro", _page62],
  ["src/pages/blog/153-google-disable-certain-querystring-in-robotstxt.astro", _page63],
  ["src/pages/blog/154-nginx-rewriting-rule-for-getting-clean-url.astro", _page64],
  ["src/pages/blog/155-can-an-seo-friendly-url-contain-a-unique-id.astro", _page65],
  ["src/pages/blog/156-seo-and-div-displaynone.astro", _page66],
  ["src/pages/blog/157-nextjs-struggling-to-improve-lcp-for-text.astro", _page67],
  ["src/pages/blog/158-do-spaces-in-your-url-20-have-a-negative-impact-on.astro", _page68],
  ["src/pages/blog/159-h2-comes-before-h1-in-source-is-it-ok.astro", _page69],
  ["src/pages/blog/16-ignore-urls-in-robottxt-with-specific-parameters.astro", _page70],
  ["src/pages/blog/160-robotstxt-file-in-mvcnet-4.astro", _page71],
  ["src/pages/blog/161-visually-remove-h1-element-whilst-preserving-scree.astro", _page72],
  ["src/pages/blog/162-does-inline-css-and-javascript-really-affect-site-.astro", _page73],
  ["src/pages/blog/163-htaccess-errordocument-vs-rewriterule.astro", _page74],
  ["src/pages/blog/164-google-bot-crawling-on-angularjs-site-with-html5-m.astro", _page75],
  ["src/pages/blog/165-adding-meta-tags-on-google-sites.astro", _page76],
  ["src/pages/blog/166-where-to-put-robotstxt-file.astro", _page77],
  ["src/pages/blog/167-how-to-set-up-meta-tags-in-react.astro", _page78],
  ["src/pages/blog/168-how-to-correctly-implement-json-ld-localbusiness-s.astro", _page79],
  ["src/pages/blog/169-what-is-a-more-effective-title-seperator-for-seo-p.astro", _page80],
  ["src/pages/blog/17-domain-ip-address-for-www-and-non-www-for-canonica.astro", _page81],
  ["src/pages/blog/170-404-header-redirect-query.astro", _page82],
  ["src/pages/blog/171-is-it-necessary-to-use-cdata-in-rss-feed-format.astro", _page83],
  ["src/pages/blog/172-why-meta-description-tag-is-not-showing-on-google.astro", _page84],
  ["src/pages/blog/173-does-google-crawl-ajax-content.astro", _page85],
  ["src/pages/blog/174-difference-between-404-and-410-error-code.astro", _page86],
  ["src/pages/blog/175-remove-indexphp-from-url-only-on-root-with-nginx-r.astro", _page87],
  ["src/pages/blog/176-meta-tags-for-google-vs-meta-tags-open-graph-for-f.astro", _page88],
  ["src/pages/blog/177-magento-redirects-to-base-url-using-302-how-do-i-g.astro", _page89],
  ["src/pages/blog/178-using-commas-in-urls-can-break-the-url-sometimes.astro", _page90],
  ["src/pages/blog/179-nextjs-getinitialprops-blocked-the-page-rendering-.astro", _page91],
  ["src/pages/blog/18-what-happens-if-the-meta-tags-are-present-in-the-d.astro", _page92],
  ["src/pages/blog/180-xpath-in-importxml-for-extracting-meta-description.astro", _page93],
  ["src/pages/blog/181-can-i-use-the-host-directive-in-robotstxt.astro", _page94],
  ["src/pages/blog/182-woocommerce-custom-product-slug.astro", _page95],
  ["src/pages/blog/183-expo-react-native-ssr.astro", _page96],
  ["src/pages/blog/184-does-a-meta-tag-for-ogtitle-make-redundant-a-meta-.astro", _page97],
  ["src/pages/blog/185-how-can-i-make-an-iframe-seo-friendly.astro", _page98],
  ["src/pages/blog/186-how-can-i-get-yoast-meta-from-post-instead-of-word.astro", _page99],
  ["src/pages/blog/187-razor-engine-seo-meta-tags.astro", _page100],
  ["src/pages/blog/188-http-status-code-for-overloaded-server.astro", _page101],
  ["src/pages/blog/189-need-to-block-subdomain-using-robotstxt-which-is-o.astro", _page102],
  ["src/pages/blog/19-block-all-botscrawlersspiders-for-a-special-direct.astro", _page103],
  ["src/pages/blog/190-how-to-run-phantomjs-as-a-server-and-call-it-remot.astro", _page104],
  ["src/pages/blog/191-sitemapxml-for-multi-language-pages.astro", _page105],
  ["src/pages/blog/192-how-to-make-a-webpage-unsearchable.astro", _page106],
  ["src/pages/blog/193-wordpress-change-x-robots-tag.astro", _page107],
  ["src/pages/blog/194-get-current-page-and-url-in-prestashop.astro", _page108],
  ["src/pages/blog/195-facebook-and-crawl-delay-in-robotstxt.astro", _page109],
  ["src/pages/blog/196-htaccess-301-redirect-wildcard-for-new-base-domain.astro", _page110],
  ["src/pages/blog/197-how-does-cufon-affect-seo-and-search-bots.astro", _page111],
  ["src/pages/blog/198-how-do-i-fix-a-parser-mismatched-metadata-error-fr.astro", _page112],
  ["src/pages/blog/199-is-text-indent-9999px-a-bad-technique-for-replacin.astro", _page113],
  ["src/pages/blog/2-how-to-request-google-to-re-crawl-my-website.astro", _page114],
  ["src/pages/blog/20-whats-the-correct-way-to-hide-the-h1-tag-and-not-b.astro", _page115],
  ["src/pages/blog/200-disallow-in-robotstxt-explanation-needed.astro", _page116],
  ["src/pages/blog/201-do-i-need-to-submit-separate-mobile-sitemap-for-am.astro", _page117],
  ["src/pages/blog/202-seo-button-vs-a-html-tags.astro", _page118],
  ["src/pages/blog/203-mvc-how-to-route-sitemapxml-to-an-actionresult.astro", _page119],
  ["src/pages/blog/204-better-seo-to-remove-stop-words-from-an-articles-u.astro", _page120],
  ["src/pages/blog/205-how-do-i-set-meta-tags-in-nuxt-ssr.astro", _page121],
  ["src/pages/blog/206-open-graph-meta-tags-and-seo-in-a-react-spa.astro", _page122],
  ["src/pages/blog/207-aspnet-mvc-support-for-urls-with-hyphens.astro", _page123],
  ["src/pages/blog/208-core-web-vitals-flagged-image-elements-do-not-have.astro", _page124],
  ["src/pages/blog/209-do-i-need-to-use-http-redirect-code-302-or-307.astro", _page125],
  ["src/pages/blog/21-remove-indexphproutecommonhome-from-opencart.astro", _page126],
  ["src/pages/blog/210-google-says-text-too-small-to-read-but-no-info-abo.astro", _page127],
  ["src/pages/blog/211-robotstxt-in-subdirectory.astro", _page128],
  ["src/pages/blog/212-facebook-debugger-does-not-pick-up-nextjs-next-seo.astro", _page129],
  ["src/pages/blog/213-wordpress-pages-have-low-text-html-ratio.astro", _page130],
  ["src/pages/blog/214-mod-rewrite-forwarding-without-changing-url.astro", _page131],
  ["src/pages/blog/22-angular-8-sitemap-and-robotstxt.astro", _page132],
  ["src/pages/blog/23-relnofollow-noopener-possible-to-have-both-at-the-.astro", _page133],
  ["src/pages/blog/24-what-is-the-etymology-of-slug-in-a-url.astro", _page134],
  ["src/pages/blog/25-is-there-a-way-to-show-alttext-as-a-mouseover-tool.astro", _page135],
  ["src/pages/blog/26-image-thumbnail-not-showing-while-sharing-link-on-.astro", _page136],
  ["src/pages/blog/27-google-search-console-fails-to-fetch-sitemaps-site.astro", _page137],
  ["src/pages/blog/28-h1-h2-h3-tags-inline-within-paragraphs-p.astro", _page138],
  ["src/pages/blog/29-how-can-i-reduce-javascript-execution-time-of-exte.astro", _page139],
  ["src/pages/blog/3-replacing-h1-text-with-a-logo-image-best-method-fo.astro", _page140],
  ["src/pages/blog/30-external-links-when-use-relexternal-or-relnofollow.astro", _page141],
  ["src/pages/blog/31-next-js-build-in-vercel-fails-when-with-meta-data-.astro", _page142],
  ["src/pages/blog/32-should-i-have-aside-element-outside-or-inside-of-m.astro", _page143],
  ["src/pages/blog/33-nuxt-404-error-page-should-redirect-to-homepage.astro", _page144],
  ["src/pages/blog/34-how-can-i-create-custom-seo-friendly-urls-in-openc.astro", _page145],
  ["src/pages/blog/36-generate-seo-friendly-urls-slugs.astro", _page146],
  ["src/pages/blog/37-what-is-the-correct-use-of-schemaorg-sitenavigatio.astro", _page147],
  ["src/pages/blog/38-how-many-keywords-are-ideal-for-the-meta-keywords-.astro", _page148],
  ["src/pages/blog/39-php-vs-javascript-for-dynamic-html-pages.astro", _page149],
  ["src/pages/blog/4-when-should-i-use-a-trailing-slash-in-my-url.astro", _page150],
  ["src/pages/blog/40-what-is-the-difference-between-index-follow-or-fol.astro", _page151],
  ["src/pages/blog/41-read-more-links-do-not-have-descriptive-text.astro", _page152],
  ["src/pages/blog/42-are-301-redirects-possible-using-javascript-or-jqu.astro", _page153],
  ["src/pages/blog/43-how-can-i-add-the-logo-in-search-engines-results.astro", _page154],
  ["src/pages/blog/44-how-to-create-sitemap-dynamically-in-angular-12.astro", _page155],
  ["src/pages/blog/45-how-to-force-google-to-re-index-a-page.astro", _page156],
  ["src/pages/blog/46-use-301-or-303-to-redirect-http-to-https.astro", _page157],
  ["src/pages/blog/47-next-js-dynamic-metadata.astro", _page158],
  ["src/pages/blog/48-wordpress-remove-robots-meta-tag-noindex.astro", _page159],
  ["src/pages/blog/49-seo-title-vs-alt-vs-text.astro", _page160],
  ["src/pages/blog/5-how-do-search-engines-deal-with-angularjs-applicat.astro", _page161],
  ["src/pages/blog/50-how-add-meta-propertyoglocale-content.astro", _page162],
  ["src/pages/blog/51-changing-the-svg-color-in-css.astro", _page163],
  ["src/pages/blog/52-vue-click-doesnt-work-on-an-anchor-tag-with-href-p.astro", _page164],
  ["src/pages/blog/53-refresh-google-search-results-for-my-site.astro", _page165],
  ["src/pages/blog/54-how-to-specify-a-vary-accept-encoding-header.astro", _page166],
  ["src/pages/blog/55-is-the-google-site-verification-meta-tag-required-.astro", _page167],
  ["src/pages/blog/56-microdata-or-json-ld-im-confused.astro", _page168],
  ["src/pages/blog/57-nextjs-how-to-redirect-to-a-new-url-with-301-statu.astro", _page169],
  ["src/pages/blog/58-how-do-you-use-reactjs-for-seo.astro", _page170],
  ["src/pages/blog/59-how-to-fix-noindex-detected-in-x-robots-tag-http-h.astro", _page171],
  ["src/pages/blog/60-how-to-show-my-website-favicon-in-bings-search-eng.astro", _page172],
  ["src/pages/blog/61-how-to-make-a-spa-seo-crawlable.astro", _page173],
  ["src/pages/blog/62-301-redirect-from-one-website-to-another-using-asp.astro", _page174],
  ["src/pages/blog/63-validation-error-the-itemprop-attribute-was-specif.astro", _page175],
  ["src/pages/blog/64-is-h1-tag-thats-hidden-using-displaynone-given-pro.astro", _page176],
  ["src/pages/blog/65-how-to-properly-use-h1-in-html5.astro", _page177],
  ["src/pages/blog/66-doing-links-like-twitter-hash-bang-urls.astro", _page178],
  ["src/pages/blog/67-keepmounted-property-on-material-ui-select-compone.astro", _page179],
  ["src/pages/blog/69-how-does-stack-overflow-generate-its-seo-friendly-.astro", _page180],
  ["src/pages/blog/7-how-to-force-telegram-to-update-the-link-preview.astro", _page181],
  ["src/pages/blog/70-what-are-the-important-meta-tags-i-must-put-in-my-.astro", _page182],
  ["src/pages/blog/71-how-to-handle-seo-for-client-components-in-nextjs-.astro", _page183],
  ["src/pages/blog/72-why-do-some-websites-add-slugs-to-the-end-of-urls.astro", _page184],
  ["src/pages/blog/73-what-is-meant-by-the-relbookmark-link-attribute.astro", _page185],
  ["src/pages/blog/74-how-does-search-engine-indexing-work-for-javascrip.astro", _page186],
  ["src/pages/blog/75-seo-for-multilingual-sites-language-specific-resul.astro", _page187],
  ["src/pages/blog/76-best-practice-for-serving-shared-html-headerfooter.astro", _page188],
  ["src/pages/blog/77-seo-meta-tags-in-nextjs-app-not-showing-in-page-so.astro", _page189],
  ["src/pages/blog/78-seo-meta-tag-ogdescription-vs-description.astro", _page190],
  ["src/pages/blog/79-angular2-seo-how-to-make-an-angular-2-app-crawlabl.astro", _page191],
  ["src/pages/blog/8-can-a-relative-sitemap-url-be-used-in-a-robotstxt.astro", _page192],
  ["src/pages/blog/80-how-to-do-url-re-writing-in-php.astro", _page193],
  ["src/pages/blog/81-is-a-text-inside-div-tags-semantically-correct.astro", _page194],
  ["src/pages/blog/82-single-page-js-websites-and-seo.astro", _page195],
  ["src/pages/blog/83-custom-metadata-depending-on-the-language-in-nextj.astro", _page196],
  ["src/pages/blog/84-angular2-seo-how-to-manipulate-the-meta-descriptio.astro", _page197],
  ["src/pages/blog/85-what-is-the-difference-between-s-and-del-in-html-a.astro", _page198],
  ["src/pages/blog/86-how-we-can-convert-client-side-rendering-react-js-.astro", _page199],
  ["src/pages/blog/87-redirect-to-404-page-or-display-404-message.astro", _page200],
  ["src/pages/blog/88-anchors-inside-headers-or-vice-versa-is-there-a-di.astro", _page201],
  ["src/pages/blog/89-background-image-with-webp-fallback-and-data-src.astro", _page202],
  ["src/pages/blog/90-how-to-add-twitter-metatags-dynamically-in-nextjs-.astro", _page203],
  ["src/pages/blog/91-multiple-hash-signs-in-url.astro", _page204],
  ["src/pages/blog/92-java-codelibrary-for-generating-slugs-for-use-in-p.astro", _page205],
  ["src/pages/blog/93-avoid-crawling-part-of-a-page-with-googleoff-and-g.astro", _page206],
  ["src/pages/blog/94-noindex-tag-for-google.astro", _page207],
  ["src/pages/blog/95-seo-friendly-url-using-php.astro", _page208],
  ["src/pages/blog/96-do-canonical-links-require-a-full-domain.astro", _page209],
  ["src/pages/blog/97-how-to-fill-the-yoast-seo-meta-data-when-creating-.astro", _page210],
  ["src/pages/blog/99-angular-uirouter-update-url-without-view-refresh.astro", _page211],
  ["src/pages/blog/ai-powered-seo-tools-future.astro", _page212],
  ["src/pages/blog/domain-authority-stuck-backlinks-not-updating.astro", _page213],
  ["src/pages/blog/fix-socialite-google-access-blocked-in-app-browser.astro", _page214],
  ["src/pages/blog/free-seo-tools-laravel-developers.astro", _page215],
  ["src/pages/blog/google-business-profile-optimization.astro", _page216],
  ["src/pages/blog/laravel-meta-tags-guide.astro", _page217],
  ["src/pages/blog/laravel-precog-always-returns-success.astro", _page218],
  ["src/pages/blog/laravel-sanctum-fortify-spa-authentication.astro", _page219],
  ["src/pages/blog/laravel-seo-best-practices.astro", _page220],
  ["src/pages/blog/laravel-seo-packages-guide.md", _page221],
  ["src/pages/blog/link-building-benefits-overview.astro", _page222],
  ["src/pages/blog/link-building-domain-authority-rankings.astro", _page223],
  ["src/pages/blog/link-building-roi-business-growth.astro", _page224],
  ["src/pages/blog/link-building-strategy-laravel.astro", _page225],
  ["src/pages/blog/local-citations-small-business-seo.astro", _page226],
  ["src/pages/blog/local-seo-checklist-dominate-local-search.astro", _page227],
  ["src/pages/blog/local-seo-small-business-guide.astro", _page228],
  ["src/pages/blog/local-seo-vs-traditional-seo.astro", _page229],
  ["src/pages/blog/moz-link-explorer-no-data-found.astro", _page230],
  ["src/pages/blog/on-page-seo-for-service-websites.astro", _page231],
  ["src/pages/blog/optimize-laravel-app-google.astro", _page232],
  ["src/pages/blog/reduce-spam-score-white-hat-seo.astro", _page233],
  ["src/pages/blog/review-ai-generated-code-laravel.astro", _page234],
  ["src/pages/blog/secure-video-embed-links-laravel-api.astro", _page235],
  ["src/pages/blog/structured-data-laravel-jsonld.astro", _page236],
  ["src/pages/blog/top-seo-tools-developers-2026.astro", _page237],
  ["src/pages/blog/website-seo-audit-in-10-minutes.astro", _page238],
  ["src/pages/blog/why-use-seo-tools-laravel.astro", _page239],
  ["src/pages/blog/index.astro", _page240],
  ["src/pages/capabilities.astro", _page241],
  ["src/pages/contact.astro", _page242],
  ["src/pages/facilities.astro", _page243],
  ["src/pages/locations/[city].astro", _page244],
  ["src/pages/locations/index.astro", _page245],
  ["src/pages/posts/[id].astro", _page246],
  ["src/pages/posts/index.astro", _page247],
  ["src/pages/privacy.astro", _page248],
  ["src/pages/software/laravel-gpt.astro", _page249],
  ["src/pages/software/laravel-mail.astro", _page250],
  ["src/pages/software/laravel-seo.astro", _page251],
  ["src/pages/software/laravel-ui.astro", _page252],
  ["src/pages/terms.astro", _page253],
  ["src/pages/use-cases.astro", _page254],
  ["src/pages/index.astro", _page255]
]);
var _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: /* @__PURE__ */ __name(() => import("./noop-entrypoint.mjs"), "actions"),
  middleware: /* @__PURE__ */ __name(() => import("./_astro-internal_middleware.mjs"), "middleware")
});
var _args = void 0;
var _exports = createExports(_manifest);
var __astrojsSsrVirtualEntry = _exports.default;
var _start = "start";
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
  serverEntrypointModule[_start](_manifest, _args);
}
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
//# sourceMappingURL=bundledWorker-0.8164440465459211.mjs.map
