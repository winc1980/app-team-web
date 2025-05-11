import { CmsImageType } from "./CmsImage";
import { MemberType } from "./Member";

export interface ProjectType {
    id: string;
    title: string;
    description: string;
    images: CmsImageType[];
    technologies: string[];
    members: MemberType[];
    completeDate: Date;
  }
