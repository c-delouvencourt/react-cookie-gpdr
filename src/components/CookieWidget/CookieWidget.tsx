import React, {useEffect} from "react";
import Cookies from "js-cookie";
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

const cookieConsentName = "cookie_gpdr_consent";

export const getCookieConsentValue = () => {
    const cookieValue = Cookies.get(cookieConsentName);

    if (cookieValue === undefined) {
        return Cookies.get(cookieConsentName);
    }

    return cookieValue;
};

export const resetCookieConsentValue = (name = cookieConsentName) => {
    Cookies.remove(name);
};

const CookieWidget = (props: CookieWidgetProps) => {

    const [isVisible, setIsVisible] = React.useState(false);

    const _handleScroll = (e: Event): void => {
        console.log(window.scrollY);
        if(isVisible && window.scrollY > 150) {
            _onAccept();
        }
    };

    useEffect(() => {
        if (getCookieValue() === undefined) {
            setIsVisible(true);

            if (props.hideOnScrollDown) {
                console.log(window.scrollY);
                window.addEventListener("scroll", _handleScroll, { passive: true });
            }
        }

        return () => {
            window.removeEventListener("scroll", _handleScroll);
        }
    }, []);

    const setCookie = (cookieValue: string) => {
        let { cookieSecurity } = props;

        if (cookieSecurity === undefined) {
            cookieSecurity = location ? location.protocol === "https:" : true;
        }

        Cookies.set(cookieConsentName, cookieValue, { expires: 365, sameSite: 'lax', secure: cookieSecurity });
    }

    const getCookieValue = () => {
        return getCookieConsentValue();
    }

    const _onAccept = () => {
        setCookie("accepted");
        props.onAccept();
        setIsVisible(false);
    }

    const _onDecline = () => {
        setCookie("declined");
        props.onReject();
        setIsVisible(false);
    }

    if(!isVisible) return null;

    return (
        <div className={"cookie_widget_container " + (props.location === 'right' ? "is-right" : "is-left")}>
            <div className="cookie_widget_shape_1" style={{background: props.color}}></div>
            <div className="cookie_widget_shape_2"></div>
            <div className="cookie_widget_heading">
                <p className="cookie_widget_title">{props.title ?? 'This website'}</p>
                <p className="cookie_widget_subtitle">{props.subtitle ?? 'use Cookies'}</p>
            </div>
            <div className="cookie_widget_content">
                <p className="cookie_widget_text">{props.text ?? 'We use cookies and similar methods to recognize visitors and remember their preferences. We also use them to measure ad campaign effectiveness, target ads and analyze site traffic. To learn more about these methods, including how to disable them, view our Cookie Policy.'}</p>
                {props.policyLink && <a className="cookie_widget_privacy_policy" href={props.policyLink} target="_blank" style={{color: props.color}}>{props.policyLinkText ?? 'Read the privacy policy'}</a>}
            </div>
            <div className="cookie_widget_footer">
                <button className="cookie_widget_button_reject" aria-label={props.rejectButtonText ?? "Reject All"} onClick={_onDecline}>{props.rejectButtonText ?? "Reject All"}</button>
                <button className="cookie_widget_button_accept" aria-label={props.acceptButtonText ?? "Accept All"} style={{color: props.color}} onClick={_onAccept}>{props.acceptButtonText ?? "Accept All"}</button>
            </div>
        </div>
    );
};

export default CookieWidget;
