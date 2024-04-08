import Banner from "./component/Banner/Banner";
import Featurecard from "./component/Featurecard/Featurecard";

const features = [
  {
    title: '',
    description: '',
    image: ''
  }
]

const colors = ['red', 'blue']
export default function Page() {

  return (
    <>
      <Banner></Banner>
      <Featurecard title="Enjoy on your TV" />
      <Featurecard description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more." />
      <Featurecard></Featurecard>
      <ol>
        {colors.map(x => <li key={x}>{x}</li>)}
      </ol>
    </>
  );
}

