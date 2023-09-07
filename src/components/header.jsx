import images from "../assets";
import { BiMenu } from "react-icons/bi";
import ModalMenu from "./modal-menu";
import { useState } from "react";


const Header = () => {
	const [isShowMenu  , setIsShowMenu] = useState(false)	
	const handleHideModal = (isShow) => {
		setIsShowMenu(isShow)
	}
	return (
		<>
			<div className="h-[173px] bg-green relative">
				<div className="flex items-center h-full justify-center">
					<div className="max-w-[125px]">
						<a href="https://foodcity.vn/">
						<img src={images.logo} />
						</a>
					</div>
				</div>
				<div className="absolute top-[20px] text-white flex-col flex items-center right-[10px]">
					<span onClick={() => setIsShowMenu(!isShowMenu)} className="text-[38px] font-black text-white cursor-pointer">
						<BiMenu />
					</span>
					<span className="text-[16px]">MENU</span>
				</div>
			</div>
			<div className="text-[#ccc] px-[5px]">
				<span>
					<a
						href="https://foodcity.vn/"
						className="hover:text-[#333]"
					>
						Trang chủ
					</a>
				</span>
				<span> » </span>
				<span>
					<a
						className="hover:text-[#333]"
						href="https://foodcity.vn/qua-tang-doanh-nghiep.php"
					>
						QUÀ TẶNG
					</a>
				</span>
				<span> » </span>
				<span>
					<a
						className="hover:text-[#333]"
						href="https://foodcity.vn/qua-tang-doanh-nghiep/banh-trung-thu-dep-2023.php"
					>
						HỘP QUÀ BÁNH TRUNG THU 2023
					</a>
				</span>
			</div>
			<ModalMenu isShow={isShowMenu} handleHideMenu={handleHideModal}/>
		</>
	);
};
export default Header;
