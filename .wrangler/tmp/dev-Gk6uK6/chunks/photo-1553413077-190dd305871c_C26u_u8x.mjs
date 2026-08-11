globalThis.process ??= {}; globalThis.process.env ??= {};
const ctaBgImg = new Proxy({"src":"/_astro/photo-1553413077-190dd305871c.DbeahUQb.jpg","width":3024,"height":4032,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/stefan/Projects/laravelseo.com/src/assets/photo-1553413077-190dd305871c.jpg";
							}
							
							return target[name];
						}
					});

export { ctaBgImg as c };
