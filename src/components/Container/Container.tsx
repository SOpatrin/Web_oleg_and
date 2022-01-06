import React from 'react';
import styles from './Container.module.css';

function Container({ children, className, ...props }: React.HTMLAttributes<any>) {

    return (
        <div {...props} className={`${styles.container} ${className}`}>
            {children}
        </div>
    );
}

export default Container;
