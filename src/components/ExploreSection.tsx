import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarDays,
  HelpCircle,
  Heart,
  Images,
  Leaf,
  MessageCircle,
  ShoppingBasket,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import { EXPLORE, type ExploreIcon } from "../data/site";
import SectionHead from "./SectionHead";

const ICONS: Record<ExploreIcon, LucideIcon> = {
  sprout: Sprout,
  basket: ShoppingBasket,
  leaf: Leaf,
  images: Images,
  calendar: CalendarDays,
  heart: Heart,
  help: HelpCircle,
  chat: MessageCircle,
};

/* Home page site map — every page of the farm in one grid. */
export default function ExploreSection() {
  return (
    <section id="explore" className="section section-explore" aria-labelledby="explore-title">
      <div className="wrap">
        <SectionHead
          id="explore-title"
          eyebrow={EXPLORE.eyebrow}
          title={EXPLORE.title}
          text={EXPLORE.text}
        />

        <div className="explore-grid">
          {EXPLORE.cards.map((card, i) => {
            const Icon = ICONS[card.icon];
            return (
              <Link
                key={card.path}
                to={card.path}
                className="explore-card reveal"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="explore-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <span className="explore-body">
                  <span className="explore-label">{card.label}</span>
                  <span className="explore-blurb">{card.blurb}</span>
                </span>
                <ArrowUpRight className="explore-arrow" size={17} aria-hidden="true" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
