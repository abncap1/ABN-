import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investment Approach',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
