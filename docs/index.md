---
layout: home
hero:
  name: Onboarding Kit
  text: Your first tour in five minutes.
  tagline: In-app product tours for React, Next.js, Vue, Angular, and vanilla JavaScript. Highlight elements in your own UI and guide users step by step.
  actions:
    - theme: brand
      text: Pick your framework
      link: /getting-started/
    - theme: alt
      text: Try the live example
      link: '#try-it'
---

<div class="docs-home">
  <h2 id="choose-your-framework" tabindex="-1">Framework quickstarts</h2>
  <p class="section-description">Pick your stack to install the kit and build a working tour.</p>
  <FrameworkLinks />
  <p class="preview-note">Onboarding Kit v%ONBOARDING_VERSION% · APIs may change before 1.0.</p>
  <h2 id="try-it" tabindex="-1">Interactive playground</h2>
  <p class="section-description">Run a three-step tour, switch themes, and see how a click in your app advances a step.</p>
  <LiveTour />
</div>
