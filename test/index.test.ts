import debounce from '../src'

beforeAll(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.clearAllTimers();
});

test("fn inside debounce, take all arguments", () => {

    let result = null
    
    const fn = (f: any, s: string, t: any) => result = {f, s, obj: t},
          callFnWithDebounce = debounce(fn, 300),
          expectedResult = {f: 1, s: '2', obj: {number: 3}}

    callFnWithDebounce(1, '2', {number: 3})

    jest.runAllTimers();

    expect(result).toEqual(expectedResult)
});

test("debounce cancel the previous function call, if between previous and current call, timeouts less that ms", () => {

    let result: any[] = []

    const fn = (number: number) => result.push(number),
          ms = 500,
          callFnWithDebounce = debounce(fn, ms),
          expectedResult = [2]

        callFnWithDebounce(1)
        setTimeout(() => callFnWithDebounce(2),100);

    jest.runAllTimers();
    
    expect(result).toEqual(expectedResult)
});

test("debounce not cancel the previous function call, if between previous and current call, timeouts large that ms", () => {

    let result: any[] = []

    const fn = (number: number) => result.push(number),
        ms = 500,
        callFnWithDebounce = debounce(fn, ms),
        expectedResult = [1,2]

    callFnWithDebounce(1)
    setTimeout(() => callFnWithDebounce(2),550);

    jest.runAllTimers();

    expect(result).toEqual(expectedResult)
});

test("debounce child function return timeout id", () => {

    let result: any[] = []

    const fn = (number: number) => result.push(number),
          ms = 500,
          callFnWithDebounce = debounce(fn, ms),
          timeout = callFnWithDebounce(1)

    jest.runAllTimers();

    expect(timeout).toBeTruthy()

});