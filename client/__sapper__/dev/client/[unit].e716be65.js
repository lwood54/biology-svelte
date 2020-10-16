import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, r as validate_each_argument, U as create_slot, v as validate_slots, g as globals, z as empty, l as insert_dev, b as detach_dev, a as space, e as element, t as text, q as query_selector_all, c as claim_space, f as claim_element, h as children, j as claim_text, B as attr_dev, k as add_location, m as append_dev, C as set_data_dev, V as update_slot, A as transition_in, M as transition_out, E as destroy_each, p as noop, O as create_component, P as claim_component, Q as mount_component, R as destroy_component } from './client.31669433.js';

/* src/components/UnitPage.svelte generated by Svelte v3.29.0 */

const { Object: Object_1 } = globals;
const file = "src/components/UnitPage.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

// (44:1) {#if item[0].indexOf('par') > -1}
function create_if_block(ctx) {
	let t0;
	let p;
	let t1_value = /*item*/ ctx[4][1].content + "";
	let t1;
	let if_block = /*item*/ ctx[4][1].pic && create_if_block_1(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			t0 = space();
			p = element("p");
			t1 = text(t1_value);
			this.h();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			t0 = claim_space(nodes);
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t1 = claim_text(p_nodes, t1_value);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "content svelte-x6xgnn");
			add_location(p, file, 48, 2, 1283);
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t1);
		},
		p: function update(ctx, dirty) {
			if (/*item*/ ctx[4][1].pic) if_block.p(ctx, dirty);
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(44:1) {#if item[0].indexOf('par') > -1}",
		ctx
	});

	return block;
}

// (46:2) {#if item[1].pic}
function create_if_block_1(ctx) {
	let div;
	let img;
	let img_src_value;
	let img_alt_value;

	const block = {
		c: function create() {
			div = element("div");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			img = claim_element(div_nodes, "IMG", { class: true, src: true, alt: true });
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "parImg svelte-x6xgnn");
			if (img.src !== (img_src_value = /*item*/ ctx[4][1].pic.src)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*item*/ ctx[4][1].pic.alt);
			add_location(img, file, 46, 33, 1200);
			attr_dev(div, "class", "parImg-container svelte-x6xgnn");
			add_location(div, file, 46, 3, 1170);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, img);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(46:2) {#if item[1].pic}",
		ctx
	});

	return block;
}

// (42:0) {#each unitItems as item}
function create_each_block(ctx) {
	let show_if = /*item*/ ctx[4][0].indexOf("par") > -1;
	let if_block_anchor;
	let if_block = show_if && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (show_if) if_block.p(ctx, dirty);
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(42:0) {#each unitItems as item}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let title_value;
	let t0;
	let h1;
	let t1_value = /*unit_content*/ ctx[0].title + "";
	let t1;
	let t2;
	let t3;
	let body;
	let current;
	document.title = title_value = /*unit_content*/ ctx[0].title;
	let each_value = /*unitItems*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t3 = space();
			body = element("body");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1chhls\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			t3 = claim_space(nodes);
			body = claim_element(nodes, "BODY", {});
			var body_nodes = children(body);
			if (default_slot) default_slot.l(body_nodes);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "pageTitle svelte-x6xgnn");
			add_location(h1, file, 38, 0, 804);
			add_location(body, file, 51, 0, 1339);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, t3, anchor);
			insert_dev(target, body, anchor);

			if (default_slot) {
				default_slot.m(body, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*unit_content*/ 1) && title_value !== (title_value = /*unit_content*/ ctx[0].title)) {
				document.title = title_value;
			}

			if ((!current || dirty & /*unit_content*/ 1) && t1_value !== (t1_value = /*unit_content*/ ctx[0].title + "")) set_data_dev(t1, t1_value);

			if (dirty & /*unitItems*/ 2) {
				each_value = /*unitItems*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(t3.parentNode, t3);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, null, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(body);
			if (default_slot) default_slot.d(detaching);
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

async function preload(page, session) {
	const { unit } = page.params;
	const res = await this.fetch(`data/${unit}.json`);
	const unit_content = await res.json();
	return { unit_content };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("UnitPage", slots, ['default']);
	let { unit_content } = $$props;

	// sorts alphabetically so I can render paragraphs in order and only render
	// the number of paragraphs needed for the available content
	let unitItems = Object.entries(unit_content).sort((a, b) => a[0].localeCompare(b[0]));

	const writable_props = ["unit_content"];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<UnitPage> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("unit_content" in $$props) $$invalidate(0, unit_content = $$props.unit_content);
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({ preload, unit_content, unitItems });

	$$self.$inject_state = $$props => {
		if ("unit_content" in $$props) $$invalidate(0, unit_content = $$props.unit_content);
		if ("unitItems" in $$props) $$invalidate(1, unitItems = $$props.unitItems);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [unit_content, unitItems, $$scope, slots];
}

class UnitPage extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { unit_content: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "UnitPage",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*unit_content*/ ctx[0] === undefined && !("unit_content" in props)) {
			console.warn("<UnitPage> was created without expected prop 'unit_content'");
		}
	}

	get unit_content() {
		throw new Error("<UnitPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set unit_content(value) {
		throw new Error("<UnitPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/[unit].svelte generated by Svelte v3.29.0 */

function create_fragment$1(ctx) {
	let unitpage;
	let current;

	unitpage = new UnitPage({
			props: { unit_content: /*unit_content*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(unitpage.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(unitpage.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(unitpage, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const unitpage_changes = {};
			if (dirty & /*unit_content*/ 1) unitpage_changes.unit_content = /*unit_content*/ ctx[0];
			unitpage.$set(unitpage_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(unitpage.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(unitpage.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(unitpage, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload$1(page, session) {
	const { unit } = page.params;
	const res = await this.fetch(`data/${unit}.json`);
	const unit_content = await res.json();
	return { unit_content };
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bunitu5D", slots, []);
	let { unit_content } = $$props;
	const writable_props = ["unit_content"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bunitu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("unit_content" in $$props) $$invalidate(0, unit_content = $$props.unit_content);
	};

	$$self.$capture_state = () => ({ preload: preload$1, Unitpage: UnitPage, unit_content });

	$$self.$inject_state = $$props => {
		if ("unit_content" in $$props) $$invalidate(0, unit_content = $$props.unit_content);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [unit_content];
}

class U5Bunitu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { unit_content: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bunitu5D",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*unit_content*/ ctx[0] === undefined && !("unit_content" in props)) {
			console.warn("<U5Bunitu5D> was created without expected prop 'unit_content'");
		}
	}

	get unit_content() {
		throw new Error("<U5Bunitu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set unit_content(value) {
		throw new Error("<U5Bunitu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bunitu5D;
export { preload$1 as preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3VuaXRdLmU3MTZiZTY1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Vbml0UGFnZS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL1t1bml0XS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHBhZ2UsIHNlc3Npb24pIHtcblx0XHRjb25zdCB7IHVuaXQgfSA9IHBhZ2UucGFyYW1zO1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goYGRhdGEvJHt1bml0fS5qc29uYCk7XG5cdFx0Y29uc3QgdW5pdF9jb250ZW50ID0gYXdhaXQgcmVzLmpzb24oKTtcblx0XHRyZXR1cm4geyB1bml0X2NvbnRlbnQgfTtcblx0fVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBsZXQgdW5pdF9jb250ZW50O1xuXHQvLyBzb3J0cyBhbHBoYWJldGljYWxseSBzbyBJIGNhbiByZW5kZXIgcGFyYWdyYXBocyBpbiBvcmRlciBhbmQgb25seSByZW5kZXJcblx0Ly8gdGhlIG51bWJlciBvZiBwYXJhZ3JhcGhzIG5lZWRlZCBmb3IgdGhlIGF2YWlsYWJsZSBjb250ZW50XG5cdGxldCB1bml0SXRlbXMgPSBPYmplY3QuZW50cmllcyh1bml0X2NvbnRlbnQpLnNvcnQoKGEsIGIpID0+IGFbMF0ubG9jYWxlQ29tcGFyZShiWzBdKSk7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQucGFnZVRpdGxlIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblx0LnBhckltZy1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXHQucGFySW1nIHtcblx0XHR3aWR0aDogNzUlO1xuXHR9XG5cdC5jb250ZW50IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT57dW5pdF9jb250ZW50LnRpdGxlfTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDEgY2xhc3M9XCJwYWdlVGl0bGVcIj57dW5pdF9jb250ZW50LnRpdGxlfTwvaDE+XG5cbjwhLS0gbG9vcCB0aHJvdWdoIGFycmF5IGl0ZW1zIG1hZGUgZnJvbSBqc29uIGZpbGUgLS0+XG57I2VhY2ggdW5pdEl0ZW1zIGFzIGl0ZW19XG5cdDwhLS0gY2hlY2sgaWYgaXRlbSBpcyBwYXJhZ3JhcGggbWF0ZXJpYWwgYW5kIGRpc3BsYXkgcGFyYWdyYXBoIGNvbnRlbnQgdy8gaW1hZ2UgaWYgaXQgaGFzIG9uZSAtLT5cblx0eyNpZiBpdGVtWzBdLmluZGV4T2YoJ3BhcicpID4gLTF9XG5cdFx0PCEtLSBjaGVjayBpZiBwYXJhZ3JhcGggbWF0ZXJpYWwgY29udGFpbnMgYW4gaW1hZ2UgYW5kIGRpc3BsYXkgdGhhdCBpbWFnZSAtLT5cblx0XHR7I2lmIGl0ZW1bMV0ucGljfVxuXHRcdFx0PGRpdiBjbGFzcz1cInBhckltZy1jb250YWluZXJcIj48aW1nIGNsYXNzPVwicGFySW1nXCIgc3JjPXtpdGVtWzFdLnBpYy5zcmN9IGFsdD17aXRlbVsxXS5waWMuYWx0fSAvPjwvZGl2PlxuXHRcdHsvaWZ9XG5cdFx0PHAgY2xhc3M9XCJjb250ZW50XCI+e2l0ZW1bMV0uY29udGVudH08L3A+XG5cdHsvaWZ9XG57L2VhY2h9XG48Ym9keT5cblx0PHNsb3QgLz5cbjwvYm9keT5cbiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG5cdFx0Y29uc3QgeyB1bml0IH0gPSBwYWdlLnBhcmFtcztcblx0XHRjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBkYXRhLyR7dW5pdH0uanNvbmApO1xuXHRcdGNvbnN0IHVuaXRfY29udGVudCA9IGF3YWl0IHJlcy5qc29uKCk7XG5cdFx0cmV0dXJuIHsgdW5pdF9jb250ZW50IH07XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgVW5pdHBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvVW5pdFBhZ2Uuc3ZlbHRlXCI7XG5cdGV4cG9ydCBsZXQgdW5pdF9jb250ZW50O1xuPC9zY3JpcHQ+XG5cbjxVbml0cGFnZSB7dW5pdF9jb250ZW50fSAvPlxuIl0sIm5hbWVzIjpbInByZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQWdEc0IsR0FBSSxJQUFDLENBQUMsRUFBRSxPQUFPOzt5QkFIOUIsR0FBSSxJQUFDLENBQUMsRUFBRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBQVgsR0FBSSxJQUFDLENBQUMsRUFBRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkNBQ3dDLEdBQUksSUFBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUc7aURBQU8sR0FBSSxJQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFIekYsR0FBSSxJQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsS0FBSyxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUxWLEdBQVksSUFBQyxLQUFLOzs7Ozs7aURBSGhDLEdBQVksSUFBQyxLQUFLO2dDQU1wQixHQUFTOzs7O2dDQUFkLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttR0FORyxHQUFZLElBQUMsS0FBSzs7Ozs2RkFHSixHQUFZLElBQUMsS0FBSzs7OytCQUdsQyxHQUFTOzs7OytCQUFkLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXhDaUIsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPO1NBQ2xDLElBQUksS0FBSyxJQUFJLENBQUMsTUFBTTtPQUN0QixHQUFHLFNBQVMsSUFBSSxDQUFDLEtBQUssU0FBUyxJQUFJO09BQ25DLFlBQVksU0FBUyxHQUFHLENBQUMsSUFBSTtVQUMxQixZQUFZOzs7Ozs7T0FLWCxZQUFZOzs7O0tBR25CLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VDWjVEQSxTQUFPLENBQUMsSUFBSSxFQUFFLE9BQU87U0FDbEMsSUFBSSxLQUFLLElBQUksQ0FBQyxNQUFNO09BQ3RCLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUk7T0FDbkMsWUFBWSxTQUFTLEdBQUcsQ0FBQyxJQUFJO1VBQzFCLFlBQVk7Ozs7OztPQU1YLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
