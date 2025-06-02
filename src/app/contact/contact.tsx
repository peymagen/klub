"use client";
import PageInfo from "../../components/pageInfo";
import style from "./contact.module.css";
import { useGetContactByIdQuery } from "@/services/contact.api";
import Image from "next/image";
import { useGetAddressQuery } from "@/services/address.api";

export default function ContactPage() {
  const { data: contact, isLoading } = useGetContactByIdQuery(1);
  const { data: address, isLoading: isLoad } = useGetAddressQuery(undefined);
  const contactInfo = contact?.data || [];
  const addressInfo = address?.data || [];

  const rEle = (
    <Image
      src="/banker_full_image.png"
      alt="banker_full_image"
      height={500}
      width={500}
    />
  );

  if (!isLoading)
    return (
      <>
        <PageInfo page="CONTACT" position="start" rightElement={rEle} />
        <div className={style.contact_field}>
          <div>
            <input placeholder="Your Name" />
            <input placeholder="Email Address" />
            <input placeholder="Phone Number (optional)" />
          </div>
          <textarea placeholder="Your Message" />
          <div>
            <button>Get started now</button>
          </div>
        </div>
        <div className={style.contact_info}>
          <div>
            <h3>Contact Info</h3>
            <h1>We are always happy to assist you</h1>
          </div>
          <div>
            <div className={style.contact_info_block}>
              <p>Email Address</p>
              <hr />
              <p>{contactInfo?.email}</p>
              <div>
                <p>Assistance hours:</p>
                <p>Monday - Friday 6 am to 8 pm EST</p>
              </div>
            </div>
            <div className={style.contact_info_block}>
              <p>Number</p>
              <hr />
              <p>{contactInfo?.contact}</p>
              <div>
                <p>Assistance hours:</p>
                <p>Monday - Friday 6 am to 8 pm EST</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.address_container}>
          <div>
            {!isLoad &&
              addressInfo?.map((data: IAddress, index: number) => {
                return (
                  <div key={index} className={style.address_block}>
                    <b>{data.state}</b>
                    <p className={style.active}>
                      {index === 0 ? "Head Office" : "Branch Office"}
                    </p>
                    <p>
                      {data.street} {data.city}
                    </p>
                    <p>{data.state}</p>
                    <p>{data.pincode}</p>
                  </div>
                );
              })}
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6928705313226!2d77.26243677601427!3d28.548949887870403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce30009576a95%3A0xf9d47b7c1bb4719b!2sOkhla%20Industrial%20Area%20Phase%203%20New%20Delhi!5e0!3m2!1sen!2sin!4v1745676119662!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen={true}
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </>
    );
}
