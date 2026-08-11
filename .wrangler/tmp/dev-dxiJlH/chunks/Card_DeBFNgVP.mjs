globalThis.process ??= {}; globalThis.process.env ??= {};
import { af as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, al as renderSlot, a as renderTemplate } from './astro/server_BA1YRW7y.mjs';

const $$Astro = createAstro("https://laravelseo.com");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { class: className = "", hover = false, style } = Astro2.props;
  const baseStyles = "bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-700";
  const hoverStyles = hover ? "transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" : "";
  const classes = `${baseStyles} ${hoverStyles} ${className}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")}${addAttribute(style, "style")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/stefan/Projects/laravelseo.com/src/components/ui/Card.astro", void 0);

export { $$Card as $ };
