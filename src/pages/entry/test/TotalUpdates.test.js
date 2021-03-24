import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/react';
import Options from '../Options';

it('update scoop subtotal when scoops change', async () => {
  render(<Options optionType="scoops" />);

  //make sure that total amount starts at $0.00
  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
  expect(scoopsSubtotal).toHaveTextContent('0.00');

  //update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
  userEvent.cleanup(vanillaInput);
  userEvent.type(vanillaInput, '1');
  expect(vanillaInput).toHaveTextContent('2.00');

  //update chocolate scoops to 2 and check the subtotal
  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocoalte',
  });
  userEvent.cleanup(chocolateInput);
  userEvent.type(chocolateInput, '2');
  expect(chocolateInput).toHaveTextContent('6.00');
});
