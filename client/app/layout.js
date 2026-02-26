import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Whisk & Whip | Home Baked Happiness",
  description: "Delicious custom cakes, cupcakes, and cookies delivered in Membly, Ruiru.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {/* Global Header */}
        {children}

        {/* Global Footer */}
        <footer className="bg-brand-dark text-brand-canvas py-12 mt-12">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* Brand Section */}
            <div>
              <h2 className="text-2xl font-bold tracking-widest uppercase mb-4 text-brand-pink">
                Whisk & Whip
              </h2>
              <p className="text-brand-canvas/70 text-sm">
                Home baked happiness, delivered right to your door. Made with love, from scratch.
              </p>
            </div>

            {/* Location & Hours */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-brand-purple">Visit Us</h3>
              <p className="text-brand-canvas/80 text-sm mb-2">📍 Membly, Ruiru</p>
              <p className="text-brand-canvas/80 text-sm">🕒 Open Daily: 8:00 AM - 5:00 PM</p>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-brand-purple">Order Now</h3>
              <p className="text-brand-canvas/80 text-sm mb-4">
                We accept orders via WhatsApp!
              </p>
              <a 
                href="https://wa.me/254700478487" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border border-brand-pink text-brand-pink px-6 py-2 rounded-full hover:bg-brand-pink hover:text-brand-dark transition duration-300 text-sm font-semibold"
              >
                Chat on WhatsApp
              </a>
            </div>

          </div>
          
          <div className="text-center text-brand-canvas/40 text-xs mt-12 border-t border-brand-canvas/10 pt-6">
            © {new Date().getFullYear()} Whisk & Whip. All rights reserved. Built by Grace.
          </div>
        </footer>

      </body>
    </html>
  );
}