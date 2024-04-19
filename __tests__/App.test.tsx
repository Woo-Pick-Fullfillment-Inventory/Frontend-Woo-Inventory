import * as React from 'react';
import { create } from 'react-test-renderer';
import App from '../src/App';
import LoginScreen from 'src/screens/Login';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    // Mock other navigation methods your component uses
  }),
}));
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn(),
}));

describe('Testing App', () => {
  it('renders correctly', () => {
    const tree = create(<App />);
    expect(tree).toMatchSnapshot();
  });
});

test('renders correctlyyyyyyyyyyy', () => {
  const tree = create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
