import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

it('initial conditions', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: 'I agree to Terms and Conditions',
  });
  expect(checkbox).not.toBeChecked();

  const button = screen.getByRole('button', { name: 'Confirm order' });
  expect(button).toBeDisabled();
});

it('when checkbox is checked enables button else button is disabled', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: 'I agree to Terms and Conditions',
  });
  const button = screen.getByRole('button', { name: 'Confirm order' });

  userEvent.click(checkbox);
  expect(button).toBeEnabled();

  userEvent.click(checkbox);
  expect(button).toBeDisabled();
});

it('popover responds to hover', async () => {
  render(<SummaryForm />);
  //popover starts out hidden
  const popoverNull = screen.queryByText(
    'No ice cream will actually be delivered'
  );
  expect(popoverNull).not.toBeInTheDocument();
  //popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText('Terms and Conditions');
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText('No ice cream will actually be delivered');
  expect(popover).toBeInTheDocument();
  //popover disappears when user move mouse out of checkbox label
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText('No ice cream will actually be delivered')
  );
});
