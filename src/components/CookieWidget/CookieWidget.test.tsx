import React from "react";
import { render } from "@testing-library/react";

import CookieWidget from "./CookieWidget";

describe("CookieWidget", () => {
    test("renders the CookieWidget component", () => {
        render(<CookieWidget location="right" color={"#bb2030"} policyLink={"https://example.org"} title={"This website"} subtitle={"uses cookies"} text={"We use cookies and similar methods to recognize visitors and remember their preferences. We also use them to measure ad campaign effectiveness, target ads and analyze site traffic."} policyLinkText={"Read the privacy policy"} cookieSecurity={true} hideOnScrollDown={true} onAccept={() => alert('accepted')} onReject={() => alert('refused')}/>);
    });
});
