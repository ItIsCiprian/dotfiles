local wezterm = require("wezterm")

local config = wezterm.config_builder()

-- Basic configuration
config.color_scheme = "Catppuccin Macchiato"
config.font = wezterm.font("MesloLGS Nerd Font")
config.font_size = 12
config.enable_tab_bar = true
config.window_decorations = "TITLE | RESIZE"
config.window_background_opacity = 1.0
config.macos_window_background_blur = 25
config.window_close_confirmation = "AlwaysPrompt"
config.scrollback_lines = 3000
config.default_workspace = "main"
config.inactive_pane_hsb = {
	saturation = 0.24,
	brightness = 0.5,
}

-- No custom keybindings, let tmux handle everything
config.keys = {}

return config
