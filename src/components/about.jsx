import images from "../assets";
const About = () => {
	return (
		<div className="container lg:mt-[20px] lg:flex lg:items-center lg:justify-center lg:gap-[40px]">
			<div className="w-[201px] hidden lg:block">
				<img src={images.logo} alt="logo"/>
			</div>
			<div>
				<h3 className="font-bold text-green">
					Về Bánh trung thu hoa sen
				</h3>
				<ul>
					<li>
						<a
							className="text-green font-medium hover:text-[#000]"
							href="https://foodcity.vn/ve-chung-toi.php"
						>
							Giới thiệu
						</a>
					</li>
					<li>
						<a
							className="text-green font-medium hover:text-[#000]"
							href="https://foodcity.vn/san-pham-dinh-duong.php"
						>
							Sản phẩm
						</a>
					</li>
					<li>
						<a
							className="text-green font-medium hover:text-[#000]"
							href="https://foodcity.vn/chinh-sach-doi-tra.php"
						>
							Chính sách đổi trả & hoàn tiền
						</a>
					</li>
					<li>
						<a
							className="text-green font-medium hover:text-[#000]"
							href="https://foodcity.vn/chinh-sach-giao-hang.php"
						>
							Chính sách giao hàng
						</a>
					</li>
					<li>
						<a
							className="text-green font-medium hover:text-[#000]"
							href="https://foodcity.vn/cong-bo--kiem-nghiem.php"
						>
							Công bố & kiểm nghiệm
						</a>
					</li>
					<li>
						<a
							className="text-green font-medium hover:text-[#000]"
							href="https://foodcity.vn/lien-he.php"
						>
							Liên hệ
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default About;
