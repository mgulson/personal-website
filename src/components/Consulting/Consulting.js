import React, { useState, useEffect } from 'react';

function Consulting() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      padding: "40px 20px",
      maxWidth: "1100px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    hero: {
      textAlign: "center",
      marginBottom: "50px",
    },
    title: {
      fontSize: "36px",
      marginBottom: "10px",
    },
    subtitle: {
      fontSize: "18px",
      color: "#555",
    },
    pricingContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginBottom: "50px",
    },
    card: {
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "25px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    },
    price: {
      fontSize: "28px",
      fontWeight: "bold",
      margin: "15px 0",
    },
    sectionTitle: {
      fontSize: "26px",
      marginBottom: "15px",
    },
    list: {
      paddingLeft: "20px",
    },
    contact: {
      textAlign: "center",
      marginTop: "40px",
    },
    button: {
      padding: "12px 24px",
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Michael Gulson Website Consulting</h1>
        <p style={styles.subtitle}>
          Modern web & mobile development tailored to your business needs.
        </p>
      </section>

      {/* Pricing Section */}
      <section>
        <h2 style={styles.sectionTitle}>Pricing</h2>

        <div style={styles.pricingContainer}>
          <div style={styles.card}>
            <h3>Hourly Consulting</h3>
            <div style={styles.price}>$50/hr</div>
            <p>Ideal for ongoing support, debugging, or feature additions.</p>
          </div>

          <div style={styles.card}>
            <h3>Landing Page</h3>
            <div style={styles.price}>$300</div>
            <p>
              Single-page website designed to showcase your product or service.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Medium Complexity Website</h3>
            <div style={styles.price}>$1000</div>
            <p>
              Multi-page website with backend integration and dynamic content.
            </p>
          </div>

          <div style={styles.card}>
            <h3>High Complexity Website</h3>
            <div style={styles.price}>$2000</div>
            <p>
              Advanced full-stack applications with authentication, storage,
              and database systems.
            </p>
          </div>
        </div>
      </section>

      {/* Complexity Explanation */}
      <section>
        <h2 style={styles.sectionTitle}>What Determines Complexity?</h2>
        <ul style={styles.list}>
          <li>Database to store and manage information</li>
          <li>Login and account authentication systems</li>
          <li>File storage and upload functionality</li>
          <li>Notifications (email, SMS, push)</li>
          <li>Mobile app development (iOS / Android)</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section style={styles.contact}>
        <h2 style={styles.sectionTitle}>Let’s Build Something</h2>
        <p>
          Have a project in mind? Reach out and let’s discuss your goals.
        </p>
        <a href="mailto:msgulson@gmail.com">msgulson@gmail.com</a>
        {/* <button style={styles.button}>Contact Me</button> */}
      </section>
    </div>
  );
}

export default Consulting;