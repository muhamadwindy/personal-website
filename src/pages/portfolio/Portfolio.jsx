import { Button, ButtonGroup, Typography } from "@material-tailwind/react";
import imgCompanyProfile from "../../assets/image/img-company-profile.png";
import imgLOS from "../../assets/image/img-los.png";
import imgSulistiyoNews from "../../assets/image/img-sulistiyo-news.png";
import { useNavigate } from "react-router-dom";

const PortfolioPage = () => {
  const dataPortfolio = [
    {
      title: "Sulistiyo IT Company",
      description: `In developing this company profile website, I used basic HTML, CSS, and JavaScript.`,
      image: imgCompanyProfile,
      urlDetail: "company-profile",
      urlApp: "https://muhamadwindy.github.io/company-profile/",
      urlGithub: "https://github.com/muhamadwindy/company-profile",
    },
    {
      title: "Loan Origination System",
      description: `This web application is used to assist financial and banking
      companies in their operational activities.`,
      image: imgLOS,
      urlDetail: "los",
      urlApp: "",
      urlGithub: "",
    },
    {
      title: "Sulistiyo News",
      description: `This website is a news portal that I created using vanilla JavaScript, or you could say without a framework. I implemented several things in its development`,
      image: imgSulistiyoNews,
      urlDetail: "news-portal",
      urlApp: "https://muhamadwindy.github.io/sulistiyo-news/",
      urlGithub: "https://github.com/muhamadwindy/sulistiyo-news",
    },
    {
      title: "Admin Application",
      description: `The idea of this application is an application that can be used by
      administrators to manage the system.`,
      image: imgSulistiyoNews,
      urlDetail: "admin-app",
      urlApp: "https://muhamadwindy.github.io/admin-app/",
      urlGithub: "https://github.com/muhamadwindy/admin-app",
    },
  ];

  const navigate = useNavigate();
  const handleMenu = (e, menuName) => {
    e.preventDefault();
    navigate(`/portfolio/${menuName}`);
  };
  return (
    <>
      <Typography variant="h3" color="indigo">
        My Portfolio
      </Typography>
      <div className="flex flex-wrap justify-between gap-2">
        {dataPortfolio.map((portfolio) => {
          return (
            <div
              key={portfolio.title}
              className="md:max-w-80 bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  className="w-full"
                  src={portfolio.image}
                  alt="Sunset in the mountains"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </div>
              <div className="px-4 py-2">
                <div className="font-bold text-xl mb-2 text-indigo-900">
                  {portfolio.title}
                </div>
                <p className="text-gray-700 text-base line-clamp-2">
                  {portfolio.description}
                </p>
              </div>
              <div className="px-4 pt-2 pb-4">
                <ButtonGroup fullWidth color="indigo">
                  <Button
                    onClick={(e) => {
                      handleMenu(e, portfolio.urlDetail);
                    }}
                    className="hover:bg-blue-900 normal-case font-normal transition hover:scale-110 ">
                    Detail
                  </Button>
                  <Button
                    disabled={portfolio.urlApp === "" ? true : false}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(portfolio.urlApp);
                    }}
                    className="flex items-center hover:bg-blue-900 normal-case font-normal transition hover:scale-110">
                    {portfolio.urlApp === "" && (
                      <svg
                        fill="white"
                        version="1.1"
                        x="0px"
                        y="0px"
                        width="15"
                        height="15"
                        viewBox="0 0 485.213 485.212"
                        className="mr-1">
                        <g>
                          <path d="M363.908,212.282v-90.978C363.908,54.434,309.509,0,242.606,0c-66.884,0-121.302,54.434-121.302,121.304v90.978   c-33.498,0-60.653,27.158-60.653,60.648v151.629c0,33.5,27.155,60.653,60.653,60.653h242.604c33.491,0,60.653-27.153,60.653-60.653   V272.93C424.562,239.439,397.399,212.282,363.908,212.282z M257.77,359.257v50.139c0,8.382-6.781,15.163-15.163,15.163   c-8.382,0-15.164-6.781-15.164-15.163v-50.139c-8.9-5.269-15.161-14.57-15.161-25.673c0-16.765,13.579-30.327,30.324-30.327   c16.745,0,30.326,13.562,30.326,30.327C272.933,344.687,266.665,353.989,257.77,359.257z M303.255,212.282h-121.3v-90.978   c0-33.465,27.2-60.653,60.651-60.653c33.435,0,60.648,27.188,60.648,60.653V212.282z"></path>
                        </g>
                      </svg>
                    )}
                    Open
                  </Button>
                  <Button
                    disabled={portfolio.urlGithub === "" ? true : false}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(portfolio.urlGithub);
                    }}
                    className="flex items-center hover:bg-blue-900 normal-case font-normal transition hover:scale-110">
                    {portfolio.urlGithub === "" && (
                      <svg
                        fill="white"
                        version="1.1"
                        x="0px"
                        y="0px"
                        width="15"
                        height="15"
                        viewBox="0 0 485.213 485.212"
                        className="mr-1">
                        <g>
                          <path d="M363.908,212.282v-90.978C363.908,54.434,309.509,0,242.606,0c-66.884,0-121.302,54.434-121.302,121.304v90.978   c-33.498,0-60.653,27.158-60.653,60.648v151.629c0,33.5,27.155,60.653,60.653,60.653h242.604c33.491,0,60.653-27.153,60.653-60.653   V272.93C424.562,239.439,397.399,212.282,363.908,212.282z M257.77,359.257v50.139c0,8.382-6.781,15.163-15.163,15.163   c-8.382,0-15.164-6.781-15.164-15.163v-50.139c-8.9-5.269-15.161-14.57-15.161-25.673c0-16.765,13.579-30.327,30.324-30.327   c16.745,0,30.326,13.562,30.326,30.327C272.933,344.687,266.665,353.989,257.77,359.257z M303.255,212.282h-121.3v-90.978   c0-33.465,27.2-60.653,60.651-60.653c33.435,0,60.648,27.188,60.648,60.653V212.282z"></path>
                        </g>
                      </svg>
                    )}
                    Github
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PortfolioPage;
