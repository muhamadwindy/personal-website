import { Button, Typography } from "@material-tailwind/react";
import image from "../../assets/image/img-los.png";

const LOSPage = () => {
  return (
    <>
      <figure className="relative h-[80vh] w-full">
        <img
          className="h-full w-full rounded-xl object-cover object-left-top"
          src={image}
          alt="news image"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />

        <figcaption
          className="absolute bottom-8
 left-2/4 flex w-[calc(100%-4rem)] 
 -translate-x-2/4 justify-between rounded-xl 
  py-4 px-6 shadow-lg  
  bg-gradient-to-r from-cyan-900
 shadow-black/5 saturate-200 backdrop-blur-sm">
          <div>
            <Typography variant="h4" color="white" className="font-normal">
              Loan Origination System
            </Typography>
            <Typography className="mt-2 font-normal text-white">
              This web application is used to assist financial and banking
              companies in their operational activities. I used ASP.NET, C#, and
              JavaScript to build this application and Microsoft SQL Server is
              employed for data storage including both application configuration
              data and customer data.
            </Typography>

            <Button
              variant="gradient"
              color="indigo"
              className="flex items-center gap-3 h-max w-max mt-3"
              onClick={() => {
                window.open("https://muhamadwindy.github.io/company-profile/");
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon"
                style={{
                  width: "25",
                  height: "25",
                  verticalAlign: "middle",
                  fill: "white",
                  overflow: "hidden",
                }}
                viewBox="0 0 1024 1024"
                version="1.1">
                <path d="M947.4 464.2c-46.5-75.3-109.1-135.9-187.7-181.6-78.6-45.7-161.6-68.6-249-68.6s-170.4 22.9-249 68.6C183.1 328.3 120.5 388.9 74 464.2c-6.6 11.5-10 22.8-10 34s3.3 22.5 10 34c46.5 75.3 109.1 135.9 187.7 181.6 78.6 45.7 161.6 68.6 249 68.6s170.4-22.8 249-68.3c78.6-45.6 141.1-106.2 187.7-181.9 6.6-11.5 10-22.8 10-34-0.1-11.2-3.4-22.5-10-34z m-543.8-135c29.7-29.4 65.4-44.2 107-44.2 6.7 0 12.3 2.3 17 6.9 4.6 4.6 7 10.2 7 16.8 0 6.6-2.3 12.2-7 16.8-4.7 4.6-10.3 6.9-17 6.9-28.5 0-53 10.1-73.3 30.1-20.3 20-30.4 44.2-30.4 72.5 0 6.6-2.3 12.3-7 16.8-4.6 4.6-10.3 6.8-17 6.9-6.7 0-12.3-2.3-17-6.9-4.6-4.6-7-10.2-7-16.8 0.1-41.1 15-76.4 44.7-105.8z m323.7 330.2c-66.6 40-138.8 60-216.7 60-77.8 0-150-20-216.7-60-66.6-40-122-93.7-166.2-161.1 50.5-77.6 113.9-135.7 190-174.2-20.3 34.2-30.4 71.3-30.4 111.1 0 60.9 21.9 113 65.5 156.2 43.7 43.2 96.3 64.8 157.8 64.9 61.5 0 114.1-21.6 157.8-64.9C712.1 548 734 495.9 734 435.1c0-39.8-10.1-76.8-30.4-111.1 76.1 38.5 139.5 96.6 190 174.2-44.3 67.5-99.7 121.2-166.3 161.2z" />
              </svg>
              Open
            </Button>
          </div>
        </figcaption>
      </figure>
    </>
  );
};

export default LOSPage;
