import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkExperience } from "./work-experience";
import { WORK_EXPERIENCE } from "@/constant/work-experiences";
import { Education } from "@/constant/education";

export function Career() {
  return (
    <section id="career" className="w-full flex justify-center">
      <Tabs defaultValue="experience" className="w-200 space-y-8">
        <TabsList className="self-center">
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
    </section>
  );
}
