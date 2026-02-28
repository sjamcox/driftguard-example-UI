// Color tokens based on Tailwind color palette used in the app
export const colors = {
  primary: {
    main: 'var(--color-primary)',
    hover: 'var(--color-primary-hover)',
    dark: 'var(--color-primary-dark)',
  },
  accent: {
    main: 'var(--color-accent)',
  },
  text: {
    primary: 'var(--color-text)',
    secondary: 'var(--color-text-secondary)',
    tertiary: 'var(--color-text-muted)',
  },
  background: {
    primary: 'var(--color-bg)',
    secondary: 'var(--color-bg-secondary)',
  },
}

// Spacing scale in pixels
export const spacingScale = [4, 8, 12, 16, 24, 32, 48, 64]

// Combined design tokens
export const tokens = {
  colors,
  spacingScale,
}
