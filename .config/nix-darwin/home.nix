{ config, pkgs, lib, ... }:

let
home.homeDirectory = builtins.getEnv "HOME";
  in
{
  home.username = "ionutcipriananescu";
  home.homeDirectory = lib.mkForce homeDir;  # Use mkForce to resolve conflicting values
  home.stateVersion = "23.05"; # Please read the comment before changing.

  home.packages = [ ];

  home.file = {
    ".zshrc".source = "${homeDir}/dotfiles/zshrc/.zshrc";
    ".config/wezterm".source = "${homeDir}/dotfiles/wezterm";
    ".config/skhd".source = "${homeDir}/dotfiles/skhd";
    ".config/starship".source = "${homeDir}/dotfiles/starship";
    ".config/zellij".source = "${homeDir}/dotfiles/zellij";
    ".config/nvim".source = "${homeDir}/dotfiles/nvim";
    ".config/nix".source = "${homeDir}/dotfiles/nix";
    ".config/nix-darwin".source = "${homeDir}/dotfiles/nix-darwin";
    ".config/tmux".source = "${homeDir}/dotfiles/tmux";
  };

  home.sessionVariables = { };

  home.sessionPath = [
    "/run/current-system/sw/bin"
    "$HOME/.nix-profile/bin"
  ];

  programs.zsh = {
    enable = true;
    initExtra = ''
      export PATH=/run/current-system/sw/bin:$HOME/.nix-profile/bin:$PATH
      if [ -e '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh' ]; then
        . '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh'
      fi
    '';
  };
}
