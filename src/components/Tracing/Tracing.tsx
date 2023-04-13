// @ts-nocheck
import React, {useEffect, useRef, useState} from 'react';
import medicarePrescriptionDrugDesktop from './final-expense-desktop.png';
import medicarePrescriptionDrugMobile from './final-expense-mobile.png';
import {BREAKPOINT_MD} from "../../breakpoints";

const JUMP = 0;
const IS_MOBILE = window.innerWidth < BREAKPOINT_MD;

const storedOpacity = {
    get Value() {
        return +localStorage.getItem('tracingOpacity') || 0;
    },
    set Value(value) {
        localStorage.setItem('tracingOpacity', value);
    }
};

const storedOffset = {
    get Value() {
        return +localStorage.getItem('tracingOffset') || 0;
    },
    set Value(value) {
        localStorage.setItem('tracingOffset', value);
    }
};

/**
 * Component used to display a foreground image with some degree of opacity. Useful to trace the original design.
 * @constructor
 */
export const Tracing = () => {
    const bgImage = IS_MOBILE ? medicarePrescriptionDrugMobile : medicarePrescriptionDrugDesktop;

    const [show, setShow] = useState(true);
    const showRef = useRef(show);
    const [opacity, setOpacity] = useState(storedOpacity.Value);
    const [offset, setOffset] = useState(storedOffset.Value);
    const prevX = useRef(null);
    const prevY = useRef(null);
    const smooth = 0.01;
    const offsetSmooth = 1;
    const offsetSmoothSlow = 0.1;
    const THROTTLE_DURATION = 10;

    const throttle = (() => {
        let timeout;
        return (callback) => {
            if (timeout === undefined) {
                callback();
                timeout = setTimeout(() => (timeout = undefined), THROTTLE_DURATION);
            }
        };
    })();

    const throttlify =
        (callback) =>
            (...args) =>
                throttle(() => callback.apply(null, args));

    useEffect(() => {
        const saveMousePosition = throttlify((event) => {
            handleMouseMove({ctrlKey: event.ctrlKey, clientX: event.clientX, shiftKey: event.shiftKey, clientY: event.clientY, altKey: event.altKey});
        });

        document.addEventListener('mousemove', saveMousePosition);
        return () => {
            document.removeEventListener('mousemove', saveMousePosition);
        };
    }, [setOpacity]);

    const handleMouseMove = ({clientX, clientY, ctrlKey, shiftKey, altKey}) => {
        if (!showRef.current) return;

        const shouldChangeOpacity = Boolean(ctrlKey);
        const shouldChangeOffset = Boolean(shiftKey);
        const shouldSmoothOffset = Boolean(altKey);

        if (shouldChangeOpacity) {
            const delta = clientX - (prevX.current || clientX);
            prevX.current = clientX;
            setOpacity((currentOpacity) => {
                const newOpacity = Math.max(0, Math.min(1, currentOpacity + delta * smooth))
                storedOpacity.Value = newOpacity;
                return newOpacity;
            });
        } else {
            prevX.current = null;
        }

        if (shouldChangeOffset) {
            const delta = clientY - (prevY.current || clientY);
            prevY.current = clientY;
            setOffset((currentOffset) => {
                const theSmooth = shouldSmoothOffset ? offsetSmoothSlow : offsetSmooth;
                const theOffset = Math.min(0, currentOffset + delta * theSmooth);
                storedOffset.Value = theOffset;
                return theOffset;
            });
        } else {
            prevY.current = null;
        }
    };

    useEffect(() => {
        const x = setTimeout(() => document.body.parentElement.scrollTop = JUMP, 100);
        return () => {
            if (x) clearInterval(x);
        };
    }, []);

    const handleKey = ({altKey, code, ctrlKey, shiftKey}) => {
        document.body.parentElement.scrollTop = JUMP;
        if (altKey && ctrlKey && shiftKey && code === 'KeyA') {
            setShow((value) => {
                showRef.current = !value;
                return !value;
            });
        }
    };

    useEffect(() => {
        if (typeof document === 'undefined') return;

        document.addEventListener('keypress', handleKey);

        return () => {
            if (typeof document === 'undefined') return;
            document.removeEventListener('keypress', handleKey);
        };
    });

    if (!show) return null;

    return (
        <div
            style={{
                pointerEvents: 'none',
                backgroundImage: `url('${bgImage}')`,
                position: 'fixed',
                top: `${offset}px`,
                bottom: 0,
                left: 0,
                width: '100%',
                border: 'none',
                boxSizing: 'border-box',
                backgroundSize: '100%',
                opacity,
                zIndex: 5050,
                filter: 'grayscale(.95)',
            }}
        />
    );
};
