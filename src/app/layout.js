import './css/style.css';
import './css/custom.css';

export const metadata = {
  title: {
    absolute: '',
    default: 'Your AI Employee',
    template:
      '%s | Your AI Employee',
  },
  description: 'Your AI Employee',
  openGraph: {
    title: 'Your AI Employee',
    description:
      'Your AI Employee',
    images: ['/openGraphImage.jpeg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Laralink" />
      </head>
      <body data-menu-collapse="lg">{children}</body>
    </html>
  );
}
