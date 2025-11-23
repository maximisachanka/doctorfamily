"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Eye } from "lucide-react";
import { Button } from "../common/SMButton/SMButton";
import { useRouter } from "../SMRouter/SMRouter";
import { ImageWithFallback } from "../SMImage/ImageWithFallback";
import homePageConfig from "@/config/homePage.json";
import { iconMap, IconName } from "@/utils/iconMapper";
import { useContacts } from "@/hooks/useContacts";

// Компонент скелетона для текста
function TextSkeleton({ className = '' }: { className?: string }) {
  return <span className={`inline-block animate-pulse bg-gray-200 rounded ${className}`}>&nbsp;</span>;
}

export function SMHomePage() {
  const { navigate } = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const { contacts, loading: contactsLoading } = useContacts();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl text-[#2E2E2E] mb-8 leading-tight">
              {homePageConfig.hero.title}
              <br />
              <span className="text-[#18A36C]">{homePageConfig.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {homePageConfig.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                className="bg-[#18A36C] hover:bg-[#18A36C]/90 text-white px-8 py-4 h-auto text-lg rounded-lg transition-all duration-300"
                onClick={() => navigate("/doctors")}
              >
                {homePageConfig.hero.buttons.appointment}
                <ArrowRight className="w-5 h-5 ml-[2.5px]" />
              </Button>

              <Button
                variant="outline"
                className="border-2 border-[#18A36C] text-[#18A36C] hover:bg-[#18A36C] hover:text-white px-8 py-4 h-auto text-lg rounded-lg transition-all duration-300"
                onClick={() => navigate("/services")}
              >
                {homePageConfig.hero.buttons.services}
                <Eye className="w-5 h-5 ml-[2.5px]" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {homePageConfig.stats.map((stat, index) => {
                const Icon = iconMap[stat.icon as IconName];
                return (
                  <div
                    key={index}
                    className="bg-white border border-[#E8E6E3] rounded-lg p-8 hover:border-[#18A36C] transition-all duration-300 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <Icon className="w-8 h-8 text-[#18A36C]" />
                    </div>
                    <h3 className="text-xl text-[#2E2E2E] mb-2">{stat.title}</h3>
                    <p className="text-gray-600 text-sm">{stat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 lg:py-20 bg-white border-t border-[#E8E6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-[#2E2E2E] mb-6">
              {homePageConfig.servicesSection.title}
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto">
              {homePageConfig.servicesSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {homePageConfig.servicesSection.services.map((service) => {
              const Icon = iconMap[service.icon as IconName];
              return (
                <div
                  key={service.id}
                  className="group cursor-pointer"
                  onClick={() => navigate("/services")}
                >
                  <div className="bg-white border border-[#E8E6E3] rounded-lg p-8 hover:border-[#18A36C] transition-all duration-300 h-full text-center flex flex-col">
                    <div className="flex justify-center mb-6">
                      <Icon className="w-8 h-8 text-[#18A36C]" />
                    </div>

                    <h3 className="text-xl lg:text-2xl text-[#2E2E2E] mb-4">{service.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-center text-[#18A36C] group-hover:text-[#18A36C]/80 transition-colors">
                      <span className="mr-2">Подробнее</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              className="bg-[#18A36C] hover:bg-[#18A36C]/90 text-white px-8 py-4 h-auto text-lg rounded-lg transition-all duration-300"
              onClick={() => navigate("/services")}
            >
              {homePageConfig.servicesSection.buttonText}
              <ArrowRight className="w-5 h-5 ml-[2.5px]" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl text-[#2E2E2E] mb-6">
              {homePageConfig.contactSection.title}
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
              {homePageConfig.contactSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6">
              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-white border border-[#E8E6E3] rounded-lg p-6">
                  <h3 className="text-xl text-[#2E2E2E] mb-4 flex items-center gap-3">
                    {React.createElement(iconMap.Phone, { className: "w-5 h-5 text-[#18A36C]" })}
                    {homePageConfig.contactSection.contactInfo.phone.title}
                  </h3>
                  <p className="text-[#2E2E2E] mb-2">
                    {contactsLoading ? (
                      <TextSkeleton className="w-36 h-6" />
                    ) : (
                      contacts?.phone_number || homePageConfig.contactSection.contactInfo.phone.number
                    )}
                  </p>
                  <p className="text-sm text-gray-600">
                    {homePageConfig.contactSection.contactInfo.phone.description}
                  </p>
                </div>

                {/* Address */}
                <div className="bg-white border border-[#E8E6E3] rounded-lg p-6">
                  <h3 className="text-xl text-[#2E2E2E] mb-4 flex items-center gap-3">
                    {React.createElement(iconMap.MapPin, { className: "w-5 h-5 text-[#18A36C]" })}
                    {homePageConfig.contactSection.contactInfo.address.title}
                  </h3>
                  <p className="text-[#2E2E2E] mb-2">
                    {contactsLoading ? (
                      <TextSkeleton className="w-64 h-6" />
                    ) : (
                      contacts?.address || homePageConfig.contactSection.contactInfo.address.full
                    )}
                  </p>
                  <p className="text-sm text-gray-600">
                    {homePageConfig.contactSection.contactInfo.address.description}
                  </p>
                </div>

                {/* Email */}
                <div className="bg-white border border-[#E8E6E3] rounded-lg p-6">
                  <h3 className="text-xl text-[#2E2E2E] mb-4 flex items-center gap-3">
                    {React.createElement(iconMap.Mail, { className: "w-5 h-5 text-[#18A36C]" })}
                    {homePageConfig.contactSection.contactInfo.email.title}
                  </h3>
                  <p className="text-[#2E2E2E] mb-2">
                    {contactsLoading ? (
                      <TextSkeleton className="w-48 h-6" />
                    ) : (
                      contacts?.email || homePageConfig.contactSection.contactInfo.email.address
                    )}
                  </p>
                  <p className="text-sm text-gray-600">
                    {homePageConfig.contactSection.contactInfo.email.description}
                  </p>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <Button
                  className="bg-[#18A36C] hover:bg-[#18A36C]/90 text-white px-8 py-4 h-auto text-lg rounded-lg transition-all duration-300"
                  onClick={() => navigate("/contacts")}
                >
                  {homePageConfig.contactSection.buttonText}
                  <ArrowRight className="w-5 h-5 ml-[2.5px]" />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-[#E8E6E3] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={homePageConfig.contactSection.image}
                  alt={homePageConfig.contactSection.imageAlt}
                  className="w-full h-64 lg:h-72 object-cover"
                />
              </div>

              <div className="bg-white border border-[#E8E6E3] rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  {React.createElement(iconMap.MapPin, {
                    className: "w-12 h-12 text-[#18A36C]",
                  })}
                </div>
                <h4 className="text-lg text-[#2E2E2E] mb-2">
                  {homePageConfig.contactSection.location.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {homePageConfig.contactSection.location.description}
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-[#18A36C] text-[#18A36C] hover:bg-[#18A36C] hover:text-white px-8 py-4 h-auto text-lg rounded-lg transition-all duration-300"
                  onClick={() => window.open("https://maps.google.com", "_blank")}
                >
                  {homePageConfig.contactSection.location.mapButtonText}
                  <ArrowRight className="w-5 h-5 ml-[2.5px]" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
