import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';

export interface LinkProps {
    text: string;
    to: string;
    containerStyle?: React.CSSProperties;
    outsideTo?: string;
    icon?: string;
}

const Link: React.FC<LinkProps> = (props) => {
    const navigate = useNavigate();

    // get current location of react router
    const location = useLocation();
    const [isHere, setIsHere] = useState(false);

    // if current path is the same as the link path
    useEffect(() => {
        const path = location.hash ? location.hash.replace('#', '') : location.pathname;
        if (path === `/${props.to}`) {
            setIsHere(true);
        } else {
            setIsHere(false);
        }
    }, [location, props.to]);

    const [active, setActive] = useState(false);

    const handleClick = (e: any) => {
        e.preventDefault();
        setActive(true);
        const targetPath = `/${props.to}`;
        const currentPath = location.hash ? location.hash.replace('#', '') : location.pathname;

        if (currentPath !== targetPath) {
            setTimeout(() => {
                navigate(targetPath);
            }, 100);
        }
        setTimeout(() => {
            setActive(false);
        }, 100);
    };

    return (
        <RouterLink
            to={`/${props.to}`}
            onMouseDown={handleClick}
            style={Object.assign(
                {},
                { display: 'flex' },
                props.icon && { alignItems: 'center' },
                props.containerStyle
            )}
        >
            {isHere && <div style={styles.hereIndicator} />}
            {props.icon && (
                <img src={props.icon} alt="" aria-hidden="true" style={styles.icon} />
            )}
            <h4
                className="router-link"
                style={Object.assign(
                    {},
                    styles.link,
                    active && { color: 'red' }
                )}
            >
                {props.text}
            </h4>
        </RouterLink>
    );
};

const styles: StyleSheetCSS = {
    link: {
        cursor: 'pointer',
        fontWeight: 'bolder',
        textDecoration: 'underline',
    },
    hereIndicator: {
        width: 4,
        height: 4,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: 'rgb(85, 26, 139)',
        alignSelf: 'center',
        borderRadius: '50%',
        marginRight: 6,
        textDecoration: 'none',
    },
    icon: {
        width: 24,
        height: 24,
        objectFit: 'contain',
        marginRight: 8,
        flexShrink: 0,
    },
};

export default Link;
