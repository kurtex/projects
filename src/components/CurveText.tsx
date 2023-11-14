
interface CurveTextProps {
  text: string
}

const CurveText: React.FC<CurveTextProps> = ({ text }) => {
  return (
    <svg width={500} className='m-auto'>
      <path className='fill-transparent' id='curve' d='M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97' />
      <text width={500}>
        <textPath xlinkHref='#curve'>
          {text}
        </textPath>
      </text>
    </svg>
  )
}

export default CurveText
