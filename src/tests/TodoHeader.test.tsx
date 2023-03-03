import { render, screen } from '@testing-library/react';
import { TodoHeader } from '../components/TodoHeader';
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<TodoHeader />);
  const linkElement = screen.getByText(/todos/i);
  expect(linkElement).toBeInTheDocument();
});
// test