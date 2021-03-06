/*
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Node.js API
 */


/**
 * @typedef {{
 *   cwd: ?string,
 *   env: ?Object,
 *   argv0: ?string,
 *   stdio: ?Array<string>,
 *   detached: ?boolean,
 *   uid: ?number,
 *   gid: ?number,
 *   shell: ?boolean,
 *   windowsVerbatimArguments: ?boolean,
 *   windowsHide: ?boolean,
 * }} ChildProcessSpawnOptions
 */


/*
 * Resemble.js API
 */


/**
 * @typedef {{
 *   rawMisMatchPercentage: number,
 *   misMatchPercentage: string,
 *   diffBounds: !ResembleApiBoundingBox,
 *   analysisTime: number,
 *   getImageDataUrl: function(text: string): string,
 *   getBuffer: function(includeOriginal: boolean): !Buffer,
 * }} ResembleApiComparisonResult
 */

/**
 * @typedef {{
 *   top: number,
 *   left: number,
 *   bottom: number,
 *   right: number,
 * }} ResembleApiBoundingBox
 */

/**
 * @typedef {{
 *   r: number, g: number, b: number, a: number
 * }} RGBA
 */


/*
 * ps-node API
 */


/**
 * @typedef {{
 *   pid: number,
 *   ppid: number,
 *   command: string,
 *   arguments: !Array<string>,
 * }} PsNodeProcess
 */


/*
 * colors API
 */


/**
 * @typedef {(function(string):string|!AnsiColorProps)} AnsiColor
 */

/**
 * @typedef {{
 *   enable: !AnsiColor,
 *   disable: !AnsiColor,
 *   strip: !AnsiColor,
 *   strip: !AnsiColor,
 *   black: !AnsiColor,
 *   red: !AnsiColor,
 *   green: !AnsiColor,
 *   yellow: !AnsiColor,
 *   blue: !AnsiColor,
 *   magenta: !AnsiColor,
 *   cyan: !AnsiColor,
 *   white: !AnsiColor,
 *   gray: !AnsiColor,
 *   grey: !AnsiColor,
 *   bgBlack: !AnsiColor,
 *   bgRed: !AnsiColor,
 *   bgGreen: !AnsiColor,
 *   bgYellow: !AnsiColor,
 *   bgBlue: !AnsiColor,
 *   bgMagenta: !AnsiColor,
 *   bgCyan: !AnsiColor,
 *   bgWhite: !AnsiColor,
 *   reset: !AnsiColor,
 *   bold: !AnsiColor,
 *   dim: !AnsiColor,
 *   italic: !AnsiColor,
 *   underline: !AnsiColor,
 *   inverse: !AnsiColor,
 *   hidden: !AnsiColor,
 *   strikethrough: !AnsiColor,
 *   rainbow: !AnsiColor,
 *   zebra: !AnsiColor,
 *   america: !AnsiColor,
 *   random: !AnsiColor,
 * }} AnsiColorProps
 */
