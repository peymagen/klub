"use client";

import styles from "./FundingCalculator.module.css";
import { useState } from "react";

interface FormData {
  revenue: string;
  growthRate: string;
  cashRunway: string;
  debt: string;
  sector: string;
  website: string;
  email: string;
  phone: string;
}

export default function FundingCalculator() {
  const [formData, setFormData] = useState<FormData>({
    revenue: "",
    growthRate: "",
    cashRunway: "",
    debt: "",
    sector: "",
    website: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.rightPanel}>
          <h2>Make informed financial decisions for your business</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English.
          </p>
          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Monthly Revenue</label>
                <input
                  type="text"
                  name="revenue"
                  placeholder="Select your revenue range"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Annual Growth Rate</label>
                <input
                  type="text"
                  name="growthRate"
                  placeholder="Select your growth rate"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Cash Runway</label>
                <input
                  type="text"
                  name="cashRunway"
                  placeholder="Select your Cash Runway"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Existing Debt</label>
                <input
                  type="text"
                  name="debt"
                  placeholder="Select your existing debt"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Sector</label>
                <input
                  type="text"
                  name="sector"
                  placeholder="Select your industry"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Company Website</label>
                <input
                  type="text"
                  name="website"
                  placeholder="Select your Company website"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Your Work Mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your work Email"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Select your Phone Number"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit">Estimate Your Funding</button>
          </form>
        </div>
      </div>

      <div>
        <div className={styles.leftPanel}>
          <h1>Estimate Your Funding</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
}
