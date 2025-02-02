import SocialIcons from '@/app/-icons/socialIcons';
import React from 'react'

 const Footer  = () => {
  return (
    <footer className="bg-[rgb(216,218,232)]">
      <div className="flex flex-col md:flex-row md:justify-around md:items-center py-10 px-6 gap-8">
        <section className="flex flex-col items-start p-0 gap-5 max-w-[219px]">
          <h1 className="font-extrabold text-[#0166ff]">SHARP EVENT</h1>
          <p className="font-semibold text-[#00000099]">
            Sharp Event is a service provider site for finding the best places
            to host your events
          </p>
        </section>
        <section className="flex flex-col md:flex-row justify-start pt-5 md:gap-[100px]">
          <div className="flex flex-row  justify-between gap-[100px]">
            <div className="services flex flex-col gap-4 justify-start p-0">
              <h3 className="text-[#000000] ">Our services</h3>
              <div className="text-[#00000099] flex flex-col gap-2 justify-start p-0">
                <p>Help center</p>
                <p>FAQ</p>
              </div>
            </div>
            <div className="company flex flex-col gap-4 justify-start p-0">
              <h3 className="text-[#000000] ">Company</h3>
              <div className="text-[#00000099] flex flex-col gap-2 justify-start p-0">
                <p>About us</p>
                <p>Host</p>
                <p>Activities</p>
                <p>Cities</p>
              </div>
            </div>
          </div>

          <div className="address flex flex-col gap-4 justify-start p-0">
            <h3 className="text-[#000000] ">Get in touch</h3>
            <div className="text-[#00000099] flex flex-col gap-2 justify-start p-0">
              <p>Emailadress@gmail.com</p>
              <p>Address of the company</p>
              <SocialIcons />
            </div>
          </div>
        </section>
      </div>
      <div className=" text-center py-3">
        &copy; 2024 SharpEvent. Event booking agency
      </div>
    </footer>
  );
}

export default Footer
