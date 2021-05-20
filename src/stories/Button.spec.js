import { mount } from "@cypress/vue";
import { composeStories, h } from "../testing-vue";
import * as stories from "./Button.stories";

const { Primary, Secondary } = composeStories(stories);

describe("<Button />", () => {
  it("Primary", () => {
    mount(<Primary />);
  });

  it("Secondary", () => {
    mount(<Secondary />);
  });
});
