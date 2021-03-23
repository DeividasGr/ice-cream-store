import { render, screen } from '@testing-library/react';
import Options from '../Options';

it('displays images for each scoop option from server', async () => {
  render(<Options optionType="scoops" />);

  //find images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((el) => el.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

it('displays images for each topping option from server', async () => {
  //Mock service worker will return three toppings from server
  render(<Options optionType="toppings" />);

  // find images, expect 3 images based on what msw returs
  //when action is async ALWAYS use find and async/await
  const toppingImages = await screen.findAllByRole('img', {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  //check theactual alt text for the images
  const altText = toppingImages.map((el) => el.alt);
  expect(altText).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping',
  ]);
});
