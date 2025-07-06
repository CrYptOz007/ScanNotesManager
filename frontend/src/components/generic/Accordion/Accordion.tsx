import React, { createContext, useContext, useState } from 'react';

interface AccordionContextType {
    isOpen: boolean;
    toggle: () => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

export interface IAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    defaultOpen?: boolean;
}

export const Accordion = ({ defaultOpen = false, ...props }: IAccordionProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    
    const toggle = () => setIsOpen(!isOpen);

    return (
        <AccordionContext.Provider value={{ isOpen, toggle }}>
            <div {...props} className="border border-gray-200 rounded-lg w-full grow">
                {props.children}
            </div>
        </AccordionContext.Provider>
    );
};

export const AccordionTitle = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error('AccordionTitle must be used within Accordion');
    
    return (
        <div 
            {...props}
            className="p-4 cursor-pointer bg-white hover:bg-gray-50 flex justify-between w-full"
            onClick={context.toggle}
        >
            <span>{children}</span>
            <span className={`transition-transform duration-200 ${context.isOpen ? 'rotate-180' : ''}`}>
                ▼
            </span>
        </div>
    );
};

export const AccordionContent = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error('AccordionContent must be used within Accordion');
    
    if (!context.isOpen) return null;
    
    return (
        <div {...props} className="p-4 border-t bg-white border-gray-200 w-full">
            {children}
        </div>
    );
};