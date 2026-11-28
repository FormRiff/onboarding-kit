import { defineComponent, h, onBeforeUnmount, onMounted, ref } from 'vue';
import type { Root } from 'react-dom/client';

export default defineComponent({
  name: 'ReactTour',
  setup() {
    const host = ref<HTMLElement | null>(null);
    const status = ref('Loading the React example…');
    let root: Root | undefined;

    onMounted(async () => {
      try {
        const [{ createRoot }, { createElement }, { default: App }] = await Promise.all([
          import('react-dom/client'),
          import('react'),
          import('./ReactTourExample'),
        ]);
        if (!host.value) return;
        root = createRoot(host.value);
        root.render(createElement(App));
        status.value = '';
      } catch {
        status.value = 'The React example couldn’t load. Reload this page to try again.';
      }
    });

    onBeforeUnmount(() => root?.unmount());

    return () =>
      h('section', { class: 'react-tour', 'aria-label': 'Live React tour' }, [
        h('header', 'React example · App.tsx'),
        h('div', { ref: host, class: 'react-tour-app' }),
        status.value ? h('p', { role: 'status' }, status.value) : null,
      ]);
  },
});
