import routes from '../routes/routes.d'
import animatedBox from '../assets/animations/box.json'
import coinsSvg from '../assets/icons/coins.svg'
import coinSvg from '../assets/icons/coin.svg'
import { useDrag, DragPreviewImage } from 'react-dnd'
import DropableLink from './DropableLink/DropableLink'
import itemsType from './DropableLink/itemsType.d'
import CurveText from './CurveText'
import { LANGUAGES } from '../constants/languages.d'
import { useContext } from 'react'
import { LanguageContext } from './DropableLink/contexts/languageContext'

const ProjectLinks: React.FC = () => {
  const [, drag, preview] = useDrag(() => ({
    type: itemsType.COIN,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  const { handleChangeLanguage, translate, currentLanguage } = useContext(LanguageContext)

  return (
    <article className='max-w-[1280px] flex flex-col m-auto p-10 h-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 font-sans'> {/* Page background and default text color, default font Outfit-like */}
      <header className='p-4 flex flex-col gap-5'>
        <div className='w-full text-right'>
          <select defaultValue='es' className='w-auto p-2 rounded-md bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500' value={currentLanguage} onChange={handleChangeLanguage}> {/* Styled select */}
            {LANGUAGES.map(({ code, label }) => (
              <option key={code} value={code} className='bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200'>
                {label}
              </option>
            ))}
          </select>
        </div>
        <h1 className='mb-2 mt-0 text-5xl font-medium leading-tight text-sky-600 dark:text-sky-400 font-orbit'> {/* Title style with Orbit font */}
          {translate('projects_link_title')}
        </h1>
        <h6 className='mb-2 mt-0 text-xl font-medium leading-tight text-slate-600 dark:text-slate-300'> {/* Subtitle style */}
          {translate('projects_link_subtitle')}
        </h6>
      </header>
      <section className='flex justify-center flex-col items-center my-8 py-4'> {/* Coin section with padding */}
        <CurveText
          text={translate('projects_link_curve_text', { droppable_item: translate('droppable_item_coin') })}
        />
        <DragPreviewImage connect={preview} src={coinSvg} />
        <div className='flex justify-center mt-6' ref={drag}> {/* Adjusted margin for coin */}
          <img src={coinsSvg} className='w-24 h-24' alt={translate('droppable_item_coin')} /> {/* Increased coin size slightly and added h-24 */}
        </div>
      </section>
      <section className='flex flex-row flex-wrap justify-center gap-8 mt-10 mb-10'> {/* Modified projects section with flex-wrap and increased gap/mb */}
        <div className='chest p-6 rounded-lg border border-slate-300 dark:border-slate-600 shadow-md bg-white dark:bg-slate-800 hover:border-sky-500 dark:hover:border-sky-400 hover:scale-105 transition-all duration-200 ease-in-out'> {/* Chest styles */}
          <DropableLink animationData={animatedBox} to={routes.qrChallenge} dropItemAccepted={itemsType.COIN} linkText={translate('projects_link_qr_challenge')} />
        </div>
        <div className='chest p-6 rounded-lg border border-slate-300 dark:border-slate-600 shadow-md bg-white dark:bg-slate-800 hover:border-sky-500 dark:hover:border-sky-400 hover:scale-105 transition-all duration-200 ease-in-out'> {/* Chest styles */}
          <DropableLink animationData={animatedBox} to={routes.tasksReducer} dropItemAccepted={itemsType.COIN} linkText={translate('projects_link_tasks_reducer')} />
        </div>
      </section>
    </article>
  )
}

export default ProjectLinks
