
import * as React from 'react';

const IconTimes = (props: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span {...props}>
        <svg width="1em" height="1.0em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 18L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </span>;
};

IconTimes.displayName = 'IconTimes';

export default IconTimes;
