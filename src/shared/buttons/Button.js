import React from 'react'

function Button({variant='contained',className,children,...rest}) {
    const style={
        contained:'px-4 py-2 bg-primary text-white text-uppercase'
    }
    return (
        <button {...rest} className={style[variant]+ " "+className} >
            {children}
        </button>
    )
}

export default Button
