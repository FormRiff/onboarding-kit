import { OnboardingProvider, useOnboarding } from '@formriff/onboarding-react';
import type { OnboardingOptions } from '@formriff/onboarding';
import '@formriff/onboarding/styles.css';

const options: OnboardingOptions = {
  tours: [
    {
      id: 'welcome',
      steps: [
        {
          id: 'workspace',
          target: '[data-onboarding="workspace"]',
          title: 'Welcome to your workspace',
          content: 'Everything you need starts here.',
        },
        {
          id: 'create',
          target: '[data-onboarding="create"]',
          title: 'Make something new',
          content: 'Create your first project with this button.',
        },
      ],
    },
  ],
};

function Dashboard() {
  const { kit } = useOnboarding();

  return (
    <section aria-label="Project workspace">
      <h2 data-onboarding="workspace">Your workspace</h2>
      <button data-onboarding="create">Create project</button>
      <button onClick={() => void kit.start('welcome')}>Show me around</button>
    </section>
  );
}

export default function App() {
  return (
    <OnboardingProvider options={options}>
      <Dashboard />
    </OnboardingProvider>
  );
}
