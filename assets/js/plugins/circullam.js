const modulesData = [
    {
  title: "Module 0 – Relational Database Management Systems Concepts",
  topics: [
    "Advanced Introduction to DBMS and EDBMS",
    "DBMS VS RDBMS VS NO SQL Databases",
    "12 Codds's Rule for RDBMS",
    "Entity Relationships in RDBMS",
    "Keys in RDBMS",
    "Normalization 1,2,3,4 Normal Forms for RDBMS",
    "VIEWS and Materialized views in RDBMS",
    "Advanced Concepts of RDBMS for Analytics in CLOUD database",
    "Database Design Project - OLTP System - 2"
  ]
}
,
  {
    title: "Module 1 – Data Warehousing Concepts for Financial Analytics",
    topics: [
      "Introduction to DW/BI",
      "Basics of Statistics for Analytics",
      "Application of Business Intelligence",
      "Business Intelligence Solution Frameworks",
      "Client project to develop Business Intelligence and Analytics solution Architecture"
    ]
  },
  {
    title: "Module 2 – Data Modelling for CFO office",
    topics: [
      "Introduction to Datamodelling",
      "Logical datamodelling for Datawarehousing and Business Intelligence",
      "Physical datamodelling for Datawarehousing and Business Intelligence",
      "Star Schema and Snowflake Schema for BI applications",
      "Client Schematic study and research",
      "Domain Datawarehouse schema for Advanced Analytics and Data Science",
      "Client project exposure for Datawarehouse design using Snowflake and Star Schema for Analytics"
    ]
  },
  {
    title: "Module 3 – Data Cleansing and ETL for Financial Planning",
    topics: [
      "Introduction to Data ecosystem in an Organisation - Domain Specific",
      "Extract, Transform and Load Concepts and Technologies for Financial Quality Management",
      "What is Big Data for Analytics and AI",
      "Introduction to Data Engineering concept",
      "AWS and AZURE eco system introduction",
      "ETL Client project"
    ]
  },
  {
    title: "Module 4 – Planning, Budgeting & Forecasting",
    topics: [
      "Client project combining all of the above modules",
      "Introduction to CPM implementation"
    ]
  },
  {
    title: "Module 5 – Mining, Visualization and CPM Road Map",
    topics: [
      "Financial Reporting Concepts",
      "Client project"
    ]
  },
  {
    title: "Module 6 – Boot Start your Career",
    topics: [
      "Start working in Internation Project till you are moved to our Client's office"
    ]
  }
];


const timeline = document.getElementById("timeline-cir");

modulesData.forEach((module, index) => {
  const card = document.createElement("div");
  card.className = `module-card-cir ${index % 2 === 0 ? "left" : "right"}`;

  const title = document.createElement("div");
  title.className = "module-title-cir";
  title.textContent = module.title;

  const list = document.createElement("ul");
  list.className = "topic-list-cir";

  module.topics.forEach(topic => {
    const li = document.createElement("li");
    li.className = "topic-item-cir";
    li.textContent = topic;
    list.appendChild(li);
  });

  card.appendChild(title);
  card.appendChild(list);
  timeline.appendChild(card);
});

// Animate cards when they appear
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate only once
    }
  });
}, {
  threshold: 0.2 // Trigger when 20% of card is visible
});

// Observe all module cards
document.querySelectorAll('.module-card-cir').forEach(card => {
  observer.observe(card);
});

