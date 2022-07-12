/// <reference types="react" />
interface CookieWidgetProps {
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
declare const CookieWidget: (props: CookieWidgetProps) => JSX.Element | null;

export { CookieWidget };
