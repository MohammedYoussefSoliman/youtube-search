import CSS from "csstype";

type PropsType = {
  size?: number;
  color?: CSS.Property.Color;
};

export default function SearchIcon({ size, color }: PropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "20"}
      height={size || "20"}
      viewBox="0 0 19.995 20"
    >
      <path
        d="M24.26,23.045,18.7,17.432a7.925,7.925,0,1,0-1.2,1.218l5.525,5.577a.856.856,0,0,0,1.208.031A.861.861,0,0,0,24.26,23.045ZM12.472,18.718A6.258,6.258,0,1,1,16.9,16.886,6.219,6.219,0,0,1,12.472,18.718Z"
        transform="translate(-4.5 -4.493)"
        fill={color || "#616161"}
      />
    </svg>
  );
}
