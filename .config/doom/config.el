;;; $DOOMDIR/config.el -*- lexical-binding: t; -*-
;; This is your private Doom Emacs configuration file.
;; You do not need to run 'doom sync' after modifying this file.

;;------------------------------------------------------------------------------
;; User Information
;;------------------------------------------------------------------------------
;; Uncomment and modify to set user information
;; (setq user-full-name "John Doe"
;;       user-mail-address "john@doe.com")

;;------------------------------------------------------------------------------
;; Font Configuration
;;------------------------------------------------------------------------------
;; Uncomment and modify to set your desired fonts
(setq doom-font (font-spec :family "Fira Code" :size 12 :weight 'semi-light)
      doom-variable-pitch-font (font-spec :family "Fira Sans" :size 13))

;;------------------------------------------------------------------------------
;; Theme Configuration
;;------------------------------------------------------------------------------
;; Load the fallback theme first
(setq doom-theme 'doom-one)

;; Use catppuccin theme
(use-package! catppuccin
  :config
  (setq catppuccin-flavor 'macchiato) ;; Set flavor
  (load-theme 'catppuccin t)) ;; Load theme

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
;; Add other packages below using `use-package!` if necessary
