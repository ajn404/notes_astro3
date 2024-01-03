// CustomTextWrapper.tsx
import React, { useEffect } from "react";
import Text from "@components/react/UI/Text.tsx";
import { createRoot } from "react-dom/client";
const CustomTextWrapper: React.FC = () => {
  useEffect(() => {
    if (!document.getElementById("custom-text-container")) return;
    const root = createRoot(document.getElementById("custom-text-container"));
    class MyWebComponent extends HTMLElement {
      constructor() {
        super();
        //..
      }
      connectedCallback() {
        const component = (
          <Text>
            <p>{this.innerHTML}</p>
          </Text>
        );
        root.render(component);
      }
    }
    customElements.define("custom-text", MyWebComponent);

    return () => {
      root.unmount();
    };
  }, []);

  return <div></div>;
};

export default CustomTextWrapper;
