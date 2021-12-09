import React from 'react'

import './Nav.css'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className={`fa fa-${props.icon}`}></i> Início
            </a>
            <a href="#/users">
                <i className={`fa fa-${props.users}`}></i> Usuários
            </a>
        </nav>
    </aside>