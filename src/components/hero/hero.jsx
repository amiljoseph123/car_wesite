import './hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const hero = ({heroData, setHeroCount, heroCount , setPlayStatus, playStatus}) => {
  return (
    <div className='hero'>
      <div className="herotext">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="heroexplore">
        <p>Explore the features</p>
        <img src={arrow-btn} alt="" />
      </div>
      <div className="heroplay"></div>
      <ul className='herodots'>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default hero
