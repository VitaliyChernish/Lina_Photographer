import React from "react";
import MainPage from "../../pages/mainPage/MainPage";
import PhotoGallery from "../../pages/photoGallery/PhotoGallery";
// import VideoGallery from "../components/videoGallery/VideoGallery";
import PhotoSliderMain from "../../pages/photoGallery/components/portfolio/photoSlider/PhotoSliderMain";
import PriseListMain from "../../pages/prices/PriseListMain";
import AdminPanelMain from "../../adminPanel/AdminPanelmain";
import MainScreen from '../../pages/mainScreen/MainScreen';
import Calendar from "../../pages/calendar/Calendar";
import PhotoGalleryMobile from "../../pages/photoGalleryMobile/photoGalleryMobile";
import PriseListMobileMain from "../../pages/pricesMobile/pricesListMobile";

import {
  MAIN_ROUTE,
  PHOTO_GALLERY,
  VIDEO_GALLERY,
  PHOTO_SLIDER,
  PRISE_LIST,
  ADMIN_PANEL,
  CONDITIONS_MAIN,
  CALENDAR,
} from "../../utils/consts";
import ConditionsMain from "../../pages/conditions/ConditionsMain";
import OneMobileGallery from "../../pages/photoGalleryMobile/oneGallery/oneGallery";
import MainPageMobile from "../../pages/mainPageMobile/mainPageMobile";
import PagesLoader from "../../features/pagesLoader/pagesLoader";



export const authRoutes = [
  {
    path: MAIN_ROUTE,
    Component: <MainPageMobile />
    // Component: <PagesLoader />
  },
  {
    path: PHOTO_GALLERY,
    Component: window.innerWidth >= 600 ? <PhotoGallery /> : <PhotoGalleryMobile />,
  },
  {
    path: `${PHOTO_GALLERY}${PHOTO_SLIDER}/:title`,
    Component: window.innerWidth >= 600 ? <PhotoSliderMain /> : <OneMobileGallery />
  },
  {
    path: CALENDAR,
    Component: <Calendar />
  },
  // {
  //   path: VIDEO_GALLERY,
  //   Component: <VideoGallery />
  // },
  {
    path: PRISE_LIST,
    Component: window.innerWidth >= 600 ? <PriseListMain /> : <PriseListMobileMain />
  },
  {
    path: ADMIN_PANEL,
    Component: <AdminPanelMain />
  },
  {
    path: CONDITIONS_MAIN,
    Component: <ConditionsMain />
  }
]

