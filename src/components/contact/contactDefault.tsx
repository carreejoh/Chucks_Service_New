// components/contact/ContactDefault.tsx
import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { clientConfig, contactConfig } from "../../client-config";

const ContactDefault = React.forwardRef<HTMLDivElement>((_, ref) => {

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const mapLink = isIOS
    ? contactConfig.location.appleMapLink
    : contactConfig.location.googleMapLink;

  return (
    <section
      ref={ref}
      className="px-6 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48 py-16 bg-base-200 text-base-content/80"
    >
      <h2 className="text-3xl font-bold font-LemonMilk text-center mb-12 text-base-content">
        Contact Us
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Map */}
        <div className="w-full lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d713.6229247534376!2d-111.83546830747527!3d40.712984590518325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752603651ddb353%3A0x6cd99915d6b36f12!2sChuck&#39;s%20Service%20Center!5e0!3m2!1sen!2sus!4v1749596537361!5m2!1sen!2sus"
            width="100%"
            height="350"
            loading="lazy"
            className="rounded-sm"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Info Block */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-bold text-base-content">{clientConfig.short_name}</h3>
            <div className="flex items-center mt-2">
              <MapPin size={24} color={clientConfig.logo_color} />
              <a href={mapLink} className="ml-2 underline text-base-content/80">
                {contactConfig.location.address}
                <br />
                {contactConfig.location.addressSecondary}
              </a>
            </div>
            <div className="flex items-center mt-3">
              <Phone size={24} color={clientConfig.logo_color} />
              <a href={`tel:+1${contactConfig.phoneLink}`} className="ml-2 hover:text-primary text-base-content/80">
                {contactConfig.phone}
              </a>
            </div>
            <div className="flex items-center mt-3">
              <Mail size={24} color={clientConfig.logo_color} />
              <a href={`mailto:${contactConfig.email}`} className="ml-2 hover:text-primary text-base-content/80">
                {contactConfig.email}
              </a>
            </div>
          </div>

          <div className="w-56">
            <h4 className="text-xl font-bold text-base-content/100">Hours of Operation</h4>
            {contactConfig.hours.map(({ day, time }) => (
              <span key={day} className="flex justify-between mt-1 text-base-content/80">
                {day}:<span>{time}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactDefault;
