import { type HTMLAttributes, type ReactNode } from "react"

const VB_W = 433
const VB_H = 882
const SCR_X = 9
const SCR_Y = 14
const SCR_W = 360
const SCR_H = 800
const SCR_RX = 33
const SCR_RY = 25

const LEFT_PCT = (SCR_X / VB_W) * 100
const TOP_PCT = (SCR_Y / VB_H) * 100
const WIDTH_PCT = (SCR_W / VB_W) * 100
const HEIGHT_PCT = (SCR_H / VB_H) * 100
const RADIUS_H = (SCR_RX / SCR_W) * 100
const RADIUS_V = (SCR_RY / SCR_H) * 100

export interface AndroidProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  videoSrc?: string
  children?: ReactNode
}

export function Android({ src, videoSrc, children, className, style, ...props }: AndroidProps) {
  const hasMedia = !!src || !!videoSrc || !!children

  const screenStyle = {
    left: `${LEFT_PCT}%`,
    top: `${TOP_PCT}%`,
    width: `${WIDTH_PCT}%`,
    height: `${HEIGHT_PCT}%`,
    borderRadius: `${RADIUS_H}% / ${RADIUS_V}%`,
  }

  return (
    <div
      className={`relative inline-block w-full align-middle leading-none ${className ?? ""}`}
      style={{ aspectRatio: `${VB_W}/${VB_H}`, ...style }}
      {...props}
    >
      {/* Screen content behind the SVG frame */}
      {children && (
        <div className="absolute z-0 overflow-hidden" style={screenStyle}>
          {children}
        </div>
      )}
      {src && !children && (
        <div className="pointer-events-none absolute z-0 overflow-hidden" style={screenStyle}>
          <img src={src} alt="" className="block size-full object-cover object-top" />
        </div>
      )}
      {videoSrc && !children && (
        <div className="pointer-events-none absolute z-0 overflow-hidden" style={screenStyle}>
          <video className="block size-full object-cover" src={videoSrc} autoPlay loop muted playsInline />
        </div>
      )}

      {/* SVG frame — mask punches out screen area when media/children present */}
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 size-full"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Outer frame body */}
        <g mask={hasMedia ? "url(#androidPunch)" : undefined}>
          <path
            d="M376 153H378C379.105 153 380 153.895 380 155V249C380 250.105 379.105 251 378 251H376V153Z"
            className="fill-[#E5E5E5]"
          />
          <path
            d="M376 301H378C379.105 301 380 301.895 380 303V351C380 352.105 379.105 353 378 353H376V301Z"
            className="fill-[#E5E5E5]"
          />
          <path
            d="M0 42C0 18.8041 18.804 0 42 0H336C359.196 0 378 18.804 378 42V788C378 811.196 359.196 830 336 830H42C18.804 830 0 811.196 0 788V42Z"
            className="fill-[#E5E5E5]"
          />
          <path
            d="M2 43C2 22.0132 19.0132 5 40 5H338C358.987 5 376 22.0132 376 43V787C376 807.987 358.987 825 338 825H40C19.0132 825 2 807.987 2 787V43Z"
            className="fill-white"
          />
          {/* Screen bezel fill — masked out when content is shown */}
          <rect
            x={SCR_X}
            y={SCR_Y}
            width={SCR_W}
            height={SCR_H}
            rx={SCR_RX}
            ry={SCR_RY}
            className="fill-[#E5E5E5]"
          />
        </g>

        {/* Camera dot — always visible */}
        <circle cx="189" cy="28" r="9" className="fill-white" />
        <circle cx="189" cy="28" r="4" className="fill-[#E5E5E5]" />

        <defs>
          <mask id="androidPunch" maskUnits="userSpaceOnUse">
            <rect x="0" y="0" width={VB_W} height={VB_H} fill="white" />
            <rect x={SCR_X} y={SCR_Y} width={SCR_W} height={SCR_H} rx={SCR_RX} ry={SCR_RY} fill="black" />
          </mask>
        </defs>
      </svg>
    </div>
  )
}
