import { useEffect, useRef, RefObject } from 'react';

const ClickOutside = (handler: () => void): RefObject<HTMLDivElement> => {
    const domNode = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const maybeHandler = (event: MouseEvent) => {
            if (domNode.current && !domNode.current.contains(event.target as Node)) {
                handler();
            }
        };

        document.addEventListener('mousedown', maybeHandler);

        return () => {
            document.removeEventListener('mousedown', maybeHandler);
        };
    }, [handler]);

    return domNode;
};

export default ClickOutside;
