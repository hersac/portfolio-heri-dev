class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  async render() {
    const htmlFile = await fetch(new URL('./navbar.component.html', import.meta.url));
    const cssFile = await fetch(new URL('./navbar.component.css', import.meta.url));

    const html = await htmlFile.text();
    const css = await cssFile.text();

    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      ${html}
    `;
  }
}

customElements.define('navbar-component', NavbarComponent);
