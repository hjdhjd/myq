# Changelog

All notable changes to this project will be documented in this file. This project uses [semantic versioning](https://semver.org/).

# 7.5.2 (2023-10-12)
  * Fix: myQ has begun adapting their OAuth flow and tightening up some tidbits. We adapt. Hat tip to @drysart and @justinlindh for the legwork on this one.

# 7.5.1 (2023-09-17)
  * Housekeeping.

# 7.5.0 (2023-09-15)
  * Improvement: API resiliency has been substantively improved through incorporating automatic retries across myQ regions. This should improve robustness across the occasional cloud infrastructure challenges that the myQ API encounters.
  * New feature: Added a `login()` function. This is now a required first step prior to using the API for any other calls. The constructor no longer requires login credentials. See the README for details.
  * Housekeeping.

# 7.4.2 (2023-08-26)
  * Housekeeping.

# 7.4.1 (2023-08-21)
  * Housekeeping.

# 7.4.0 (2023-08-20)
  * Improvement: further refine error handling for offline devices.
  * Housekeeping.

# 7.3.0 (2023-08-19)
  * Improvement: update the model/device lookup database, improve error handling for myQ cloud errors, and other optimizations.
  * Housekeeping.

## 7.2.0 (2023-05-14)
  * Housekeeping.

## 7.1.0 (2023-04-13)
  * Allow for user-selectable cloud geographic regions for the myQ API.

## 7.0.2 (2023-04-13)
  * Housekeeping.

## 7.0.1 (2023-04-11)
  * Housekeeping.

## 7.0.0 (2023-04-10)
  * This is now an ESM-only package. If you'd like to use this library in Common Javascript (CJS), use v6.
  * Improve performance with a shift to HTTP2.

## 6.0.9 (2022-12-27)
  * Revert URI encoding of passwords - turns out it is unneeded.

## 6.0.8 (2022-12-27)
  * Properly URI encode password inputs for myQ logins.
  * Housekeeping and dependency updates.

## 6.0.7 (2022-02-21)
  * Housekeeping and dependency updates.

## 6.0.6 (2022-01-17)
  * Lock the version of `node-fetch-cjs` while the project works out a regression.

## 6.0.5 (2022-01-01)
  * Updated to use `node-fetch-cjs` so this package can be easily used in non-ESM environments.

## 6.0.4 (2021-09-18)
  * Housekeeping.

## 6.0.3 (2021-09-18)
  * Further housekeeping and cleanup.

## 6.0.2 (2021-09-18)
  * Housekeeping.

## 6.0.1 (2021-09-18)
  * Housekeeping and documentation updates.

## 6.0.0 (2021-09-18)
  * Initial release: separated from [homebridge-myq](https://github.com/hjdhjd/homebridge-myq) for wider availability.

