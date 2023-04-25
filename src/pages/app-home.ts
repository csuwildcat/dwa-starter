import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';

import { styles as sharedStyles } from '../styles/shared-styles';
import { web5 } from '../web5';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static get styles() {
    return [
      sharedStyles,
      css`
        #welcomeBar {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        sl-card::part(footer) {
          display: flex;
          justify-content: flex-end;
        }
      `,
    ];
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
    console.log('Start using web5', web5)
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'dwa-starter',
        text: 'Check out the dwa-starter!',
        url: 'https://github.com/TBD54566975/dwa-starter',
      });
    }
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p id="mainInfo">Welcome to the dwa-starter! Be sure to head back to <a href="https://pwabuilder.com">PWABuilder</a> when you are ready to ship this DWA to the Microsoft Store, Google Play and the Apple App Store!</p>

            ${'share' in navigator ? html`<sl-button slot="footer" variant="primary" @click="${this.share}">Share this Starter!</sl-button>` : null}
          </sl-card>

          <sl-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </li>

              <li>
                <a href="https://lit.dev">lit</a>
              </li>

              <li>
                <a href="https://shoelace.style/">Shoelace</a>
              </li>

              <li>
                <a href="https://github.com/thepassle/app-tools/blob/master/router/README.md">App Tools Router</a>
              </li>

              <li>
                <a href="https://developer.tbd.website/docs/web5/">Web5</a>
              </li>
            </ul>
          </sl-card>

          <sl-button href="${(import.meta as any).env.BASE_URL}about" variant="primary">Navigate to About</sl-button>
        </div>
      </main>
    `;
  }
}
