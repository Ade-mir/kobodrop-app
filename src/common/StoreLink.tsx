import { ButtonLinkProps } from "./ButtonLink";

function StoreLink({
  href,
  className,
  target,
  logo,
  upperText,
  lowerText,
}: ButtonLinkProps) {
  return (
    <a href={href} className={className} target={target}>
      <img src={logo} alt={`${lowerText} logo`} className="w-5" />
      <div>
        <p className="text-xs">{upperText}</p>
        <p>{lowerText}</p>
      </div>
    </a>
  );
}

export default StoreLink;
