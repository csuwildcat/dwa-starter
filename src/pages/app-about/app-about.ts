import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './about-styles';

import { styles as sharedStyles } from '../../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('app-about')
export class AppAbout extends LitElement {
  static get styles() {
    return [
      sharedStyles,
      styles,
    ];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>

      <main>
        <h2>About Page</h2>

        <sl-card>
          <h2>What's a DWA?</h2>

          <p>A DWA is a Decentralized Web App, which is very similar to a PWA except that it uses Web5 APIs and concepts to store data.</p>

          <p>Check out <a href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files">these docs</a> to learn more about the advanced features that you can use in your DWA.</p>
        </sl-card>

        <sl-card>
          <h2>What's Web5?</h2>

          <p>Web5 is a decentralized web platform that puts you in control of your data and identity.</p>

          <p>The web democratized the exchange of information, but it's missing a key layer: identity. We struggle to secure personal data with hundreds of accounts and passwords we can’t remember. On the web today, identity and personal data have become the property of third parties.</p>

          <p>Web5 brings <a href="https://developer.tbd.website/docs/web5/learn/decentralized-identifiers">decentralized identity</a> and <a href="https://developer.tbd.website/docs/web5/learn/decentralized-web-nodes">data storage</a> to your applications. It lets devs focus on creating delightful user experiences, while returning ownership of data and identity to individuals.</p>

          <sl-button href="${(import.meta as any).env.BASE_URL}playground" variant="primary">Navigate to Playground</sl-button>
        </sl-card>
      </main>
    `;
  }
}
