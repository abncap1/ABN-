import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Portal Access',
};

export default function ClientLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
