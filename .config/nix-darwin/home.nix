{ config, pkgs, lib, ... }:

{
  home.username = "ionutcipriananescu";
  home.homeDirectory = lib.mkForce "/Users/ionutcipriananescu";  # Use lib.mkForce to give this value higher priority
  home.stateVersion = "23.05"; # Please read the comment before changing.

  home.packages = [ ];

 
home.file = {
  ".zshrc".source = "${builtins.getEnv "HOME"}/dotfiles/zshrc/.zshrc";
  ".config/wezterm".source = "${builtins.getEnv "HOME"}/dotfiles/wezterm";
  ".config/skhd".source = "${builtins.getEnv "HOME"}/dotfiles/skhd";
  ".config/starship".source = "${builtins.getEnv "HOME"}/dotfiles/starship";
  ".config/zellij".source = "${builtins.getEnv "HOME"}/dotfiles/zellij";
  ".config/nvim".source = "${builtins.getEnv "HOME"}/dotfiles/nvim";
  ".config/nix".source = "${builtins.getEnv "HOME"}/dotfiles/nix";
  ".config/nix-darwin".source = "${builtins.getEnv "HOME"}/dotfiles/nix-darwin";
  ".config/tmux".source = "${builtins.getEnv "HOME"}/dotfiles/tmux";
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
