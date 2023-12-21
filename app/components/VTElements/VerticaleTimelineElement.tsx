import React from 'react';
import classNames from 'classnames';
import { InView } from 'react-intersection-observer';
import './VerticaleTimelineElement.css'
interface VTETypes {
    children?: React.ReactNode;
    className?: string;
    contentArrowStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    icon?: React.ReactElement;
    iconClassName?: string;
    iconOnClick?: (event:React.MouseEvent) => void;
    onTimelineElementClick?: (event:React.MouseEvent) => void;
    iconStyle?: React.CSSProperties;
    id?: string;
    position?: string;
    style?: React.CSSProperties;
    textClassName?: string;
    intersectionObserverProps?: {
        rootMargin: string;
        triggerOnce: boolean;
    }
    visible?: boolean

}
export const VerticalTimelineElement= ({
    children = '',
    className = '',
    contentArrowStyle = {},
    contentStyle = {},
    icon = <></>,
    iconClassName = '',
    iconOnClick = () => {},
    onTimelineElementClick = () => {},
    iconStyle = {},
    id = '',
    position = '',
    style = {},
    textClassName = '',
    intersectionObserverProps = {
    rootMargin: '0px 0px 0px 0px',
    triggerOnce: false,
    },
    visible = false,
    }: VTETypes) => (
    <InView {...intersectionObserverProps}>
    {({ inView, ref }) => (
        <div
        ref={ref}
        id={id}
        className={classNames(className, 'vertical-timeline-element', {
            'vertical-timeline-element--left': position === 'left',
            'vertical-timeline-element--right': position === 'right',
            'vertical-timeline-element--no-children': children === '',
        })}
        style={style}
        >
        <React.Fragment>
            <span // eslint-disable-line jsx-a11y/no-static-element-interactions
                style={iconStyle}
                onClick={iconOnClick}
                className={classNames(
                    iconClassName,
                    'vertical-timeline-element-icon', // for shadow size
                    {
                    'bounce-in': inView || visible,
                    'is-hidden': !(inView || visible),
                    }
                )}
            >
            {icon}
            </span>
            <div
                style={contentStyle}
                onClick={onTimelineElementClick}
                className={classNames(
                    textClassName,
                    'vertical-timeline-element-content',
                    {
                    'bounce-in': inView || visible,
                    'is-hidden': !(inView || visible),
                    }
                )}
            >
            <div
                style={contentArrowStyle}
                className="vertical-timeline-element-content-arrow"
            />
            {children}
            </div>
        </React.Fragment>
        </div>
    )}
    </InView>
    );