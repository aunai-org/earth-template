import type { SpaceOptions } from "./space";

/**
 * Everything about this app that is not data or code: its name, what the three kinds are called,
 * the wording on screen, and how much of the atmosphere to draw. Start here for a new app.
 *
 * Text in `about.rows[].html` is inserted as HTML and is yours, not user data, so links are fine there.
 * Colours live in src/theme.ts (the 3D scene) and the top of src/style.css (the page).
 */

type KindName = { one: string; many: string };

export const config = {
  /** Prefix for browser storage keys (saved data, sound on/off). Change it per app so two apps on one domain don't clash. */
  id: "earth-template",
  name: "Earth Template",
  tagline: "A dark globe for your data",
  /** The <meta name="description"> and the globe's accessible label. */
  description: "A dark, interactive Earth with a space backdrop. Bring your own data.",

  /**
   * What the three kinds are called. hub: pinned on the map, and its items fan out around it.
   * item: belongs to a hub. node: pinned elsewhere, linked to items by arcs.
   */
  kinds: {
    hub: { one: "Studio", many: "Studios" },
    item: { one: "Release", many: "Releases" },
    node: { one: "Festival", many: "Festivals" },
  } satisfies Record<"hub" | "item" | "node", KindName>,

  /**
   * Dates on items drive the "recent" window, the Latest list, and the pulse on fresh hubs.
   * Set `enabled: false` if your items have no dates; those three parts are hidden.
   */
  dates: { enabled: true, recentDays: 15, latestDays: 7 },

  /** How many items fan out around a selected hub, and how many rows the Latest list shows. */
  fanLimit: 12,
  latestLimit: 50,

  /** An open tab quietly checks for newer data this often. */
  refreshMinutes: 30,

  /** The space backdrop. Each part can be turned down or off. See SpaceOptions in src/space.ts. */
  space: { meteors: 2, asteroids: 3, satellites: 6, milkyWay: true } satisfies SpaceOptions,

  about: {
    blurb:
      "A dark, interactive Earth with a space backdrop, sound, and cards. The data shown here is a sample: fictional studios, releases, and festivals.",
    rows: [
      { label: "Data", html: "Sample data generated in <code>data/sample.ts</code>. Replace it with your own." },
      { label: "Map", html: "Natural Earth country outlines, via world-atlas." },
      {
        label: "License",
        html: `© 2026 earth-template. Code is <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noopener noreferrer">AGPL-3.0</a>: free to use and change; modified versions you run for others must share their source. No warranty. <a href="/third-party-notices.txt" target="_blank" rel="noopener noreferrer">Third-party notices</a>.`,
      },
    ],
    disclaimer: "Everything in the sample data is made up, and its places are real cities used only as map positions.",
  },

  /** The credit in the footer. Leave `href` empty for plain text. */
  credit: { label: "Data", text: "sample", href: "" },

  /** Status and notice wording. */
  copy: {
    loading: "Loading…",
    stamp: (time: string) => `Data from ${time}`,
    refreshTitle: "Check for newer data",
    upToDate: "Up to date",
    offline: (time: string) => `Offline · showing saved data${time ? ` from ${time}` : ""}.`,
    failed: "Data request failed.",
    noWebGL: "WebGL is unavailable.",
  },
};
