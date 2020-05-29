import React from "react";
import MainLinkButton from "../components/MainLinkButton";

export default function IndexPage() {
  return (
    <div>
      <div className="heroContainer">
        <div
          className="heroImage"
          style={{ backgroundImage: "url(/001.jpg)" }}
        ></div>
      </div>

      <div
        className="flex flex-col px-8 buttonContainer text-white withHero pb-20"
        style={{ background: "#d63447" }}
      >
        <h1 className="logoTitle text-center mt-4 mb-8 text-white">
          {"Nasi Kulit Syuurga"}
        </h1>

        <MainLinkButton
          href="https://drive.google.com/file/d/1UWj_jNVD-5IRAn44UqWPVMgtWUQI-tQg/view"
          text="Download Proposal Kemitraan"
        />
        <MainLinkButton
          href="https://api.whatsapp.com/send?phone=6287781742506&text=Saya%20tertarik%20untuk%20Franchise%20"
          text="Hubungi Kami"
        />
      </div>
    </div>
  );
}
