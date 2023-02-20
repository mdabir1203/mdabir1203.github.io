// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaBootstrap,
  FaReact,
  FaRaspberryPi,
  FaPython,
  FaLink,
  FaStackOverflow,
  FaMicrosoft,
  FaPeopleArrows,
  FaUsersCog,
  FaRocket,
  FaDiceD20,
  FaUserTie,
} from "react-icons/fa";
import { SiJupyter, SiTensorflow, SiWireshark } from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo1.svg";
import Logo2 from "./images/Divergence.gif";
import Logo3 from "./images/exam_concept.png";
import Logo4 from "./images/fun_script.png"
import Logo5 from "./images/gnl.png"
// Hero Images (add your images to the /images directory with the same names)
import HomePage from "./images/homepage.png";
import HomePage2 from "./images/homepage2.png";
// If you change the import names above then you need to change the export names below
export { HomePage as Light };
export { HomePage2 as Dark };
export { Logo2 as Gif };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "mdabir1203";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "As part of it, we are building our portfolio with React, Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const HardSkill = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaBootstrap className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 3,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 4,
    skill: <FaMicrosoft className="display-4" />,
    name: "Microsoft Office",
  },
  {
    id: 5,
    skill: <SiJupyter className="display-4" />,
    name: "Jupyter Notebook",
  },
  {
    id: 6,
    skill: <SiTensorflow className="display-4" />,
    name: "Tensorflow",
  },
  {
    id: 7,
    skill: <FaPython className="display-4" />,
    name: "Python",
  },
  {
    id: 8,
    skill: <FaRaspberryPi className="display-4" />,
    name: "RaspberryPi",
  },
  {
    id: 9,
    skill: <FaStackOverflow className="display-4" />,
    name: "StackOverflow",
  },
  {
    id: 10,
    skill: <SiWireshark className="display-4" />,
    name: "Wireshark",
  },
];

export const SoftSkill = [
    
    {
      id: 1,
      skill: <FaUserTie className="display-5" />,
      name: "Leadership",
    },
    {
      id: 1,
      skill: <FaPeopleArrows className="display-5" />,
      name: "Teamwork",
    },
    {
      id: 2,
      skill: <FaDiceD20 className="display-5" />,
      name: "Emotional Intelligence",
    },
    {
      id: 3,
      skill: <FaRocket className="display-5" />,
      name: "Adaptibility",
    },
    {
      id: 4,
      skill: <FaUsersCog className="display-5" />,
      name: "Critical Thinking",
    },
];


// Resume link (string - "https://YourResumeUrl")
export const resume = "https://drive.google.com/file/d/1pQyCLL-mn3ymTv5k5nI9VQoG3SAQR9ks/view?usp=sharing";
export const MyBlog = "obsidian://open?vault=OSINT&file=Assesment%2FDeep%20Learning%20Models"

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["42Halloween_WOB_FUN", "Get_Next_Line_42", "42_Exam_Concepts", "DeepLearning_Transformers"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [

  {
    name: "42_Exam_Concepts",
    image: Logo3,
  },
  {
    name: "42Halloween_WOB_FUN",
    image: Logo4,
  },
  {
    name: "DeepLearning_Transformers",
    image: Logo4,
  },
  {
    name: "Get_Next_Line_42",
    image: Logo5,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
