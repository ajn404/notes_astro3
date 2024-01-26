import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@shadcn/ui/card";

import {
  forwardRef,
  type AnchorHTMLAttributes,
  type HTMLAttributeAnchorTarget,
} from "react";

export default forwardRef<
  HTMLAnchorElement,
  React.HTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <Card>
    <CardHeader>
      <CardTitle>{props.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <slot name="des" />
    </CardContent>
    <CardFooter>
      <a
        href={props.title ? "#" : props.title}
        className={`group inline-block ${className}`}
        aria-label={props.title}
        title={props.title}
      >
        跳转
      </a>
    </CardFooter>
  </Card>
));
