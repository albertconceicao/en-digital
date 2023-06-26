import { ReactNode, useState } from 'react';
import { Container, Content } from './AccordionItem.styles';

interface AccordionProps {
  title?: string;
  boldTitle?: string;
  children: ReactNode;
}
export function Accordion({ title, children, boldTitle }: AccordionProps) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <Container>
      <Content>
        <button onClick={toggle} type="button">
          <p>
            <span>
              {title}
              <strong> {boldTitle} </strong>
            </span>
            <span className="icon">{isShowing ? '-' : '+'}</span>
          </p>
          <div
            style={{ display: isShowing ? 'block' : 'none', padding: '5px' }}
          >
            {children}
          </div>
        </button>
      </Content>
    </Container>
  );
}
