import React, { useState } from "react";
import { motion } from "framer-motion";
import { Stepper, Step, StepLabel, Button, Typography, Box } from "@mui/material";
import Card from "../components/Card"; 
import "../Style/Front-End.scss";
import ArenaLogo from "../assets/ArenaLogo.png";
import DgateLogo from "../assets/DgateLogo.png";
import KnetLogo from "../assets/KnetLogo.png"
import MicroFrontEnd from "../assets/MicroFrontEnd.png";
import DeploymentProcess from "../assets/DeploymentProcess.png"

interface StepType {
  title: string;
  description: string;
  details?: React.ReactNode;
}

interface ProjectType {
  name: string;
  logo: string;
  description: string;
  steps: StepType[];
}

const projects: ProjectType[] = [
  {
    name: "Arena",
    logo: ArenaLogo,
    description: "Project to create a modular micro-frontend architecture.",
    steps: [
      {
        title: "Architecture",
        description: "Define project goals and strategy.",
        details: (
          <Box sx={{ textAlign: "left", p: 2 }}>
            <Typography variant="h6">1. Micro Frontend</Typography>
            <Typography variant="body1" gutterBottom>
              Overview: A brief introduction to the micro-frontend architecture
              and its advantages. It allows independent teams to work on
              specific modules, ensuring scalability and modularity.
            </Typography>
            <Typography variant="body1">
              Resources:
              <ul>
                <li>Micro Frontend Overview</li>
                <li>Detailed Architecture</li>
              </ul>
            </Typography>
            <Typography variant="body1">
            Structure: <img 
                src={MicroFrontEnd} 
                alt="MicroFrontEnd" 
                className="structure-img"
              />
              </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              2. Digitinary-UI
            </Typography>
            <Typography variant="body1" gutterBottom>
              Overview: A UI library designed to maintain consistency across all
              modules with reusable components and styling.
            </Typography>
            <Typography variant="body1">
              Resources: <a href="#" style={{ color: "#1a73e8" }}>Digitinary-UI Documentation</a>
            </Typography>
          </Box>
        ),
      },
      {
        title: "Business Requirements",
        description: "A description of the key business requirements and objectives for the project.",
        details: (
          <Box sx={{ textAlign: "left", p: 2 }}>
            <Typography variant="body1">
              Resources:
              <ul>
                <li><a href="#">Business Docs Link 1</a></li>
                <li><a href="#">Business Docs Link 2</a></li>
              </ul>
            </Typography>
          </Box>
        ),
      },
      {
        title: "Technical Setup",
        description: "Outlines the technical requirements and setup process for the project.",
        details: (
          <Box sx={{ textAlign: "left", p: 2 }}>
            <Typography variant="h6">Required Repositories</Typography>
            <Typography variant="body1">
              Clone and set up the following repositories:
              <ul>
                <li>container: Core container repository for the project.</li>
                <li>common-layout: Shared layout repository for consistent design.</li>
              </ul>
            </Typography>
            <Typography variant="h6">Optional Repositories</Typography>
            <Typography variant="body1">
              Install based on the module you need:
              <ul>
                <li>c360: Core business logic and components.</li>
                <li>User Management: User-related features and services.</li>
              </ul>
            </Typography>
            <Typography variant="h6">Libraries and Tools</Typography>
            <Typography variant="body1">
              <ul>
                <li>Redux: For state management.</li>
                <li>Digitinary-UI: Reusable UI components.</li>
                <li>Context API: Additional state management for isolated components.</li>
              </ul>
            </Typography>
          </Box>
        ),
      },
      {
        title: "Deployment Process",
        description: "Details about deployment environments and processes.",
        details: (
          <Box sx={{ textAlign: "left", p: 2 }}>
            <Typography variant="body1">
              The project has three deployment environments, each with specific purposes:
              <ul>
                <li>Develop: Used for ongoing development.</li>
                <li>Test: For the QA team to verify changes.</li>
                <li>Staging (STG): Pre-production environment for client reviews.</li>
              </ul>
            </Typography>
            <Typography variant="body1"> Structure: <img 
                src={DeploymentProcess} 
                alt="DeploymentProcess" 
                className="structure-img"
              /></Typography>
            <Typography variant="h6">Jira and Ticket Process</Typography>
            <Typography variant="body1">
              <ol>
                <li>Deploy changes to the Develop environment and verify functionality.</li>
                <li>Once verified, move the changes to the Test environment for QA validation.</li>
                <li>After successful testing, mark the tickets as Ready for Test and prepare for deployment to STG.</li>
              </ol>
            </Typography>
          </Box>
        ),
      },
      {
        title: "Creating a Custom Module",
        description: "A step-by-step guide on creating a new custom module using the project’s CLI.",
        details: (
          <Box sx={{ textAlign: "left", p: 2 }}>
            <Typography variant="h6">Steps to Create a Module</Typography>
            <Typography variant="body1">
              <ol>
                <li>Install the required dependencies.</li>
                <li>Navigate to the project home directory.</li>
                <li>Run the module creation CLI command.</li>
                <li>Follow the prompts to configure your module.</li>
              </ol>
            </Typography>
          </Box>
        ),
      },
    ],
  },
  {
    name: "D-Gate",
    logo: DgateLogo,
    description: "Project for the D-Gate system development.",
    steps: [
      { title: "Research", description: "Analyze requirements and data." },
      { title: "Development", description: "Implement core functionalities." },
      { title: "Review", description: "Conduct final checks and QA." },
    ],
  },
  {
    name: "K-Net",
    logo: KnetLogo,
    description: "Developing the K-Net networking system.",
    steps: [
      { title: "Ideation", description: "Brainstorm and refine ideas." },
      { title: "Prototyping", description: "Build interactive prototypes." },
      { title: "Development", description: "Code and implement features." },
      { title: "Delivery", description: "Deliver final product to stakeholders." },
    ],
  },
];

const FrontEnd: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleCardClick = (project: ProjectType) => {
    setSelectedProject(project);
    setCurrentStep(0);
  };

  const handleNext = () => {
    if (selectedProject && currentStep < selectedProject.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="frontend-page">
      <h1 className="page-title">Front-End Department</h1>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`project-card ${selectedProject?.name === project.name ? "disabled" : ""}`}
            layout
            transition={{ layout: { duration: 0.6 }, type: "spring" }}
            onClick={() => {
              if (!selectedProject || selectedProject.name !== project.name) {
                handleCardClick(project);
              }
            }}
          >
            <Card logo={project.logo} title={project.name} description={project.description} />
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <motion.div
          className="selected-project-container"
          layout
          initial={{ scale: 0.9, y: -50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <motion.div
            className="selected-card"
            layout
            initial={{ scale: 0.9, y: -50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <Card
              logo={selectedProject.logo}
              title={selectedProject.name}
              description={selectedProject.description}
            />
          </motion.div>

          <div className="project-steps-container">
            <Stepper activeStep={currentStep} alternativeLabel>
              {selectedProject.steps.map((step, index) => (
                <Step key={index}>
                  <StepLabel>{step.title}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box className="current-step-content" sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="h5" gutterBottom>
                {selectedProject.steps[currentStep].title}
              </Typography>
              <Typography variant="body1">
                {selectedProject.steps[currentStep].description}
              </Typography>
              {selectedProject.steps[currentStep].details}
            </Box>
            <div className="step-navigation">
              <Button onClick={handlePrevious} disabled={currentStep === 0} variant="contained" color="primary">
                Previous
              </Button>
              <Button onClick={handleNext} disabled={currentStep === selectedProject.steps.length - 1} variant="contained" color="primary">
                Next
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FrontEnd;
