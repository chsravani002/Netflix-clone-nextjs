import { HeadManagerContext } from "next/dist/shared/lib/head-manager-context.shared-runtime";
import Banner from "./component/Banner/Banner";
import Featurecard from "./component/Featurecard/Featurecard";
import Footer from "./component/Footer/Footer";
import Finalblock from "./component/Finalblock/Finalblock";
import styles from "./page.module.css"
export default function Page() {
  const features = [
    {
      title: 'Enjoy on your TV',
      description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
      image: 'tvimage.png',
      isVideoAvailable: true,
      video: 'video-tv-in-0819.mp4',
    },
    {
      title: 'Download your shows to watch offline',
      description: 'Save your favourites easily and always have something to watch.',
      image: 'mobile-0819.jpg',
      isVideoAvailable: false
    },
    {
      title: 'Watch everywhere',
      description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      image: 'device-pile-in.png',
      isVideoAvailable: true,
      video: 'video-devices-repair.mp4'
    },
    {
      title: 'Create profiles for kids',
      description: 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
      image: 'img.png',
      isVideoAvailable: false
    }
  ]
  const footer = [
    {
      title: 'What Is Netflix ?'
    },
    {
      title: 'How Much Does Netflix Cost ?'
    },

    {
      title: 'Where Can I Watch ?'
    },
    {
      title: 'How Do I Cancel?'
    },
    {
      title: 'What Can I Watch On Netflix ?'
    },
    {
      title: 'Is Netflix Good For Kids ?'
    }

  ]
  const listeditem = [
    {
      title: 'FAQ'
    },
    {
      title: 'Help Centre'
    },
    {
      title: 'Account'
    },
    {
      title: 'Media Centre'
    },
    {
      title: 'Investor Relations'
    },
    {
      title: 'Jobs'
    },
    {
      title: 'Ways to Watch'
    },
    {
      title: 'Terms of Use'
    }, {
      title: 'Privacy'
    },
    {
      title: 'Cookie Preferences'
    },
    {
      title: 'Corporate Information'
    },
    {
      title: 'Contact Us'
    },
    {
      title: 'Speed Test'
    },
    {
      title: 'Legal Notices'
    },
    {
      title: 'Only on Netflix'
    }
  ]
  return (
    <>
      <Banner></Banner>
      {
        features.map((value, index) => {
          return (
            <Featurecard reverse={index % 2 !== 0} data={value} key={index}></Featurecard>
          )
        })
      }
      <Footer data={footer}></Footer>
      <Finalblock data={listeditem}></Finalblock>

    </>
  );
}

