import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Verticaletimeline.css'
interface VTTypes {
  animate?: Boolean,
  className?: string,
  layout?: string, //This could be a tuple
  lineColor?: string,
  children: React.ReactNode | React.ReactNode[]
}
export const VerticalTimeline = ({animate = true, className = '', layout = '2-column', children, lineColor ='#FFF'}:VTTypes) => {
  if (typeof window === 'object') {
    document.documentElement.style.setProperty('--line-color', lineColor);
  }
  return (
    <div
      className={classNames(className, 'vertical-timeline', {
        'vertical-timeline--animate': animate,
        'vertical-timeline--two-columns': layout === '2-columns',
        'vertical-timeline--one-column-left':
          layout === '1-column' || layout === '1-column-left',
        'vertical-timeline--one-column-right': layout === '1-column-right',
      })}
    >
      {children}
    </div>
  );
};