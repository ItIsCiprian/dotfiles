
{
  description = "Ikigai Darwin system flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    nix-darwin.url = "github:LnL7/nix-darwin";
    nix-darwin.inputs.nixpkgs.follows = "nixpkgs";
    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = inputs@{ self, nix-darwin, nixpkgs, home-manager }:
  let
    configuration = { pkgs, ... }: {
      # List of packages installed in system profile.
      environment.systemPackages = [
        pkgs.vim
        pkgs.direnv
        pkgs.age
        pkgs.sshs
        pkgs.atac
        pkgs.termshark
        pkgs.portal
        pkgs.glow
      ];
      
      # Enable services and programs
      services.nix-daemon.enable = true;
      nix.settings.experimental-features = "nix-command flakes";
      programs.zsh.enable = true;  # Default shell on macOS

      # System configuration
      system.configurationRevision = self.rev or self.dirtyRev or null;
      system.stateVersion = 4;  # Important for system upgrades
      nixpkgs.hostPlatform = "aarch64-darwin";  # Adjust architecture if needed

      # TouchID sudo authentication
      security.pam.enableSudoTouchIdAuth = true;

      # User setup
      users.users.ionutcipriananescu.home = "/Users/ionutcipriananescu/";
      
      # Home Manager settings
      home-manager.backupFileExtension = "backup";
      nix.configureBuildUsers = true;
      nix.useDaemon = true;

      # System defaults
      system.defaults = {
        dock.autohide = true;
        dock.mru-spaces = false;
        finder.AppleShowAllExtensions = true;
        finder.FXPreferredViewStyle = "clmv";
        loginwindow.LoginwindowText = "ionutcipriananescu";
        screencapture.location = "~/Pictures/screenshots";
        screensaver.askForPasswordDelay = 10;
      };

      # Homebrew settings
      homebrew.enable = true;
      homebrew.casks = [
        "wireshark"
        "google-chrome"
      ];
      homebrew.brews = [
        "imagemagick"
      ];
    };
  in
  {
    # Define the Darwin configuration
    darwinConfigurations."ionutcipriananescu-MacBook-Pro" = nix-darwin.lib.darwinSystem {
      system = "x86_64-darwin";  # Ensure this matches your system architecture
      modules = [
        configuration
        home-manager.darwinModules.home-manager {
          home-manager.useGlobalPkgs = true;
          home-manager.useUserPackages = true;
          home-manager.users.ionutcipriananescu = import ./home.nix;
        }
      ];
    };

    # Expose the package set, including overlays
    darwinPackages = self.darwinConfigurations."ionutcipriananescu-MacBook-Pro".pkgs;
  };
}
