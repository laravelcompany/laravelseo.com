globalThis.process ??= {}; globalThis.process.env ??= {};
const saasImg = new Proxy({"src":"/_astro/photo-1551288049-bebda4e38f71.DU9tE3VQ.jpg","width":4810,"height":3207,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/stefan/Projects/laravelseo.com/src/assets/photo-1551288049-bebda4e38f71.jpg";
							}
							
							return target[name];
						}
					});

const heroBgImg = new Proxy({"src":"/_astro/photo-1518770660439-4636190af475.CJTN5tOe.jpg","width":5530,"height":3687,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/stefan/Projects/laravelseo.com/src/assets/photo-1518770660439-4636190af475.jpg";
							}
							
							return target[name];
						}
					});

const agencyImg = new Proxy({"src":"/_astro/photo-1522071820081-009f0129c71c.CvoreHAb.jpg","width":7952,"height":5304,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/stefan/Projects/laravelseo.com/src/assets/photo-1522071820081-009f0129c71c.jpg";
							}
							
							return target[name];
						}
					});

export { agencyImg as a, heroBgImg as h, saasImg as s };
