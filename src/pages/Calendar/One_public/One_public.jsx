import React from 'react'
import "./One_public.scss"
import Logo from '../../../assets/image/Home_images/logo.svg'
import Facebook from '../../../assets/image/Home_images/fb.png'
import Vk from '../../../assets/image/Home_images/vk.png'
import Whapp from '../../../assets/image/Home_images/whapp.png'
import Insta from '../../../assets/image/Home_images/insta.png'
import Youtube from '../../../assets/image/Home_images/youtube.png'
import Img1 from '../../../assets/image/Public_images/img-1.svg'
import Img2 from '../../../assets/image/Public_images/img-2.svg'
import Img3 from '../../../assets/image/Public_images/img-3.svg'
import Img4 from '../../../assets/image/Public_images/img-4.svg'
import LocationIcon from '../../../assets/image/Public_images/location-icon.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'

function One_public() {
  return (
    <section className='public'>
      <header>
        <div className="header">
          <div className="container">
            <div className="header__inner">
              <div className="head">
                <ul className='list__right'>
                  <li><a href="/"><img src={Logo} alt="" /></a></li>
                  <li>О клубе</li>
                  <select name="" id="">
                    <option value="">Услуги</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                  <select name="" id="">
                    <option value="">Академия TSA</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                  <li>Success Race</li>
                  <li>Tenzor international cup</li>
                  <li>Еще...</li>
                </ul>
                <ul className='list__left'>
                  <li>+998 (94) 469-25-09</li>
                  <li><i className="bi bi-geo-alt"></i></li>
                  <button><li><i className="bi bi-person"></i></li></button>
                  <li><i className="bi bi-search"></i></li>
                </ul>
              </div>
              <div className="hero">
                <div className="hero__inner">
                  <div className="link">
                    <Link href="/">Главная</Link>
                  </div>
                  <h2>Календарь событий</h2>
                </div>
                <div className="social-media">
                  <Link href="#"><img src={Facebook} alt="" /></Link>
                  <Link href="#"><img src={Vk} alt="" /></Link>
                  <Link href="#"><img src={Whapp} alt="" /></Link>
                  <Link href="#"><img src={Insta} alt="" /></Link>
                  <Link href="#"><img src={Youtube} alt="" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="public__main">
        <div className="container">
          <div className="public__main-inner">
            <div className="public__main-top">
              <div className="right">
                <div className="select">
                <select>
                  <option value="Апрель">Апрель</option>
                </select>
                </div>
                <span>Сегодня:  01.04.2023</span>
              </div>
            </div>
            <div className="public__main-sliders">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    type: 'progressbar',
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide className='public__main-slider'>
                    <span className='title'>03.04</span>
                    <div className="date">
                      <span>03.04.2023</span>
                      <div className="liner"></div>
                      <span>15.04.2023</span>
                      </div>
                      <h3>Tenzor Spring Cup – ЭТАП 1</h3>
                      <div className="location">
                        <img className='location-icon' src={LocationIcon} alt="" />
                        <span>Port of Baku</span>
                      </div>
                      <img className='slider-img' src={Img1} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className='public__main-slider'>
                    <span className='title'>15.04</span>
                    <div className="date">
                      <span>03.04.2023</span>
                      <div className="liner"></div>
                      <span>15.04.2023</span>
                      </div>
                      <h3>Tenzor Spring Cup – ЭТАП 1</h3>
                      <div className="location">
                        <img className='location-icon' src={LocationIcon} alt="" />
                        <span>Port of Baku</span>
                      </div>
                      <img className='slider-img' src={Img2} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className='public__main-slider'>
                    <span className='title'>21.04</span>
                    <div className="date">
                      <span>03.04.2023</span>
                      <div className="liner"></div>
                      <span>15.04.2023</span>
                      </div>
                      <h3>Tenzor Spring Cup – ЭТАП 1</h3>
                      <div className="location">
                        <img className='location-icon' src={LocationIcon} alt="" />
                        <span>Port of Baku</span>
                      </div>
                      <img className='slider-img' src={Img3} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className='public__main-slider'>
                    <span className='title'>27.04</span>
                    <div className="date">
                      <span>03.04.2023</span>
                      <div className="liner"></div>
                      </div>
                      <span>15.04.2023</span>
                      <h3>Tenzor Spring Cup – ЭТАП 1</h3>
                      <div className="location">
                        <img className='location-icon' src={LocationIcon} alt="" />
                        <span>Port of Baku</span>
                      </div>
                      <img className='slider-img' src={Img4} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className="container">
          <ul className="footer-list">
            <li className="footer-item">
              <img src={Logo} alt="" />
            </li>
            <li className="footer-item">
              <h3 className='title'>Контакты</h3>
              <span className='text'>141052, Россия, Московская область, г. Мытищи, д. Румянцево ул. Пестовская
                GPS-координаты: N 56.096555 E 37.629250</span>
              <Link className='open' href="#">Открыть в Яндекс картах</Link>
              <a className='phone-number' href="tel8 (495) 121-3-777">8 (495) 121-3-777</a>
              <a className='email' href="info@tenzor-sailing-club.com">info@tenzor-sailing-club.com</a>
              <div className="social-media">
                <Link href="#"><img src={Facebook} alt="" /></Link>
                <Link href="#"><img src={Vk} alt="" /></Link>
                <Link href="#"><img src={Whapp} alt="" /></Link>
                <Link href="#"><img src={Insta} alt="" /></Link>
                <Link href="#"><img src={Youtube} alt="" /></Link>
              </div>
            </li>
            <li className='footer-item'>
              <h3>уСЛУГИ</h3>
              <Link href="#">Корпоративные регаты</Link>
              <Link href="#">Тимбилдинг</Link>
              <Link href="#">Частные мероприятия</Link>
              <Link href="#">Аренда яхт</Link>
              <Link href="#">Страхование участников</Link>
              <span>SUCCESS RACE</span>
              <span>TENZOR INTERNATIONAL CUP</span>
            </li>
            <li className='footer-item'>
              <h3>Академия TSA</h3>
              <Link href="#">Детская парусная академия</Link>
              <Link href="#">Тренировки для взрослых</Link>
              <Link href="#">Расписание и стоимость занятий</Link>
              <Link href="#">Записаться на занятие</Link>
              <span>Магазин</span>
              <span>СМИ о нас</span>
              <span>Ближайшие события</span>
            </li>
          </ul>
        </div>
        <div className="footer-inner">
          <div className="container">
            <div className="block">
              <div className="right">
                <h4>Политика конфиденциальности</h4>
                <span></span>
                <h4>Обработка персональных данных</h4>
              </div>
              <div className="left">
                <span>© 2022 - Tenzor Sailing Club</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default One_public