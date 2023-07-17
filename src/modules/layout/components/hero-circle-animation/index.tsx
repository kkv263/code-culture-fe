'use client'

import ReactCurvedText from 'react-curved-text';

const AnimatedCircleHero = () => {
  return (
    <>
      <div className=" absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 origin-center"
      >
        <ReactCurvedText
          width={512}
          height={512}
          cx={256}
          cy={256}
          rx={232}
          ry={232}
          startOffset={0}
          reversed={true}
          text="CØĐE: CULTURE ◘ CØĐE: CULTURE ◘ CØĐE: CULTURE ◘ CØĐE: CULTURE ◘ CØĐE: CULTURE ◘ CØĐE: CULTURE ◘ CØĐE: CULTURE ◘ "
          textProps={{ style: { fontSize: 20 } }}
          svgProps={{ className: "animate-spin-slow" }}
        />
      </div>
    </>
  )
}


export default AnimatedCircleHero
