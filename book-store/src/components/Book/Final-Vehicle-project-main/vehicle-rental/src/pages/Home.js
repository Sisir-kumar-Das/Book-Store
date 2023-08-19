import BodyCroausel from '../Components/Body/BodyCroausel';
import HeroSection from '../Components/Header/HeroSection';
import HomeVehicles from '../Components/Home/HomeVehicles';

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <TabSection active='all' /> */}
      <HomeVehicles />
      {/* <CarBody /> */}
      <BodyCroausel />
    </div>
  );
};
export default Home;
