import { Link } from "@tanstack/react-router";
import { Radar, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-primary shadow-glow">
                <Radar className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-bold">Spot Arrow</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              Modern security and networking, built for peace of mind. Customizable video
              surveillance, access control, and business networking for homes and commercial
              spaces.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-primary" /> (555) 000-0000</li>
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-primary" /> hello@spotarrow.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" /> Local service area</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Spot Arrow. All rights reserved.</p>
          <p>Custom security & networking — designed, installed, and supported.</p>
        </div>
      </div>
    </footer>
  );
}
