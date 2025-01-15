export const metadata = {
   title: "App Router",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="pt">
         <body>{children}</body>
      </html>
   );
}
