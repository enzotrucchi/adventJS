function wrapping(gifts) {
	let wrapped = [];
	gifts.forEach((gift) => {
		const wrap = `${"*".repeat(gift.length + 2)}\n*${gift}*\n${"*".repeat(
			gift.length + 2,
		)}`;
		wrapped.push(wrap);
	});

	return wrapped;
}
