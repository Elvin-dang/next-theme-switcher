/**
 * ThemeOption represents the allowed theme values.
 * - "light"  → Light mode
 * - "dark"   → Dark mode
 * - "system" → Follow the system/browser theme
 */
export type ThemeOption = "light" | "dark" | "system";

/**
 * SizeOption represents the size variations for the ThemeSwitcher component.
 * - "small"  → Small icon/buttons
 * - "medium" → Medium icon/buttons
 * - "large"  → Large icon/buttons
 */
export type SizeOption = "small" | "medium" | "large";

/**
 * GapOption represents spacing units between theme options.
 * 1 unit = 0.25rem
 */
export type GapOption = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * ThemeLayout defines the allowed orderings of themes in the ThemeSwitcher.
 * Only the specified permutations of ["light", "dark", "system"] are allowed.
 */
export type ThemeLayout =
  | ["light", "system", "dark"]
  | ["light", "dark", "system"]
  | ["system", "light", "dark"]
  | ["system", "dark", "light"]
  | ["dark", "light", "system"]
  | ["dark", "system", "light"];

/**
 * ThemeSwitcherProps defines the props accepted by the ThemeSwitcher component.
 */
export interface ThemeSwitcherProps extends React.PropsWithChildren<unknown> {
  /**
   * Current theme value. Can be "light", "dark", or "system".
   */
  theme?: string;

  /**
   * Callback function called when the theme changes.
   * Receives the new theme value as a ThemeOption.
   */
  onThemeChange?: (theme: string) => void;

  /**
   * Optional custom icons for each theme.
   * Each icon should be a React component rendering an SVG element.
   */
  icons?: {
    light?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    dark?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    system?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };

  /**
   * Size of the theme switcher buttons/icons.
   */
  size?: SizeOption;

  /**
   * Scale multiplier for the icons.
   * Useful for adjusting icon size relative to default size.
   */
  scale?: number;

  /**
   * Border radius of the theme switcher options (in px).
   */
  borderRadius?: number;

  /**
   * Gap (a unit equal to 0.25rem) between theme options.
   * Only integer values from 0 to 10 are allowed.
   */
  gap?: GapOption;

  /**
   * Optional layout specifying the order of theme options.
   * Must be one of the allowed ThemeLayout permutations.
   */
  layout?: ThemeLayout;

  /**
   * Optional additional CSS class names for the ThemeSwitcher root element.
   *
   * - Accepts any valid Tailwind classes, utility classes, or custom CSS class names.
   * - Useful when you need to adjust layout, spacing, or override base styles.
   * - Merges with the component’s internal styles, so your classes take effect
   *   according to the normal CSS cascade order.
   *
   * Example:
   * ```tsx
   * <ThemeSwitcher className="mt-4 border border-gray-200" />
   * ```
   */
  className?: string;
}
