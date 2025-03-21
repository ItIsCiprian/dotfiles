# Cloud Code for Visual Studio Code Release Notes

This page documents production updates to Cloud Code for Visual Studio Code. You
can check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated functionality.

## Version 2.26.0 (February 2025)

### Bug Fixes and Updates

*   BigQuery extension has improved UI and fixes involving cluster details page
*   Kubernetes schema update to 1.32.1

## Version 2.23.0 (December 2024)

### New Features

*   Cloud Code now supports BigQuery, helping you work with your BigQuery
    integration right from your IDE!

## Version 2.19.0 (October 2024)

### Bug fixes

*   Bug fixes and improvements to Transform Code.

## Version 2.18.2 (October 2024)

### Bug fixes

*   Fixed an issue involving context window accounting within Chat requests.

## Version 2.18.1 (October 2024)

### Bug fixes

*   Fixed behavior for Code Transform when user fully types a command.

## Version 2.18.0 (September 2024)

### Bug fixes

*   Fixed issue where Cloud API browser recommended deprecated libraries.
*   Fixed issue where Cloud Run fails deployment on
    Windows.[#925](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/925)
*   Fixed issue where Dart/Flutter pubspec.yaml was being picked up for
    processing by the extension.
    [#932](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/932)

## Version 2.17.0 (September 2024)

### Bug fixes

*   Fixed issue where the VS Code Gemini Code Assist extension disconnected
    users from their session after an idle period of no activity.

## Version 2.16.7 (August 2024)

### Bug fixes

*   Fix issue with code generation functionality.

## Version 2.16.4 (August 2024)

### Bug fixes

*   Fix issue with transform functionality.

## Version 2.16.2 (August 2024)

### Bug fixes

*   Fix crash when using Gemini with unsupported file type.

## Version 2.16.0 (August 2024)

### New Features

*   **Experience the Next Level of Code Generation with Transform Code:** Unlock
    new possibilities in your development process. Leverage user prompts (Ctrl+I
    or Cmd+I) and the /generate slash command to gain greater control over code
    generation.
    ![Gemini Code Assist Transform Code](https://www.gstatic.com/cloudssh/cloudcode/transform_code.gif)

### Bug fixes

*   Fixed crash when using Gemini Code Assist completions.

## Version 2.15.0 (July 2024)

### Updates

*   Miscellaneous bug fixes

## Version 2.14.0 (July 2024)

### Updates

*   Gemini Code Assist is available to try at no cost until November 8, 2024,
    limited to one user per billing account. Customers can purchase a license on
    the [Gemini Admin page](https://console.cloud.google.com/gemini-admin) in
    the Google Cloud console. For more information, see
    [Set up Gemini Code Assist for a project](https://cloud.google.com/gemini/docs/discover/set-up-gemini).
*   Miscellaneous bug fixes

## Version 2.13.0 (June 2024)

### New Features

*   A tips card has been added in chat showing useful keyboard shortcuts for
    using Gemini Code Assist
*   A diff button has been added to code snippets in chat so that code returned
    from Gemini can be easily compared to the code in the editor

### Updates

*   Rejected Gemini code suggestions will no longer come back
*   Miscellaneous bug fixes

## Version 2.12.0 (June 2024)

## Updates

*   Gemini will now sign in using first party authentication instead of gcloud
    on all CodeOSS based editors.

## Bug fixes

*   Fixed extension crash during startup due to authentication data being
    corrupted.
    [Github issue](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/908)
*   Fixed issue where citation warnings would persist after being ignored or
    deleted

## Version 2.11.1 (May 2024)

### Updates

*   General bug fixes

## Version 2.11.0 (May 2024)

### Updates

*   API management: Use Gemini Code Assist to facilitate API design including
    OpenAPI spec generation with enterprise context from natural language
    prompts and built in visual API designer to further refine the
    specification.

*   API hub interaction from Cloud Code: An update to Cloud Code extension
    enables you to interact with any API in your API hub using a local mock
    server in Cloud Code, make changes to the API, and publish it back to API
    hub.

*   Replatform linux applications to containers on GKE is now GA. The Migrate to
    Containers integration with Cloud Code lets you replatform an existing linux
    application to a container using the Cloud Code extension in your IDE. Learn
    how to replatform existing applications
    [here](https://cloud.google.com/code/docs/vscode/replatform-apps-to-containers).

## Version 2.10.0 (May 2024)

### Updates

*   Added notification on how to set up VPC configuration for Gemini.
    [Learn more](https://cloud.google.com/gemini/docs/configure-vpc-service-controls#configure-perimeter).

## Version 2.9.1 (May 2024)

### Updates

*   Gemini Code Assist is transitioning to a new API. This release adds a
    safeguard should users encounter errors

## Version 2.9.0 (April 2024)

### Updates

*   Extension name is updated in the marketplace to Gemini Code Assist + Google
    Cloud Code for easier discoverability.
*   We’ve revamped our Gemini Code Assist enablement flow. It now requires less
    steps, is more intuitive, and has a sleek new look.

## Version 2.8.1 (April 2024)

### Bug Fixes

*   Fixed an authentication issue that affected users' ability to make Gemini
    requests.

### Known Issues

*   Sometimes the Gemini Status Bar icon will spin indefinitely when there are
    connectivity issues.

## Version 2.8.0 (April 2024)

### Updates

*   Error handling improvements around context aware notifications.

### Bug Fixes

*   Fixed an issue in which the retry button wasn't showing up for failed chat
    requests.

### Known Issues

*   Sometimes the Gemini Status Bar icon will spin indefinitely when there are
    connectivity issues.

## Version 2.7.1 (April 2024)

### Bug Fixes

*   Fixed telemetry data.

## Version 2.7.0 (April 2024)

### Upcoming Features

*   \[Private Preview\] Google Cloud recently announced a collaboration with
    Snyk to bring security capabilities into Gemini Code Assist. You can sign up
    to try this feature as a part of the private preview
    [here](https://cloud.google.com/ai/earlyaccess/join). Try the Snyk extension
    by creating a free Snyk account in a few clicks -
    [activate my free account](https://app.snyk.io/login?redirectUri=L21hbmFnZS9iaWxsaW5n&utm_campaign=con_2401_google-app&utm_medium=ptr&utm_source=google&utm_content=pg-cta)

### Updates

*   Duet AI for Developers is now **Gemini**
*   Google Cloud Code is now **Gemini + Google Cloud Code**
*   The code generation feature has been updated to allow users to generate code
    repeatedly at the same cursor location

### Bug Fixes

*   Fixed a crash with very small csv, tsv, and jsonl files
*   Fixed an issue where empty files were not being included as chat context

## Version 2.6.0 (March 2024)

### New Features

*   Local code customization will be experimentally enabled for select users to
    improve code suggestions. Additional files in the user's local directory
    will be opened when code generation is requested. Files will be scored and
    included in the prompt based on relevance to the active context.
*   Context source panel now provided in chat showing which file was included in
    the user’s chat request
    ![Duet AI Chat Context Source File](https://www.gstatic.com/cloudssh/cloudcode/duet_chat_context_source_file.png)

### Updates

*   Improved error handling and messaging in both the code editor and in chat.
    Error specific actions are now provided to better assist users in resolving
    errors

### Bug Fixes

*   Improved confusing messaging and troubleshooting steps for permission denied
    errors and API enablement errors

## Version 2.5.0 (March 2024)

### Updates

*   There are now options to sign in and sign out of Google Cloud from the
    Command Palette.
*   Added new categories to be selected when submitting feedback for Duet AI.
    This improves feedback processing velocity.
*   Apigee plugin is now available in Cloud Shell and Cloud Workstations.

## Version 2.4.0 (February 2024)

### Updates

*   Dismissing a code completion will now prevent completions until more code is
    added to the file.
*   There’s now a button to enable the Duet AI API from the chat view

## Version 2.3.0 (January 2024)

### New Features

*   Replatform Linux applications to containers on GKE is now on public preview.
    The Migrate to Containers integration with Cloud Code lets you replatform an
    existing Linux application to a container using the Cloud Code extension in
    your IDE. Learn how to replatform an existing application
    [here](https://cloud.google.com/code/docs/vscode/replatform-apps-to-containers)
    ![Replatform apps](https://www.gstatic.com/cloudssh/cloudcode/replatform_2.png)

### Updates

*   Various Duet AI model improvements
*   Added Support for Linux ARM 64 binaries
*   Improved experience turning Duet AI Completions on or off
*   Added support for Duet AI Completions in untitled and unsaved files
*   Added button to enable the Duet AI API from the chat window, to get
    up-and-running even faster

### Bug Fixes

*   Fixed an issue where Duet AI Smart Actions button sometimes disappears
*   Fixed an issue where stale project ID causes permission error when enabling
    Duet

## Version 2.2.3 (January 2024)

### Bug Fixes

*   Fixed an issue where users with certain network/firewall configurations are
    unable to use Duet AI Chat.

## Version 2.2.2 (January 2024)

### Bug Fixes

*   Fixed an issue where some users were frequently asked to log in.
*   Fixed an issue where Duet AI is occasionally unable to start after log in.
*   Fixed an issue where users might get a notification about an unexpected
    error when enabling Duet AI.

## Version 2.2.1 (December 2023)

### New Features

*   Add a new Gemini-focused code sample. This is available via "Cloud Code: New
    Application" in the command palette

### Bug Fixes

*   Fix Duet AI generation hint re-appearing between sessions
*   Fix an error related to opening Jupyter notebooks while using Duet (note
    that Jupyter notebooks are not currently supported)

## Version 2.2.0 (December 2023)

### New Features

*   **Duet AI for Developers is now GA!**
*   Added project selection from Duet AI quickpick
*   Easier onboarding for Duet AI with API enable button

### Updates

*   Added a Duet AI code generation hint tooltip

### Bug Fixes

*   Fixed completion result only displaying one suggestion

## Version 2.1.1 (October 2023)

### Updates

*   Improvements to Duet AI’s code generation behavior, including more relevant
    results and better feedback.
    [Learn more](https://cloud.google.com/code/docs/vscode/write-code-duet-ai)
*   Updated the button to generate code with Duet AI
    ![Duet AI code generation spark buttons](https://www.gstatic.com/cloudssh/cloudcode/duet-ai-generate-spark.png)
    *   You can ask Duet AI to generate code, explain the currently opened file,
        or generate unit tests
        ![Duet AI code generation options](https://www.gstatic.com/cloudssh/cloudcode/duet-ai-generate-selection.png)
*   Generating code will now give a clear indication that generation is in
    progress.
*   Updated Duet AI Chat to include a button to open a code sample in a new
    file, and buttons to provide feedback on Duet AI’s response.
    ![Duet AI Chat feedback and open snippet in new file button](https://www.gstatic.com/cloudssh/cloudcode/duet-chat-ai-ux-update.png)

## Version 2.1.0 (October 2023)

### New Features

*   **Create Apigee API proxies from openapi 3.0 specifications:** Use an
    existing openapi 3.0 specification to generate a basic proxy bundle.

### Updates

*   In VS Code Settings, extension settings are displayed in the section "Google
    Cloud Code" instead of "Cloud Code" to align with the extension name.
*   Compute Engine VMs can now be accessed via SSH using their internal IP
    address instead of using their public IP address or IAP. This is useful when
    you are running Cloud Code on a VM in the same network. Set the VS Code
    setting `cloudcode.compute.sshInternalIp` to use the internal IP.
*   The Apigee Emulators explorer has been merged into the main Apigee Explorer.
    Now the users can see all the emulators under the "Local development" tree.
    In addition, the actions to open/create a workspace have been moved next to
    the "Local development" tree in the Apigee Explorer.
*   Fixed webviews to be compatible with the high contrast theme.
*   Simplified minikube experience:
    *   The minikube manager wizard now runs minikube commands in the terminal
        for better visibility into errors and progress.
    *   The Run/Debug on Kubernetes flow no longer starts and stops minikube
        automatically. Please use the minikube manager wizard to start and stop
        your minikube cluster.

### Bug Fixes

*   Fixed crashes involving "Converting circular structure to JSON".
*   Fixed an issue where the "View Logs" option could show up twice on a Cloud
    Run revision.
*   Decreased the latency of Duet AI requests.
*   Duet AI should show more relevant completion results and fewer "noisy"
    results.

## Version 2.0.0 (August 2023)

### New Features

*   **Duet AI <sup>Preview</sup>:** Use Duet AI, your AI-powered collaborator,
    to accomplish tasks more effectively and efficiently. Duet AI provides
    contextualized responses to your prompts to help guide you on what you're
    trying to do with your code. It also shares source citations regarding which
    documentation and code samples the assistant used to generate its responses.
    You can do this right in the IDE to avoid having to context-switch out to
    your browser or documentation.
    [Read the docs](https://cloud.google.com/duet-ai/docs/overview)
    ![Duet AI code generation](https://www.gstatic.com/cloudssh/cloudcode/duet_ai_code_generation.gif)

### Updates

*   Added `cloudcode.enable1stPartyAuth` setting, which you can set to false if
    you are experiencing friction in signing into Cloud Code. This will revert
    to using the Google Cloud CLI based authentication.

### Bug Fixes

*   Fix various styling issues on Logs Viewer and Welcome pages.
*   Fix an issue where logging in to Google Cloud can stall out forever.

## Version 1.22.1 (August 2023)

### Updates

*   Consolidated Cloud Code status bar. Cloud Code quick menu including
    switching projects and more are accessible via this status bar entry.
    <img src="https://www.gstatic.com/cloudssh/cloudcode/cloudcode_statusbar.png" alt="Cloud Code consolidated status bar"/>
*   Cloud Code project is now a configurable setting. Existing Cloud Code
    project is imported into this setting. Switching project can also still be
    done via status bar project selector.
    <img src="https://www.gstatic.com/cloudssh/cloudcode/cloudcode_project_setting.png" alt="Cloud Code project setting"/>
*   Updated in-product feedback UI. You can attach logs from Cloud Code with the
    bug/feature request to help us fix issues and improve the product.
    <img src="https://www.gstatic.com/cloudssh/cloudcode/cloudcode_feedback.png" alt="Cloud Code feedback UI"/>

### Bug Fixes

*   Various first party authentication bugfixes.

## Version 1.22.0 (July 2023)

### New Features

*   **Cloud Code Login:** Logging in to Google Cloud is no longer delegated to
    the Google Cloud CLI. This makes for a faster and more native login
    experience, and reduces Cloud Code's dependency on the Google Cloud CLI. You
    might need to re-login after this update is installed.
    ![Cloud Code first party login in the browser](https://www.gstatic.com/cloudssh/cloudcode/cc-first-party-login.png)
    *   Note that this authentication method does not work to authenticate
        Google APIs in applications you develop. To do that, you now must
        install the Google Cloud CLI and get Application Default Credentials.
        See
        [Cloud Code documentation](https://cloud.google.com/code/docs/vscode/install#authenticate_credentials_for_debugging_applications_locally)
        for more information.
*   **Google Cloud CLI management updates:** The most commonly encountered issue
    with Cloud Code occurs right at startup, when Cloud Code installs the Google
    Cloud CLI. This operation takes a lot of time and CPU. We've taken several
    steps to reduce this friction and give you more control over and insight
    into the installation process.
    *   Cloud Code now empowers users with more options to install Google Cloud
        CLI. The first time you use a feature that requires the CLI, you’ll be
        given the option to learn how to self-install it right from the IDE, use
        an existing installation, or continue with managed dependencies.
        ![Prompt that shows the first time a user needs Google Cloud CLI](https://www.gstatic.com/cloudssh/cloudcode/gcloud-on-demand-first-time-prompt.png)
    *   The new "Install Google Cloud CLI" guide, built right into the IDE,
        makes it easy for both new and old users to get started with a self
        installed version of Google Cloud CLI. This way, you're in complete
        control of Cloud Code’s dependencies. You can also access this guide at
        any time by clicking "Install Google Cloud CLI" in the Help and Feedback
        explorer.
        ![Guide that shows how to install the Google Cloud CLI](https://www.gstatic.com/cloudssh/cloudcode/gcloud-install-guide.png)
    *   Installation is postponed to the time the CLI is required. If you
        already use managed dependencies, the same delay you experienced every
        time you start up Cloud Code (if any) will occur right before you use
        functionality that requires the CLI or its components. We have worked to
        reduce the number of features dependent on the CLI, so this will occur
        less frequently.
    *   When using self managed dependencies, Cloud Code will help you install
        all required components and keep you up to date with minimum required
        versions.

### Updates

*   Docker Desktop is no longer automatically launched by Cloud Code in
    operations that require it. These flows will now error out and you'll be
    asked to try again once you've launched Docker Desktop.

### Bug Fixes

*   Managed dependencies install script does not work on Windows if the user
    path has a space.
    [#810](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/810)

## Version 1.21.8 (June 2023)

### Bug Fixes

*   Fix Cloud Run deployment bug that crashes when deploying with a sql
    connection.
    [#804](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/804)
*   Fix gcloud installer script bug where the installer would break on a file
    path with a space.
    [#810](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/810)
*   Fix Project selector bug where the quickpick opens during initialization.

## Version 1.21.7 (June 2023)

### Bug Fixes

*   Fix issue where Cloud Run deployments would wipe out secret references.
    [#804](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/804)

## Version 1.21.6 (June 2023)

### Updates

*   Performance improvements for first time installation of managed
    dependencies.
*   More efficient handling of watchers in the Kubernetes explorer.
*   A new setting "cloudcode.dependencyPaths" allows you to explicitly set and
    override the locations where Cloud Code will search for binaries the
    extension has dependencies on.
    *   <img src="https://www.gstatic.com/cloudssh/cloudcode/dependency_paths.png" alt="A dropdown list of dependencies to add custom paths to."/>
*   The command "Dry-run Current Config for Server-side Validation" has been
    removed from the command palette, as Cloud Code now shows server-side
    dry-run information directly in the YAML text document. Learn more
    <a href="https://cloud.google.com/code/docs/vscode/yaml-editing#validate_yaml_schema">here</a>.
*   Crash feedback no longer collects information around minikube failures, and
    provides a new field where you can optionally provide contact information.
*   Default Apigee emulator updated to 1.9.2.
*   Updated webview styling.

### Bug Fixes

*   Fixed an issue where Run/Debug on Kubernetes might clean up the wrong
    deployment if switching current context during a deployment.
*   Fixed an issue where Cloud Code might become uninstalled if an insiders
    channel installation failed.

## Version 1.21.5 (April 2023)

### New Features

*   Add support for
    [.gcloudignore](https://cloud.google.com/sdk/gcloud/reference/topic/gcloudignore)
    files for Cloud Functions.
*   New Workflows schemas are now supported in Cloud Code.
    *   This comes with in-line suggestions, validation, and auto-complete for
        all Workflows YAML files.
    *   Check out
        [this blog post](https://cloud.google.com/blog/products/application-development/integrated-workflows-inside-your-ide-of-choice-help-you-develop)
        for more information.

### Updates

*   Functionality enabling viewing and deploying to Cloud Run for Anthos
    clusters powered by KNative has been removed from Cloud Code.
    *   For more information on how to deploy the latest version of Cloud Run
        for Anthos, which uses Anthos fleets and Anthos Service Mesh, visit the
        [deployment instructions](https://cloud.google.com/anthos/run/docs/deploy-application).
    *   No additional changes were made to Cloud Run functionality as part of
        this update.

### Bug Fixes

*   Fix buttons on Cloud Functions welcome view not working.
*   Update the ordering of snippets presented in the API browser to be in
    consistent order.
*   Fix Cloud Run deployments with secrets set as environment variables.

## Version 1.21.4 (April 2023)

### Bug Fixes

*   Exception handling fixes

## Version 1.21.3 (January 2023)

### Updates

*   Update to extension name.

## Version 1.21.2 (January 2023)

### Updates

*   Update to OSS Notices.

## Version 1.21.1 (January 2023)

### Notices

*   **Upcoming removal of Cloud Run for Anthos powered by KNative
    functionality:** In the next release of Cloud Code (version 1.22.0),
    functionality enabling viewing and deploying to Cloud Run for Anthos
    clusters powered by KNative will be removed. No changes are being made to
    non-Anthos Cloud Run functionality.

### Updates

*   Let the [Go extension](https://code.visualstudio.com/docs/languages/go)
    manage dependent debugging utilities instead of Cloud Code.
    [#704](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/704)
*   Provide a new styled proxy creation wizard for creating Apigee proxies with
    minimal inputs.
*   Auto-refresh Cloud Functions explorer when launch.config is updated.

### Bug Fixes

*   Fixes for Google Cloud Functions.
*   Exception handling and crash fixes.
*   Allow wildcard base paths during Apigee proxy creation.
    [#708](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/708)

## Version 1.21.0 (Dec 2022)

### New Features

*   **Cloud Functions:** Cloud Code now supports Cloud Functions, helping you
    [work with your Cloud Functions right from your IDE](https://cloud.google.com/code/docs/vscode/create-deploy-function).
    *   Use the Cloud Functions Explorer to view your project's Cloud Functions
        properties and source code.
        ![Cloud Functions Explorer](https://www.gstatic.com/cloudssh/cloudcode/ccvsc_gcf_explorer_highlight.png)
    *   Download your Cloud Functions to
        [edit your code locally](https://cloud.google.com/code/docs/vscode/setup-local-functions-dev-environment),
        then
        [configure your local workspace](https://cloud.google.com/code/docs/vscode/manage-functions-workspace)
        to deploy those changes directly from Cloud Code.
        ![Cloud Functions Deployment](https://www.gstatic.com/cloudssh/cloudcode/ccvsc_gcf_deploy_highlight.png)
    *   Invoke your functions from VS Code and modify your inputs by using any
        JSON-formatted file.
        ![Cloud Functions Invocation](https://www.gstatic.com/cloudssh/cloudcode/ccvsc_gcf_curl_highlight.png)
    *   Use the Cloud Code Logs Viewer to view logs from your Cloud Functions to
        debug your code.
        ![Cloud Functions Logs Viewer](https://www.gstatic.com/cloudssh/cloudcode/ccvsc_gcf_logs_viewer_logtype_highlight.png)

### Bug Fixes

*   Miscellaneous bug and crash fixes

## Version 1.20.4 (Nov 2022)

### Updates

*   Supported locations for Cloud Run deployments are now updated dynamically

### Bug Fixes

*   Fixed a bug where adding and updating secrets only worked for limited
    character sets
*   Fixes and optimizations related to starting and stopping minikube
*   Fixed a bug preventing breakpoints from working correctly when using
    Buildpacks
*   Miscellaneous crash fixes

## Version 1.20.3 (Oct 2022)

### Updates

*   Updated crash reporting process

## Version 1.20.2 (Sep 2022)

### Updates

*   Cloud Code for VSCode VSIX is now verifiable using the VsixSignTool,
    [learn more](https://cloud.google.com/code/docs/vscode/install#optional_verifying_vsix_using_vsixsigntool).
*   Improved code snippet accuracy and UX for the Cloud APIs explorer including
    some new features
    *   Added new Feedback button in snippets.
        ![Cloud API Snippet feedback](https://www.gstatic.com/cloudssh/cloudcode/cloud-api-feedback.png)
    *   Added product icons to improve scannability.
        ![Cloud API Explorer Icons](https://www.gstatic.com/cloudssh/cloudcode/cloud-api-icons.png)

## Version 1.20.1 (Aug 2022)

### Updates

*   Update August 1.20.0 changelog wording

## Version 1.20.0 (Aug 2022)

### New Features

*   **Google Compute Engine:** Cloud Code now supports Google Compute Engine
    helping you
    [work with your Virtual Machines right from your IDE.](https://cloud.google.com/code/docs/vscode/manage-vms)
    *   Use the Compute Engine Explorer to
        [view the properties of your VMs](https://cloud.google.com/code/docs/vscode/manage-vms#viewing_vms)
        and quickly access the Cloud Console to edit these properties.
    *   Use the
        [Open SSH](https://cloud.google.com/code/docs/vscode/manage-vms#connecting_to_a_vm)
        button in the explorer to open a VS Code integrated terminal SSH'd into
        your VM instance. If the connection fails, Cloud Code will help you
        troubleshoot common connectivity issues.
        ![GCE Explorer SSH](https://www.gstatic.com/cloudssh/cloudcode/gce-explorer-ssh-release-notes-v2.png)
    *   Use the
        [Upload File via SCP](https://cloud.google.com/code/docs/vscode/manage-vms#uploading_a_file_to_a_vm)
        button to upload files from your local client to your VM instance. Once
        files are uploaded, you can easily access them in your instance's home
        directory using the SSH connection provided by Cloud Code.
        ![GCE Explorer SCP](https://www.gstatic.com/cloudssh/cloudcode/gce-explorer-scp-release-notes-v2.png)
    *   Use the
        [View Logs](https://cloud.google.com/code/docs/vscode/manage-vms#viewing_application_logs_on_a_vm)
        button to open the Cloud Code Logs Viewer to view logs from your VMs to
        help you debug your applications.
        ![GCE Logs Viewer](https://www.gstatic.com/cloudssh/cloudcode/gce-explorer-logs-viewer-release-notes-v2.png)

### Updates

*   Using Cloud SQL database connections in Cloud Run Emulator no longer
    requires a service account. If you specify a Cloud SQL database without
    specifying a service account, your Application Default Credentials will be
    used to authenticate a connection to the database.
*   Some Kubernetes Explorer functionality has been updated to call your
    cluster’s control plane API directly instead of using kubectl to retrieve
    the data. This significantly reduces the computational overhead and latency
    of the Kubernetes Explorer, especially on Windows machines where spawning
    processes is expensive.

### Bug Fixes

*   Skaffold clean up error
    [#606](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/606)
*   Error deploying with cloudsql connection
    [#613](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/613)
*   Fixed an issue where child processes might continue to run after exiting VS
    Code

## Version 1.19.0 (Jul 2022)

### New Features

*   **Cross-Platform Local Docker Builds:** Cloud Code now supports building
    cross-platform Docker container images locally using Docker BuildX.
    *   When running/debugging on Kubernetes, the platform of the target cluster
        is automatically detected and container images are built for that
        platform, irrespective of the client platform.
    *   Warnings to use Cloud Build as a workaround no longer appear for users
        on ARM64 clients such as M-series MacOS devices when deploying to AMD64
        platforms such as GKE and Cloud Run.

### Updates

*   Removed requirement for Rosetta on M-series MacOS devices, as all our
    dependencies are now built for ARM64.
*   UX Improvement for Cloud Code in IDE survey

### Bug Fixes

*   Extension 'Cloud Code' is configured as formatter but it cannot format
    'YAML' files
    [#587](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/587)
*   Various bug fixes and stability improvements.

## Version 1.18.3 (May 2022)

### Bug Fixes

*   Enhanced error reporting options for minikube startup
*   Various bug fixes and stability improvements.

## Version 1.18.2 (May 2022)

### Bug Fixes

*   Various bug fixes and stability improvements.

## Version 1.18.1 (Apr 2022)

### Bug Fixes

*   Reducing VSCode version requirement for Cloud Code from 1.66 to 1.63.

## Version 1.18.0 (Apr 2022)

### Updates

![One Activity Bar](https://www.gstatic.com/cloudssh/cloudcode/one-activity-bar-release-notes.png)

1.  **Single Activity Bar Icon:** We reduced the amount of space Cloud Code
    takes on your screen by reducing our five activity bar icons to one.

2.  **New Project Selector Status Bar:** Cloud Code shows your active Google
    Cloud project in the status bar so you are always aware what project an
    action will apply to. You can click the status bar item to change the
    project.

3.  **Unified Explorer** All Cloud Code resource explorers are now consolidated
    under the single Activity Bar icon.

![Minikube Status Bar](https://www.gstatic.com/cloudssh/cloudcode/oab-minikube-status-bar.png)

*   **Minikube Status Bar Relocation:** To make room for the project selector
    status bar, we moved the Minikube Status Bar functionality into an option in
    the Cloud Code Status Bar menu.

## Version 1.17.2 (Apr 2022)

### Bug Fixes

*   Fixed an issue where running a Cloud Run app locally on Cloud Run Emulator
    breaks when Skaffold v1.37.1 is installed.

## Version 1.17.1 (Mar 2022)

### Updates

*   When a Run/Debug session is started without an open workspace, Cloud Code
    will recommend that you open a workspace or create a new sample application.
*   **Project Selector Improvements:** You can now easily switch accounts,
    create a new project, and refresh the list of projects directly from the
    project picker.
    ![Project Selector Improvements](https://www.gstatic.com/cloudssh/cloudcode/account-switch-refresh-project-switcher.png)

### Bug Fixes

*   Extension causes high cpu load
    [#523](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/523)
*   Fixed an issue where getting started information and samples in the Google
    Cloud API Detail viewer might not reflect the chosen language.

## Version 1.17.0 (Dec 2021)

### New Features

*   **Private Cluster Support:** Cloud Code provides guidance and helper
    utilities to help you connect to your
    [GKE private clusters](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters).

    *   When there is an issue connecting to a private cluster, Cloud Code shows
        error messages with suggested workarounds for the private cluster
        configuration it detects. To see the workarounds, click a broken cluster
        in the Kubernetes Explorer. Notifications also appear when connection
        errors occur.
        ![Private Clusters Error Popup](https://www.gstatic.com/cloudssh/cloudcode/private-clusters-error-popup.png)

    *   Cloud Code helps you set up proxying for a cluster, which is useful for
        when the public endpoint to the Control Plane API is not accessible from
        your client network and you must proxy API requests through a server in
        the same
        ![Private Clusters setup proxy](https://www.gstatic.com/cloudssh/cloudcode/private-clusters-setup-proxy.gif)

    *   Cloud Code will help you set up a
        [Cloud NAT](https://cloud.google.com/nat/docs/overview) configuration
        for your GKE cluster’s VPC so nodes have outbound internet access. By
        default, GKE private clusters don't provide nodes with access to the
        public internet, which makes container image repositories outside Google
        Cloud inaccessible.
        ![Private Clusters setup NAT](https://www.gstatic.com/cloudssh/cloudcode/private-clusters-setup-nat.gif)

*   **Artifact Registry Support:** UI improvements make it easier to configure
    your Kubernetes deployments to store images using Artifact Registry. To have
    the Artifact registry option appear in the UI, the active Google Cloud
    project must have the Artifact Registry API enabled and at least one
    Artifact Registry repository.

    *   If an Artifact Registry Repo exists within your project, you can select
        the option to push images to an Artifact Registry repo.
        ![Choose Artifact Registry option](https://www.gstatic.com/cloudssh/cloudcode/artifact-registry-choose-option.png)

    *   Select the Artifact Registry repo you wish to deploy to.
        ![Choose Artifact Registry repo](https://www.gstatic.com/cloudssh/cloudcode/artifact-registry-choose-repo.png)

    *   Input the path within the chosen repo that the image should be stored
        at.
        ![Choose Artifact Registry path](https://www.gstatic.com/cloudssh/cloudcode/artifact-registry-choose-path.png)

*   **Multi Microservice development:** Module-based application deployment
    through
    [Skaffold modules](https://cloud.google.com/code/docs/vscode/skaffold-modules)
    helps individual developers to iterate on part of the application.

    *   **Run on Kubernetes** supports deploying one or more modules rather than
        deploying your entire application. You can configure the set of modules
        in your launch configuration (launch.json file) > **skaffoldFlags >
        modules**.
    *   To see modules-based application deployment in action, try out one of
        the Cloud Code Kubernetes Guestbook sample applications by creating a
        new sample project (**Run Cloud Code: New Application** from the command
        palette).
        ![Skaffold modules example](https://www.gstatic.com/cloudssh/cloudcode/skaffold-modules.gif)

### Updates

*   **New Welcome Page experience**
    ![The new welcome page](https://www.gstatic.com/cloudssh/cloudcode/new-welcome-page.png)

    *   **Guided Tour Link:** In addition to samples, the Welcome page includes
        one-click access to a guided tour in Cloud Shell Editor so that you can
        try various Cloud Code features out without any setup. Cloud Shell
        Editor is a Theia-based code editor available by default with every
        Cloud Shell instance.
        ![New guided tour options](https://www.gstatic.com/cloudssh/cloudcode/new-welcome-page-samples-1.png)

    *   **Feature Highlight:** A new section to learn about what you can achieve
        with Cloud Code in Kubernetes, Cloud Run, Secret Manager and more.
        ![Welcome page feature highlight section](https://www.gstatic.com/cloudssh/cloudcode/new-welcome-page-highlight-1.png)

    *   **Documentation Links:** Access various documentations including
        Skaffold and minikube.
        ![Welcome page documentation section](https://www.gstatic.com/cloudssh/cloudcode/new-welcome-page-documentation-1.png)

    *   Try it on! Type **"Cloud Code > Welcome"** into the command palette to
        see the new experience.

### Bug Fixes

*   Fixed Python debug issue
    [#494](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/494)
*   Fixed issue with IntOrString
    [#488](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/488)
*   Added kustomization schema
    [#478](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/478)

## Version 1.16.1 (Nov 2021)

### Updates

*   Fixes an issue where API Browser is not loading without Internet connection.

## Version 1.16.0 (Nov 2021)

### New Features

*   **Apigee (API Management) in VS Code:**
    *   Apigee in VS Code enables developers to develop API proxies and shared
        flows and verify the functionality through unit and manual testing using
        the Apigee Emulator (local runtime). Apigee in VS Code provides:
    *   Basic management of multiple environments
    *   Specialized wizards for developing proxies and shared flows
    *   Automatic injection of Apigee variables in policies and scripts
    *   Develop API proxies using specialized wizards
        ![API proxy wizards](https://www.gstatic.com/cloudssh/cloudcode/apigee-create-proxy.gif)
    *   Deploy and test your Apigee API proxies
        ![API proxy deployment and testing](https://www.gstatic.com/cloudssh/cloudcode/apigee-deploy.gif)
    *   Create policies using pre-configured snippets and use auto-complete
        features to insert variables
        ![Policy creation](https://www.gstatic.com/cloudssh/cloudcode/apigee-variables.gif)
    *   Install and manage Apigee Emulators (local runtime)
        ![Apigee emulators](https://www.gstatic.com/cloudssh/cloudcode/apigee-emulator-install.gif)

### Updates

*   **New API Browser experience:**
    *   Discover code snippets in the IDE. Added a "Code Samples" tab where you
        can search for and use code samples for each GCP API exposed in the API
        Browser.
    *   Click "Cloud Code - Cloud APIs".
    *   To open the detail view, click the name of an API.
    *   To view code samples for the API, click "Code Samples".
    *   To filter the list of samples, type text to search for or choose a
        programming language from the "Language" list.
    *   To view a sample, click the name of the sample. There are also options
        to copy the sample to your clipboard or view the sample in GitHub.
        ![New API Browser](https://www.gstatic.com/cloudssh/cloudcode/api_browser.gif)

### Bug Fixes

*   Cloud Run Emulator: UI bug when adding environment variable
    [#485](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/485)

## Version 1.15.1 (Oct 2021)

### Updates

*   **Temporarily Disabling Iterative Debugging:** Due to an issue identified in
    Skaffold v1.33.0, we are temporarily disabling watch mode for debugging.
    Please follow
    [#486](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/486)
    for more information and updates.

## Version 1.15.0 (Oct 2021)

### New Features

*   **Kubernetes Dry-Run in Language Server:** Cloud Code’s YAML Language Server
    now performs a server-side dry-run on your file as you type, and reports
    problems right in the editor.
    ![Kubernetes Dry-Run in Language Server](https://www.gstatic.com/cloudssh/cloudcode/kuberneres-dry-run-language-server.png)

### Updates

*   **Dependency Install Welcome View:** We now show a Welcome View on all
    explorers that are blocked due to dependency install or upgrade.

### Bug Fixes

*   Option for Get Terminal to run '/bin/bash' instead of 'sh'
    [#464](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/464)
*   Settings: Cloudcode › Yaml: Kubernetes Version outdated?
    [#476](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/476)

### Features available in [Insiders](https://cloud.google.com/code/docs/vscode/insiders)

*   **Support for Skaffold modules:** "Run on Kubernetes" now supports running
    one or more Skaffold modules rather than deploying your entire application.
    You can configure the set of modules in your launch configuration
    (launch.json) > skaffoldFlags > modules.
*   **Apigee integration:** Cloud Code now features integration with your Apigee
    workspaces, with editing and local emulator support.
*   **New API Browser experience:** Code Samples browsing tab is integrated with
    the API browser. You can browse and copy code samples from different Google
    Cloud API Client Libraries. Available for NodeJS, Python, Go and Java.

## Version 1.14.1 (Sept 2021)

### Bug Fixes

*   Fixes a race condition for Skaffold that caused low CPU resource scenarios
    to hang
    [#469](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/469)

## Version 1.14.0 (Sept 2021)

### New Features

*   **New and Improved Kubernetes Development Experience:** Your Kubernetes
    development sessions now have a vastly improved experience with the new
    Development Sessions explorer!
    ![Development Sessions Welcome View](https://www.gstatic.com/cloudssh/cloudcode/welcome-development-sessions.png)

    *   See exactly which task is executing and the status of each task.
        ![Development Sessions In Progress](https://www.gstatic.com/cloudssh/cloudcode/in-progress-development-sessions-2.png)
    *   View the full session logs.
        ![Development Sessions Logs Full](https://www.gstatic.com/cloudssh/cloudcode/session-log-success-development-sessions.png)
    *   Or drill down the logs of an individual task to quickly identify errors.
        ![Development Sessions Logs Drilldown](https://www.gstatic.com/cloudssh/cloudcode/session-log-failure-development-sessions.png)
    *   Stream your application logs at the container level.
        ![Development Sessions Streaming Logs](https://www.gstatic.com/cloudssh/cloudcode/stream-logs-development-sessions.png)
    *   Browse the deployed Kubernetes resources in the cluster, scoped to the
        session and quickly access the pod terminal.
        ![Development Sessions Kubernetes Resources - Get Terminal selected](https://www.gstatic.com/cloudssh/cloudcode/view-resource-get-terminal-development-sessions.png)

*   **Logs Viewer Refresh:** Logs Viewer is redesigned to give more room for the
    logs with no functionality changes.
    ![New Logs Viewer](https://www.gstatic.com/cloudssh/cloudcode/logs-viewer-refresh-top.png)

    *   Introduced pagination control to the logs table, by default the logs
        table shows 50 entries.
        ![New Logs Viewer Pagination](https://www.gstatic.com/cloudssh/cloudcode/logs-viewer-refresh-bottom.png)

### Updates

*   **Cloud Run Emulator on Local Network:** Cloud Run Emulator now includes an
    option to port forward your service to `0.0.0.0` so you can debug it on
    other devices on the local network, such as your phone. To use this, check
    the Make the service accessible from other devices on the local network
    checkbox in the setup UI, or set `externalPortForward` in your launch.json
    configuration to the port you want the service exposed on.
    [#444](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/444)
*   **YAML Editing Support unavailable warning:** When editing a Kubernetes YAML
    file, Cloud Code warns you if it doesn't recognize the schema. When this
    occurs, verify that the `Version` and `Kind` of your YAML configuration is
    correct.

### Bug Fixes

*   Managed Dependency Check Failed
    [#462](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/462)
*   Extension Failure: Managed Dependencies Off
    [#452](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/452)
*   Not enough differentiability between GKE resource status markers
    [#425](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/425)

## Version 1.13.2 (Aug 2021)

### Bug Fixes

*   Fixed an issue about collecting feedback and log refresh.

## Version 1.13.1 (July 2021)

### Updates

*   **Cloud Run timeout:** Increased deployment timeout to 3600 seconds,
    preventing long running deployments from failing.
*   **Gcloud dependency beta removal:** Removed the usage of gcloud alpha
    commands since all features are now in General Availability or in Beta.
*   **Convenient bug reporting:** Added a webview to conveniently upload stack
    traces for bug reports.
*   **Suppress feedback notification**: Added feature to suppress error feedback
    notification based on frequency.
*   **Remove out-of-context Cloud Code commands**: Removed unnecessary commands
    from the palette that are out of context.

### Bug Fixes

*   Changed default service and image names to kebab case to deal with spaces,
    symbols, and uppercase letters present in workspace folder name.
    [#436](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/436)
*   Surface errors due to unknown Skaffold API version in skaffold.yaml.
*   Better recovery from an unsuccessful gcloud installation.
*   Improved error handling when using the minikube status bar.

## Version 1.13.0 (June 2021)

### New Features

*   **Simplified combined Kubernetes Explorer and Google Kubernetes Engine
    Explorer experience** Google Kubernetes Engine Explorer is now merged into
    Kubernetes Explorer for a unified experience. Kubernetes Explorer now takes
    you to the Cloud Console for GKE cluster management operations, such as
    creation and deletion of clusters. Managing cluster types other than
    minikube and GKE is no longer supported; you’ll need to use the cloud
    provider's tools to create other cluster types and add them to your
    KubeConfig.

![Simplified Kubernetes Explorer](https://www.gstatic.com/cloudssh/cloudcode/simplified-kubernetes-explorer.png)

![Create GKE Cluster](https://www.gstatic.com/cloudssh/cloudcode/gke-create-cluster.png)

*   **Iterative debugging** When you're in debug mode and you make a change to
    your project, Cloud Code now redeploys your project and sets up a new debug
    session. You can toggle this feature with the "watch" flag in the launch
    configuration of your project. By default, "watch" is set to true (similar
    to run mode).

![Iterative Debugging](https://www.gstatic.com/cloudssh/cloudcode/iterative-debugging.gif)

*   **Change Build Environment on the fly** If, when you begin your Run/Debug on
    Kubernetes session, Cloud Code detects that you aren't using a recommended
    build environment for your development environment, you will have a chance
    to modify the build environment in your current Skaffold profile or change
    your Skaffold profile to one that uses a recommended build environment.

![Change Build Environment](https://www.gstatic.com/cloudssh/cloudcode/change-build-environment.png)

*   **Auto-start docker prompt** When running or debugging Kubernetes and Cloud
    Run, you now are presented with a new quick-pick menu to start Docker
    service as part of the dependency check.

![Auto-start Docker Prompt](https://www.gstatic.com/cloudssh/cloudcode/auto-start-docker-prompt.png)

### Updates

*   **Managed Cloud SDK performance improvements** Improvements to the managed
    Cloud SDK installation process means much of Cloud Code functionality is now
    available 2 to 5x times faster upon installing the extension. Additionally,
    these improvements come with reduced memory consumption and fewer
    fatal/corruption errors.

*   **Improvement to Cloud Run local development webview** The webview now
    immediately shows any input error without needing to click "Run" button.

![Cloud Run Validation](https://www.gstatic.com/cloudssh/cloudcode/cloud-run-validation-improvements.png)

### Bug Fixes

*   Fixed the application name to use kebab case while cloning template repos.
    [#430](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/430)

## Version 1.12.1 (June 2021)

### Bug Fixes

*   Fixed an issue where debug path mapping was broken with Skaffold 1.25.0.

## Version 1.12.0 (May 2021)

### New Features

*   **Build with Cloud Build** When Deploying to Cloud Run or Running/Debugging
    on Kubernetes, you can select to build with
    [Cloud Build](https://cloud.google.com/build). Cloud Code will guide you
    through setting up Cloud Build in your project, and then will automatically
    configure and submit builds for each image to the cloud. Cloud Code will
    also make suggestions to use Cloud Build based on your current development
    environment. For example, Cloud Build will be recommended for deployment to
    GKE from ARM based clients because of the processor architecture mismatch.

![Google Cloud Build](https://www.gstatic.com/cloudssh/cloudcode/cloud-build.png)

*   **Minikube Auto Stop** Improved client side performance for auto scheduling
    the minikube clusters started by cloud code.

### Updates

*   **Cloud Run** Cloud Run managed deployments now allow up to 8 GiB memory for
    any deployments with at least 2 vCPUs allocated.

### Bug Fixes

*   Fixed an issue where validation to have docker installed is not needed when
    using Google Cloud Build for deploying applications.
*   Support multiple skaffold configurations in one single configuration file.
    [#424](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/424)

## Version 1.11.1 (May 2021)

### Bug Fixes

*   Fixed an issue where views were slow to load in Visual Studio Code 1.56.0.

## Version 1.11.0 (April 2021)

### Updates

*   **Updated Explorer setup experience:** Explorers that require any setup
    steps now guide you through the process of logging in, selecting a project,
    and enabling any required APIs in a more interactive and friendly way.
*   **Streamlined Explorer views:** Secret values in Secret Tree View and
    ConfigMaps’ values in Kubernetes Explorer are now accessible in read-only
    (instead of editable) documents.
*   **Enhanced minikube management:** Multi-step quick pick menu for minikube
    now comes with cancel and back buttons for easy navigation.
*   **Prompt toggling for M1 macs:** Suppress warnings that the extension might
    not work on M1 with improved prompt toggling.
    [#415](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/415)
*   **Quieter watch mode:** Watch mode no longer displays Deployment Successful
    prompts.
*   **Improved error state:** Get unstuck quicker with more proactive error
    messaging in the Kubernetes local development webview.

### Bug Fixes

*   Fixed an issue where .NET debugger was using the wrong debugger path with
    Skaffold. Added `debuggerPath` and `processId` field to the .NET debugger to
    enable setting the debugger path and process ID of the debuggee.
    [#397](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/397),
    [#418](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/418)
*   Fixed an issue where the artifacts property needed to be specified under the
    default skaffold’s profile even when there were additional profiles.
    [#398](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/398)
*   Fixed an issue where multiple prompts to install necessary version of Cloud
    SDK that take up screen space.
    [#414](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/414)
*   Fixed an issue where the Enable Cloud Run API button was disabled in the
    Cloud Run WebView.

## Version 1.10.0 (March 2021)

### New Features

*   **GKE Autopilot Cluster Creation:** You can now create
    [GKE Autopilot](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
    clusters with the Cluster Creation wizard for a more managed mode of
    operation, taking advantage of Autopilot’s auto-provisioning and autoscaling
    of GKE infrastructure. For more details on how to configure your cluster,
    see the
    [Adding a cluster](https://cloud.google.com/code/docs/vscode/adding-a-cluster#creating_or_using_an_existing_kubernetes_cluster_with_gke)
    guide.

![autopilot cluster creation](https://www.gstatic.com/cloudssh/cloudcode/gke-autopilot-cluster-creation.png)

*   **Initial support for M1-based Apple Silicon Macs:** With this update, you
    can now build and work locally on your M1 Mac with Cloud Code, minikube, and
    Skaffold for ARM64 targets. Please note that
    [Rosetta 2](https://support.apple.com/en-us/HT211861) is currently required
    as several dependencies are still x86/64 only, refer to
    [instructions](https://cloud.google.com/code/docs/vscode/arm). Follow this
    [GitHub issue](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/390)
    for more information and to track the latest updates.

### Updates

*   **Dry-run YAML Files:** Perform a dry run of your configuration and check
    its validity using the newly added dry-run command (with either client-side
    or server-side validation). Dry-run evaluates the resource request without
    persisting objects to storage, and displays the validation result as a toast
    notification. To discover more commands to help with editing your
    configuration files, see the
    [YAML editing](https://cloud.google.com/code/docs/vscode/yaml-editing#performing_a_dry-run_of_a_yaml_file)
    guide.

![dry-run](https://www.gstatic.com/cloudssh/cloudcode/dry-run.png)

### Bug Fixes

*   Fixed passing environment variables to skaffold.yaml for customizing build
    arguments.
    [#394](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/394),
    [#378](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/378)
*   Fixed the ability to specify skaffold tags (like docker image tags) through
    launch config for customization.
    [#335](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/335)
*   Fixed skaffold workspace to support config from non-root directory.
    [#377](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/377)
*   Fixed the need to avoid specifying service/container name when Cloud Run is
    running on an emulator.
    [#295](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/295)
*   Fixed an issue where the insiders build gave an inactionable error message
    on network failures.
    [#404](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/404)

## Version 1.9.0 (February 2021)

### New Features

*   **GKE Autopilot:** You can now deploy your application to GKE Autopilot
    right from VSCode Cloud Code menu. GKE Autopilot is a new mode of operation
    of GKE clusters where infrastructure is auto managed by Google, provides
    auto provisioning and auto scaling of GKE infra to the end user. Overview of
    [GKE Autopilot](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview).
*   **Pre-release Channel:** You can now use insider builds for trying out
    upcoming features and give us feedback before they are publicly released.
    You can go to cloud code settings "Cloud Code: Update Channel" and select an
    insider build that you want to try out. This will help us to make sure your
    development tools aren’t affected by the release of Cloud Code Plugin.

![pre-release checkbox](https://www.gstatic.com/cloudssh/cloudcode/prerelease-in-welcome-page.png)

### Bug Fixes

*   Fixed to avoid checking for dependencies while deploying to K8 if deps are
    not auto managed.
    [#375](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/375)
*   Fixed broken link to browse launch.json config in the output window of
    deployment logs.

## Version 1.8.0 (January 2021)

### New Features

*   **Custom templates:** You can now create applications from custom templates!
    Cloud Code offers the option of importing a Git template repository so that
    teams can get started quickly from a standard set of starter applications,
    services, and infrastructure configuration best suited to teams’
    organizational policies. To read more about templates and how to get
    started, head over to
    [setting up a template repository](https://cloud.google.com/code/docs/vscode/set-up-template-repo)
    guide.

![custom templates](https://www.gstatic.com/cloudssh/cloudcode/contextual-status-bar.png)

*   **Cloud Code Status Bar options:** Discover more about your currently active
    sessions with these additions to the Cloud Code status bar.
    *   **Open Service URL:** Instead of scrolling through the logs to find the
        service URL, you can now open the application service URL in a web
        browser directly from the status bar.
    *   **Open Deployment Logs:** Open the application logs with the Cloud Code
        Logs Viewer. This populates the necessary filters in the Logs Viewer for
        the selected deployment.
    *   **Turn on/off Watch Mode:** Toggle watch mode (not available for debug
        session currently). This allows you to turn on/off watch mode for the
        current active run session without stopping, changing the launch.json
        `watch` field, and redeploying. Note that this toggle only affects the
        current session and not subsequent ones.

![status bar options](https://www.gstatic.com/cloudssh/cloudcode/custom-templates.png)

*   **New sample application READMEs:** When you create a new sample application
    with Cloud Code, the new README gives updated guidance on next steps to help
    you get more out of Cloud Code.

![new sample application READMEs](https://www.gstatic.com/cloudssh/cloudcode/vscode-readme.png)

### Updates

*   **.NET launch debugging support:** In addition to the attach configuration,
    Cloud Code now supports a launch configuration for .NET. You can now deploy
    and attach to a .NET application with a single configuration.
*   **New home for Cloud Run properties:** Cloud Run properties no longer show
    up in a separate view. They can be found conveniently in the Cloud Run
    Explorer under **Properties**.

![new sample application READMEs](https://www.gstatic.com/cloudssh/cloudcode/cr-explorer-properties.png)

### Bug Fixes

*   Fixed Cloud SDK auto dependency installation corruption issue on Windows.
    [#346](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/346)
*   Fixed Python enabling to debug external sources.
    [#328](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/328)
*   Fixed YAML outline to handle arrays of objects.
    [#339](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/339)
*   Fixed available cluster listing when faced with restricted project
    permissions.
    [#318](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/318)
*   Fixed docs for Cloud Run service config, discovering logs, stopping the
    emulator.
    [#298](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/298)
*   Fixed an issue where installation of minikube is not required for deploying
    to Kubernetes cluster.
    [#280](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/280)
*   Fixed an issue to display deployment progress failures on the right side
    status bar.
*   Fixed an issue that allows users to switch accounts without running into
    permission requests on older accounts.

## Version 1.7.2 (January 2021)

### Bug Fixes

*   Fix an issue where dependencies path gets invalidated on Windows.
    [#362](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/362)
*   Fix an issue where Cloud SDK in the path gets corrupted on Windows since
    there is reentry while installing dependencies.
    [#347](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/347)

## Version 1.7.1 (December 2020)

### New Features

*   **Project Selection Flows:** The project selector has been refreshed to
    deliver an improved UX, faster load times, and recent projects listed first.
    The project selection/login/logout should sync between all webviews and
    explorers.

![project selection flows](https://www.gstatic.com/cloudssh/cloudcode/mru-project-selection.gif)

*   **Refresh GKE Explorer:** The look and feel of the GKE Explorer is now
    consistent with the Secret Manager Explorer and the Cloud Run Explorer.
*   **YAML Editing Support:** YAML editing support can now accurately be limited
    to a subdirectory under the working directory by setting
    `cloudcode.yaml.yamlFileMatcher`.
    [Learn more](https://cloud.google.com/code/docs/vscode/yaml-editing)

### Updates

*   Replace general icons with VSCode Codicons for commands.
*   Improved Cloud Run (fully managed) support:
*   Allocate up to 4 vCPUs to container instances with the increased limit.

### Bug Fixes

*   Fix .NET debugging fails to open a source file when the breakpoint is hit.
    [#292](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/292)
*   Refresh AKS cluster UI after modifying the active subscription.
    [#239](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/239)

## Version 1.7.0 (October 2020)

*   **Secret Manager Support:** Many applications require credentials to connect
    to a database, API keys to invoke a service, or certificates for
    authentication. Cloud Code now integrates with Google Cloud's Secret Manager
    to make it easy to create, view, update, and use secrets from within your
    IDE so you can keep this sensitive data out of your codebase and keep your
    applications secure. Get started today by viewing secrets, creating a new
    secret, or add secret manager API support to your code. You can learn more
    about Secret Manager support from
    [the Cloud Code Secret Manager documentation](https://cloud.google.com/code/docs/vscode/secret-manager).

    *   View secrets, their versions, permissions, and properties in the Secret
        Manager view.
        ![Secret manager explorer view](https://www.gstatic.com/cloudssh/cloudcode/secret-manager-explorer.png)

*   **Minikube Credentials Support:** When running or debugging on Cloud Run
    Emulator or minikube, Cloud Code will automatically set up the
    [minikube gcp-auth](https://minikube.sigs.k8s.io/docs/handbook/addons/gcp-auth/)
    addon. This will enable you to use your Google developer credentials to
    authenticate Google API client libraries in your apps when running in these
    environments with zero configuration required. Cloud Code also has a new
    login flow to ensure you have developer credentials installed when you
    login.

*   **Managed Dependencies in Integrated Terminal:** You can now use Cloud Code
    managed dependency CLIs, such as minikube and gcloud, through VSCode
    Integrated Terminals.
    ![Managed dependencies in integrated terminal](https://www.gstatic.com/cloudssh/cloudcode/integrated-terminal.png)

### Updates

*   **Improved Cloud Run (fully managed) support:**

    *   Deploy Cloud Run services from your IDE to these newly added regions.
        View the full supported list
        [here](https://cloud.google.com/run/docs/locations).

    *   Allocate up to 4GiB of memory to your services with the increased quota.

### Bug Fixes

*   Minikube status checks are aggressive and lead to generating more log files
    that can slow down other build tools. The change is to remove the live
    status bar but use minikube status bar to monitor status of different
    profiles and is less invasive.
    [#286](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/286)
    [#313](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/313)

*   Cloud run emulator didn’t bootstrap itself on windows since it chose the
    hyper-v that got blocked on the need for special permissions, Cloud code now
    defaults to using docker driver for the emulator.

*   Regions are not available when I use "Deploy to Cloud Run".
    [#314](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/314)

## Version 1.6.0 (Septemeber 2020)

### New Features

*   **Improved performance:** Reduced load times for populating the GKE explorer
    (from about a 12 second load time to under 5 seconds!); logging out or
    switching accounts is now a much faster experience.

*   **Kubernetes run/debug bootstrapping improvements:** Cloud Code now helps
    you set an active context at the start of a run or debug session to help you
    get your Kubernetes application deployed quickly. If you don’t have any
    contexts, Cloud Code helps you create one.

    ![Kubernetes run/debug bootstrapping improvements](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/run-debug-no-contexts_1_6_0.gif "Kubernetes run/debug bootstrapping improvements")

*   **Auto-start minikube:** Cloud Code now manages minikube more proactively.
    When running/debugging on a minikube cluster that is paused or stopped,
    Cloud Code automatically starts the cluster at the beginning of the session
    and pauses it when you’re done.

    ![Auto-start minikube](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/auto-start-minikube_1_6_0.gif "Auto-start minikube")

## Version 1.5.0 (August 2020)

### New Features

*   **Cloud Run local development:** Develop Cloud Run applications locally
    using Minikube clusters with the newly added Run and Debug on Cloud Run
    Emulator commands.

    ![Cloud Run Local Development](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/cloud-run-local-dev_1_5_0.gif "Cloud Run Local Development")

*   **Expanded CRD support:** Cloud Code has been expanded to support
    validation, hover documentation, and code completions for hundreds of
    popular Kubernetes Custom Resources.

    ![Expanded CRD Support](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/popular-crd-support_1_5_0.gif "Expanded CRD Support")

*   **Buildpacks support:** In addition to Docker, you can now build your images
    with Google Cloud buildpacks.

    ![Buildpacks Support](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/buildpacks_1_5_0.gif "Buildpacks Support")

*   **Auto generate configuration experience for existing K8s apps:** The UI
    that helps auto generate configuration for an existing app moving in to
    using Cloud Code extensions now supports specifying all available build and
    configuration settings.

    ![Generate Kubernetes Configuration](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/bootstrap_kubernetes_1_5_0.gif "Generate Kubernetes Configuration")

*   **Improved New Application UI:** Creating a new application now uses the
    system file picker to help you quickly place the new files in a familiar
    way. You can rename the new application folder through your system file
    manager.

    ![Generate App With System File Picker](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/create_k8s_app_1_5_0.gif "Generate App With System File Picker")

## Version 1.4.0 (May 2020)

### New features

*   **Kubernetes Context Management:** Contexts are now accessible from the
    Kubernetes Explorer! You can now browse and switch between Kubernetes
    contexts as you would during your development workflow with Cloud Code. With
    the updated Kubernetes Explorer, it's easier to understand the active
    context associated with your current cluster and move to another if you
    need.

    ![Managing Kubernetes Context](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/kubecontext_1_4_0.JPG "Managing Kubernetes Context")

*   **PersistentVolumeClaim support:** The Kubernetes Explorer will now show
    your cluster's PersistentVolumeClaim (PVC) resources and each PVC's status
    and key details.

    ![PersistentVolumeClaim support](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/pvc_1_4_0.JPG "PersistentVolumeClaim support")

### Bug Fixes

*   Cloud Code will now allow you to browse and switch between Kubernetes
    contexts.
    [#131](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/131)
*   You can now browse PersistentVolumeClaim in the Kubernetes Explorer.
    [#193](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/193)

## Version 1.3.0 (April 2020)

We are pleased to announce [Cloud Run](https://cloud.google.com/run) support in
Cloud Code for VS Code!

### New Features

*   **Cloud Run support in VS Code:** Cloud Code now makes it easy to develop
    and deploy your services to Cloud Run (fully managed) or Cloud Run for
    Anthos on GKE directly from within Visual Studio Code. You can get started
    with our starter templates for Java, Node.js, Go, or Python.

    *   Browse your Cloud Run services directly from the IDE using the Cloud Run
        explorer. Easily see details of deployed services as well as revisions
        and status.
    *   Follow the
        [Cloud Run quickstart guide](https://cloud.google.com/code/docs/vscode/quickstart-cloud-run)
        to get started!

    ![Cloud Run service browser and deployment flow](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/cloud-run-support_1_3_0.gif "Cloud Run service browser and deployment flow")

*   **Improved dependency management:** Better experience when Cloud Cloud is
    managing dependencies.

    *   Improved performance when installing managed dependencies.
    *   Stay up to date with the latest versions of dependencies.

*   **Cloud Code: Debug on Kubernetes:** New command to debug applications with
    the same configuration used to
    [run the application](https://cloud.google.com/code/docs/vscode/running-an-application).

    *   Invoking this command will launch the application and debugs all the
        containers in the app.
    *   Refer to the
        [documentation](https://cloud.google.com/code/docs/vscode/debug) for
        more on this feature.

    ![Debug on Kubernetes command](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/debug-on-kubernetes.gif "Debug on Kubernetes command")

*   **Separate views for Kubernetes, Cloud Run and APIs:** Reorganized UI to
    focus on the flows that matter.

    ![Separate views](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/action-bar-changes_1_3_0.gif "Separate views")

### Other Changes

*   **Dependency management:** Previously offered "On," "Off," and "Ask" as
    choices for managing dependency with "Ask" as the default. In the latest
    release we've removed the "Ask" choice with "On" as the default. Anyone who
    has picked "Ask" will be defaulted to "On."
*   **Deprecation of Kubernetes deploy commands:** The deprecated ‘Cloud Code:
    Deploy’ and ‘Cloud Code: Continuous Deploy’ have been removed. Use ‘Cloud
    Code: Run on Kubernetes’ command.

### Bug Fixes

*   Add support for Google Cloud Run.
    [#231](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/231)
*   Hanging while installing dependencies.
    [#227](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/227)
*   Cannot start debugger for .NetCore project.
    [#225](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/225)
*   GKE Explorer does not work in windows 10.
    [#224](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/224)
*   Add Configuration to Existing Project is broken.
    [#223](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/223)
*   Add a guidance message in case no Kubernetes manifest are present.
    [#203](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/203)

## Version 1.2.1 (March 2020)

Updated the extension to be compatible with the latest version of Visual Studio
code. Fixed an issue introduced by the latest update that caused specific
terminal commands to hang.

## Version 1.2.0 (February 2020)

### New features

*   **Flexible Kubernetes YAML editing:** Edit your Kubernetes YAML with
    additional support for multiple Kubernetes versions.
*   **Streamlined remote development flow:** Work with Cloud Code
    [using a remote development environment](https://cloud.google.com/code/docs/vscode/quickstart-remote-dev),
    taking advantage of newly added support:

    *   Start development with just Visual Studio Code installed.
    *   Receive direct reporting on the progress of ‘Open with Cloud Code’
        throughout its flow.
    *   Cancel the open any time during the operation.
    *   If an error does occur, know that it will come with actionable guidance.

    ![alt_text](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/cloud-shell-new-flow_1_2_0.gif "Working with Cloud Shell")

*   **Cloud Code: Deploy deprecation:** ‘Cloud Code: Deploy’ and ‘Cloud Code:
    Continuous Deploy’ commands are
    [deprecated](https://cloud.google.com/code/docs/vscode/troubleshooting#how_is_the_cloud_code_run_on_kubernetes_command_different_from_cloud_code_deploy_application).
    While these commands continue to work, they will be removed in the next
    release (v1.3), targeted for the end of March.

    Use ‘Cloud Code: Run on Kubernetes’ command instead.

*   **Improved Logs Viewer:** Make the most out of your log viewing with the
    following new filters:

    *   Log Type: switch between kubectl, Cloud Logging and Cloud Run logs.
    *   Cluster: switch between different clusters when viewing Cloud Logging
        logs. This allows you to query logs from specific clusters instead of
        from all of them. For kubectl logs, this will only show the current
        active cluster.

    ![alt_text](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/improved-logs-viewer_1_2_0.gif "Improved logs viewer")

### Bug Fixes

*   Cloud Code will no longer continually switch user context to the output
    window.
    [#176](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/176)
*   Fixed an issue where the Logs Viewer hangs when you don’t have permission to
    list all namespaces.
    [#201](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/201)
*   Fixed an issue where Open with Cloud Code would not clone a repository in
    some cases.
*   Fixed an issue where Cloud Shell would fail to create an SSH configuration
    when the gcloud command-line tool prompted for survey participation.

## Version 1.1.2 (February 2020)

### Notable Fixes

*   Fixed an issue in the "Open in Cloud Code" feature
*   Fixed an issue where logs in "Cloud Code Yaml Support" output channel will
    grab focus
*   Minor bug fixes

## Version 1.1.1 (February 2020)

### New Features

*   Enable the deprecated `Cloud Code: Deploy` and `Cloud Code: Continuous
    Deploy` commands along side with the new and recommended command `Cloud
    Code: Run on Kubernetes`. You can now continue with your existing workflow
    while taking the time to make a switch!

### Bug Fixes

*   Run in Kubernetes: Cant disable the watch (#198)

## Version 1.1.0 (January 2020)

### New Features

*   **Client Library Browser:** Manage your Google Cloud APIs with Cloud Code’s
    freshest new feature: the Client Library Browser. View all available Google
    Cloud APIs, enable an API, view API status (enabled or disabled), and
    install client libraries to consume an API, all from within your IDE.

    ![alt_text](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/client-library-browser_1_1_0.gif "Client library browser")

*   **Cloud Code: Run on Kubernetes:**

    A new command, ‘Cloud Code: Run on Kubernetes,’ has been added that lets you
    run your kubernetes application and view it live. 'Cloud Code: Deploy' and
    'Cloud Code: Continuous Deploy' commands have been deprecated in favor of
    this command. For more details on this change, please refer to this
    [link](https://cloud.google.com/code/docs/vscode/troubleshooting).

    ![alt_text](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/deployment-flow_1_1_0.gif "New deployment flow")

*   In addition to the above features, this release also includes some bug
    fixes. You can view the full list
    [here](https://github.com/GoogleCloudPlatform/cloud-code-vscode/milestone/3).

## Version 1.0.0 (November 2019)

We are pleased to announce that Cloud Code is now GA!

### New Features

*   **Cloud Shell Integration** Use the ‘Open with Cloud Code’ feature to
    quickly get started using Google Cloud Platform. It uses a remote
    development environment in
    [Cloud Shell](https://cloud.google.com/shell/docs) which means you’ll get to
    skip setup and start developing with Cloud Code with the click of a button.

    With ‘Open with Cloud Code’, you can edit, run, and debug code; as well as
    utilize all of Cloud Code's features directly from inside Cloud Shell.
    Visual Studio Code's integrated terminal allows direct interaction with
    command line utilities running in Cloud Shell, such as the gcloud
    command-line tool, skaffold, and kubectl.

    ![alt_text](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/cloudshell_1_0_0.gif "Opening in Cloud Shell")

*   **YAML editing** Get started with Cloud Build with Cloud Code’s built-in
    snippets for Cloud Build and Cloud Build trigger YAML files.

    ![alt_text](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/cloudbuild-yaml_1_0_0.gif "Cloud Build YAML editing")

### Bug Fixes

*   Added ability to view and edit yaml of Ingress resource.
    [#158](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/158)

## Version 0.0.13 (November 2019)

### New Features

*   **Logs Viewer** Browse through and filter Kubernetes cluster logs easily
    using the new Logs Viewer. For clusters that do not support Stackdriver
    logging cluster logs will now be colorized.

    ![alt_text](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/logs_viewer_0_0_13.gif "Stackdriver logs viewer")

*   **Dependency Installer** Cloud Code will manage kubectl and Skaffold CLI
    dependencies automatically. This can be controlled using the
    `cloudcode.auto-install` setting.

    ![alt_text](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/dependency_installer_0_0_13.png "Dependency installer")

*   **YAML Editing** Create and modify YAML with Cloud Code’s richer YAML
    editing experience for these configuration types:

    *   Anthos Config Management
        ([link](https://cloud.google.com/anthos-config-management/docs/how-to/configs))
    *   Config Connector
        ([link](https://cloud.google.com/config-connector/docs/overview))
    *   Migrate for Anthos
        ([link](https://cloud.google.com/migrate/anthos/docs/yaml-reference))

    ![alt_text](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/migrate_for_anthos_0_0_13.gif "Migrate for Anthos YAML editing")

*   **Colorized Streams** Deployment and Continuous Deployment output streams
    will be colorized to highlight key events.

    ![alt_text](https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/HEAD/images/colorized_streams_0_0_13.gif "Colorized logs view")

### Notable Fixes

*   Improved extension activation time by removing dependency on language server
    activation.
    ([#140](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/140))
*   Reduced the memory footprint of Kubernetes Cluster Explorer to allow
    handling large clusters.
*   Included various stability fixes.
    ([#147](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/147))
    ([#101](https://github.com/GoogleCloudPlatform/cloud-code-vscode/issues/101))
