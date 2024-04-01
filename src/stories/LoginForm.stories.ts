import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

import LoginForm from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: "Example/LoginForm",
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {};

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Simulate interactions with the component
    await userEvent.type(
      canvas.getByTestId("input-email"),
      "email@provider.com",
    );

    await userEvent.type(
      canvas.getByTestId("input-password"),
      "a-random-password",
    );

    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to set up logging in the Actions panel
    await userEvent.click(canvas.getByTestId("button-submit"));

    // 👇 Assert DOM structure
    await expect(
      canvas.getByText(
        "Everything is perfect. Your account is ready and we should probably get you started!",
      ),
    ).toBeInTheDocument();
  },
};
