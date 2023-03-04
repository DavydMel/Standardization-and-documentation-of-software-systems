import React, { useState, useEffect } from "react";
import "./Agreement.css";

export function Agreement() {
    const [showNotification, setShowNotification] = useState(true);

    useEffect(() => {
        const cookieValue = getCookie("cookieNotification");

        if (cookieValue === "true") {
            setShowNotification(false);
        }
    }, []);

    const handleClick = () => {
        setShowNotification(false);
        setCookie("cookieNotification", "true", 30);
    };

    const setCookie = (name, value, days) => {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/";
    };

    const getCookie = (name) => {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        if (parts.length === 2) {
            return decodeURIComponent(parts.pop().split(";").shift());
        }
    };

    return (
        <>
            {showNotification && (
                <div className="cookie-notification">
                    <p>
                        Цей веб-сайт використовує файли cookie для покращення Вашого досвіду
                        користування. Натискаючи «Прийняти», Ви погоджуєтеся з використанням
                        файлів cookie.
                    </p>
                    <button onClick={handleClick}>Прийняти</button>
                </div>
            )}
        </>
    );
}

export default Agreement;