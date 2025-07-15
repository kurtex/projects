import routes from '../routes/routes.d'
import animatedBox from '../assets/animations/box.json'
import coinsSvg from '../assets/icons/coins.svg'
import coinSvg from '../assets/icons/coin.svg'
import { useDrag, DragPreviewImage } from 'react-dnd'
import DropableLink from './DropableLink/DropableLink'
import itemsType from './DropableLink/itemsType.d'
import CurveText from './CurveText'
import { LANGUAGES } from '../constants/languages.d'
import { THEMES } from '../constants/themes.d'
import { useContext } from 'react'
import { LanguageContext } from './DropableLink/contexts/languageContext'
import { ThemeContext } from './DropableLink/contexts/ThemeContext'

const ProjectLinks: React.FC = () => {
  const [, drag, preview] = useDrag(() => ({
    type: itemsType.COIN,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  const { handleChangeLanguage, translate, currentLanguage } = useContext(LanguageContext)
  const { handleChangeTheme, currentTheme } = useContext(ThemeContext)

  return (
    <article className='max-w-[1280px] flex flex-col m-auto p-10 h-full'>
      <header className='p-4 flex flex-col gap-5'>
        <div className='w-full flex justify-end gap-2'>
          <select className='w-1/6' value={currentLanguage} onChange={handleChangeLanguage}>
            {LANGUAGES.map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
          <select className='w-1/6' value={currentTheme} onChange={handleChangeTheme}>
            {THEMES.map(({ code, label }) => (
              <option key={code} value={code}>
                {translate(label)}
              </option>
            ))}
          </select>
        </div>
        <h1 className='mb-2 mt-0 text-5xl font-medium leading-tight text-primary'>
          {translate('projects_link_title')}
        </h1>
        <h6 className='mb-2 mt-0 text-xl font-medium leading-tight text-primary'>
          {translate('projects_link_subtitle')}
        </h6>
      </header>
      <section className='flex justify-center flex-col align-middle h-3/6'>
        <div>
          <CurveText
            text={translate('projects_link_curve_text', { droppable_item: translate('droppable_item_coin') })}
          />
          <DragPreviewImage connect={preview} src={coinSvg} />
          <div className='flex justify-center' ref={drag}>
            <img src={coinsSvg} className='w-20 relative bottom-[100%]' />
          </div>
        </div>
      </section>
      <section className='flex flex-row justify-center m-5 mb-20 fixed bottom-0 gap-4'>
        <div className='pt-1 flex justify-center'>
          <DropableLink animationData={animatedBox} to={routes.qrChallenge} dropItemAccepted={itemsType.COIN} linkText={translate('projects_link_qr_challenge')} />
        </div>
        <div className='pt-1 flex justify-center'>
          <DropableLink animationData={animatedBox} to={routes.tasksReducer} dropItemAccepted={itemsType.COIN} linkText={translate('projects_link_tasks_reducer')} />
        </div>
      </section>
    </article>
  )
}

export default ProjectLinks
