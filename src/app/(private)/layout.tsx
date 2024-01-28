import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
	console.log(12)
	return <>{children}</>
}

export default layout
