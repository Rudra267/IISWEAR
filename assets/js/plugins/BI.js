const modulesData = [
  {
    title: "Module 0 – RDBMS Concepts and its Importance",
    topics: [
      "Introduction to DBMS and RDBMS",
      "DBMS vs RDBMS",
      "12 Codd’s Rule for RDBMS",
      "Entity Relationships in RDBMS",
      "Keys in RDBMS",
      "Normalization 1,2,3,4 Normal Forms for RDBMS",
      "VIEWS and Materialized views in RDBMS",
      "Advanced Concepts of RDBMS for Analytics in CLOUD database",
      "Database Design Project - OLTP System - 2"
    ]
  },
  {
    title: "Module 1 – The BI Ecosystem",
    topics: [
      "Basics of Business Intelligence",
      "Basics of Statistics for Analytics",
      "Application of Business Intelligence",
      "Business Intelligence Solution Frameworks",
      "Client project to develop Business Intelligence and Analytics solution Architecture"
    ]
  },
  {
    title: "Module 2 – Logical and Physical Data Modelling",
    topics: [
      "Introduction to Datamodelling",
      "Logical datamodelling for Datawarehousing and Business Intelligence",
      "Physical datamodelling for Datawarehousing and Business Intelligence",
      "Star Schemas and Snow Flake Schemas for BI applications",
      "Client Schematic study and research",
      "Domain Datawarehouse schemas for Advanced Analytics and Data Science",
      "Client project exposure for Datawarehouse design using snowflake and Start Schemas for Analytics"
    ]
  },
  {
    title: "Module 3 – Data Engineering and Analytics Ecosystem",
    topics: [
      "Introduction to Data ecosystem in an Organisation - Domain Specific",
      "Extract, Transform and Load Concepts and Technologies",
      "What is Big Data for Analytics and AI",
      "Introduction to Data Engineering concept",
      "ETL tools and AZURE eco system introduction",
      "ETL Client project"
    ]
  },
  {
    title: "Module 4 – BI Analytics Landscape",
    topics: [
      "Client project combining all of the above module",
      "Introduction to BI Project Management"
    ]
  },
  {
    title: "Module 5 – Mining & Communicating Results",
    topics: [
      "Data Visualization Concepts",
      "Client project"
    ]
  },
  {
    title: "Module 6 – Boot Start your Career",
    topics: [
      "Start working in Internship Project till you are moved to our Client’s office"
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

