import React from "react";
import FooterDetailBox from "~/components/Footer/FooterDetailBox";
import logoBlack from "~/assets/logos/LogoBlack.png";

const AskedQuestions = () => {
  return (
    <FooterDetailBox>
      <div className="flex items-center justify-center mb-12  ">
        <img src={logoBlack} alt="" className="w-72" />
      </div>
      <hr className="w-full my-4" />
      <div className="flex flex-col gap-y-5 items-center">
        <h1 className="text-4xl">Sıkça Sorulan Sorular</h1>
        <p className="text-center p-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          facere, deleniti corporis voluptas eius commodi deserunt quibusdam
          molestias ex voluptatem esse laboriosam reprehenderit iusto illo,
          distinctio maxime quo, vel quae quam temporibus. Mollitia nemo culpa
          nesciunt ullam eius, cumque ipsum asperiores? Possimus quam, eaque
          asperiores reprehenderit ducimus quod excepturi, recusandae fuga, id
          deleniti odio. Reprehenderit officiis obcaecati velit consectetur, ad
          quis doloribus in aliquid, sit provident sed id quia amet reiciendis
          itaque praesentium exercitationem iusto, voluptate eligendi soluta
          iste. Esse iure in nostrum odit laudantium, provident culpa quae est
          quia ut enim voluptas exercitationem ex officiis vitae harum sunt?
          Incidunt!
        </p>
      </div>
    </FooterDetailBox>
  );
};

export default AskedQuestions;
