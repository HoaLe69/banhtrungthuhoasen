import { FaPhoneSquareAlt } from 'react-icons/fa'
const HeaderTop = () => {
	return (
		<div className="text-left h-[30px] py-[5px] px-[2%] container">
			<div className="flex justify-end gap-[15px]">
				<a href='https://foodcityvn.com/chinh-sach-dai-ly.php' className="top-link">Chính sách đại lý</a>
				<a href='tel:0971775747' className="top-link flex items-center"><FaPhoneSquareAlt /> HotLine: 0971775747</a>
			</div>
		</div>
	);
};
export default HeaderTop;
