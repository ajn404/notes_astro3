import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";
import Text from "@components/react/UI/Text.tsx";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, upDateTime } =
    frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <a className="card" href={href}>
      <div
        className="card__background"
        style={{
          backgroundImage: `url(https://picsum.photos/${Math.floor(
            Math.random() * 800
          )})`,
        }}
      ></div>
      <div className="card__content pt-4">
        {secHeading ? (
          <h2 className="card__heading pt-4" {...headerProps}>
            {title}
          </h2>
        ) : (
          <h3 className="card__heading pt-4" {...headerProps}>
            {title}
          </h3>
        )}

        <Datetime className="pt-4" datetime={pubDatetime} />
        {upDateTime && <Datetime className="pt-4" datetime={upDateTime} />}
        <Text>
          <h3>{description}</h3>
        </Text>
      </div>
    </a>
  );
}
