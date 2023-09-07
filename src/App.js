import "./App.css";
import Header from "./components/header";
import HeaderTop from "./components/header-top";
import Description from "./components/des";
import data from "./data/data";
import Card from "./components/card";
import Gift from "./components/gift";
import About from "./components/about";
import Footer from "./components/footer";
import HeaderLarge from "./components/header-pc";
function App() {
	return (
		<div className="App">
			<div className="">
				<HeaderTop />
				<HeaderLarge />
				<div className="lg:hidden">
					<Header />
				</div>
				<body className="px-[10px]">
					<div className="container hidden lg:block">
						<div className="text-[#ccc] px-[5px] mt-[10px]">
							<span>
								<a
									href="https://foodcity.vn/"
									className="hover:text-[#333] font-bold"
								>
									Trang chủ
								</a>
							</span>
							<span> » </span>
							<span>
								<a
									className="hover:text-[#333] font-bold"
									href="https://foodcity.vn/qua-tang-doanh-nghiep.php"
								>
									QUÀ TẶNG
								</a>
							</span>
							<span> » </span>
							<span>
								<a
									className="hover:text-[#333] font-bold"
									href="https://foodcity.vn/qua-tang-doanh-nghiep/banh-trung-thu-dep-2023.php"
								>
									HỘP QUÀ BÁNH TRUNG THU 2023
								</a>
							</span>
						</div>
					</div>
					<div className="lg:grid lg:grid-cols-pc lg:container lg:gap-[50px] lg:mt-[10px]">
						<div className="hidden lg:block">
							<Gift />
						</div>
						<div>
							<Description />
							<div className="grid lg:grid-cols-4  mt-[50px] grid-cols-2 gap-y-[40px] gap-[20px]">
								{data.map((dt, index) => {
									return (
										<Card
											key={index}
											title={dt.title}
											thumb={dt.thumb}
											link={dt.link}
											price={dt.price}
										/>
									);
								})}
							</div>
						</div>
					</div>
					<div className="lg:hidden">
						<Gift />
					</div>
					<About />
				</body>
				<Footer />
			</div>
		</div>
	);
}

export default App;
