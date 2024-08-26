
;;; $DOOMDIR/config.el -*- lexical-binding: t; -*-
;; This is your private Doom Emacs configuration file.
;; You do not need to run 'doom sync' after modifying this file.

;;------------------------------------------------------------------------------
;; User Information
;;------------------------------------------------------------------------------

;; (setq user-full-name "John Doe"
;;       user-mail-address "john@doe.com")

;;------------------------------------------------------------------------------
;; Font Configuration
;;------------------------------------------------------------------------------

;; (setq doom-font (font-spec :family "Fira Code" :size 12 :weight 'semi-light)
;;       doom-variable-pitch-font (font-spec :family "Fira Sans" :size 13))

;;------------------------------------------------------------------------------
;; Theme Configuration
;;------------------------------------------------------------------------------
;; Load the desired theme
(setq doom-theme 'doom-one) ;; Fallback theme in case of issues

;; If you still want to use catppuccin-macchiato:
;; Ensure the theme package is installed and properly loaded
(use-package! catppuccin-theme
  :config
  (setq doom-theme 'catppuccin-macchiato) ;; Set the theme
  (setq catppuccin-flavor 'macchiato) ;; Select the flavor
  (catppuccin-reload)) ;; Reload the theme with the selected flavor

;;------------------------------------------------------------------------------
;; Line Numbers Configuration
;;------------------------------------------------------------------------------
(setq display-line-numbers-type t)

;;------------------------------------------------------------------------------
;; Org-mode Configuration
;;------------------------------------------------------------------------------
(setq org-directory "~/org/")

;;------------------------------------------------------------------------------
;; Package Configuration
;;------------------------------------------------------------------------------
