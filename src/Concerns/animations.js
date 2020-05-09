import { gsap, TimelineMax as Timeline, Power1 } from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);

export const play = (node, appears) => {
	const delay = appears ? 0 : 0.05;
	const timeline = new Timeline({ paused: true });
	const texts = node.querySelectorAll('.content > div');

	if (!!texts) {
		timeline
			.from(node, 0.075, { display: 'none', autoAlpha: 0, delay })
			.staggerFrom(texts, 0.25, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

		window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()))

	}
}

export const exit = (node) => {
	const timeline = new Timeline({ paused: true });

	timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
	timeline.play();
}