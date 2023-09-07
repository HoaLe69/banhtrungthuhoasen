import Tippy from "@tippyjs/react/headless";


const DropBox = ({children , callback}) => {
	return (
		<Tippy
		  interactive
			placement="bottom"
			render={callback}
		>
			{children}	
		</Tippy>
	)
}
export default DropBox
