import CSS from "csstype";

type PropsType = {
  size?: number;
  color?: CSS.Property.Color;
  inverted?: boolean;
};

export default function Logo({ size, color, inverted }: PropsType) {
  const heightCoefficient = 0.7;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size ? heightCoefficient * size : 50}
      viewBox="0 0 70.968 50"
    >
      <path
        d="M69.485,7.808A8.917,8.917,0,0,0,63.21,1.493C57.676,0,35.484,0,35.484,0S13.292,0,7.757,1.493A8.917,8.917,0,0,0,1.483,7.808C0,13.378,0,25,0,25S0,36.622,1.483,42.192a8.918,8.918,0,0,0,6.275,6.315C13.292,50,35.484,50,35.484,50s22.192,0,27.727-1.492a8.918,8.918,0,0,0,6.274-6.315C70.968,36.622,70.968,25,70.968,25s0-11.622-1.483-17.192"
        fill={inverted ? "#ffffff" : color}
      />
      <path
        d="M70,56.935v-21.1L88.548,46.383Z"
        transform="translate(-41.774 -21.383)"
        fill={inverted ? color : "#fff"}
      />
    </svg>
  );
}

Logo.defaultProps = {
  size: 52.815,
  color: "#FF0000",
  inverted: false,
};
