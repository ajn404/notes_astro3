import { useEffect } from "react";
import { annotate } from "rough-notation";
// Or using unpkg
// import { annotate } from 'https://unpkg.com/rough-notation?module';

export default () => {
  useEffect(() => {
    const e: HTMLElement = document.querySelector("#myElement");
    const annotation = annotate(e, { type: "underline" });
    annotation.show();
  });
  return (
    <>
      <div id="myElement">添加annotation</div>
    </>
  );
};
