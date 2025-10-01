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
type SizeOption = "small" | "medium" | "large";

/**
 * ThemeLayout defines the allowed orderings of themes in the ThemeSwitcher.
 * Only the specified permutations of ["light", "dark", "system"] are allowed.
 */
type ThemeLayout =
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
   * If not provided, the component can manage its own state.
   */
  theme?: string;

  /**
   * Callback function called when the theme changes.
   * Receives the new theme value as a string.
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
   * Gap (a unit equal to 0.25rem) between theme options.
   */
  gap?: number;

  /**
   * Optional layout specifying the order of theme options.
   * Must be one of the allowed ThemeLayout permutations.
   */
  layout?: ThemeLayout;
}
