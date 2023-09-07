import images from "../assets";
import DropBox from "./dropbox";
import { AiFillHome } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Tippy from "@tippyjs/react/headless";

const HeaderLarge = () => {
	return (
		<div className="hidden lg:block bg-green h-[173px] text-white">
			<div className="bg-green flex items-center justify-between max-w-[1170px] h-[100%] my-[0] mx-[auto]">
				<div className="w-[201px] h-[140px]">
					<img src={images.logo} alt="logo" />
				</div>
				<ul className="flex items-center gap-[35px]">
					<li>
						<a
							className="text-[22px] hover:text-[#000]"
							href="https://foodcity.vn/"
						>
							<AiFillHome />
						</a>
					</li>
					<li>
						<a
							className="nav-link"
							href="https://foodcity.vn/ve-chung-toi.php"
						>
							VỀ FOOD CITY
						</a>
					</li>
					<li>
						<Tippy
							interactive
							placement="bottom"
							render={(attrs) => {
								return (
									<div
										tabIndex={-1}
										{...attrs}
										className="w-[212px] bg-[#ccc] text-[#000]"
									>
										<ul>
											<li>
												<a
													href="https://foodcity.vn/san-pham-dinh-duong/hat-dinh-duong.php"
													className="drop-link"
												>
													HẠT DINH DƯỠNG
												</a>
											</li>
											<li>
												<a
													href="https://foodcity.vn/san-pham-dinh-duong/combo-nau-sua-hat.php"
													className="drop-link"
												>
													COMBO SỮA HẠT
												</a>
											</li>
											<li>
												<a
													href="https://foodcity.vn/san-pham-dinh-duong/trai-cay-say.php"
													className="drop-link"
												>
													TRÁI CÂY SẤY & ĂN VẶT
												</a>
											</li>
											<li>
												<a
													href="https://foodcity.vn/san-pham-dinh-duong/yen-sao.php"
													className="drop-link"
												>
													YẾN SÀO NGUYÊN CHẤT
												</a>
											</li>
										</ul>
									</div>
								);
							}}
						>
							<a
								className="nav-link"
								href="https://foodcity.vn/san-pham-dinh-duong.php"
							>
								SẢN PHẨM
							</a>
						</Tippy>
					</li>
					<li>
						<Tippy
							interactive
							placement="bottom"
							render={(attrs) => {
								return (
									<div
										tabIndex={-1}
										{...attrs}
										className="w-[212px] bg-[#ccc] text-[#000]"
									>
										<ul>
											<li>
												<a
													className="drop-link"
													href="https://foodcity.vn/qua-tang-doanh-nghiep/banh-trung-thu-dep-2023.php"
												>
													HỘP QUÀ BÁNH TRUNG THU 2023
												</a>
											</li>
											<li>
												<a
													className="drop-link"
													href="https://foodcity.vn/qua-tang-doanh-nghiep/hop-qua-co-san.php"
												>
													QUÀ TẶNG CÓ SẴN
												</a>
											</li>
										</ul>
									</div>
								);
							}}
						>
							<a
								className="nav-link"
								href="https://foodcity.vn/qua-tang-doanh-nghiep.php"
							>
								QUÀ TẶNG
							</a>
						</Tippy>
					</li>
					<li>
						<Tippy
							interactive
							placement="bottom"
							render={(attrs) => {
								return (
									<div
										tabIndex={-1}
										{...attrs}
										className="w-[212px] bg-[#ccc] text-[#000]"
									>
										<ul>
											<li>
												<a
													className="drop-link"
													href="https://foodcity.vn/qua-tet/qua-tet-gia-re.php"
												>
													QUÀ TẾT GIÁ RẺ
												</a>
											</li>
											<li>
												<a
													className="drop-link"
													href="https://foodcity.vn/qua-tet/qua-tet-doanh-nghiep.php"
												>
													QUÀ TẾT DOANH NGHIỆP
												</a>
											</li>
											<li>
												<a
													className="drop-link"
													href="https://foodcity.vn/qua-tet/hop-qua-tet-cao-cap.php"
												>
													QUÀ TẾT CAO CẤP
												</a>
											</li>
											<li>
												<a
													className="drop-link"
													href="https://foodcity.vn/qua-tet/hop-qua-tet-2024.php"
												>
													QUÀ TẾT YẾN SÀO
												</a>
											</li>
										</ul>
									</div>
								);
							}}
						>
							<a
								className="nav-link"
								href="https://foodcity.vn/qua-tet.php"
							>
								QUÀ TẾT 2024
							</a>
						</Tippy>
					</li>
					<li>
						<Tippy
							interactive
							placement="bottom"
							render={(attrs) => {
								return (
									<div
										tabIndex={-1}
										{...attrs}
										className="w-[212px] bg-[#ccc] text-[#000]"
									>
										<ul>
											<li>
												<a className="drop-link" href="https://foodcity.vn/cam-nang/qua-tet-2023.php">
													CẨM NANG QUÀ TẾT 2024
												</a>
											</li>
											<li>
												<a className="drop-link" href="https://foodcity.vn/cam-nang/banh-trung-thu-2023.php">
													BÁNH TRUNG THU 2023
												</a>
											</li>
											<li>
												<a className="drop-link" href="https://foodcity.vn/cam-nang/dinh-duong-va-suc-khoe.php">
													DINH DƯỠNG VÀ SỨC KHỎE{" "}
												</a>{" "}
											</li>
											<li>
												<a className="drop-link" href="https://foodcity.vn/cam-nang/qua-tet.php">
													CẨM NANG QUÀ TẾT 2022
												</a>{" "}
											</li>
										</ul>
									</div>
								);
							}}
						>
							<a
								className="nav-link"
								href="https://foodcity.vn/cam-nang.php"
							>
								CẨM NANG
							</a>
						</Tippy>
					</li>
					<li>
						<a
							className="nav-link"
							href="https://foodcity.vn/lien-he.php"
						>
							LIÊN HỆ
						</a>
					</li>
					<li>
						<a
							className="nav-link text-[22px]"
							href="https://foodcity.vn/gio-hang.php"
						>
							<FaShoppingCart />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default HeaderLarge;
