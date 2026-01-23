import type { Metadata } from "next";
import { Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { WhatsAppFloatingButton } from "@/components/ui/whatsapp-button";
import { OfflineBanner } from "@/components/ui/offline-banner";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Fallback to system font if import fails or variable not found, but this is standard
const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-urdu",
});

export const metadata: Metadata = {
  title: "Qasim Milk Shop",
  description: "Premium milk and dairy delivery service in Lahore",
};

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  // Await params in newer Next.js versions
  const {locale} = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  const messages = await getMessages();
 
  return (
    <html lang={locale} dir={locale === 'ur' ? 'rtl' : 'ltr'}>
      <body
        className={`${inter.variable} ${notoNastaliqUrdu.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <OfflineBanner />
          <Suspense fallback={<LoadingScreen />}>
            {children}
          </Suspense>
          <WhatsAppFloatingButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
