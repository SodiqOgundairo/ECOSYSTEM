import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

export function AccordionCustomAnimation() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} animate={CUSTOM_ANIMATION} className="">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-white hover:bg-gradient-to-r hover:from-accent hover:to-theme hover:text-light bg-none px-4"
        >
          How do I become a Mobile Money Agent?
        </AccordionHeader>
        <AccordionBody className="text-start text-accent font-bold text-base px-4 bg-white">
        To become a Mobile Money Agent register
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="text-white hover:bg-gradient-to-r hover:from-accent hover:to-theme hover:text-light bg-none px-4"
        >
          Can I get a loan to start Agency banking?
        </AccordionHeader>
        <AccordionBody className="text-start text-accent font-bold text-base px-4 bg-white">
        Yes, you can get loans from our lending patners but we always advise you to start with non-interest sources(personal savings, family support etc).
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="text-white hover:bg-gradient-to-r hover:from-accent hover:to-theme hover:text-light bg-none px-4"
        >
          How does a provider work with Ecosytem on agent onboarding and product roll-out?
        </AccordionHeader>
        <AccordionBody className="text-start text-accent font-bold text-base px-4 bg-white">
        Once you are licensed by Central Bank Of Nigeria or any of the regulatory bodies, we are open to business.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="text-white hover:bg-gradient-to-r hover:from-accent hover:to-theme hover:text-light bg-none px-4"
        >
          
How long is the training to become an agent?
        </AccordionHeader>
        <AccordionBody className="text-start text-accent font-bold text-base px-4 bg-white"> 
        A week or maximum of 2 weeks including practical session at a functioning location.
        </AccordionBody>
      </Accordion>
    </>
  );
}
