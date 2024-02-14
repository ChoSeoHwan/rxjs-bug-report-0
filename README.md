# Description

repository for reproduce rxjs bug.


# Environment

- NodeJS : 20.11.0
- rxjs : 7.8.1


# Expect

Stacktrace must be maintained after promise is resolved.


# Current

Lost stacktrace after promise is resolved.


# Reproduce

1. `yarn install`
2. `yarn start`
