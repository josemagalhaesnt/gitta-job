import { shade, rgba } from 'polished';

export const borderFeedback = (size, color) => {
    const borderFocusColor = shade(0.35, color);
    const borderHoverColor = shade(0.15, color);

    return `
        border: ${size}px solid ${color};

        &:focus, &:active {
            outline: none;
            box-shadow: 0px 2px 2px 1px ${rgba(borderFocusColor, 0.75)};
        }

        &:hover {
            border-color: ${borderHoverColor};
        }
    `;
};
