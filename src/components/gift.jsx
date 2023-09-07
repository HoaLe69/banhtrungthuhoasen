import { AiOutlineRight } from "react-icons/ai";
import images from "../assets";
const Gift = () => {
	return (
		<div className="mt-[10px] lg:mt-[0px]">
			<div className="border-b-[1px] py-[5px] border-solid border-[#69aa36]">
				<a href="https://foodcity.vn/qua-tang-doanh-nghiep.php">
					<h2 className="text-[#0e75b8] hover:text-[#000] text-[18px] font-bold">
						QUÀ TẶNG
					</h2>
				</a>
			</div>
			<div className="flex items-center gap-[2px] text-green pl-[5px] font-medium hover:text-[#000] mt-[5px]">
				<span className="text-[#b8140d]">
					<AiOutlineRight />
				</span>
				<a href="https://foodcity.vn/qua-tang-doanh-nghiep/banh-trung-thu-dep-2023.php">
					HỘP QUÀ BÁNH TRUNG THU 2023
				</a>
			</div>
			<div className="flex mt-[5px] items-center gap-[2px] text-green font-medium hover:text-[#000] pl-[5px]">
				<span className="text-[#b8140d]">
					<AiOutlineRight />
				</span>
				<a href="https://foodcity.vn/qua-tang-doanh-nghiep/hop-qua-co-san.php">
					QUÀ TẶNG CÓ SẴN
				</a>
			</div>
			<div className="w-full h-[175px] flex justify-center lg:hidden">
				<div className="w-[175px]">
					<img src={images.logo} alt="logo" />
				</div>
			</div>
			<div className="hidden lg:block">
				<div className="mt-[20px]">
					<a href="https://foodcity.vn/qua-tet/hop-qua-tet-dep-2023.php">
						<img src={images.banner1} alt="banner" />
					</a>
				</div>
				<div className="mt-[20px]">
					<a href="https://foodcity.vn/qua-tang-doanh-nghiep/banh-trung-thu-dep-2023.php">
						<img src={images.banner2} alt="banner" />
					</a>
				</div>
			</div>
		</div>
	);
};
export default Gift;
