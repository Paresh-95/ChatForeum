import React from "react";
import { ForeumCards } from "@/components/ForeumCards";
import Link from "next/link";

const topics = [
  {
    text: "Java",
    image: "/java.jpg",
    description: "Let's discuss about Java",
    slug: "java",
  },
  {
    text: "JavaScript",
    image: "/javascript.avif",
    description: "Explore the world of JavaScript, the language of the web",
    slug: "javascript",
  },
  {
    text: "Python",
    image: "/python.png",
    description: "Dive into Python, the versatile programming language for all",
    slug: "python",
  },
  {
    text: "React",
    image: "/react.svg",
    description: "Learn React, a powerful library for building user interfaces",
    slug: "react",
  },
  {
    text: "Node.js",
    image: "/node.jpg",
    description: "Discuss backend development with Node.js",
    slug: "node",
  },
  {
    text: "Next.js",
    image: "/nextjs.jpg",
    description: "Explore Next.js for server-side rendering and static sites",
    slug: "nextjs",
  },
  {
    text: "Spring Boot",
    image: "/spring.jpeg",
    description:
      "Discuss Spring Boot for rapid development of Java applications",
    slug: "springboot",
  },
  {
    text: "MongoDB",
    image: "/mongodb.png",
    description: "Learn about MongoDB, a NoSQL database for modern apps",
    slug: "mongodb",
  },
  {
    text: "PostgreSQL",
    image: "/postgresql.png",
    description: "Understand PostgreSQL, a robust relational database system",
    slug: "postgresql",
  },
  {
    text: "HTML & CSS",
    image: "/html.jpeg",
    description: "Understand HTML/CSS, frontend devlopment",
    slug: "html-css",
  },
];

const Forums = () => {
  return (
    <div className="my-8">
      <h2 className="scroll-m-20 border-b my-10 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Discussion Foruems
      </h2>

      <div className="flex gap-5 flex-wrap items-center justify-center">
        {topics.map((topic) => {
          return (
            <Link key={topic.text} href={`/forum/${topic.slug}`}>
              <ForeumCards  topic={topic} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Forums;
