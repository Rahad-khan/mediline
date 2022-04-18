import React from "react";
import author from '../../images/author.png'

const AboutMe = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <img
          className="rounded-t-lg"
          src={author}
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Rahad Khan
          </h5>
          <p className="mb-3 font-normal text-gray-700">
          I want to be a Full Stack Web Developer besides that a successful Textile Engineer.Here i learn lot of things and i want to carry this flow of learn about programming. I really enjoyed coding but sometimes an error make me sad and make me depressed. but i did't give up.This is so effective learning from an error.I want built a carrer in IT sector and Be a good and successful person.That's my Goal 🥅.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
