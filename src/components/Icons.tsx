import type { SVGProps } from "react";

const paths: Record<string, string> = {
  layout: "M3 5h18v14H3z M3 9h18 M9 9v10",
  hammer: "M14 7l5 5 M9 12l-6 6 3 3 6-6 M12 9l3-3 4 4-3 3z",
  bed: "M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6 M3 12V7a1 1 0 011-1h6a1 1 0 011 1v3 M3 18h18 M3 18v2 M21 18v2",
  sofa: "M4 11V8a2 2 0 012-2h12a2 2 0 012 2v3 M2 13a2 2 0 012-2 2 2 0 012 2v4h12v-4a2 2 0 012-2 2 2 0 012 2v6 M2 19v-6 M6 17v2 M18 17v2",
  table: "M3 9h18 M5 9v11 M19 9v11 M4 6h16l-1 3H5z M9 14v3 M15 14v3",
  desk: "M3 7h18v3H3z M5 10v10 M19 10v10 M5 15h6 M14 13h5v3h-5z",
  building: "M5 21V4a1 1 0 011-1h8a1 1 0 011 1v17 M15 9h4a1 1 0 011 1v11 M8 7h2 M8 11h2 M8 15h2 M3 21h18",
  truck: "M3 6h11v9H3z M14 9h4l3 3v3h-7 M6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z M17.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
  arrow: "M5 12h14 M13 6l6 6-6 6",
  check: "M5 12l4 4 10-10",
  phone: "M4 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A16 16 0 014 6 2 2 0 014 4z",
  mail: "M3 6h18v12H3z M3 7l9 6 9-6",
  pin: "M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z M12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  clock: "M12 7v5l3 2 M12 21a9 9 0 100-18 9 9 0 000 18z",
  quote: "M7 7H5a3 3 0 00-3 3v4h5v-4H4 M16 7h-2a3 3 0 00-3 3v4h5v-4h-1",
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof paths | string;
  size?: number;
}

export default function Icon({ name, size = 24, ...rest }: IconProps) {
  const d = paths[name] ?? paths.layout;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {d.split(" M").map((seg, i) => (
        <path key={i} d={i === 0 ? seg : `M${seg}`} />
      ))}
    </svg>
  );
}
