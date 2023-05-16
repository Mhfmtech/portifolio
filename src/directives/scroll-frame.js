export default {
	mounted(el, binding) {
		window.addEventListener("scroll", () => {
			const scrollTop = window.scrollY;
			const scrollBottom = scrollTop + window.innerHeight;
			const elTop = el.offsetTop;
			// const elBottom = elTop + el.offsetHeight;

			if (elTop < scrollBottom) {
				el.classList.add(binding.value);
			} else {
				el.classList.remove(binding.value);
			}
		});
	},
};
