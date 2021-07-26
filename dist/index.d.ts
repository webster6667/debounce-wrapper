import { Debounce } from './types';
/**
 * @description
 * Function wrapper, that cancels the previous function call, if time between previous and current call less than ms
 *
 * @param {Function} fn - function that will be called after ms
 * @param {number} ms - time out, after which fn will call
 * @returns {NodeJS.Timeout}
 *
 * @example
 *
 * let result = [],
 *     fn = (number) => result.push(number),
 *     callFnWithDebounce = debounce(fn, 500)
 *
 *     const firstCallTimeoutId = callFnWithDebounce(1)
 *     setTimeout(() => callFnWithDebounce(2),300)
 *
 *     setTimeout(() => {
 *
 *       console.log(result) // => [2]
 *       console.log(firstCallTimeoutId) // => 1, timeout id that you can clear, when you need 'clearTimeout(firstCallTimeoutId)'
 *
 *     }, 600)
 *
 *
 */
declare const debounce: Debounce;
export default debounce;
