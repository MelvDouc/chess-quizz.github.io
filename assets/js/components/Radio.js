import Elmt from "./Elmt.js";

export default class Radio {
  constructor(labelText, name, id) {
    this.labelText = labelText;
    this.name = name;
    this.id = id;

    const radioLi = new Elmt("li");

    const radio = new Elmt("input", {
      type: "radio",
      id: this.id,
      name: this.name
    });

    const label = new Elmt("label", {
      innerText: this.labelText
    });
    label.setAttribute("for", this.id);

    radioLi.append(radio, label);
    return radioLi;
  }
}