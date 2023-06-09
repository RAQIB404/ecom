import React from "react";

import Link from "next/link";

const Header = () => {
    return(
        <header>
            <nav>
                <link href="/">Home</link>
                <link href="/auth">Auth</link>
                <link href="/cart">Cart</link>
                <link href="/orders">Orders</link>

            </nav>
        </header>
    )
}

export default Header;