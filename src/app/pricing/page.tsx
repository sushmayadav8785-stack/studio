import Pricing from '@/components/landing/pricing';
import Comparison from '@/components/landing/comparison';

export default function PricingPage({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  const tab = searchParams?.tab;
  const defaultTab = typeof tab === 'string' ? tab : 'normal-mc';

  return (
    <>
      <Pricing defaultTab={defaultTab} />
      <Comparison />
    </>
  );
}
