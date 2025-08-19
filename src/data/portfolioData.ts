export const portfolioData = {
  personal: {
    name: "Yash Gawhale",
    title: "Final Year AIML Student at PESU",
    profileImage: "profilephoto.jpg",
    about: `// Final year B.Tech student in CSE (AI & ML) at PES University
// Passionate about building intelligent software and scalable ML solutions
// Skilled in Python, C++, Docker, PyTorch, TensorFlow, and full-stack web development
// Experienced in developing microservices and applying computer vision to real-world challenges
// Published research in misinformation detection and currently working on multiple AI/ML research papers
// Interested in software engineering, deep learning, data science, and cloud-based systems`,
    aboutCode: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

class AIEngineer {
private:
    string name = "Yash Gawhale";
    vector<string> skills = {"Python", "Machine Learning", "Deep Learning", "Cloud", "Full Stack Dev"};
    string passion = "Building innovative AI solutions";
    
public:
    void introduce() {
        cout << "Hello! I'm " << name << endl;
        cout << "Currently pursuing Computer Science degree" << endl;
        cout << "Specializing in AI and Machine Learning" << endl;
        cout << "Always exploring cutting-edge research!" << endl;
    }
    
    vector<string> getSkills() {
        return skills;
    }
};

int main() {
    AIEngineer yash;
    yash.introduce();
    return 0;
}`,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/yash-gawhale-4277b8258/",
      github: "https://github.com/Yashcodes04",
      email: "mailto:yashgawhale004@gmail.com",
      portfolio: "https://yashcodes04.github.io/YashPortfolio/",
      resume: "Yash Gawhale.pdf"
    }
  },
  skills: {
    "Programming Languages": [ "C", "SQL", "C++","Python", "JavaScript"],
    "Machine Learning": ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "HuggingFace", "Keras", "NLTK", "LangChain"],
    "Cloud and Deployment": ["Git", "GitHub","FastAPI", "Docker"," Kubernetes","Microservices Architecture"],
    "Databases": ["MySQL","PostgreSQL","MongoDB"],
    "Web Technologies": ["PHP","Node.js","Express.js","React","Rest APIs"]

  },
  education: [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "PES University",
      period: "2022 - 2026",
      description: "Specializing in Artificial Intelligence and Machine Learning with a focus on deep learning, natural language processing, and computer vision.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOkl7IMOSm_rh0tiU9a1OropsvGMp8pPiLA&s",
      gpa: "8.52/10",
      coursework: ["Machine Learning", "Deep Learning", "Data Structures", "Algorithms", "Computer Vision", "Natural Language Processing"]
    },
    {
      id: 2,
      degree: "11th and 12th Grade",
      institution: "Narayana Pu College",
      period: "2020 - 2022",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7rk-ENVlJeb4JsBdZI95uQkaDaVOdyuB1g&s",
      Percentage: "96%"
    },
    {
      id: 3,
      degree: "10th Grade",
      institution: "Ryan International School",
      period: "2020",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACUCAMAAABV5TcGAAAA2FBMVEX///8pFW7///3GxNWDfqaMh6mwrcTn5uv///sAAGDq6e/k4+rAvtBnYJCwrcAAAF1DOH8WAGoAAFkXAGYhC2wAAGQmEG339/h8d53w7/Dd3ORVToLX1d/Pzdejn7ooF2wAAEwAAFMvIXOVka+npLlxbJJsZ5JNRn8xI3AAAER2cJuUkai/vck8MXbX1tmdmrA2MW8cGWgPCmFhW5EqJ21yZqNDOXdbV4aLh6J2cYo3N3Clo69AQHRhW4RKS3tXToseE1gzMWBVVHVKSW1AQFtlZoCUlKBTRIuZ1EnpAAAOEElEQVR4nO1diXbiOBaVZbwbE+NFlrDspGyWAoNDYIBKZ+nZ//+PRk8mSdXM9HY600wpvqfOQXhJrGu9/SmFUI8ePXr06NGjR48ePXr06NGjR48ePXr06NGjR4/vG/g3n/he4b6Biq/kdSSmCkPLFSPcXfAyeZeKLwRGNoy6oRJwZ8NXDEwLudOdGFVygnQqhsdWjEkG55f8fBMcH+pyGByHwx3/qZ/+3cFLoxeEyWjIUJFEUbL3QQxO4qBzy8UwWIjTYbQ637SAa44MhsVYDP0LTuB94X2KNU2LHMcJxefIoGQWie8zISL8NtXSbSEuwhlc1B0FXIlLUseAJVQ4mhYqRkdcB4E5CUstvmLIimMt/VQjMgVeHmHObBJpaazFsGhAfwAdWhwBCwrSUUYeshGHFRAKNRDcpFo0Yf4i1eI4B5Xalqm2uIq1pNMpHR1auKZK0qE5oAaIkJY0Aq14FKN4+Bxp5Q2IilCkkRbOirAMJ7m8qaNDS6Zq0hHmmOYZyMbOE8bTHQlxSeH9z+U1+iHWRoF3LdiSKvaFDm1sKklHvN1u70A9jguhGzA2r0uYbfy58zQKceqakEhIy0B6JFKVhqlWjlCQqEeHWAuwGtK7lthAAMkSoOO6WwveLCnDK0QMR6hY6WIIOsLdVOgW52gqSEe6L4GNPwmNKulA3jqWVsWGL81WzFsoET7WSiEeuKNjkhsgXYdUPTpC37wV6iI2zn4FoqBIxoEck5VQD06Q534sLM4QLhF0CNPD5iBnmnJ0pCOG/DF4VmdDityv6MjnoDhHN2MHpCoBaZF05KiQ+lZJOpDwtLR4fY4+vqYDlKVULnLyzoq80IHBACtKB84dMdvEkJbjjQ4R1YJaTaM4jtMUhAN8rzMdyLqNFKXDRksHLG4Xp77RgXNxQXQwfYEA/LOx/iosWIqYWnSUgo4E6GBjMdkkk8vjTVhIPRIScpImBotxmswEHaF2dlCzEXggCtERiyB+JJ10wwnD0NEhSKPZKIokHXSehOHYB+cMI11E+eHYQuswSuaSDnchLnTUocO2AGBQbOJ5nuV1toWKgx4VJNiWOOoRGchiAtd6trznnA17vb1Hjw8KDLqTEA8+IHFMCBYO/KWf6lLANnH56TBK5BcRxaczk9JLP9XlQIrFOAnTcfetCuNoNJ6xyz7TBUFaGeKPYUVgZMjc6IN36af644HPhTXeBW5dMlDGJrEhzytXd/t5SB8CY2LA8khkFOdCrSFdSFnB6EOpEPcELqZYAz5kgJIKjrGdcN+jY7du8kydmtsvwjOiPZMZMQpllnAGB0FwypGPu7yhc99c9hn/OLjZnQhfu2XQammZylS6XCgakm5HW2rRrX7JZ/zjQI0oFfHrF8kHe4q0dA0cmFqqJYY82OwhiXr/IeSFrByZ7XN+kAYmC7V0T4WIyMKCC4fyicz3RB/C5pJgH4JYxAv59vk6TrcwqhwteoQjNHMkG9v2Y/jr7DGSBf25fPvDMC2FpSWnRBtD7gvVkPxKP4zuELrU2MpSwVKEbMhM07iCslMUHYQ7gpsYajLx8cN4HoKDANzRVJM9P/dxlIklcwxHtTjHHqDOtKjsD+SYYsSno1QYU18Y1lUSH4UOOYRbS3ocpZZMAlu9/rj/AnDOsUx0uFXYZcoRjeIn4XYsZKNPOy7jaJbD2oC8KXGJyrxULYRrMFdEzHWiJVOhIqbOwUNBBF0f+jiNtyfrHMOR5rRkKtMxjiaZf84BY33oxNDqw67XHAU3Qxd5t2G0D85K1DWXt9FYXV/dFi9fC6P1sTgXrb2TE5W+ja7CgJw+m9h+jMIr3rHFTk8LYY8dQ2ELM3Bk91t5P5AuGCb11rmzkL+yEK8YOiXj5673hU9vI3DltehKYdd0EXb9TWm0ve2qSPww+lEOwAPZXhsyhPOfUum4ylSZsslCTO7ic3eClqbJSDZ6uJOX14/RUUdgcsqRXBhQ0I/jc4VfQWB2v9+XaQyF+ljE9clop3+tGTCyST67duB0LGTl035/+zxVOK6ljJvV8vj0cFh/gr5sZ7z2v641eofrJAzL9eHhaTcofEYVNrJvCWFs5U1hZLPHyWEbfE2H+3CcTY2iyV8Lsirz8e+gHg++NRybD1mYxm+lx29eP/YoeT1gf6QoToQjTA/q1Td21P5LZlSF6XPm/tRt6uD8sgnNdbMysulxvkg+t6/SARHb8WachNp6Ppxmxsps8pctTmqtE0yE8uSE5HpwEhp0frWIwygKI2dRbd6uEgLk8Sx0wjgOwyiMP63nx+Gs07VUJW/MenoeitDNfVovhI8eQX9gmYbjgyk0p3V+9VCECmDexe0oTEvwwoCWcSHp4NVFJ/DOoGJOro1G8dkp1bTwZqLDRPmD8SIK1lNiyIKkPx8n8dlLH+soWHHqFxd9/vcFZtXkRxF97M4xS+wkmYXAcogYbt1d41JkRM7clckhlt2EkjroN+TGfPSgknNKfNOf6GLySQkR7d26OG8IHThR5GL/pkLB54qgoRPtddwlButP2yhOw0dX6F6EkFpFhnwXWB52x2UY3878s4eaz8bxnW6jSWggX7sV2nIfx9vixdboy3tt3CK2vf+zeclnf394j8flcUXQOpoYsptD+GF2s3bSRBhaev2pRnx+I1jKt2kaLhk0mMISsaoJR/Mcscnml37DdwXX1C3UesivrJdDNAhDLVoKQTCchY/YMJmIsRnGmnOEjGCnXwlB9zkihkqqQ04NWzPj9TtGzHDSMpqAO7GI1jl0ZI+4WBKGo5XRbU3wq7JodkGdKRbKkLzN2qs311t/HMPGBGjnMJO7uQXd2cmUCO26HAkrnAxeQzuL+T/8oJITBiBmy4nOujZrRII1VOFKudFnEkKdBRVR7EBFQdbv0+Sod4uKDwZfFEyXgiPG/+JKEbBOJTggodxeni/SaCI+i1BzwPXE/kJ4YGV0qCVxA58FTxd98v8Bug0Kc1N2LOQzravgSxsziLR4Kj6DfZo68toW2jvKOM08qGQL3XujltMhwZ+rFA2FA9Hcd/7mXubS3XmsRSc4L7cVw6Fzg0d4V0M7zISZa8WcMACZefocArZGC4VvWoZQRMCoBWrAy2LHUAsPUmGwR0fuNsd49YUEV49EQToQXxKKqwexPBbQs/DcHZ1GWrptIHCDJkKnK+E2t8L72AEzxkJBPQqwUUvR8KHIbNSs4/iu8yQaISLpXnb9QNdxuIODGBVxIkZ561XZXikP7Bs8D7N8qQMJTtfqhE9gVfeSmm4oXROMs5mNKBskLeLWz/zA7xqsQuuhsfEo0msI7zHKj3JjrTxbgYaNZZrHxgRh3dBRPdXVygt+BTExd2u5+uTcBCesbw0UyL9YgcHSCpUyIedzdK0zQptAMff8G1gZ4scd424XocndxFq4RECHfohLLV2c9+TbuSCpaWQPkKrAyNtkVRFkVueZ+UkCq6OVJ3PhgcTOaABj36jJ3PQGgdJ0CHiN/jzUkf4FGjm8YhiPHEcuCOweb0a3Jx/iGm7wdpNnWUHVLz01dz4yZyOX+bL25FfDzpSSuuBCy4IY5cdHY8IpIx9gow/j1Bh7CaLGX2vQk4SetaXcduzJ+VOGZu3lHvEPhHjfQVWs98gOhnpQv6VAsM2I7f1Vju2naKj8ujgDHA5zh9xjjurWO4w/M7qyeE3R3w6IdJIDjseHgW0j/gPyRbR/aowWuWOyHfDKZdm8QUGGXKW7XH4CpPURy9jfNwjd0NksK9wmM0eu9ZBN1I1SfhaYt+TUesGRGP5uaFW7ysiIyVUr2P9KYNsm2DudZoxWuZ5ZqxzZ6vyRjt8ODE6W7RFEcko84mL88XYU93gfKLNs/OXg90Mdc5ObgSkRvHy+DIO34csVL1+ClxuC7jrVCnFfpcNf+22/EoBvxug/I1msTHBL2rZhbk7qBlWF7xGSE2S2vmeJgxXhVWHTzcbLKWqKgq1EJEs5aiqbcKupmgY3FaHMYqrYHOzuqFXv2TLP3IPLC8utXBS5zJjqg8JvZpwhZqz+sWJozTa8MrPAMwRtjVeaG4Mta2MzD/7eBKroUux+anNzZmUusaPCrD238lBaBeZgmTUEL7NW0OHPjgxNqlY39Sxg1dTD1DRaN6BZlqOdORj6ytDhZTk3Dd76U2/IeGHmVWNNGG+aU1CvgpO/sb1Cb8S0Z/lGN4ogaGu9aOssKHzfPXER5+WN0ShDB+ZcKAaLbCzEOfO4xeBfTm1KKMeUc5tYFLJAFs8J9xDlBDGOLERcijzbE+dtosyeuM4myHeLX/6dz+DO3mCL/puitGVaRDaISU9elaXxq0ANpcspvxXWP40PsEXhV0Mf7hTrHP1dcIMgv/Qz9LgYLI5zF0Gp2lsFhK2EPUWNZ7l5UBBEVjXdrAKferxY6UwY2YqTuiW6teH6qeHU0letSnvxSftotRzNhfnwiyBr2YwP0D+LL7ph+idiLdkwMFHFMz6kVkU9YzPVM2+SDapBpZP2Kg82U5UsrTetzICjIyHI32emSSrTIBM/G1Y+XRLLcGfFJODFlJaVX4glQ1v/kPHBbmdWs2ZVHBuWXXoK74ncqOu2ZVPfx7zxg7bI3Jm50vWqqKsA013QNvWGfvHpLOdVzcV5tgIZypo22FT2s+6tfvmXfC/ASPichOaWyxiihMgA3+VQaKMe/Jc+uYUoY8RFNsstEd6jDYVbXOwSl3lyQ4syLjrs4vHkX7W2voH77dB1X4buf5yzzn8xWw1gf2D8fiiTK7WZ/g6wlMmGvUeWU51UKfR3vQMuPYsePXr06NGjR48ePXr06NHj/xn/ArD9OaiXpJh7AAAAAElFTkSuQmCC",
      Percentage: "90%",

    }
  ],
  experience: [
    {
    id: 1,
    company: "Schneider Electric",
    role: "Upcoming Intern",
    period: "Jan 2026",
    description: "Selected for upcoming internship role in software development at Schneider Electric.",
    logo: "data:image/png;base64,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"
  },
  {
    id: 2,
    company: "RAPID Center, PES University",
    role: "Research Intern",
    period: "June 2024 - Aug 2024",
    description: `◦ Built real-time navigation system for visually impaired using YOLOv8 object detection, achieving 92% accuracy on 10,000+ street images
◦ Optimized MQTT-based architecture reducing response latency by 40% for voice feedback delivery`,
    logo: "https://images.pexels.com/photos/3184327/pexels-photo-3184327.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
  }
  
],

achievements: [
  {
    id: 1,
    title: "Competition Rankings",
    description: "Achieved 4th place out of 26 teams at NeuroNex Datathon 1.0 (2023), ranked in the top 5 among 30+ teams at the Aura Hackathon, and secured a top 40 position among 300+ teams at the Kodikon-4.0 competition.",
    category: "Competitions",
    date: "2023-2024",
    icon: "trophy"
  },
  {
    id: 2,
    title: "DSA Problem Solving",
    description: "Solved 200+ Data Structures and Algorithms questions across multiple competitive programming platforms, demonstrating strong problem-solving skills.",
    category: "Technical",
    date: "2023-2025",
    icon: "code"
  },
  {
    id: 3,
    title: "Academic Excellence",
    description: "Recipient of Prof. MRD Scholarship (Top 20% of students) and awarded Distinction Scholarship for outstanding academic performance.",
    category: "Academic",
    date: "2024-2025",
    icon: "graduation-cap"
  }
],

projects: [
  {
    id: 1,
    title: "Capstone Project:- Early Detection of Cancer Using Multi-Omics Data Fusion via Graph Neural Networks ",
    description: "An AI-driven framework that integrates multi-omics data to map gene networks, detect early cancer signals, and enable personalized risk prediction.",
    technologies: ["Multi-Omics data","GNNs","LLMs"],
    status: "active",
    githubUrl: "",
    demoUrl: ""
  },
  {
    id: 2,
    title: "Production-Ready Security Microservices Platform",
    description: "Designed and deployed a containerized security microservices architecture (access control, vulnerability scanning, bug monitoring, and data encryption) with NGINX API gateway, achieving 100% success in health, integration, and load tests (avg. response time 97ms, 100% success rate under 5 concurrent users).",
    technologies: ["Docker", "Node.js", "Python", "Flask", "MongoDB", "NGINX"],
    status: "active",
    githubUrl: "https://github.com/Yashcodes04/CC_Microservices.git",
    demoUrl: ""
  },
  {
    id: 3,
    title: "Crime Management System",
    description: "Developed full-stack web application managing 1,000+ crime cases with role-based access control. Optimized database queries reducing case retrieval time by 50% using indexing and query optimization.",
    technologies: ["PHP", "MySQL", "JavaScript", "Database Design"],
    status: "Completed",
    githubUrl: "https://github.com/Yashcodes04/Crime-Record-Management-System.git",
    demoUrl: ""
  },
  {
    id: 4,
    title: "CodeMentor – AI-Powered Learning Assistant Chrome Extension",
    description: "Developed an intelligent Chrome extension integrating AI-driven progressive hints to guide coders on platforms like LeetCode, featuring real-time code analysis, anti-cheating, and personalized learning analytics to enhance self-driven problem-solving.",
    technologies: ["PostgreSQL", "OpenAI GPT-4", "React", "TypeScript", "Chrome Extension APIs", "FastAPI", "Docker", "LangChain"],
    status: "active",
    githubUrl: "https://github.com/Yashcodes04/codementor-project.git",
    demoUrl: ""
  },
  {
    id: 5,
    title: "AI-Based Drug Recommendation System for Personalized Oncology",
    description: "Developed a medical platform combining CNN-based MRI tumor classification with detailed molecular analysis of DNA mutations, delivering personalized diagnosis and drug treatment recommendations to enhance precision oncology workflows.",
    technologies: ["Python", "TensorFlow/Keras (CNN)", "REST APIs", "JavaScript", "FastAPI", "LLMs"],
    status: "Completed",
    githubUrl: "https://github.com/Yashcodes04/Knowledge-Based-LLMs-for-Personalized-Drug-Recommendation-in-Brain-Tumor-Treatment-.git",
    demoUrl: ""
  },
  {
    id: 6,
    title: "Adaptive Memory Consolidation for Catastrophic Forgetting Mitigation in TGNN with Heterogeneous Time-Scales",
    description: "Implemented a memory consolidation framework in TGNNs to mitigate catastrophic forgetting across heterogeneous time-scales using tempo-specific strategies for slow, medium, and fast-evolving nodes.",
    technologies: ["PyTorch Geometric", "Pandas", "Seaborn", "Scikit-learn"],
    status: "Active",
    githubUrl: "https://github.com/Yashcodes04/Adaptive-Memory-Consolidation-for-Catastrophic-Forgetting-Mitigation-in-TGNN.git",
    demoUrl: ""
  },
  {
    id: 7,
    title: "Semantic Segmentation for Building Damage Assessment in War-Torn Areas",
    description: "Engineered a UNet-based model for automated building damage assessment from satellite imagery, enabling rapid pixel-level evaluation for efficient disaster response. Implemented custom mask generation and data augmentation techniques to overcome class imbalance and annotation challenges.",
    technologies: ["UNet", "OpenCV", "Python", "xBD Dataset"],
    status: "Completed",
    githubUrl: "https://github.com/Yashcodes04/Building-Damage-Assessment-in-War-Torn-Areas..git",
    demoUrl: ""
  },
  {
    id: 8,
    title: "The Railway Management System",
    description: "The Railway Management System is a comprehensive software solution designed to efficiently handle the operations and management of a railway network. Leveraging key concepts from Data Structures and Algorithms (DSA), particularly queues, the system ensures smooth functioning and optimal performance.",
    technologies: ["C","Data Structures and Algorithms"],
    status: "Completed",
    githubUrl: "https://github.com/Yashcodes04/Railway-Management-System.git",
    demoUrl: ""
  },
  
],

  publications: [
    {
      id: 1,
      title: " A Pipeline of Weak Supervisions for Misinformation Detection.",
      venue: " ICTIS Bangkok, Thailand 2025",
      status: "Presented",
      description: "A weakly supervised, LLM-based approach for scalable, real-time misinformation detection using credibility indicators without heavy human annotation.",
      technologies: ["LLMs", "NLP", "Research Analytics"]
    },
    {
      id: 2,
      title: " Mitigating Catastrophic Forgetting in Temporal Graph Neural Networks.",
      venue: "  Knowledge and Information Systems (KAIS) Journal.",
      status: "coming_soon",
      description: "Adaptive Memory Consolidation framework for Temporal Graph Neural Networks that mitigates catastrophic forgetting by detecting heterogeneous time scales and applying category-specific memory strategies, achieving 93.8% accuracy with minimal forgetting.",
      technologies: ["LLMs", "Continual Learning", "Graph Neural Networks", "Heterogeneous Time Scales", "Catastrophic Forgetting" ,"NLP", "Research Analytics"]
    }
  ],
  
};