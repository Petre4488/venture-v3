import { Accordion } from "flowbite-react";

export default function AccordionComponent(props) {
  const accordionData = props.data; 
  return (
      <div className="accContainer w-full sm:w-2/5">
        <Accordion collapseAll>
        {accordionData.map((panel, index) => (
            <Accordion.Panel key={index}>
            <Accordion.Title>{panel.title1}</Accordion.Title>
            <Accordion.Content>{panel.content1}</Accordion.Content>
        </Accordion.Panel>
        ))}
      {accordionData.map((panel, index) => (
            <Accordion.Panel key={index}>
            <Accordion.Title>{panel.title2}</Accordion.Title>
            <Accordion.Content>{panel.content2}</Accordion.Content>
        </Accordion.Panel>
        ))}
    {accordionData.map((panel, index) => (
            <Accordion.Panel key={index}>
            <Accordion.Title>{panel.title3}</Accordion.Title>
            <Accordion.Content>{panel.content3}</Accordion.Content>
        </Accordion.Panel>
        ))}
       {accordionData.map((panel, index) => (
            <Accordion.Panel key={index}>
            <Accordion.Title>{panel.title4}</Accordion.Title>
            <Accordion.Content>{panel.content4}</Accordion.Content>
        </Accordion.Panel>
        ))}
        </Accordion>
    </div>
    
  );
}
