import routes from '../routes/routes.d'
import animatedBox from '../assets/animations/box.json'
import coinsSvg from '../assets/icons/coins.svg'
import coinSvg from '../assets/icons/coin.svg'
import { useDrag, DragPreviewImage } from 'react-dnd'
import DropableLink from './DropableLink/DropableLink'
import itemsType from './DropableLink/itemsType.d'
import CurveText from './CurveText'
import { LANGUAGES } from '../constants/languages.d'
import { useContext, useState } from 'react' // Import useState
import { LanguageContext } from './DropableLink/contexts/languageContext'

// Placeholder Chest Icon Component
const ChestIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true" // Decorative icon
  >
    {/* Lid */}
    <path
      d="M15 35 C15 20, 85 20, 85 35 L 85 45 L 15 45 Z"
      fill="#A0522D" // SaddleBrown
      stroke="#654321" // DarkBrown for outline
      strokeWidth="2"
    />
    {/* Body */}
    <rect
      x="10" y="45"
      width="80" height="45"
      rx="5" ry="5" // Slightly rounded corners for the body
      fill="#D2691E" // Chocolate
      stroke="#654321" // DarkBrown for outline
      strokeWidth="2"
    />
    {/* Metal Bands */}
    <rect x="8" y="50" width="84" height="8" fill="#C0C0C0" stroke="#5A5A5A" strokeWidth="1" />
    <rect x="8" y="75" width="84" height="8" fill="#C0C0C0" stroke="#5A5A5A" strokeWidth="1" />
    {/* Lock */}
    <circle cx="50" cy="65" r="7" fill="#FFD700" stroke="#B8860B" strokeWidth="1.5" />
    <rect x="48" y="63" width="4" height="6" fill="#B8860B" /> {/* Keyhole */}
  </svg>
);

const ProjectLinks: React.FC = () => {
  const [, drag, preview] = useDrag(() => ({
    type: itemsType.COIN,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  const { handleChangeLanguage, translate, currentLanguage } = useContext(LanguageContext)
  const [isQrChestOver, setIsQrChestOver] = useState(false);
  const [isTasksChestOver, setIsTasksChestOver] = useState(false);

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
      <section className='flex flex-row flex-wrap justify-center gap-8 mt-10 mb-10'> {/* Modified projects section */}
        <div 
          className={`chest p-6 rounded-lg border shadow-md bg-white dark:bg-slate-800 hover:border-sky-500 dark:hover:border-sky-400 hover:scale-105 flex flex-col items-center text-center transition-all duration-150 ease-in-out 
                      border-slate-300 dark:border-slate-600 ${isQrChestOver ? 'dragging-over-chest' : ''}`}
        > {/* Chest styles with flex layout for icon + link, added transition and conditional class */}
          <ChestIcon className='w-16 h-16 mb-3' /> {/* Icon with size and margin */}
          <DropableLink 
            animationData={animatedBox} 
            to={routes.qrChallenge} 
            dropItemAccepted={itemsType.COIN} 
            linkText={translate('projects_link_qr_challenge')}
            onIsOverChange={setIsQrChestOver} // Pass state setter
          />
        </div>
        <div 
          className={`chest p-6 rounded-lg border shadow-md bg-white dark:bg-slate-800 hover:border-sky-500 dark:hover:border-sky-400 hover:scale-105 flex flex-col items-center text-center transition-all duration-150 ease-in-out 
                      border-slate-300 dark:border-slate-600 ${isTasksChestOver ? 'dragging-over-chest' : ''}`}
        > {/* Chest styles with flex layout for icon + link, added transition and conditional class */}
          <ChestIcon className='w-16 h-16 mb-3' /> {/* Icon with size and margin */}
          <DropableLink 
            animationData={animatedBox} 
            to={routes.tasksReducer} 
            dropItemAccepted={itemsType.COIN} 
            linkText={translate('projects_link_tasks_reducer')}
            onIsOverChange={setIsTasksChestOver} // Pass state setter
          />
        </div>
      </section>
    </article>
  )
}

export default ProjectLinks
