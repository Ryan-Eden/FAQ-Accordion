import data from "../data";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  const accordionItems = data.map((item) => (
    <AccordionItem key={item.Id} itemData={item} />
  ));
  return (
    <main className="accordion">
      <div className="logo-container">
        <img src="../src/assets/images/icon-star.svg" className="logo" />
        <h2>FAQs</h2>
      </div>
      {accordionItems}
    </main>
  );
}
