## [2.1.1](https://github.com/openapi-typescript-infra/openapi-typescript-enum/compare/v2.1.0...v2.1.1) (2023-09-20)


### Bug Fixes

* **esm:** use import.meta in ESM instead of __dirname ([4597c3b](https://github.com/openapi-typescript-infra/openapi-typescript-enum/commit/4597c3bd800f24173fd6fa057527036b4e879ece))

# [2.1.0](https://github.com/openapi-typescript-infra/openapi-typescript-enum/compare/v2.0.1...v2.1.0) (2023-09-20)


### Features

* **esm:** move to ESM for compatibility and get latest openapi-typescript ([6d0fad1](https://github.com/openapi-typescript-infra/openapi-typescript-enum/commit/6d0fad1e1ede0feb0777712002dd0aaff5772d90))

## [2.0.1](https://github.com/openapi-typescript-infra/openapi-typescript-enum/compare/v2.0.0...v2.0.1) (2023-08-03)


### Bug Fixes

* **enum:** redo fix that removes special characters ([13d7d67](https://github.com/openapi-typescript-infra/openapi-typescript-enum/commit/13d7d67c32aa17e9e2c3747cf12b9490ce405de6))

# [2.0.0](https://github.com/openapi-typescript-infra/openapi-typescript-enum/compare/v1.1.1...v2.0.0) (2023-08-03)


### Bug Fixes

* **enumeration:** correct enumeration naming ([c815d6a](https://github.com/openapi-typescript-infra/openapi-typescript-enum/commit/c815d6a49a699d8be880577da08e8a7c59b33fe8))


### BREAKING CHANGES

* **enumeration:** The naming conventions for enumerations
within the package have been updated to avoid conflicts in most cases.
Previously, only the field name was used for the enumeration included
in a path specification (components were fine). Now it includes all
elements of the path, other than any "v(\d+)" prefix and
other than the word "parameters." At some point this should be improved
to just exclude the real "parameters" component of the schema.

## [1.1.1](https://github.com/openapi-typescript-infra/openapi-typescript-enum/compare/v1.1.0...v1.1.1) (2023-07-28)


### Bug Fixes

* **tests:** update snapshot handling for tests ([512302d](https://github.com/openapi-typescript-infra/openapi-typescript-enum/commit/512302d2ad5483063ad19c8085c2c967ef93c185))
* **ts:** use quotes for enums ([1086387](https://github.com/openapi-typescript-infra/openapi-typescript-enum/commit/1086387738883bc81a54aca3447377ce9ca690db))

# [1.1.0](https://github.com/openapi-typescript-infra/openapi-typescript-enum/compare/v1.0.1...v1.1.0) (2023-07-28)


### Features

* **naming:** Handle special characters in name and dedupe ([9d3eba5](https://github.com/openapi-typescript-infra/openapi-typescript-enum/commit/9d3eba58cb882dd3f4feddc5a57d819d82720e39))

## [1.0.1](https://github.com/openapi-typescript-infra/openapi-typescript-enum/compare/v1.0.0...v1.0.1) (2023-07-28)


### Bug Fixes

* **bin:** update bin path for npx usage ([faf50c1](https://github.com/openapi-typescript-infra/openapi-typescript-enum/commit/faf50c1167c02354fe7229ebba2084dd96a3f752))
* **yarn:** update lockfile ([7b14863](https://github.com/openapi-typescript-infra/openapi-typescript-enum/commit/7b148639493fe67f133356318490a920cc588ffb))

# 1.0.0 (2023-07-28)


### Bug Fixes

* **ci:** add semantic release exec plugin ([5415552](https://github.com/openapi-typescript-infra/openapi-typescript-enum/commit/5415552d5f27c7fee1d83e29fdcb8129a92f9a64))
* **vitest:** fixup some compilation issues ([c2b0cc8](https://github.com/openapi-typescript-infra/openapi-typescript-enum/commit/c2b0cc80a3a3fa413eb8f3257963b60179740b95))
