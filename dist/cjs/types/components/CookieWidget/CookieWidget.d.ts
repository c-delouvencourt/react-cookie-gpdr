/// <reference types="react" />
import "./CookieWidget.css";
export interface CookieWidgetProps {
    location?: "left" | "right";
    color: string;
    policyLink: string;
    title?: string;
    subtitle?: string;
    text?: string;
    policyLinkText?: string;
    rejectButtonText?: string;
    acceptButtonText?: string;
    cookieSecurity?: boolean;
    hideOnScrollDown?: boolean;
    onAccept: () => void;
    onReject: () => void;
}
export declare const getCookieConsentValue: () => string | undefined;
export declare const resetCookieConsentValue: (name?: string) => void;
declare const CookieWidget: (props: CookieWidgetProps) => JSX.Element | null;
export default CookieWidget;
