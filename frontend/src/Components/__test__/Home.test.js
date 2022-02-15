import {render, screen, cleanup} from '@testing-library/react';
import Home from '../Home';

import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);
describe('Test Product Card', () => {
    function productCard() {
        return render(
          <Router>
            <Home />
          </Router>
        )
      }
  
      it('should match with snapshot', () => {
        expect(productCard()).toMatchSnapshot();
       });
     it('should render Card correctly', () => {

          const pCard = screen.queryByTestId("product_card");
          expect(pCard).toMatchSnapshot();
          const pCardText = screen.queryByTestId("card-text");
          expect(pCardText).toMatchSnapshot();
         
      });
    });