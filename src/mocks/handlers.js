import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:5000/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate', imagePath: '/images/chocolate.png' },
        { name: 'Vqanilla', imagePath: '/images/vanilla.png' },
      ])
    );
  }),
];
