const modulesData = [
  {
    title: "Module 0 – Introduction to the world of RDBMS",
    topics: [
      "What is Database Management System",
      "What is Relational Database Management System",
      "DBMS VS RDBMS",
      "12 Codds Rules of RDBMS for Database design",
      "Entity Relationship",
      "Super/Alternate Key",
      "Normalization",
      "Rules for RDBMS",
      "Views in RDBMS",
      "Materialized views in RDBMS",
      "Advanced Concept on RDBMS for Analytics in CLOUD Database",
      "RDBMS Client Project for Database design - OLTP System"
    ]
  },
  {
    title: "Module 1 – Welcome to Business Intelligence",
    topics: [
      "Introduction to Business Intelligence",
      "Basics of Statistics for Analytics",
      "Why Business Intelligence",
      "Business Intelligence Technology framework",
      "BI Intelligence Architecture and framework",
      "Client project to develop Business Intelligence and Analytics solution Architecture"
    ]
  },
  {
    title: "Module 2 – Significance of Data Modelling",
    topics: [
      "What is Datamodelling",
      "Logical data modelling for Datawarehousing and Business Intelligence for Analytics",
      "Physical data modelling for Datawarehousing and Business Intelligence for Analytics",
      "Star Schema and Snowflake Schema for BI applications",
      "Client Schematic study and research",
      "Client Datawarehouse schema for Advanced Analytics and Data Science",
      "Schema for Big Data and Models for AI",
      "Domain Datawarehouse schema for Advanced Analytics and Data Science",
      "Client project exposure for Datawarehouse design using snowflake and Start Schemas for Analytics"
    ]
  },
  {
    title: "Module 3 – The Data Ecosystem",
    topics: [
      "Introduction to Data ecosystem in an Organisation - Domain Specific",
      "Extract, Transform and Load Concepts and Technologies",
      "What is Big Data for Analytics and AI",
      "Introduction to Data Engineering concept",
      "AWS and AZURE eco system introduction",
      "ETL Client project"
    ]
  },
  {
    title: "Module 4 – BI Analytics Landscape",
    topics: [
      "Client project combining all of the above modules",
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
    title: "Module 6 – Start your First International Project",
    topics: [
      "Client project for all future employee with Annual Salary and PF",
      "USA, UK and Europe based Projects Deployment"
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

