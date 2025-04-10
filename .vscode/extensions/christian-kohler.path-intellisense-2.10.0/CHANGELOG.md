# [2.10.0](https://github.com/ChristianKohler/PathIntellisense/compare/v2.9.0...v2.10.0) (2024-11-29)


### Features

* tsconfig path support ([33c6acc](https://github.com/ChristianKohler/PathIntellisense/commit/33c6accca9c2d54703028f02c5f2054ce7ba0007))

# [2.9.0](https://github.com/ChristianKohler/PathIntellisense/compare/v2.8.0...v2.9.0) (2024-06-01)


### Features

* added support for NixOS config files ([#229](https://github.com/ChristianKohler/PathIntellisense/issues/229)) ([6aa458c](https://github.com/ChristianKohler/PathIntellisense/commit/6aa458c49a7ed4cfa91b4d380fcbe42e31280526))

# [2.8.0](https://github.com/ChristianKohler/PathIntellisense/compare/v2.7.0...v2.8.0) (2022-02-11)


### Bug Fixes

* **test:** remove suite.only [skip ci] ([7e7fab8](https://github.com/ChristianKohler/PathIntellisense/commit/7e7fab8baf7c43755788e0d725aa2cbad13bf3ae))
* **tests:** add missing await ([1b84521](https://github.com/ChristianKohler/PathIntellisense/commit/1b845218c0f7afb914550ba707ae0de684291b6c))
* **tests:** add missing file ([52f137b](https://github.com/ChristianKohler/PathIntellisense/commit/52f137bd3797a479caf6a459691abf624e096e5e))
* **tests:** add tsconfig settings correctly [skip ci] ([2345cb6](https://github.com/ChristianKohler/PathIntellisense/commit/2345cb66dee832ed85258b8e3a6aa742954f9422))
* **tests:** make tests more robust ([d102c1b](https://github.com/ChristianKohler/PathIntellisense/commit/d102c1ba7532b3d0bd812f3f19265477130efb76))
* **tests:** make them work [skip ci] ([7b7fbb9](https://github.com/ChristianKohler/PathIntellisense/commit/7b7fbb9ea0db0de0c4d6e2a20667b930a0eb043e))


### Features

* **baseUrl:** add extended support ([a2307ad](https://github.com/ChristianKohler/PathIntellisense/commit/a2307ad75429ce20cdc20becd2016f8f8e5c1180)), closes [#196](https://github.com/ChristianKohler/PathIntellisense/issues/196)

# [2.7.0](https://github.com/ChristianKohler/PathIntellisense/compare/v2.6.1...v2.7.0) (2022-01-21)


### Features

* automatically trigger next suggestion ([#195](https://github.com/ChristianKohler/PathIntellisense/issues/195)) ([051d7c8](https://github.com/ChristianKohler/PathIntellisense/commit/051d7c8fe3a2b47afbbd317b9fd50f17dc53679a)), closes [#194](https://github.com/ChristianKohler/PathIntellisense/issues/194)

## [2.6.1](https://github.com/ChristianKohler/PathIntellisense/compare/v2.6.0...v2.6.1) (2022-01-14)


### Bug Fixes

* Improve absolute path handling (mostly-Windows fixes, some QOL) ([#193](https://github.com/ChristianKohler/PathIntellisense/issues/193)) ([c9d7471](https://github.com/ChristianKohler/PathIntellisense/commit/c9d7471fb2802abb0c41691ed44b10fe5cdaeb8c)), closes [#48](https://github.com/ChristianKohler/PathIntellisense/issues/48) [#157](https://github.com/ChristianKohler/PathIntellisense/issues/157) [#51](https://github.com/ChristianKohler/PathIntellisense/issues/51)

# [2.6.0](https://github.com/ChristianKohler/PathIntellisense/compare/v2.5.0...v2.6.0) (2021-11-29)


### Features

* enable virtual workspaces ([86a0426](https://github.com/ChristianKohler/PathIntellisense/commit/86a0426e01baffa29914bfd10daab9ce0c4bd7c5))

# [2.5.0](https://github.com/ChristianKohler/PathIntellisense/compare/v2.4.2...v2.5.0) (2021-11-22)


### Features

* **ignoreTsConfigBaseUrl:** implemented ([fb323d9](https://github.com/ChristianKohler/PathIntellisense/commit/fb323d94e26d6bb988ef86c5a36082e4fe13fc40)), closes [#161](https://github.com/ChristianKohler/PathIntellisense/issues/161)

## [2.4.2](https://github.com/ChristianKohler/PathIntellisense/compare/v2.4.1...v2.4.2) (2021-11-04)


### Bug Fixes

* **windows:** path parse issue ([285ab92](https://github.com/ChristianKohler/PathIntellisense/commit/285ab92f9ffd45fca3df0d037fdc028f108aa560))
* json test newline error ([465d22d](https://github.com/ChristianKohler/PathIntellisense/commit/465d22d2c99ded93f5a6c15ad7d5454bc9b5b615))
* replace deprecated textedit with inserttext ([9df6e6a](https://github.com/ChristianKohler/PathIntellisense/commit/9df6e6ae5250b11052a5007c0de648e0f09c54d8))

## [2.4.1](https://github.com/ChristianKohler/PathIntellisense/compare/v2.4.0...v2.4.1) (2021-10-29)


### Bug Fixes

* loop not awaiting result ([7cb5b70](https://github.com/ChristianKohler/PathIntellisense/commit/7cb5b70732483378648299eac2f556a223a0a04a))
* make sure that fileinfo has isFile set when called ([115e7f4](https://github.com/ChristianKohler/PathIntellisense/commit/115e7f4e835c6f3b34175ab83e12e2601396e5ea))

# [2.4.0](https://github.com/ChristianKohler/PathIntellisense/compare/v2.3.0...v2.4.0) (2021-07-19)


### Features

* add untrustedWorkspaces support ([cb71dc8](https://github.com/ChristianKohler/PathIntellisense/commit/cb71dc8aa5a2dd009ce4a2c0d8289f5c53c3656c))

# [2.3.0](https://github.com/ChristianKohler/PathIntellisense/compare/v2.2.1...v2.3.0) (2020-09-11)


### Bug Fixes

* duplicate function name ([b5f5238](https://github.com/ChristianKohler/PathIntellisense/commit/b5f523851aefed7ae92ff49bc914e261eb3aea77))


### Features

* **mapping:** add support for workspaceFolder placeholders ([b07960e](https://github.com/ChristianKohler/PathIntellisense/commit/b07960e38d70b94218fda76c2b54689593e1e905))

## [2.2.1](https://github.com/ChristianKohler/PathIntellisense/compare/v2.2.0...v2.2.1) (2020-06-12)


### Bug Fixes

* **bundle:** whitelist dependencies ([16c85ae](https://github.com/ChristianKohler/PathIntellisense/commit/16c85ae20bd953462c89bb844d8b876cdbd3114f))

# [2.2.0](https://github.com/ChristianKohler/PathIntellisense/compare/v2.1.6...v2.2.0) (2020-06-05)


### Features

* **build:** enable continous deploy ([335a253](https://github.com/ChristianKohler/PathIntellisense/commit/335a25384b5bace59354ef6683e5b76ab54e124c))

## [2.1.6](https://github.com/ChristianKohler/PathIntellisense/compare/v2.1.5...v2.1.6) (2020-06-05)

### Bug Fixes

- **build:** make sure changelog is updated ([c4da5e9](https://github.com/ChristianKohler/PathIntellisense/commit/c4da5e923890bb340d41aaa836bf1bc5f91050d0))

## v2.0.0

- [Changed] Refactored provider structure
- [Fixed] Multi root workspace support

## v1.4.2

- [Hotfix] Fixed broken intellisense on windows

## v1.4.1

- [Hotfix] Fresh rebuild

## v1.4.0

- [Feature] Added setting to define how to handle absolute paths Fixes [#45](https://github.com/ChristianKohler/PathIntellisense/issues/45), [#55](https://github.com/ChristianKohler/PathIntellisense/issues/55)

## v1.3.0

- [Feature] Files from "files.exclude" are now ignored as well
- [Feature] Basic ts config support
- [Bug] Fixed [#26](https://github.com/ChristianKohler/PathIntellisense/issues/26)
- [Bug] Fixed [#56](https://github.com/ChristianKohler/PathIntellisense/issues/56)
- [Bug] Fixed [#59](https://github.com/ChristianKohler/PathIntellisense/issues/59)
- Perf. improvements

## v1.2.0

- [Feature] Add Option to automatically add a slash after directory. Thank you @koelpinl [#41](https://github.com/ChristianKohler/PathIntellisense/issues/41)
- [Bug] Fixed autocompletion for names with dashes. Thank you @kasperekt [#36](https://github.com/ChristianKohler/PathIntellisense/issues/36)

## v1.1.0

- [Feature] Custom Mappings [#19](https://github.com/ChristianKohler/PathIntellisense/issues/19), [#5](https://github.com/ChristianKohler/PathIntellisense/issues/5)
- [Feature] Setting to enable display of hidden files [#12](https://github.com/ChristianKohler/PathIntellisense/issues/12)
- [Bug] Fixed [#11](https://github.com/ChristianKohler/PathIntellisense/issues/11)

## v1.0.2

- [Bug] Fixed [#15](https://github.com/ChristianKohler/PathIntellisense/issues/15)
- [Bug] Fixed [#16](https://github.com/ChristianKohler/PathIntellisense/issues/16)

## v1.0.1

- Fixed compatibility with VS Code 1.3

## v1.0.0

- [Feature] Added .. on top of each suggestion, Removed trailing slash
- [Bugs] Various bugs fixed

## v0.2.0

- [Feature] Remove file extension within imports (configurable)

## v0.1.0

- Added slash after folders, group by folder and files, file icon

## v0.0.5

- Fixed windows path issue

## v0.0.3

- Fixed unknown publisher issue

## v0.0.2

- Updated Readme.md

## v0.0.1

- Initial
