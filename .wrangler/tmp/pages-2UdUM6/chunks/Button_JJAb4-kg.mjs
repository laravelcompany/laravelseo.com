globalThis.process ??= {}; globalThis.process.env ??= {};
import { af as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, al as renderSlot } from './astro/server_BA1YRW7y.mjs';

const $$Astro = createAstro("https://laravelseo.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "primary",
    size = "md",
    href,
    class: className = "",
    onclick,
    ...rest
  } = Astro2.props;
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95";
  const variantStyles = {
    primary: "bg-violet-800 text-white hover:bg-violet-900",
    secondary: "bg-pink-600 text-white hover:bg-pink-700",
    outline: "border-2 border-violet-800 text-violet-800 hover:bg-violet-50"
  };
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  const Tag = href ? "a" : "button";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "href": href, "class": classes, "onclick": onclick, ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/stefan/Projects/laravelseo.com/src/components/ui/Button.astro", void 0);

export { $$Button as $ };
