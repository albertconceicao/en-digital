import { ReactNode } from 'react';

import { Container, Content } from './FindCourse.styles';
import { List } from './List';


export function FindCourse() {
  return (
    <Container>
      <Content className='container'>
        <section>
          <div>
            <div className='title'>
              <h1>O que você vai encontrar nesse curso intensivo</h1>
              <p>com professores que <strong>executam e respiram</strong> planejamentos de obras todos os dias.</p>
            </div>
            <List />
          </div>
          <img src="./mockup.svg" alt="" />
        </section>
      </Content>
    </Container>
  );
}
