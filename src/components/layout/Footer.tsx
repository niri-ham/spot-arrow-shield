import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { getCompanyLogo } from "@/data/companyLogo";

export function Footer() {
  const logo = getCompanyLogo();
  return (
    <footer className="border-t border-border/60 bg-surface/40 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            {logo.image_url && (
              <img src={logo.image_url} alt={logo.alt} className="h-12 w-auto object-contain" />
            )}
            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              Modern security and networking for homes and businesses in Orlando, FL.
              Customizable video surveillance, access control, structured cabling, and
              business networking — designed, installed, and supported.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
                <a href="tel:+18633987761" className="hover:text-foreground transition-colors">
                  863-398-7761
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                <a href="mailto:contact@spotarrowllc.com" className="hover:text-foreground transition-colors break-all">
                  contact@spotarrowllc.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                <a href="mailto:vpatel7761@gmail.com" className="hover:text-foreground transition-colors break-all">
                  vpatel7761@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" /> Orlando, FL
              </li>
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
