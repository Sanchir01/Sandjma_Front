'use client'
import styles from '@/shared/styles/Catalog.module.scss'
import { FC } from 'react'
export const Grid: FC<{ children: React.ReactNode }> = ({ children }) => (
	<div className={styles.catalog__items}>{children}</div>
)
