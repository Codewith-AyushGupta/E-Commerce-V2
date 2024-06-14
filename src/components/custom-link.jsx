import React from "react";
export default function ALink({ children, className, content, style, href, onClick }) {

    const preventDefault = (e) => {
        if (href === '#') {
            e.preventDefault();
        }

        if (onClick) {
            onClick();
        }
    }

    return (
        <a href={href} className={className} style={style} onClick={preventDefault}>
            {children}
        </a>
    )
}
