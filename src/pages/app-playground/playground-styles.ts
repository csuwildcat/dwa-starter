import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/app-playground.ts
export const styles = css`
  main {
    margin-left: 25px;
  }

  sl-card h2 {
    margin-top: 0;
    margin-bottom: 0;
  }

  sl-button {
    margin-top: var(--sl-spacing-small);
    margin-inline-end: var(--sl-spacing-small);
  }

  sl-progress-bar {
    display: inline-block;
    width: 10em;
    vertical-align: -0.25em;
  }

  sl-details {
    margin-top: var(--sl-spacing-medium);
  }

  sl-textarea::part(textarea) {
    font-family: monospace;
    font-size: 0.8em;
  }

  sl-badge {
    margin-inline: var(--sl-spacing-3x-small);
  }

  sl-badge::part(base) {
    color: var(--sl-color-primary-600);
    background-color: inherit;
    border-color: var(--sl-color-primary-600);
  }
`;
