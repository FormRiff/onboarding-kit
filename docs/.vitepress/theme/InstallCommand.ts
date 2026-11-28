import { defineComponent, h, ref } from 'vue';

const command = 'pnpm add @formriff/onboarding';

export default defineComponent({
  name: 'InstallCommand',
  setup() {
    const status = ref('');

    async function copy() {
      try {
        await navigator.clipboard.writeText(command);
        status.value = 'Copied';
      } catch {
        status.value = 'Select the command to copy it';
      }
    }

    return () =>
      h('div', { class: 'docs-install' }, [
        h('div', { class: 'docs-install-command' }, [
          h('span', { 'aria-hidden': 'true' }, '$'),
          h('code', command),
          h(
            'button',
            { type: 'button', onClick: copy, 'aria-label': 'Copy install command' },
            'Copy',
          ),
        ]),
        h('span', { role: 'status', class: 'docs-install-status' }, status.value),
      ]);
  },
});
