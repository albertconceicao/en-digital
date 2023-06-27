import { List } from '../FindCourse/List';
import {
  Container,
  SubContainer,
  Content,
  PaymentMethods
} from './Payment.styles';

export function Payment() {
  return (
    <Container>
      <SubContainer>
        <Content className="container">
          <div>
            <div className="content-icon">
              <img className="logo" src="./course-logo.svg" alt="" />

              <List isWhite />
            </div>
            <div className="glass">
              <p>
                <strong>
                  Tudo isso por apenas <br />
                </strong>{' '}
                <span>
                  12x <span className="title">24,70</span>
                  <br />
                  <span className="value">
                    ou <strong>R$247 à vista</strong>
                  </span>{' '}
                </span>
                <br />
                <span>
                  Pagamento <strong>100% seguro</strong> <br /> 7 dias de{' '}
                  <strong>garantia incondicional</strong>
                </span>
              </p>

              <a
                href="https://pay.hotmart.com/T81245432Y?sck=HOTMART_PRODUCT_PAGE&hotfeature=32&_gl=1%2a122pa0x%2a_ga%2aMjQ0OTc4NzQ5LjE2NzM5NjMyMjQ.%2a_ga_GQH2V1F11Q%2aMTY4Nzc4OTY2Mi43OS4xLjE2ODc3ODk3NTguNTkuMC4w&bid=1687789763943"
                className="standard"
                target="_blank"
                rel="noreferrer"
              >
                Garantir meu lugar
              </a>

              <PaymentMethods>
                <div>
                  <img src="./payment-methods/Mastercard.svg" alt="" />
                  <img src="./payment-methods/Visa.svg" alt="" />
                  <img src="./payment-methods/Elo.svg" alt="" />
                  <img src="./payment-methods/PayPal.svg" alt="" />
                  <img src="./payment-methods/Boleto.svg" alt="" />
                </div>
                <div>
                  <img src="./payment-methods/Hotmart.svg" alt="" />
                  <img src="./payment-methods/Pix.svg" alt="" />
                  <img src="./payment-methods/Caixa.svg" alt="" />
                  <img src="./payment-methods/TwoCards.svg" alt="" />
                </div>
              </PaymentMethods>
            </div>
          </div>
        </Content>
      </SubContainer>
    </Container>
  );
}
