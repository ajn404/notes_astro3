import{s as o,i as t}from"./lit-element.2ddd204b.js";import{x as n}from"./lit-html.da629c26.js";class e extends o{static styles=t`
    button {
      padding: 10px 20px;
      border: none;
      background-color: #007bff;
      color: #fff;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #0056b3;
    }
  `;render(){return n`
      <button @click=${this.handleClick}>
        <slot></slot>
      </button>
    `}handleClick(){console.log(this)}connectedCallback(){console.log(this),super.connectedCallback(),this.handleClick=this.handleClick.bind(this)}}customElements.define("my-button",e);export{e as MyButton};
