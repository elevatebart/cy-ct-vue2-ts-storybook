export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  () =>
    `<div style="border:4px solid green;padding:10px;">
      <story />
    </div>`,
];
