import { AiFillHome , AiOutlineClose } from "react-icons/ai";
import { twMerge } from "tailwind-merge";
const ModalMenu = (props) => {
	const { isShow } = props;
	const classes = twMerge(`
			w-[310px] bg-green text-white fixed left-[-100%] top-0 bottom-0 overflow-auto
			${isShow && "left-[0]"} 
		`);
	const classesOverlay = twMerge(`
			fixed left-[310px] right-0 top-0 bottom-0 bg-black-overlay hidden
			${isShow && 'block'}
		`)
	const handleOnClickOverlay  = () => {
		props.handleHideMenu(false)
	}
	return (
		<div>
			<div className={classesOverlay} onClick={handleOnClickOverlay}>
				<div className="cursor-pointer hover:text-green absolute top-[50%] left-[50%] translate-x-[-50%] text-white text-[20px] p-[10px] rounded-full border-2 border-solid border-white"><AiOutlineClose /></div>
			</div>
			<div className={classes}>
				<div className="flex items-center text-[16px] px-[5px] py-[10px] border-b-[1px] border-solid border-white">
					<a
						className="flex items-center"
						href="https://foodcity.vn/"
					>
						<span>
							<AiFillHome />
						</span>
						Trang chủ
					</a>
				</div>
				<div className="menu-link">
					<a href="https://foodcity.vn/ve-chung-toi.php">
						Về Food City
					</a>
				</div>
				<div className="">
					<div className="menu-link">
						<a
							className="font-semibold"
							href="https://foodcity.vn/san-pham-dinh-duong.php"
						>
							SẢN PHẢM{" "}
						</a>
					</div>
					<div className="menu-link pl-[25px]">
						<a href="https://foodcity.vn/san-pham-dinh-duong/hat-dinh-duong.php">
							HẠT DINH DƯỠNG
						</a>
					</div>
					<div className="menu-link pl-[25px]">
						<a href="https://foodcity.vn/san-pham-dinh-duong/combo-nau-sua-hat.php">
							COMBO SỮA HẠT
						</a>
					</div>
					<div className="menu-link pl-[25px]">
						<a href="https://foodcity.vn/san-pham-dinh-duong/trai-cay-say.php">
							TRÁI CÂY SẤY & ĂN VẶT
						</a>
					</div>
					<div className="menu-link pl-[25px]">
						<a href="https://foodcity.vn/san-pham-dinh-duong/yen-sao.php">
							YẾN SÀO NGUYÊN CHẤT
						</a>
					</div>
				</div>
				<div className="">
					<div className="menu-link">
						<a
							className="font-semibold"
							href="https://foodcity.vn/qua-tang-doanh-nghiep.php"
						>
							QUÀ TẶNG
						</a>
					</div>
					<div className="menu-link pl-[25px]">
						<a href="https://foodcity.vn/qua-tang-doanh-nghiep/banh-trung-thu-dep-2023.php">
							HỘP QUÀ BÁNH TRUNG THU 2023
						</a>
					</div>
					<div className="menu-link pl-[25px]">
						<a href="https://foodcity.vn/qua-tang-doanh-nghiep/hop-qua-co-san.php">
							QUÀ TẶNG CÓ SẴN
						</a>
					</div>
				</div>
				<div className="">
					<div className="menu-link">
						<a
							className="font-semibold"
							href="https://foodcity.vn/qua-tet.php"
						>
							QUÀ TẾT 2024
						</a>
					</div>
					<div className="menu-link pl-[25px]">
						<a href="https://foodcity.vn/qua-tet/qua-tet-gia-re.php">
							QUÀ TẾT GIÁ RẺ
						</a>
					</div>
					<div className="menu-link pl-[25px]">
						<a href="https://foodcity.vn/qua-tet/qua-tet-doanh-nghiep.php">
							QUÀ TẾT DOANH NGHIỆP
						</a>
					</div>
					<div className="menu-link pl-[25px]">
						<a href="https://foodcity.vn/qua-tet/hop-qua-tet-cao-cap.php">
							QUÀ TẾT CAO CẤP
						</a>
					</div>
					<div className="menu-link pl-[25px]">
						<a href="https://foodcity.vn/qua-tet/hop-qua-tet-2024.php">
							QUÀ TẾT YẾN SÀO
						</a>
					</div>
				</div>
				<div className="">
					<div className="menu-link">
						<a
							href="https://foodcity.vn/cam-nang.php"
							className="font-semibold"
						>
							CẨM NANG
						</a>
					</div>
					<div className="menu-link pl-[25px]">
						<a href="https://foodcity.vn/cam-nang/qua-tet-2023.php">
							CẨM NANG QUÀ TẾT 2024
						</a>
					</div>
					<div className="menu-link pl-[25px]">
						<a href="https://foodcity.vn/cam-nang/banh-trung-thu-2023.php">
							BÁNH TRUNG THU 2023
						</a>
					</div>
					<div className="menu-link pl-[25px]">
						<a href="https://foodcity.vn/cam-nang/dinh-duong-va-suc-khoe.php">
							DINH DƯỠNG VÀ SỨC KHỎE{" "}
						</a>
					</div>
					<div className="menu-link pl-[25px]">
						<a href="https://foodcity.vn/cam-nang/qua-tet.php">
							CẨM NANG QUÀ TẾT 2022
						</a>{" "}
					</div>
				</div>
				<div className="menu-link font-semibold">
					<a href="https://foodcity.vn/lien-he.php">LIÊN HỆ</a>
				</div>
			</div>
		</div>
	);
};
export default ModalMenu;
