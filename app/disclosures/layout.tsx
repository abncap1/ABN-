import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclosures',
};

export default function DisclosuresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
