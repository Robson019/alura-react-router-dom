import stylesTema from '../../styles/tema.module.scss'
import styles from './styles.module.scss'
import { Outlet } from 'react-router-dom'
import React from 'react'

export default function PaginaPadrao({children}: {children?: React.ReactNode }) {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <div className={stylesTema.container}>
                <Outlet />
                {children}
            </div>
        </>
    )
}