import "./globals.scss";
import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import { Header, Footer, Container } from "@/components";

const inter = Cormorant({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Thats What She Baked",
  description: "Цей кекс точно буде смачним та красивим!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua">
      <body>
        <Header />
          <Container>
            {children}
          </Container>
        <Footer />
      </body>
    </html>
  );
}
