import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import MainNav from '../components/layout/MainNav/MainNav';

test('Render MainNav component without problems', async () => {
  render(<MainNav />);
});

test('Check that logo image is render', async () => {
  const mainNav = render(<MainNav />);
  const logo = await mainNav.findByTestId("logo");
  expect(logo.src).toContain('http://localhost/logo.png');
});