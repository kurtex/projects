import routes from '../routes/routes.d'
import animatedBox from '../assets/animations/box.json'
import coinsSvg from '../assets/icons/coins.svg'
import coinSvg from '../assets/icons/coin.svg'
import { useDrag, DragPreviewImage } from 'react-dnd'
import DropableLink from './DropableLink/DropableLink'
import itemsType from './DropableLink/itemsType.d'
import CurveText from './CurveText'

const ProjectLinks: React.FC = () => {
  const [, drag, preview] = useDrag(() => ({
    type: itemsType.COIN,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <article className='max-w-[1280px] flex flex-col m-auto p-10 h-full'>
      <header className='p-4 flex flex-col gap-5'>
        <h1 className='mb-2 mt-0 text-5xl font-medium leading-tight text-primary'>
          Proyectos
        </h1>
        <h6 className='mb-2 mt-0 text-xl font-medium leading-tight text-primary'>
          Aquí tienes una lista de proyectos hechos en React:
        </h6>
      </header>
      <section className='flex justify-center flex-col align-middle h-3/6'>
        <div>
          <CurveText
            text='Coge una moneda y sueltala en el proyecto que quieras ver'
          />
          <DragPreviewImage connect={preview} src={coinSvg} />
          <div className='flex justify-center' ref={drag}>
            <img src={coinsSvg} className='w-20 relative bottom-[100%]' />
          </div>
        </div>
      </section>
      <section className='flex flex-row justify-center m-5 mb-20 fixed bottom-0 gap-4'>
        <div className='pt-1 flex justify-center'>
          <DropableLink animationData={animatedBox} to={routes.qrChallenge} dropItemAccepted={itemsType.COIN} linkText='QR Challenge' />
        </div>
        <div className='pt-1 flex justify-center'>
          <DropableLink animationData={animatedBox} to={routes.tasksReducer} dropItemAccepted={itemsType.COIN} linkText='Tasks with reducer' />
        </div>
      </section>
    </article>
  )
}

export default ProjectLinks
