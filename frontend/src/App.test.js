import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Podaj numer pozycji/i);
  expect(linkElement).toBeInTheDocument();
});
