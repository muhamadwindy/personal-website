import { Button, Typography } from "@material-tailwind/react";
import imagelogo from "../assets/image/fotowindy.png";
const HomePage = () => {
  return (
    <div className="md:grid grid-cols-3 place-items-center md:min-h-[80vh] sm:px-4 py-2">
      <div className="col-span-2 ">
        <div className="sm:p-2 md:p-0">
          <Typography variant="h3">Welcome,</Typography>
          <Typography
            variant="h1"
            className="bg-gradient-to-r from-purple-400 to-pink-600"
            textGradient>{`I'm Muhamad Windy Sulistiyo`}</Typography>
          <Typography variant="lead" color="green" textGradient>
            Software Developer
          </Typography>
          <Typography color="gray">
            With a rich background in both front-end and back-end technologies,
            I specialize in crafting visually appealing and highly functional
            websites and web applications.
          </Typography>
          <Button
            color="indigo"
            variant="gradient"
            className="normal-case font-normal mt-4">
            Hire Me!
          </Button>
        </div>
      </div>
      <div>
        <img className="rounded-full mx-auto drop-shadow-2xl" src={imagelogo} />
      </div>
    </div>
  );
};

export default HomePage;
