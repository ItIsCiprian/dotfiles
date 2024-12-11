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

  outputs = { self, nixpkgs, nix-darwin, home-manager, ... }@inputs: {
    darwinConfigurations = {
      "Ciprian-MacBook-Pro.local" = nix-darwin.lib.darwinSystem {
        system = "x86_64-darwin";  # Ensure this matches your system architecture
        modules = [
          ({ pkgs, ... }: {
            # Your system configuration settings go here
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
            services.nix-daemon.enable = true;
            nix.settings.experimental-features = "nix-command flakes";
            programs.zsh.enable = true;
            system.configurationRevision = self.rev or self.dirtyRev or null;
            system.stateVersion = 4;
            nixpkgs.hostPlatform = "aarch64-darwin";
            security.pam.enableSudoTouchIdAuth = true;
            users.users.ionutcipriananescu.home = "/Users/ionutcipriananescu/";

            # Other settings
          })
          home-manager.darwinModules.home-manager {
            home-manager.useGlobalPkgs = true;
            home-manager.useUserPackages = true;
            home-manager.users.ionutcipriananescu = import ./home.nix;
          }
        ];
      };
    };
  };
}
