import { Badge, Button, Typography } from "@material-tailwind/react";
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
            <Badge content="Confidential">
              <Button
                variant="gradient"
                color="indigo"
                className="flex items-center gap-3 h-max w-max mt-3"
                onClick={() => {
                  window.open(
                    `https://wa.me/6285640229650?text=Halo%20Muhamad%20Windy,%20Saya%20ingin%20meminta%20anda%20untuk%20menampilkan%20demo%20aplikasi%20Loan%20Origination%20System.`
                  );
                }}>
                <svg
                  fill="white"
                  version="1.1"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 485.213 485.212">
                  <g>
                    <path d="M363.908,212.282v-90.978C363.908,54.434,309.509,0,242.606,0c-66.884,0-121.302,54.434-121.302,121.304v90.978   c-33.498,0-60.653,27.158-60.653,60.648v151.629c0,33.5,27.155,60.653,60.653,60.653h242.604c33.491,0,60.653-27.153,60.653-60.653   V272.93C424.562,239.439,397.399,212.282,363.908,212.282z M257.77,359.257v50.139c0,8.382-6.781,15.163-15.163,15.163   c-8.382,0-15.164-6.781-15.164-15.163v-50.139c-8.9-5.269-15.161-14.57-15.161-25.673c0-16.765,13.579-30.327,30.324-30.327   c16.745,0,30.326,13.562,30.326,30.327C272.933,344.687,266.665,353.989,257.77,359.257z M303.255,212.282h-121.3v-90.978   c0-33.465,27.2-60.653,60.651-60.653c33.435,0,60.648,27.188,60.648,60.653V212.282z" />
                  </g>
                </svg>
                Request Demo Application
              </Button>
            </Badge>
          </div>
        </figcaption>
      </figure>
    </>
  );
};

export default LOSPage;
