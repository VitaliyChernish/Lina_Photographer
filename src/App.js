import React, {useEffect} from 'react';
import './App.css';
import './null.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './app/appRouter/Approuter';
import MobNavigateMain from './widgets/mobileNavigation/MobNavigateMain';

import { Provider } from 'react-redux';
import { store } from './adminPanel/store/store';
import Sidebar from './widgets/sidebar/sidebar';

//animation
import TextPlugin from 'gsap/TextPlugin';
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
//animation end

gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitType);

const App = () => {

  //animations start
  useEffect(() => {
    const lenis = new Lenis()

    if (ScrollTrigger.isTouch !== 1) {
        function raf(time) {
            lenis.raf(time * .5)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        gsap.fromTo('#heroSection', {
            opacity: 1
        },
            {
                opacity: 0,
                scrollTrigger: {
                    trigger: '#heroSection',
                    start: 'center',
                    end: '900',
                    scrub: true
                }
            })
        let itemsLeft = gsap.utils.toArray('#galleryItemLeft')
        let itemsRight = gsap.utils.toArray('#galleryItemRight')

        itemsLeft.forEach((item, i) => {
            gsap.fromTo(item, {
                x: -50,
                opacity: 0,
            },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top: 80%',
                        end: 'top: 30%',
                        scrub: true
                    }
                })
        })

        itemsRight.forEach((item, i) => {
            gsap.fromTo(item, {
                x: 50,
                opacity: 0,
            },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top: 80%',
                        end: 'top: 30%',
                        scrub: true
                    }
                })
        })
    }


}, [])
//animations end

  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <AppRouter />
          {window.innerWidth <= 600 && <>
            <MobNavigateMain />
            <Sidebar />
          </>}
        </div>
      </Provider>
    </Router>
  );
}

export default App;
