import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";
import Text from "@components/react/UI/Text.tsx";
import { useEffect, useRef, useState } from "react";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, upDateTime } =
    frontmatter;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (!entries || entries.length === 0) return;
      setIsVisible(entries[0].isIntersecting);
    });
    obs.observe(ref.current!);
  }, []);

  const image = new Image();
  image.src = `https://picsum.photos/282/423?random=${Math.floor(
    Math.random() * 20
  )}.webp`;
  const backgroundImageStyle = isVisible
    ? {
        backgroundImage: `url(${image.src})`,
      }
    : {};

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  //数字是图片像素的最大值，可以做成可配置项，但是。。。

  return (
    <a className="card" href={href} ref={ref}>
      <div className="card__background" style={backgroundImageStyle}></div>
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
