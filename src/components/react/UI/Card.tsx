import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";
import Text from "@components/react/UI/Text";
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
  let image;

  let src = `https://picsum.photos/564/846?random=${Math.floor(
    Math.random() * 20
  )}.webp`;

  let [backgroundImageStyle, setStyle] = useState({
    backgroundImage: `radial-gradient(ellipse at top, rgb(${Math.floor(
      Math.random() * 155
    )},${Math.floor(Math.random() * 355) - 100},${
      Math.floor(Math.random() * 255) % 250
    }), transparent),
            radial-gradient(ellipse at bottom, #4d9f0c, transparent)`,
  });

  useEffect(() => {
    image = new Image();
    image.src = src;
    image.onload = () => {
      if (isVisible)
        setStyle({
          backgroundImage: `url(${image.src})`,
        });
    };
  }, [isVisible]);

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg card__heading pt-4 font-medium",
  };

  //数字是图片像素的最大值，可以做成可配置项，但是。。。

  return (
    <a className="card" href={href} ref={ref}>
      <div className="card__background" style={backgroundImageStyle}></div>
      <div className="card__content pt-4">
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}

        <Datetime className="pt-4" datetime={pubDatetime} />
        {modDatetime && <Datetime className="pt-4" datetime={modDatetime} />}
        <Text>
          <h3>{description}</h3>
        </Text>
      </div>
    </a>
  );
}
