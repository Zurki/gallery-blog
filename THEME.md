# Gruvbox Theme

This blog now uses the Gruvbox color scheme with support for both light and dark modes.

## Features

- **Gruvbox Light Mode**: Warm, retro-inspired light theme with cream background
- **Gruvbox Dark Mode**: Comfortable dark theme with reduced eye strain
- **Theme Toggle**: Click the sun/moon icon in the header to switch themes
- **Persistent**: Your theme preference is saved in localStorage
- **System Preference**: Automatically detects your system's dark mode preference on first visit
- **No Flash**: Theme is applied before page render to prevent flash of unstyled content

## Color Palette

### Light Mode
- Background: `#fbf1c7` (cream)
- Foreground: `#282828` (dark gray)
- Accent: `#458588` (blue)
- Orange: `#d65d0e`
- Other colors: red, green, yellow, purple, aqua

### Dark Mode
- Background: `#282828` (dark gray)
- Foreground: `#fbf1c7` (cream)
- Accent: `#83a598` (light blue)
- Orange: `#fe8019`
- Other colors: red, green, yellow, purple, aqua (brightened)

## Implementation

The theme is implemented using CSS custom properties (variables) that change based on the `data-theme` attribute on the `<html>` element:

- `src/styles/global.css` - Contains all Gruvbox color definitions
- `src/components/ThemeToggle.astro` - Theme toggle button component
- `src/components/BaseHead.astro` - Initializes theme before page render
- All components updated to use CSS variables instead of hardcoded colors

## Customization

To customize colors, edit the CSS variables in `src/styles/global.css`:

```css
:root {
  /* Light mode colors */
  --bg0: #fbf1c7;
  --fg0: #282828;
  /* ... */
}

[data-theme="dark"] {
  /* Dark mode colors */
  --bg0: #282828;
  --fg0: #fbf1c7;
  /* ... */
}
```
