import routes from '../routes/routes.d'
import animatedBox from '../assets/animations/box.json'
import coinsSvg from '../assets/icons/coins.svg'
import coinSvg from '../assets/icons/coin.svg'
import { useDrag, DragPreviewImage } from 'react-dnd'
import ItemsType from './ItemsType.d'
import DropableLink from './DropableLink'

const ProjectLinks: React.FC = () => {
  const [, drag, preview] = useDrag(() => ({
    type: ItemsType.COIN,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <>
      <header className='m-8'>
        <h1>Proyectos</h1>
      </header>
      <section className='flex justify-center flex-col'>
        <span className='mb-7 '>
          Aquí tienes una lista de proyectos hechos en React:
        </span>
        <DragPreviewImage connect={preview} src={coinSvg} />
        <div className='flex justify-center' ref={drag}>
          <img src={coinsSvg} className='w-20' />
        </div>
      </section>
      <section className='flex flex-row justify-center m-5 mb-20 fixed bottom-0'>
        <article className='flex justify-center flex-col'>
          <div className='pt-1 flex justify-center'>
            <DropableLink animationData={animatedBox} to={routes.qrChallenge} dropItemAccepted={ItemsType.COIN} linkText='QR Challenge' />
          </div>
        </article>
      </section>
    </>
  )
}

export default ProjectLinks
