class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  async render() {
    const responseHtml = await fetch(
      new URL("./footer.component.html", import.meta.url)
    );
    const responseCss = await fetch(
      new URL("./footer.component.css", import.meta.url)
    );

    const html = await responseHtml.text();
    const css = await responseCss.text();

    this.shadowRoot.innerHTML = `
<style>${css}</style>
${html}
`;
  }
}

customElements.define("footer-component", FooterComponent);
