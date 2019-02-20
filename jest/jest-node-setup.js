const JEST_GLOBAL_TIMEOUT = 'JEST_GLOBAL_TIMEOUT';

let timeout = process.env[JEST_GLOBAL_TIMEOUT];
if (timeout !== undefined) {
  jest.setTimeout(timeout);
}
