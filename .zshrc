#!/usr/bin/env zsh
# ~/.zshrc - Zsh configuration file
# -----------------------------------------------------------------------------
# Table of Contents:
# 1. Path Configuration
# 2. Oh My Zsh Setup
# 3. History Configuration
# 4. Key Bindings
# 5. Package Managers (Homebrew, NVM)
# 6. Tools Configuration (FZF, Bat, Eza, etc.)
# 7. Navigation Tools (Zoxide)
# 8. Custom Aliases and Functions
# 9. Terminal Integration
# -----------------------------------------------------------------------------

# -----------------------------------------------------------------------------
# 1. Path Configuration
# -----------------------------------------------------------------------------
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:$PATH"           # Apple Silicon Homebrew (must come first)
export PATH="$PATH:$HOME/.config/emacs/bin"                        # Doom Emacs binaries
export PATH="$PATH:$HOME/.local/bin"                               # User local binaries

# -----------------------------------------------------------------------------
# 2. Oh My Zsh Setup
# -----------------------------------------------------------------------------
export ZSH="$HOME/.oh-my-zsh"
export DOOMDIR="$HOME/.config/doom"
export STARSHIP_CONFIG="$HOME/.config/starship/starship.toml"

plugins=(
  git
  web-search
  zsh-autosuggestions
  zsh-syntax-highlighting
)

source "$ZSH/oh-my-zsh.sh"
eval "$(starship init zsh)"

# -----------------------------------------------------------------------------
# 3. History Configuration
# -----------------------------------------------------------------------------
HISTFILE="$HOME/.zhistory"
HISTSIZE=10000
SAVEHIST=10000

setopt share_history            # Share history across sessions
setopt hist_expire_dups_first   # Expire duplicates first
setopt hist_ignore_dups         # Don't store consecutive duplicates
setopt hist_ignore_space        # Don't store commands starting with a space
setopt hist_verify              # Preview history expansions before running

# -----------------------------------------------------------------------------
# 4. Key Bindings
# -----------------------------------------------------------------------------
bindkey '^[[A' history-search-backward   # Up arrow: history search
bindkey '^[[B' history-search-forward    # Down arrow: history search
bindkey '^[[H' beginning-of-line         # Home key
bindkey '^[[F' end-of-line               # End key

# -----------------------------------------------------------------------------
# 5. Package Managers
# -----------------------------------------------------------------------------

# Homebrew (Apple Silicon)
eval "$(/opt/homebrew/bin/brew shellenv)"

# Node Version Manager (NVM)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ]             && source "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ]    && source "$NVM_DIR/bash_completion"

# -----------------------------------------------------------------------------
# 6. Tools Configuration
# -----------------------------------------------------------------------------

# --- FZF ---
eval "$(fzf --zsh)"

export FZF_DEFAULT_COMMAND="fd --hidden --strip-cwd-prefix --exclude .git"
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
export FZF_ALT_C_COMMAND="fd --type=d --hidden --strip-cwd-prefix --exclude .git"

export FZF_DEFAULT_OPTS="
  --color=fg:#CDD6F4,bg:#1E1E2E,hl:#F5C2E7
  --color=fg+:#CDD6F4,bg+:#302D41,hl+:#F5C2E7
  --color=info:#FAB387,prompt:#F5C2E7,pointer:#F28FAD
  --color=marker:#A6E3A1,spinner:#89B4FA,header:#1E1E2E
  --border rounded
  --prompt '❯ '
  --pointer '▶'
  --marker '✓'
"

export FZF_CTRL_T_OPTS="--preview 'bat -n --color=always --line-range :500 {}'"
export FZF_ALT_C_OPTS="--preview 'eza --tree --color=always {} | head -200'"

_fzf_compgen_path() { fd --hidden --exclude .git . "$1" }
_fzf_compgen_dir()  { fd --type=d --hidden --exclude .git . "$1" }

_fzf_comprun() {
  local command=$1; shift
  case "$command" in
    cd)           fzf --preview 'eza --tree --color=always {} | head -200' "$@" ;;
    export|unset) fzf --preview "eval 'echo \${}'" "$@" ;;
    ssh)          fzf --preview 'dig {}' "$@" ;;
    *)            fzf --preview 'bat -n --color=always --line-range :500 {}' "$@" ;;
  esac
}

# --- Bat ---
export BAT_THEME="Catppuccin Macchiato"

# --- TheFuck ---
eval "$(thefuck --alias)"
eval "$(thefuck --alias fk)"

# -----------------------------------------------------------------------------
# 7. Navigation Tools
# -----------------------------------------------------------------------------
eval "$(zoxide init zsh)"
alias cd="z"

# -----------------------------------------------------------------------------
# 8. Custom Aliases and Functions
# -----------------------------------------------------------------------------

# --- Zsh Management ---
alias reload-zsh="source ~/.zshrc"
alias edit-zsh="nvim ~/.zshrc"

# --- Editors ---
alias vim="nvim"
alias vi="nvim"

# --- File Listing ---
alias ls="eza --color=always --long --git --no-filesize --icons=always --no-time --no-user --no-permissions"
alias ll="eza --color=always --long --git --icons=always"
alias la="eza --color=always --long --git --icons=always --all"
alias lt="eza --color=always --tree --icons=always --level=2"

# --- Navigation ---
alias ..="cd .."
alias ...="cd ../.."
alias ....="cd ../../.."

# --- Git Shortcuts ---
alias g="git"
alias gs="git status"
alias ga="git add"
alias gc="git commit -m"
alias gp="git push"
alias gl="git log --oneline --graph --decorate"

# --- Utilities ---
alias cat="bat"
alias grep="grep --color=auto"
alias df="df -h"
alias du="du -h"

# --- Pomodoro ---
alias work="timer 60m && terminal-notifier -message 'Pomodoro' -title 'Work Timer is up! Take a Break 😊' -appIcon '~/Pictures/tomato.png' -sound Crystal"
alias rest="timer 10m && terminal-notifier -message 'Pomodoro' -title 'Break is over! Get back to work 😬' -appIcon '~/Pictures/tomato.png' -sound Crystal"

# --- Functions ---

# Make dir and cd into it
mkcd() { mkdir -p "$1" && cd "$1" }

# Quick look at PATH
path() { echo "$PATH" | tr ':' '\n' | nl }

# Extract any archive
extract() {
  case "$1" in
    *.tar.bz2) tar xjf "$1"   ;;
    *.tar.gz)  tar xzf "$1"   ;;
    *.tar.xz)  tar xJf "$1"   ;;
    *.zip)     unzip "$1"     ;;
    *.7z)      7z x "$1"      ;;
    *.rar)     unrar x "$1"   ;;
    *)         echo "Unknown archive format: $1" ;;
  esac
}

# -----------------------------------------------------------------------------
# 9. Terminal Integration
# -----------------------------------------------------------------------------

# Ghostty / iTerm2 shell integration (load whichever is present)
[[ "$TERM_PROGRAM" == "iTerm.app" ]] && \
  [ -e "$HOME/.iterm2_shell_integration.zsh" ] && \
  source "$HOME/.iterm2_shell_integration.zsh"
