import { useState } from 'react'
const useColorModeButton = () => {
	const [colorMode, setColorMode] = useState(false)

	const changeColorMode = () => {
		setColorMode(state => !state)
	}
	return { changeColorMode, colorMode }
}
export { useColorModeButton }
