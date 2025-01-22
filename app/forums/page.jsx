'use client'

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ForeumCards } from "@/components/ForeumCards";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

const topics = [
  {
    text: "Java",
    image: "/java.jpg",
    description: "Let's discuss about Java",
    slug: "Java",
  },
  {
    text: "JavaScript",
    image: "/javascript.avif",
    description: "Explore the world of JavaScript, the language of the web",
    slug: "Javascript",
  },
  {
    text: "Python",
    image: "/python.png",
    description: "Dive into Python, the versatile programming language for all",
    slug: "Python",
  },
  {
    text: "React",
    image: "/react.svg",
    description: "Learn React, a powerful library for building user interfaces",
    slug: "React",
  },
  {
    text: "Node.js",
    image: "/node.jpg",
    description: "Discuss backend development with Node.js",
    slug: "Node",
  },
  {
    text: "Next.js",
    image: "/nextjs.jpg",
    description: "Explore Next.js for server-side rendering and static sites",
    slug: "Nextjs",
  },
  {
    text: "Spring Boot",
    image: "/spring.jpeg",
    description:
      "Discuss Spring Boot for rapid development of Java applications",
    slug: "SpringBoot",
  },
  {
    text: "MongoDB",
    image: "/mongodb.png",
    description: "Learn about MongoDB, a NoSQL database for modern apps",
    slug: "Mongodb",
  },
  {
    text: "PostgreSQL",
    image: "/postgresql.png",
    description: "Understand PostgreSQL, a robust relational database system",
    slug: "Postgresql",
  },
  {
    text: "HTML & CSS",
    image: "/html.jpeg",
    description: "Understand HTML/CSS, frontend development",
    slug: "Html-Css",
  },
];

export default function Forums() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTopics = useMemo(() => {
    return topics.filter(topic => 
      topic.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Discussion Forums</h1>
      
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input 
            type="search" 
            placeholder="Search forums..." 
            className="pl-10 pr-4 py-2 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {filteredTopics.length === 0 ? (
        <p className="text-center text-gray-500">No forums found matching your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTopics.map((topic) => (
            <Link key={topic.slug} href={`/forum/${topic.slug}`}>
              <ForeumCards topic={topic} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
