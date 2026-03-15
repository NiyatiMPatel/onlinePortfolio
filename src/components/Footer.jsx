import { socialMedia, year } from "../data/data";
import { Link } from "react-router";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-semibold gradient-text code-font">{"<NP />"}</p>
          <p className="text-muted-foreground text-sm">
            Niyati Patel — Frontend Developer
          </p>
        </div>

        <div className="flex gap-4">
          {socialMedia.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-muted-foreground text-sm">
          © {year} Niyati Patel. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
