import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import PageTransition from "@/components/ui/PageTransition";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <a
        href="#main"
        className="sr-only-focusable fixed left-4 top-4 z-[100] rounded-lg bg-cyan px-4 py-2 font-semibold text-white"
      >
        Skip to content
      </a>
      <PageTransition>
        {children}
      </PageTransition>
    </NextIntlClientProvider>
  );
}
