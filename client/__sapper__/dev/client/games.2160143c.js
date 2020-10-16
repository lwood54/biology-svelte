import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, h as children, j as claim_text, b as detach_dev, c as claim_space, B as attr_dev, k as add_location, l as insert_dev, m as append_dev, p as noop, I as add_render_callback, J as create_in_transition } from './client.5093fde4.js';
import { f as fade } from './index.1f69fbc9.js';

/* src/routes/games.svelte generated by Svelte v3.29.0 */
const file = "src/routes/games.svelte";

function create_fragment(ctx) {
	let h10;
	let a0;
	let t0;
	let h10_intro;
	let t1;
	let h11;
	let a1;
	let t2;
	let h11_intro;
	let t3;
	let h12;
	let a2;
	let t4;
	let h12_intro;

	const block = {
		c: function create() {
			h10 = element("h1");
			a0 = element("a");
			t0 = text("Unit 1.1 Game");
			t1 = space();
			h11 = element("h1");
			a1 = element("a");
			t2 = text("Unit 1.2 Game");
			t3 = space();
			h12 = element("h1");
			a2 = element("a");
			t4 = text("Unit 1.3 Game");
			this.h();
		},
		l: function claim(nodes) {
			h10 = claim_element(nodes, "H1", {});
			var h10_nodes = children(h10);
			a0 = claim_element(h10_nodes, "A", { class: true, href: true });
			var a0_nodes = children(a0);
			t0 = claim_text(a0_nodes, "Unit 1.1 Game");
			a0_nodes.forEach(detach_dev);
			h10_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			h11 = claim_element(nodes, "H1", {});
			var h11_nodes = children(h11);
			a1 = claim_element(h11_nodes, "A", { class: true, href: true });
			var a1_nodes = children(a1);
			t2 = claim_text(a1_nodes, "Unit 1.2 Game");
			a1_nodes.forEach(detach_dev);
			h11_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			h12 = claim_element(nodes, "H1", {});
			var h12_nodes = children(h12);
			a2 = claim_element(h12_nodes, "A", { class: true, href: true });
			var a2_nodes = children(a2);
			t4 = claim_text(a2_nodes, "Unit 1.3 Game");
			a2_nodes.forEach(detach_dev);
			h12_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a0, "class", "game-link svelte-1r7g89t");
			attr_dev(a0, "href", "/dndgame/unit1_1");
			add_location(a0, file, 10, 52, 175);
			add_location(h10, file, 10, 0, 123);
			attr_dev(a1, "class", "game-link svelte-1r7g89t");
			attr_dev(a1, "href", "/dndgame/unit1_2");
			add_location(a1, file, 11, 52, 295);
			add_location(h11, file, 11, 0, 243);
			attr_dev(a2, "class", "game-link svelte-1r7g89t");
			attr_dev(a2, "href", "/dndgame/unit1_3");
			add_location(a2, file, 12, 52, 415);
			add_location(h12, file, 12, 0, 363);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h10, anchor);
			append_dev(h10, a0);
			append_dev(a0, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, h11, anchor);
			append_dev(h11, a1);
			append_dev(a1, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, h12, anchor);
			append_dev(h12, a2);
			append_dev(a2, t4);
		},
		p: noop,
		i: function intro(local) {
			if (!h10_intro) {
				add_render_callback(() => {
					h10_intro = create_in_transition(h10, fade, { y: 200, duration: 300, delay: 500 });
					h10_intro.start();
				});
			}

			if (!h11_intro) {
				add_render_callback(() => {
					h11_intro = create_in_transition(h11, fade, { y: 200, duration: 300, delay: 500 });
					h11_intro.start();
				});
			}

			if (!h12_intro) {
				add_render_callback(() => {
					h12_intro = create_in_transition(h12, fade, { y: 200, duration: 300, delay: 500 });
					h12_intro.start();
				});
			}
		},
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h10);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(h11);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(h12);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Games", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Games> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ fade });
	return [];
}

class Games extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Games",
			options,
			id: create_fragment.name
		});
	}
}

export default Games;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZXMuMjE2MDE0M2MuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZ2FtZXMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGZhZGUgfSBmcm9tIFwic3ZlbHRlL3RyYW5zaXRpb25cIjtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdC5nYW1lLWxpbmsge1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0fVxuPC9zdHlsZT5cblxuPGgxIGluOmZhZGU9e3sgeTogMjAwLCBkdXJhdGlvbjogMzAwLCBkZWxheTogNTAwIH19PjxhIGNsYXNzPVwiZ2FtZS1saW5rXCIgaHJlZj1cIi9kbmRnYW1lL3VuaXQxXzFcIj5Vbml0IDEuMSBHYW1lPC9hPjwvaDE+XG48aDEgaW46ZmFkZT17eyB5OiAyMDAsIGR1cmF0aW9uOiAzMDAsIGRlbGF5OiA1MDAgfX0+PGEgY2xhc3M9XCJnYW1lLWxpbmtcIiBocmVmPVwiL2RuZGdhbWUvdW5pdDFfMlwiPlVuaXQgMS4yIEdhbWU8L2E+PC9oMT5cbjxoMSBpbjpmYWRlPXt7IHk6IDIwMCwgZHVyYXRpb246IDMwMCwgZGVsYXk6IDUwMCB9fT48YSBjbGFzcz1cImdhbWUtbGlua1wiIGhyZWY9XCIvZG5kZ2FtZS91bml0MV8zXCI+VW5pdCAxLjMgR2FtZTwvYT48L2gxPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bURBVWUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHOzs7Ozs7O21EQUNqQyxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUc7Ozs7Ozs7bURBQ2pDLENBQUMsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
