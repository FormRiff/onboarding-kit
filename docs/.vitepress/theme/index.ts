import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import { h } from 'vue';
import FrameworkLinks from './FrameworkLinks';
import InstallCommand from './InstallCommand';
import ReactTour from './ReactTour';
import HeroPreview from './HeroPreview';
import LiveTour from './LiveTour';
import '@formriff/onboarding/styles.css';
import './style.css';
import './hero.css';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-actions-after': () => h(InstallCommand),
      'home-hero-image': () => h(HeroPreview),
    });
  },
  enhanceApp({ app }) {
    app.component('FrameworkLinks', FrameworkLinks);
    app.component('LiveTour', LiveTour);
    app.component('ReactTour', ReactTour);
  },
} satisfies Theme;
