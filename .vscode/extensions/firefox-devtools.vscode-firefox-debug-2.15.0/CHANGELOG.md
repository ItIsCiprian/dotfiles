### Version 2.15.0
* fix various issues when debugging multiple tabs
* use the URL in thread names

### Version 2.14.1
* fix truncated console messages
* fix threads not showing up in the loaded scripts panel
* only show content scripts when debugging a WebExtension
* don't open a new tab in attach configurations
* resume detached threads when they pause

### Version 2.14.0
* improve how console messages are rendered

### Version 2.13.0
* fix `clearConsoleOnReload`
* fix output of styled console messages
* fix showing the locations of early console messages
* fix breakpoint issues with `reloadOnAttach`
* add pathMappingIndex configuration property

### Version 2.12.1
* fix debugging of web extension content scripts in Firefox 135

### Version 2.12.0
* add support for debugging without a launch configuration
* add support for event listener breakpoints
* fix handling of exited tabs and threads

### Version 2.11.0
* support restarting frames
* support skipping debugger statements
* fix breakpoints with hit counts on Windows

### Version 2.10.1
* fix path mapping on Windows

### Version 2.10.0
* migrate to new debug protocol methods
* fix breakpoints not working after navigating

### Version 2.9.11
* handle console.time/timeEnd
* fix the loaded scripts panel

### Version 2.9.10
* fix marketplace badge link in the README

### Version 2.9.9
* compatibility fix for Node 17 / VS Code 1.82

### Version 2.9.8
* debug protocol update for Firefox 104
* fix the build on MacOS

### Version 2.9.7
* debug protocol update for Firefox 102

### Version 2.9.6
* debug protocol update for Firefox 96

### Version 2.9.5
* compatibility fix for VS Code 1.62.1

### Version 2.9.4
* fix for breakpoints not being set in some situations
* add the URL to a thread's name

### Version 2.9.3
* fix breakpoints only working after reloading the page
* fix missing console messages
* fix debugging WebWorkers
* fix data breakpoints

### Version 2.9.2
* fix terminating Firefox at the end of the debug session
* fix function scopes being with the name `[unknown]`
* show an error message if the path mapping wizard couldn't update the launch configuration
* set the webRoot configuration property to its default if necessary
* support overriding the debugging port in the settings
* add workaround for the snap version of VS Code

### Version 2.9.1
* add `enableCRAWorkaround` configuration property
* fix the conditions for the `keepProfileChanges` configuration property on MacOS
* fix the sorting of Arrays in the Variables view

### Version 2.9.0
* add `tabFilter` configuration property
* open a new Firefox tab if no tab matches the `tabFilter`
* allow `stable`, `developer` and `nightly` as values for firefoxExecutable
* only suggest the Path Mapping Wizard if it can create a pathMapping
* debug protocol fix for Firefox 78

### Version 2.8.0
* debug protocol fix for Firefox 77
* add `tmpDir` configuration property
* fix for skipping external URLs containing a query string
* fixes for object previews

### Version 2.7.2
* debug protocol fixes for Firefox 76

### Version 2.7.1
* debug protocol fix for Firefox 75

### Version 2.7.0
* bugfix for breakpoints in Vue.js projects
* add default pathMappings for Next.js projects
* add support for wildcards in pathMappings
* add `suggestPathMappingWizard` configuration property
* various bugfixes

### Version 2.6.1
* fix for showing the launch configuration in a remote workspace
* fix for re-enabling a watchpoint

### Version 2.6.0
* add the Path Mapping Wizard
* extend the Loaded Scripts Explorer

### Version 2.5.5
* debug protocol fix for Firefox 72

### Version 2.5.4
* fix version detection for Firefox 72

### Version 2.5.3
* fix for create-react-app projects on Windows

### Version 2.5.2
* improve stepping performance
* fix for debugging a WebExtension in a workspace subfolder on Windows
* fix for debugging in a remote workspace on Windows

### Version 2.5.1
* fix removal of breakpoints from sourcemapped sources
* improved default `pathMappings` for Angular CLI projects
* sourcemapping accuracy improvements
* fix initialization of exception breakpoints

### Version 2.5.0
* performance improvement for setting breakpoints in bundled sources
* add support for the new column breakpoint UI introduced in VS Code 1.39
* remove support for Firefox <68

### Version 2.4.0
* add support for `console.clear()`
* add `clearConsoleOnReload` configuration property
* try to load sourcemaps from disk first
* fix WebExtension debugging in Firefox 71

### Version 2.3.4
* fix a performance issue when reloading the page in the browser

### Version 2.3.3
* fix for hot module replacement: when a module was replaced, breakpoints in that module stopped working
* fix for callstacks sometimes showing an error message "Couldn't find source adapter"

### Version 2.3.2
* fix support for data breakpoints with Firefox 70

### Version 2.3.1
* update README.md

### Version 2.3.0
* disable the prompt to configure telemetry in temporary debug profiles
* objects referenced in logpoints can now be inspected in the debug console
* add support for the BigInt primitive type

### Version 2.2.0
* add support for VS Code remote development
* add support for data breakpoints on object properties if Firefox supports watchpoints (an upcoming Firefox feature that will appear in Nightlies soon)

### Version 2.1.0
* add `timeout` launch configuration property

### Version 2.0.1
* build with babel and bundle with webpack - the resulting package is much smaller and loads faster
Version 2.0.1 was only released on npm

### Version 2.0.0
* branding updated - this extension is now an official Firefox DevTool!

### Version 1.8.3
* fix for launching Firefox on MacOS and some Linux distros
* increase the timeout for connecting to Firefox to 10 seconds and fix the handling of that timeout

### Version 1.8.2
* bugfix: globstars (`**`) in the skipFiles configuration didn't match path segments that contain `/./`
* bugfix: show the generated source location of a stack frame if it can't be mapped to an original source location
* bugfix: the debug adapter kept running after the end of the debug session until Firefox was closed

### Version 1.8.1
* bugfix: the temporary debug profile wasn't removed at the end of the debug session when using a recent Firefox version on Windows

### Version 1.8.0
* fix for Firefox 68
* remove support for legacy add-ons

### Version 1.7.11
* fix handling of case-insensitive paths on Windows when setting breakpoints
* add workaround for broken sourcemaps generated by create-react-app

### Version 1.7.10
* bugfix: sometimes the exception view wasn't shown
* further fixes for Firefox 67

### Version 1.7.9
* further fixes for Firefox 67

### Version 1.7.8
* fix for Firefox 66

### Version 1.7.7
* fix for debug protocol changes in Firefox 67

### Version 1.7.6
* fix for a debug protocol change in Firefox 66

### Version 1.7.5
* fix for sourcemaps in WebExtensions
* fix for `reAttach` on MacOS

### Version 1.7.4
* fix path mapping for configurations where `url` contains no path and no trailing slash (e.g. `"url": "http://localhost:8080"`)

### Version 1.7.3
* fix handling of relative sourceRoot in sourcemaps

### Version 1.7.2
* add log messages to monitor source-mapping performance

### Version 1.7.1
* WebExtension debugging: allow comments in manifest.json

### Version 1.7.0
* add the ability to override some launch configuration properties in the settings

### Version 1.6.0
* change the default for `sourceMaps` to `client`
* improve the performance of client-side source-map handling
* fix client-side source-map handling for source-maps with relative paths
* fix detection of Firefox Developer Edition on MacOS

### Version 1.5.0
* WebExtension debugging: add commands and status bar button for toggling popup auto-hide

### Version 1.4.3
* improve accuracy of client-side sourcemap support

### Version 1.4.2
* compute the original locations of console and error events when `sourceMaps` is set to `client`

### Version 1.4.1
* also look for `firefox-developer-edition` when searching the Firefox executable on Linux

### Version 1.4.0
* add `liftAccessorsFromPrototypes` configuration property

### Version 1.3.0
* allow WebExtensions without an ID if they're installed via RDP
* install WebExtensions via RDP by default

### Version 1.2.1
* fix `reloadOnChange` on Windows (thanks @Misiur)

### Version 1.2.0
* add support for breakpoints with hit counts
* add support for log points

### Version 1.1.4
* add support for evaluating getter functions
* fix path mapping of URLs that contain encoded characters

### Version 1.1.3
* path mapping bugfixes

### Version 1.1.2
* workaround for a timing issue with early beta versions of Firefox 60
* improve WebAssembly debugging support

### Version 1.1.1
* experimental support for WebAssembly debugging

### Version 1.1.0
* add support for creating `pathMappings` from the Loaded Scripts Explorer
* bugfix for breakpoints being shown unverified (gray) even when they were successfully set
* change default `pathMappings` for webpack to support Angular CLI projects

### Version 1.0.1
* fix debugging of WebExtensions that contain a `package.json` file
* set the default `addonType` to `webExtension` in configuration snippets and documentation

### Version 1.0.0
* add default `pathMappings` for webpack
* harmonize trailing slashes in user-specified `pathMappings`
* Linux: search the Firefox executable in all directories in the user's `PATH` (thanks @agathver)
* `addonType` now defaults to `webExtension`

### Version 0.17.0
* show object previews in the Variables and Watch sections of the Debug view
* fix the Loaded Scripts Explorer when navigating in Firefox

### Version 0.16.1
* fix opening remote scripts from the Loaded Scripts Explorer
* skip exceptions triggered from the debug console
* add the ability to configure URLs that should not be mapped to local paths
* remove deprecated VS Code APIs

### Version 0.16.0
* add Loaded Scripts Explorer
* add support for Symbol-keyed properties (Firefox 56+)

### Version 0.15.4
* bugfix: `pathMappings` were ignored in `attach` configurations

### Version 0.15.3
* performance improvements

### Version 0.15.2
* handle absolute urls in source-maps, including a workaround for webpack weirdness

### Version 0.15.1
* on Windows the debug adapter sometimes didn't attach to WebExtensions that were installed as temporary add-ons - fixed

### Version 0.15.0
* add support for toggling the skip flag for single files while debugging
* make `webRoot` optional if `pathMappings` are specified

### Version 0.14.1
* compatibility update for the upcoming VS Code 1.14 release
 
### Version 0.14.0
* fix WebExtension debugging in recent Firefox builds
* add experimental `sourceMaps` configuration property

### Version 0.13.1
* add support for setting variable values in the debug side bar
* add support for IntelliSense in the debug console

### Version 0.13.0
* add `reloadOnChange` configuration property

### Version 0.12.1
* fix temporary add-on installation on Windows

### Version 0.12.0
* add support for reloading add-ons
* add `installAddonInProfile` configuration property

### Version 0.11.1
* bugfix: some function names were not shown in the call stack
* bugfix: the tooltips of tabs for external source files didn't show the full url
* bugfix: some accessor properties (e.g. window.window) were shown as undefined
* bugfix for sporadical failures to attach to Firefox after launching it

### Version 0.11.0
* add `keepProfileChanges` configuration property
* bugfix: the temporary profiles are now deleted reliably

### Version 0.10.0
* add `preferences` configuration property
* add `showConsoleCallLocation` configuration property
* support sending objects to the console (e.g. `console.log(document)`)
* change the display of call stack, return values and exceptions to be more in line with other VS Code javascript debuggers

### Version 0.9.3
* fix slow initial startup of add-on debugging with the `reAttach` option

### Version 0.9.2
* support `reAttach` for add-on debugging

### Version 0.9.1
* fix `reAttach` on Windows

### Version 0.9.0
* Add `reAttach` and `reloadOnAttach` configuration properties

### Version 0.8.8
* bugfix: source files were not mapped to local files in VS Code 1.9

### Version 0.8.7
* workaround for Firefox sending inaccurate source information in certain situations, which can break the `skipFiles` feature

### Version 0.8.6
* bugfix: some URLs were not handled correctly when processing sourcemapped sources

### Version 0.8.5
* send log messages from add-ons to the debug console

### Version 0.8.4
* bugfix: exceptions were not shown

### Version 0.8.3
* strip query strings from urls when converting them to local file paths

### Version 0.8.2
* fix skipFiles on Windows

### Version 0.8.1
* bugfix: sources could not be skipped during their first execution

### Version 0.8.0
* Add `skipFiles` configuration property
* Add `pathMappings` configuration property
* Add configuration snippets
* Fix several bugs when evaluating watches and expressions entered in the debug console

### Version 0.7.7
* fix debugging of WebExtension content scripts in recent Firefox builds

### Version 0.7.6
* bugfix: breakpoints were sometimes not hit after a page reload

### Version 0.7.5
* bugfix: support javascript values of type Symbol
* bugfix: evaluating expressions in the VS Code debug console sometimes stopped working

### Version 0.7.2
* Terminate the debug session when Firefox is closed

### Version 0.7.1
* Show the full url of sources that do not correspond to local files
* bugfix for setting breakpoints in content scripts of `addonSdk` browser extensions

### Version 0.7.0
* Debugging Firefox add-ons
* Launch mode now always creates a temporary profile: if a profile is specified in the launch
  configuration, it will be copied and modified to allow remote debugging
* Launch mode now uses the developer edition of Firefox if it is found

### Version 0.6.5
* bugfix for sourcemaps with embedded source files

### Version 0.6.4
* Fix breakpoint handling when a Firefox tab is reloaded
* Only send javascript-related warnings and errors from Firefox to the debug console

### Version 0.6.3
* Add configuration option for diagnostic logging
* Make conversion between paths and urls more robust

### Version 0.6.2
* bugfix: stepping and resuming stopped working if a breakpoint was hit immediately after loading the page

### Version 0.6.1
* Fix debugging WebWorkers and multiple browser tabs in VSCode 1.2.0

### Version 0.6.0
* Add support for evaluating javascript expressions in the debug console even if Firefox isn't paused
* Add support for debugger statements

### Version 0.5.0
* Add support for call stack paging

### Version 0.4.0
* Add support for debugging WebWorkers
* Add support for debugging multiple browser tabs
* Fix exception breakpoints in VSCode 1.1.0
* Re-create the Firefox profile on every launch, unless a profile name or directory is configured

### Version 0.3.0
* Print messages from the Firefox console in the VS Code debug console
* bugfix: resume the VS Code debugger when Firefox resumes, e.g. if the user reloads the page in 
  Firefox while the debugger is paused

### Version 0.2.0
* Automatically create a Firefox profile for debugging

### Version 0.1.0
* Initial release
