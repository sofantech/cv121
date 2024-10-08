import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { useResumeData } from "@/data/use-resume-data";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/locale-switcher";
import { WorkExperienceSection } from "./work-experience-section";
import { AboutSection } from "./about-section";
import { EducationSection } from "./education-section";
import { SkillsSection } from "./skills-section";
import { ProjectsSection } from "./projects-section";
import { GlobeIcon } from "@radix-ui/react-icons";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale });
  return {
    title: `${t("name")} | ${t("about")}`,
    description: t("summary"),
  };
}

export default function Page({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const resumeData = useResumeData();

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
        <div className="flex flex-row justify-end   gap-x-2 print:hidden">
          <LocaleSwitcher />
          <ModeToggle />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{resumeData.name}</h1>
            <p className="max-w-md text-pretty  text-sm text-muted-foreground">{t("about")}</p>
            <p className="max-w-md items-center text-pretty  text-xs text-muted-foreground">
              <span className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline">
                <GlobeIcon className="h-3 w-3" />
                {resumeData.location}
              </span>
            </p>
            <div className="flex gap-x-1 pt-1 text-sm text-muted-foreground print:hidden">
              {resumeData.contact.social.map((social) => (
                <Button key={social.name} className="h-8 w-8" variant="outline" size="icon" asChild>
                  <a href={social.url}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <Avatar className="h-28 w-28">
            <AvatarImage alt={resumeData.name} src={"avatar.png"} />
            <AvatarFallback>{resumeData.initials}</AvatarFallback>
          </Avatar>
        </div>
        <AboutSection />
        <WorkExperienceSection
          jobs={resumeData.work}
          dict={{
            seeMore: t("seeMore"),
            seeLess: t("seeLess"),
            workExperience: t("sections.workExperience"),
          }}
        />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
      </section>
      <h2 className=" mx-auto my-8 w-full max-w-2xl font-semibold print:space-y-6">
        this cv is online you can go to:{" "}
        <a className="text-red-500" href="https://cv121.vercel.app/">
          https://cv121.vercel.app/
        </a>
      </h2>
    </main>
  );
}
