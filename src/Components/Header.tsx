import React from 'react'

type headerFunc={
    (): void
}

export const Header: React.FC<headerFunc> = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
