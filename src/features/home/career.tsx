import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkExperience } from "./work-experience";
import { WORK_EXPERIENCE } from "@/constant/work-experiences";
import { Education } from "@/constant/education";
import { SectionHeader } from "@/components/ui/section-header";

export function Career() {
  return (
    <section id="career" className="container mx-auto px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl space-y-10">
        <SectionHeader
          number="01"
          subtitle="Career"
          title="Experience & Education"
        />
        <Tabs defaultValue="experience" className="w-full space-y-6">
          <TabsList className="self-start">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="experience">
            <WorkExperience experiences={WORK_EXPERIENCE} />
          </TabsContent>
          <TabsContent value="education">
            <WorkExperience experiences={Education} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
