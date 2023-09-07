const Card = (props) => {
	const { thumb, title, price, link } = props;
	return (
		<div>
			<a href={link}>
				<div className="overflow-hidden">
					<img src={thumb} alt={title} className="hover:scale-110 transition-all"/>
				</div>
				<p className="hover:text-green text-[14px] text-center mt-[10px] font-medium tracking-wider">
					{title}
				</p>
			</a>
			<p className="text-[24px] font-bold text-[green] text-center">
				{price}
				<span className="underline text-sm">đ</span>
			</p>
		</div>
	);
};
export default Card;
