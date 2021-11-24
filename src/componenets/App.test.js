import App from './App';
import { shallow } from 'enzyme';

test('renders the component', () => {
  const component = shallow(<App />);  
  expect(component).toMatchSnapshot();
});