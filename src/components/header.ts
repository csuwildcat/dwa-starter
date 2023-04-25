import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/button/button.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'DWA Starter';

  @property({ type: Boolean}) enableBack: boolean = false;

  static get styles() {
    return css`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--app-color-background);
        color: var(--app-color-foreground);
        height: 4em;
        padding-left: 16px;
        padding-top: 12px;

        position: fixed;
        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        height: env(titlebar-area-height, 50px);
        width: env(titlebar-area-width, 100%);
        z-index: 1;
        -webkit-app-region: drag;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 12em;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header>

        <div id="back-button-block">
          ${this.enableBack ? html`<sl-button href="${(import.meta as any).env.BASE_URL}">Back</sl-button>` : null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `;
  }
}
