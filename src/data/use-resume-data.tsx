import SohobcomLogo from "@/images/logos/sohobcomlogo.jpg";
import TeleyemenLogo from "@/images/logos/teleyemen.jpg";
import SinyarLogo from "@/images/logos/Sinyar-logo.png";
import WaslLogo from "@/images/logos/wasl.png";
import UniversityLogo from "@/images/logos/sanaalogo.jpg";
import RowadCodingLogo from "@/images/logos/rowadlogo.jpg";
import { GitHubLogoIcon, HomeIcon, LinkedInLogoIcon,DiscordLogoIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";

export const useResumeData = () => {
  const t = useTranslations();

  return {
    name: t("name"),
    initials: "JS",
    location: "Yemen, Sana'a",
    about: t("about"),
    summary: t("summary"),
    locationLink: "",
    avatarUrl: "https://sofantech.github.io/Static-Portfolio-Website/images/profile/profile-pic%20(14).png",
    personalWebsiteUrl: "https://sofantech.github.io/Static-Portfolio-Website/",
    contact: {
      social: [
        {
          name: "GitHub",
          url: "https://github.com/sofantech",
          icon: GitHubLogoIcon,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/hadi-ahmed-76b7211b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          icon: LinkedInLogoIcon,
        },
        {
          name: "Discord",
          url: "https://discord.com/hadi096492",
          icon: DiscordLogoIcon,
        },
        {
          name: "Website",
          url: "https://sofantech.github.io/Static-Portfolio-Website/",
          icon: HomeIcon,
        },
      ],
    },
    education: [
      {
        school: t("education.master.school"),
        degree: t("education.master.degree"),
        start: "2022",
        end: "2022",
        logo: RowadCodingLogo,
      },
      {
        school: t("education.bachelor.school"),
        degree: t("education.bachelor.degree"),
        start: "2016",
        end: "2020",
        logo: UniversityLogo,
      },
    ],
    
    work: [
      {
        company: "SohobCom",
        link: "https://www.sohobcom.ye/en/home",
        badges: [],
        title: t("work.sohobcom.title"),
        logo: SohobcomLogo,
        start: "Mar 2023",
        end: t("present"),
        description: [
          t("work.sohobcom.description.1"),
          t("work.sohobcom.description.2"),
          t("work.sohobcom.description.3"),
          t("work.sohobcom.description.4"),
          t("work.sohobcom.description.5"),
          t("work.sohobcom.description.6"),
        ],
      },
      {
        company: "Teleyemen",
        link: "https://www.teleyemen.com.ye",
        badges: [],
        title: t("work.teleyemen.title"),
        logo: TeleyemenLogo,
        start: "Oct 2022",
        end: "Mar 2023",
        description: [
          t("work.teleyemen.description.1"),
          t("work.teleyemen.description.2"),
          t("work.teleyemen.description.3"),
        ],
      },
      {
        company: "Sinyar",
        link: "/",
        badges: ["Remote"],
        title: t("work.sinyar.title"),
        logo: SinyarLogo,
        start: "Jun 2022",
        end: "Jul 2022",
        description: [
          t("work.sinyar.description.1"),
        ],
      },
      {
        company: "WaslPay",
        badges: ["remote"],
        link: "https://navicu.com/",
        title: t("work.waslpay.title"),
        logo: WaslLogo,
        start: "Jan 2022",
        end: "May 2022",
        description: [t("work.waslpay.description.1")],
      },
    ],
    skills: [
      "Html",
      "Css",
      "JavaScript",
      "TypeScript",
      "React/Next.js/Nuxt.js",
      "Node.js",
      "Vue.js",
      "Php",
      "Laravel",
      "Zod",
      "React Hook Form",
      "Zustand",
      "React Query",
      "Framer Motion",
      "PRPL Pattern",
      "Figma"
    ],
    projects: [
      {
        title: t("projects.blog.title"),
        techStack: ["html","css", "javaScript", "laravel"],
        description: t("projects.blog.description"),
        link: {
          label: "sohobcom.ye",
          href: "https://sohobcom.ye/",
        },
      },
      {
        title: t("projects.learning.title"),
        techStack: ["next.js", "typescript", "react", "MDX"],
        description: t("projects.learning.description"),
        link: {
          label: "meet.sohobcom.ye/",
          href: "https://meet.sohobcom.ye/",
        },
      },
      {
        title: t("projects.sofantech.title"),
        techStack: ["html", "javascript", "css", "MDX"],
        description: t("projects.sofantech.description"),
        link: {
          label: "sofantech",
          href: "https://sofantech.github.io/Static-Portfolio-Website/",
        },
      },
      {
        title: t("projects.ddd.title"),
        techStack: ["html", "css", "js"],
        description: t("projects.ddd.description"),
        link: {
          label: "github.com",
          href: "https://sofantech.github.io/E-library-project/home",
        },
      },
      {
        title: t("projects.jobsearch.title"),
        techStack: ["html", "css"],
        description: t("projects.jobsearch.description"),
        link: {
          label: "github.com",
          href: "https://sofantech.github.io/jop-Search-project/",
        },
      },
      {
        title: t("projects.waslpay.title"),
        techStack: ["html", "css", "js", "php","laravel"],
        description: t("projects.waslpay.description"),
        link: {
          label: "github.com",
          href: "https://github.com/sofantech/payment-gateway",
        },
      },
    ],
  } as const;
};
