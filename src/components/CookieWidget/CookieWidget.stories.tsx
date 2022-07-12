import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CookieWidget from "./CookieWidget";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactCookieGPDR/CookieWidget",
    component: CookieWidget,
} as ComponentMeta<typeof CookieWidget>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CookieWidget> = (args) => {
    return <CookieWidget {...args} />;
};

export const Example = Template.bind({});
Example.args = {
    location: "left",
    color: "#bb2030",
    policyLink: "https://example.org",
    title: "This website",
    subtitle: "uses cookies",
    text: "We use cookies and similar methods to recognize visitors and remember their preferences. We also use them to measure ad campaign effectiveness, target ads and analyze site traffic. To learn more about these methods, including how to disable them, view our Cookie Policy.",
    policyLinkText: "Read the privacy policy",
    cookieSecurity: true,
    hideOnScrollDown: true,
    onAccept: () => alert('Accepted'),
    onReject: () => alert('Rejected'),
};
