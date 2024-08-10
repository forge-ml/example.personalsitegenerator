import { z } from "zod";

const WorkExperienceSchema = z.object({
  name: z.string().describe("The name of the person"),
  workExperience: z.array(
    z.object({
      jobTitle: z
        .string()
        .describe(
          "The title of the job held by the person, based on the image"
        ),
      companyName: z
        .string()
        .describe(
          "The name of the company where the person worked, based on the image"
        ),
      startDate: z
        .string()
        .describe(
          "The start month of the work experience (in YYYY-MM format), based on the image"
        ),
      endDate: z
        .string()
        .nullable()
        .describe(
          "The end month of the work experience (in YYYY-MM format), or null if currently employed, based on the image"
        ),
      description: z
        .string()
        .describe(
          "A brief description of the responsibilities and achievements in this role, based on the image"
        ),
    })
  ),
  skills: z
    .array(z.string())
    .optional()
    .describe("The skills of the person, based on the image"),
  education: z
    .array(z.string())
    .optional()
    .describe("The education of the person, based on the image"),
  certifications: z
    .array(z.string())
    .optional()
    .describe("The certifications of the person, based on the image"),
  projects: z
    .array(z.string())
    .optional()
    .describe("The projects of the person, based on the image"),
  interests: z
    .array(z.string())
    .optional()
    .describe("The interests of the person, based on the image"),
  description: z
    .string()
    .optional()
    .describe("A brief description of the person, based on the image"),
  linkedin: z
    .string()
    .optional()
    .describe("The LinkedIn profile of the person, based on the image"),
  github: z
    .string()
    .optional()
    .describe("The GitHub profile of the person, based on the image"),
  twitter: z
    .string()
    .optional()
    .describe("The Twitter profile of the person, based on the image"),
});
export default WorkExperienceSchema;

export const config = {
  path: "profile",
  public: true,
  cache: "Individual",
  contentType: "image",
  model: "gpt-4o-mini",
};
