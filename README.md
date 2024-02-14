# Description

repository for reproduce rxjs bug.


# Environment

- NodeJS : 20.11.0
- rxjs : 7.8.1


# Current

Lost stacktrace after promise is resolved.

```shell
$ yarn start
============================== step_1 ==============================
Error
    at Object.next (file:///C:/Projects/rxjs-bug-report-0/src/main.js:13:25)
    # .....
    at file:///C:/Projects/rxjs-bug-report-0/src/main.js:25:1
    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)
    at async loadESM (node:internal/process/esm_loader:28:7)
    at async handleMainPromise (node:internal/modules/run_main:113:12)
============================== step_2 ==============================
Error
    at Object.next (file:///C:/Projects/rxjs-bug-report-0/src/main.js:18:25)
    # lost stack trace
finish

```


# Expect

Stacktrace must be maintained after promise is resolved.

```shell
$ yarn start
============================== step_1 ==============================
Error
    at Object.next (file:///C:/Projects/rxjs-bug-report-0/src/main.js:13:25)
    # .....
    at file:///C:/Projects/rxjs-bug-report-0/src/main.js:25:1
    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)
    at async loadESM (node:internal/process/esm_loader:28:7)
    at async handleMainPromise (node:internal/modules/run_main:113:12)
============================== step_2 ==============================
Error
    at Object.next (file:///C:/Projects/rxjs-bug-report-0/src/main.js:18:25)
    # .....
    at file:///C:/Projects/rxjs-bug-report-0/src/main.js:25:1
    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)
    at async loadESM (node:internal/process/esm_loader:28:7)
    at async handleMainPromise (node:internal/modules/run_main:113:12)
finish

```


# Reproduce

1. `yarn install`
2. `yarn start`
