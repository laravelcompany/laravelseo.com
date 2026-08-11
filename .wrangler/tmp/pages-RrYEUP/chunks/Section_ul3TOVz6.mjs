globalThis.process ??= {}; globalThis.process.env ??= {};
import { af as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, al as renderSlot, a as renderTemplate } from './astro/server_BA1YRW7y.mjs';

const $$Astro = createAstro("https://laravelseo.com");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className = "", background = "white", id } = Astro2.props;
  const bgStyles = {
    white: "bg-white",
    gray: "bg-slate-100",
    dark: "bg-slate-900",
    gradient: "bg-linear-to-br from-violet-900/20 via-slate-900 to-pink-900/20"
  };
  const classes = `py-16 lg:py-24 ${bgStyles[background]} ${className}`;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(classes, "class")}${addAttribute(id, "id")}> <div class="container mx-auto"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/home/stefan/Projects/laravelseo.com/src/components/ui/Section.astro", void 0);

export { $$Section as $ };
