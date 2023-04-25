import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/app-home.ts
export const styles = css`
  @media(min-width: 1000px) {
    sl-card {
      width: 70vw;
    }
  }

  main {
    margin-top: 80px;
    margin-bottom: 40px;
  }

  a {
    color: var(--sl-color-primary-600);
  }

  sl-card {
    margin: var(--sl-spacing-large);
    margin-top: 0;
  }
`;
