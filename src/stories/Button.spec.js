import { mount } from "@cypress/vue";
import { composeStories } from "../testing-vue";
import * as stories from "./Button.stories";

const { Primary } = composeStories(stories);

describe("<Button />", () => {
  it("playground", () => {
    mount(Primary());
  });
});
