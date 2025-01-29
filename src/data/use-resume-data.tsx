import SohobcomLogo from "@/images/logos/sohobcomlogo.jpg";
import TeleyemenLogo from "@/images/logos/teleyemen.jpg";
import SinyarLogo from "@/images/logos/Sinyar-logo.png";
import PoqshaLogo from "@/images/logos/poqsha_logo.png";
import WaslLogo from "@/images/logos/wasl.png";
import UniversityLogo from "@/images/logos/sanaalogo.jpg";
import RowadCodingLogo from "@/images/logos/rowadlogo.jpg";
import AppIconLogo from "@/images/logos/apple-icon.png";
import { GitHubLogoIcon, HomeIcon, LinkedInLogoIcon, DiscordLogoIcon } from "@radix-ui/react-icons";
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
    avatarUrl:
      "https://sofantech.github.io/Static-Portfolio-Website/images/profile/profile-pic%20(14).png",
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
        school: t("education.degree.school"),
        degree: t("education.degree.degree"),
        start: "2023",
        end: "2023",
        logo: AppIconLogo,
      },
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
      {
        school: t("education.dibloma.school"),
        degree: t("education.dibloma.degree"),
        start: "2020",
        end: "2021",
        logo: AppIconLogo,
      },
    ],

    work: [
      {
        company: "SohobCom",
        link: "https://www.sohobcom.ye/en/home",
        badges: [],
        title: t("work.sohobcom.title"),
        logo: SohobcomLogo,
        start: "Apr 2023",
        end: t("present"),
        description: [
          t("work.sohobcom.description.1"),
          t("work.sohobcom.description.2"),
          t("work.sohobcom.description.3"),
          t("work.sohobcom.description.4"),
          t("work.sohobcom.description.5"),
          t("work.sohobcom.description.6"),
          t("work.sohobcom.description.7"),
        ],
      },
      {
        company: "Poqsha",
        link: "https://www.sohobcom.ye/en/home",
        badges: [],
        title: t("work.poqsha.title"),
        logo: PoqshaLogo,
        start: "Apr 2023",
        end: t("present"),
        description: [
          t("work.poqsha.description.1"),
          t("work.poqsha.description.2"),
          t("work.poqsha.description.3"),
          t("work.poqsha.description.4"),
        ],
      },
      {
        company: "Teleyemen",
        link: "https://www.teleyemen.com.ye",
        badges: [],
        title: t("work.teleyemen.title"),
        logo: TeleyemenLogo,
        start: "May 2022",
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
        description: [t("work.sinyar.description.1"), t("work.sinyar.description.2")],
      },
      {
        company: "WaslPay",
        badges: ["remote"],
        link: "https://github.com/sofantech/payment-gateway",
        title: t("work.waslpay.title"),
        logo: WaslLogo,
        start: "Aug 2022",
        end: "Oct 2022",
        description: [t("work.waslpay.description.1")],
      },
      {
        company: "MAS",
        link: "/",
        badges: [],
        title: t("work.MAS.title"),
        logo: AppIconLogo,
        start: "Feb 2022",
        end: "Feb 2023",
        description: [t("work.MAS.description.1")],
      },
    ],
    skills: [
      "oop",
      "Design Patern",
      "Solid Principles",
      "Dockize & virtualization",
      "Agile & Scrum",
      "Azure",
      "System Analysis & Design",
      "Api Design And Management",
      "Microservices & MVC & MVVM & MVP",
      "Html",
      "Css",
      "JavaScript",
      "TypeScript",
      "React/Next.js",
      "Node.js",
      "C#",
      "ASP.NET Core",
      "Php",
      "Laravel",
      "Zod",
      "React Hook Form",
      "Zustand",
      "React Query",
      "Framer Motion",
      "PRPL Pattern",
      "Figma",
      "SQL SERVER",
      "POSTGRESQL",
      "SERVERLESS DB",
      "MYSQL",
      "SUPABASE",
      "OBJECT STORAGE",
    ],
    projects: [
      {
        title: t("projects.poqsha.title"),
        techStack: ["next.js", "nest.js", "react", "shadcn", "react-hook-form", "zod", "zustand"],
        description: t("projects.poqsha.description"),
        link: {
          label: "pooqsha.space",
          href: "https://pooqsha.space/en/user-dashboard/signin",
        },
      },
      {
        title: t("projects.learning.title"),
        techStack: ["next.js", "typescript", "react", "MDX", "zustand", "zod"],
        description: t("projects.learning.description"),
        link: {
          label: "meet.sohobcom.ye/",
          href: "https://meet.sohobcom.ye/",
        },
      },
      {
        title: t("projects.blog.title"),
        techStack: ["html", "css", "javaScript", "laravel"],
        description: t("projects.blog.description"),
        link: {
          label: "sohobcom.ye",
          href: "https://sohobcom.ye/",
        },
      },
      {
        title: t("projects.waslpay.title"),
        techStack: ["html", "css", "js", "php", "laravel"],
        description: t("projects.waslpay.description"),
        link: {
          label: "github.com",
          href: "https://github.com/sofantech/payment-gateway",
        },
      },
    ],
  } as const;
};
