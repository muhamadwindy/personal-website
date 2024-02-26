import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import a1 from "../assets/image/blog/artikel-1.jpg";
import a2 from "../assets/image/blog/artikel-2.jpg";
import a3 from "../assets/image/blog/artikel-3.jpg";
import a4 from "../assets/image/blog/artikel-4.jpg";
import a5 from "../assets/image/blog/artikel-5.jpg";

const Blog = () => {
  const dataBlog = [
    {
      id: "cf00cb751fda",
      title:
        "Mastering Javascript : A Beginner’s Guide to Understanding the Core Concepts of Javascript",
      publishDate: "Feb 13,2024",
      url: "https://medium.com/@muhamadwindy/mastering-javascript-a-beginners-guide-to-understanding-the-core-concepts-of-javascript-cf00cb751fda",
      description:
        "This article is intended to be a friendly guide for those of you who are just entering the world of programming or who want to deepen your understanding of JavaScript. I will explore the basic concepts you need to know, give a comprehensive overview of the language’s structure, and provide practical examples to help you start your journey.",
      image: a1,
    },
    {
      id: "7f4d61b44e14",
      title:
        "Mastering Javascript : Understanding Javascript Functions for Code Efficiency",
      publishDate: "Feb 16,2024",
      url: "https://medium.com/@muhamadwindy/mastering-javascript-understanding-javascript-functions-for-code-efficiency-7f4d61b44e14",
      description:
        "JavaScript functions are the foundation for building interactivity and dynamics on web pages. This article will take an in-depth look at the various aspects of functions in JavaScript, revealing their roles and uses, and why a deep understanding of these features is key to efficient and dynamic web development.",
      image: a2,
    },
    {
      id: "fb47b4c34007",
      title:
        "Mastering algorithms by uncovering the benefits of palindrome in javascript",
      publishDate: "Feb 19,2024",
      url: "https://medium.com/@muhamadwindy/mastering-algorithms-by-uncovering-the-benefits-of-palindromes-in-javascript-fb47b4c34007",
      description:
        "JavaScript functions are the foundation for building interactivity and dynamics on web pages. This article will take an in-depth look at the various aspects of functions in JavaScript, revealing their roles and uses, and why a deep understanding of these features is key to efficient and dynamic web development.",
      image: a3,
    },
    {
      id: "ccfe9b54392c",
      title:
        "Shorthand Javascript Coding Techniques That Make You Look Like A Pro",
      publishDate: "Feb 21,2024",
      url: "https://medium.com/@muhamadwindy/shorthand-javascript-coding-techniques-that-make-you-look-like-a-pro-ccfe9b54392c",
      description:
        "This article will explain some important aspects of shorthand in JavaScript, including examples of its use. By understanding the concept of shorthand, developers can increase their productivity and create cleaner and more efficient code.",
      image: a4,
    },
    {
      id: "520380c0cac2",
      title: "Understanding and Proving Looping Performance in JavaScript.",
      publishDate: "Feb 25,2024",
      url: "https://medium.com/@muhamadwindy/understanding-and-proving-looping-performance-in-javascript-520380c0cac2",
      description:
        "We will prove the speed of looping techniques in javascript with the hope that when creating programs, we can determine strategies that can improve application performance. From the proper use of loops to optimization techniques that can be applied to iteration through arrays, we will discuss ways to make looping more efficient and minimize its negative impact on web application performance.",
      image: a5,
    },
  ];
  return (
    <>
      <Typography variant="h3" color="indigo">
        Blog
      </Typography>
      <Typography variant="lead" color="gray" className="mb-2">
        Here to share my journey, knowledge, and thoughts on programming. You
        can
        <a href="https://medium.com/@muhamadwindy" className="text-blue-700">
          {" "}
          follow me on Medium
        </a>
        . Feel free to give feedback or ask questions via comments.
      </Typography>

      <div className="flex flex-col-reverse gap-5">
        {dataBlog.map((item) => {
          return (
            <div key={item.id}>
              <Card className="w-full max-w-full flex-row">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="m-0 w-2/6 shrink-0 rounded-r-none">
                  <img
                    src={item.image}
                    alt="card-image"
                    className="h-full w-full object-cover object-left-top"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="gray" className="mb-1">
                    {item.publishDate}
                  </Typography>
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    {item.title}
                  </Typography>
                  <Typography
                    color="gray"
                    className="mb-4 font-normal line-clamp-3">
                    {item.description}
                  </Typography>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block">
                    <Button color="indigo" className="flex items-center gap-2">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </a>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
